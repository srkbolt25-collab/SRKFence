import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { authenticateRequest } from '@/lib/middleware';
import { z } from 'zod';

const testimonialSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  quote: z.string().min(1),
  rating: z.number().min(1).max(5).default(5),
  status: z.enum(['Published', 'Draft']).default('Draft'),
});

export async function GET(request: NextRequest) {
  try {
    const db = await getDatabase();
    const testimonialsCollection = db.collection('testimonials');

    const testimonials = await testimonialsCollection.find({}).toArray();

    return NextResponse.json({
      testimonials: testimonials.map((testimonial) => ({
        id: testimonial._id.toString(),
        name: testimonial.name,
        role: testimonial.role,
        quote: testimonial.quote,
        rating: testimonial.rating,
        status: testimonial.status,
      })),
    });
  } catch (error) {
    console.error('Get testimonials error:', error);
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
    const testimonialData = testimonialSchema.parse(body);

    const db = await getDatabase();
    const testimonialsCollection = db.collection('testimonials');

    const result = await testimonialsCollection.insertOne({
      ...testimonialData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({
      id: result.insertedId.toString(),
      ...testimonialData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Create testimonial error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

