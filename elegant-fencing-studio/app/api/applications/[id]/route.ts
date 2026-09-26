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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = await getDatabase();
    const applicationsCollection = db.collection('applications');

    const application = await applicationsCollection.findOne({ _id: new ObjectId(id) });

    if (!application) {
      return NextResponse.json(
        { error: 'Application not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      id: application._id.toString(),
      slug: application.slug,
      title: application.title,
      description: application.description,
      longDescription: application.longDescription,
      image: application.image,
      images: application.images || [],
      features: application.features || [],
      benefits: application.benefits || [],
      specifications: application.specifications || [],
      useCases: application.useCases || [],
      metaTitle: application.metaTitle,
      metaDescription: application.metaDescription,
      keywords: application.keywords,
      status: application.status,
      createdAt: application.createdAt,
      updatedAt: application.updatedAt,
    });
  } catch (error) {
    console.error('Get application error:', error);
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
    const updateData = applicationSchema.parse(body);

    const db = await getDatabase();
    const applicationsCollection = db.collection('applications');

    const result = await applicationsCollection.updateOne(
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
        { error: 'Application not found' },
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

    console.error('Update application error:', error);
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
    const applicationsCollection = db.collection('applications');

    const result = await applicationsCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Application not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete application error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

