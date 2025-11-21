import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { authenticateRequest } from '@/lib/middleware';
import { z } from 'zod';

const productSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  description: z.string().optional(),
  price: z.string().optional(),
  status: z.enum(['Active', 'Inactive']).default('Active'),
  image: z.string().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const db = await getDatabase();
    const productsCollection = db.collection('products');

    const products = await productsCollection.find({}).toArray();

    return NextResponse.json({
      products: products.map((product) => ({
        id: product._id.toString(),
        name: product.name,
        category: product.category,
        description: product.description,
        price: product.price,
        status: product.status,
        image: product.image,
      })),
    });
  } catch (error) {
    console.error('Get products error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

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
    const productData = productSchema.parse(body);

    const db = await getDatabase();
    const productsCollection = db.collection('products');

    const result = await productsCollection.insertOne({
      ...productData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({
      id: result.insertedId.toString(),
      ...productData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Create product error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

