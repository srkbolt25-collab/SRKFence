import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { authenticateRequest } from '@/lib/middleware';
import { z } from 'zod';
import { ObjectId } from 'mongodb';

const applicationSchema = z.object({
  slug: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  longDescription: z.string().optional(),
  image: z.string().optional(),
  images: z.array(z.string()).optional(),
  features: z.array(z.string()).optional(),
  benefits: z.array(z.string()).optional(),
  specifications: z.array(z.string()).optional(),
  useCases: z.array(z.string()).optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  keywords: z.string().optional(),
  status: z.enum(['Published', 'Draft']).default('Published'),
});

export async function GET(request: NextRequest) {
  try {
    const db = await getDatabase();
    const applicationsCollection = db.collection('applications');

    const applications = await applicationsCollection.find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json({
      applications: applications.map((app) => ({
        id: app._id.toString(),
        slug: app.slug,
        title: app.title,
        description: app.description,
        longDescription: app.longDescription,
        image: app.image,
        images: app.images || [],
        features: app.features || [],
        benefits: app.benefits || [],
        specifications: app.specifications || [],
        useCases: app.useCases || [],
        metaTitle: app.metaTitle,
        metaDescription: app.metaDescription,
        keywords: app.keywords,
        status: app.status,
        createdAt: app.createdAt,
        updatedAt: app.updatedAt,
      })),
    });
  } catch (error) {
    console.error('Get applications error:', error);
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
    const applicationData = applicationSchema.parse(body);

    const db = await getDatabase();
    const applicationsCollection = db.collection('applications');

    const result = await applicationsCollection.insertOne({
      ...applicationData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({
      id: result.insertedId.toString(),
      ...applicationData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Create application error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

