import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { authenticateRequest } from '@/lib/middleware';
import { z } from 'zod';

const testimonialSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  quote: z.string().min(1),
  rating: z.number().min(1).max(5).default(5),
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
        metaTitle: testimonial.metaTitle,
        metaDescription: testimonial.metaDescription,
        focusKeywords: testimonial.focusKeywords,
        metaKeywords: testimonial.metaKeywords,
        canonicalUrl: testimonial.canonicalUrl,
        ogTitle: testimonial.ogTitle,
        ogDescription: testimonial.ogDescription,
        ogImage: testimonial.ogImage,
        twitterCard: testimonial.twitterCard,
        twitterTitle: testimonial.twitterTitle,
        twitterDescription: testimonial.twitterDescription,
        twitterImage: testimonial.twitterImage,
        robotsMeta: testimonial.robotsMeta,
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

