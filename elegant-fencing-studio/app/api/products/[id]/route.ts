import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { authenticateRequest } from '@/lib/middleware';
import { z } from 'zod';
import { ObjectId } from 'mongodb';

const productSchema = z.object({
  name: z.string().min(1).optional(),
  title: z.string().min(1).optional(),
  subtitle: z.string().optional(),
  category: z.string().min(1).optional(),
  description: z.string().optional(),
  price: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  focusKeywords: z.string().optional(),
  metaKeywords: z.string().optional(),
  canonicalUrl: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().optional(),
  twitterCard: z.enum(['summary', 'summary_large_image']).optional(),
  twitterTitle: z.string().optional(),
  twitterDescription: z.string().optional(),
  twitterImage: z.string().optional(),
  robotsMeta: z.string().optional(),
  status: z.enum(['Active', 'Inactive']).optional(),
  image: z.string().optional(),
  images: z.array(z.string()).optional(),
  applications: z.array(z.string()).optional(),
  technicalInfoTabs: z.array(z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(['specifications', 'panelVariations', 'bimObjects', 'custom']),
    content: z.any(),
  })).optional(),
  // Keep old fields for backward compatibility
  specifications: z.union([z.string(), z.object({
    nominalHeight: z.string().optional(),
    panelDimensions: z.string().optional(),
    reinforcements: z.string().optional(),
    postLength: z.string().optional(),
    fixators: z.string().optional(),
    bolts: z.string().optional(),
    wireDiameter: z.string().optional(),
  }), z.array(z.any())]).optional(),
  panelVariations: z.union([z.string(), z.array(z.any())]).optional(),
  bimObjects: z.string().optional(),
});

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = await getDatabase();
    const productsCollection = db.collection('products');

    const product = await productsCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      id: product._id.toString(),
      name: product.name,
      title: product.title,
      subtitle: product.subtitle,
      category: product.category,
      description: product.description,
      price: product.price,
      metaTitle: product.metaTitle,
      metaDescription: product.metaDescription,
      focusKeywords: product.focusKeywords,
      metaKeywords: product.metaKeywords,
      canonicalUrl: product.canonicalUrl,
      ogTitle: product.ogTitle,
      ogDescription: product.ogDescription,
      ogImage: product.ogImage,
      twitterCard: product.twitterCard,
      twitterTitle: product.twitterTitle,
      twitterDescription: product.twitterDescription,
      twitterImage: product.twitterImage,
      robotsMeta: product.robotsMeta,
      status: product.status,
      image: product.image,
      images: product.images || [],
      applications: product.applications || [],
      technicalInfoTabs: product.technicalInfoTabs || undefined,
      specifications: product.specifications || {},
      panelVariations: product.panelVariations,
      bimObjects: product.bimObjects,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    });
  } catch (error) {
    console.error('Get product error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const payload = await authenticateRequest(request);

    if (!payload) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const updateData = productSchema.parse(body);

    const db = await getDatabase();
    const productsCollection = db.collection('products');

    const result = await productsCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updateData,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Update product error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const payload = await authenticateRequest(request);

    if (!payload) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const db = await getDatabase();
    const productsCollection = db.collection('products');

    const result = await productsCollection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete product error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

