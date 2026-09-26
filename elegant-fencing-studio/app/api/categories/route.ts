import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { authenticateRequest } from '@/lib/middleware';
import { ObjectId } from 'mongodb';
import { z } from 'zod';

const categorySchema = z.object({
  name: z.string().min(1),
  displayOrder: z.number().int().nonnegative().optional(),
});

const updateCategoryOrderSchema = z.object({
  id: z.string().min(1),
  displayOrder: z.number().int().nonnegative(),
});

// GET - Fetch all categories
export async function GET(request: NextRequest) {
  try {
    const db = await getDatabase();
    const categoriesCollection = db.collection('categories');

    const categories = await categoriesCollection.find({}).sort({ displayOrder: 1, name: 1 }).toArray();

    return NextResponse.json({
      categories: categories.map((category) => ({
        id: category._id.toString(),
        name: category.name,
        displayOrder: typeof category.displayOrder === 'number' ? category.displayOrder : 9999,
        createdAt: category.createdAt,
        updatedAt: category.updatedAt,
      })),
    });
  } catch (error) {
    console.error('Get categories error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Create a new category
export async function POST(request: NextRequest) {
  try {
    const payload = await authenticateRequest(request);

    if (!payload) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const categoryData = categorySchema.parse(body);

    const db = await getDatabase();
    const categoriesCollection = db.collection('categories');

    // Check if category already exists
    const existingCategory = await categoriesCollection.findOne({
      name: { $regex: new RegExp(`^${categoryData.name}$`, 'i') }
    });

    if (existingCategory) {
      return NextResponse.json(
        { error: 'Category already exists' },
        { status: 400 }
      );
    }

    const maxOrderCategory = await categoriesCollection.find({}).sort({ displayOrder: -1 }).limit(1).toArray();
    const nextOrder =
      typeof maxOrderCategory[0]?.displayOrder === 'number'
        ? maxOrderCategory[0].displayOrder + 1
        : 1;

    const result = await categoriesCollection.insertOne({
      name: categoryData.name,
      displayOrder: categoryData.displayOrder ?? nextOrder,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({
      id: result.insertedId.toString(),
      name: categoryData.name,
      displayOrder: categoryData.displayOrder ?? nextOrder,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Create category error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PATCH - Update category display order
export async function PATCH(request: NextRequest) {
  try {
    const payload = await authenticateRequest(request);

    if (!payload) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, displayOrder } = updateCategoryOrderSchema.parse(body);

    const db = await getDatabase();
    const categoriesCollection = db.collection('categories');

    let objectId: ObjectId;
    try {
      objectId = new ObjectId(id);
    } catch {
      return NextResponse.json(
        { error: 'Invalid category ID' },
        { status: 400 }
      );
    }

    const result = await categoriesCollection.findOneAndUpdate(
      { _id: objectId },
      { $set: { displayOrder, updatedAt: new Date() } },
      { returnDocument: 'after' }
    );

    if (!result) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      id: result._id.toString(),
      name: result.name,
      displayOrder: typeof result.displayOrder === 'number' ? result.displayOrder : displayOrder,
      updatedAt: result.updatedAt,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Update category order error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a category
export async function DELETE(request: NextRequest) {
  try {
    const payload = await authenticateRequest(request);

    if (!payload) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Category ID is required' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const categoriesCollection = db.collection('categories');
    const productsCollection = db.collection('products');

    // Check if any products are using this category
    let category;
    try {
      category = await categoriesCollection.findOne({ _id: new ObjectId(id) });
    } catch (e) {
      return NextResponse.json(
        { error: 'Invalid category ID' },
        { status: 400 }
      );
    }

    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    const productsUsingCategory = await productsCollection.countDocuments({
      category: category.name
    });

    if (productsUsingCategory > 0) {
      return NextResponse.json(
        { 
          error: `Cannot delete category. ${productsUsingCategory} product(s) are using this category.`,
          productsCount: productsUsingCategory
        },
        { status: 400 }
      );
    }

    const result = await categoriesCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Category deleted successfully',
    });
  } catch (error) {
    console.error('Delete category error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

