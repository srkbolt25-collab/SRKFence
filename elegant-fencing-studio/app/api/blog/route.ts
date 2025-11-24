import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { authenticateRequest } from '@/lib/middleware';
import { z } from 'zod';
import { ObjectId } from 'mongodb';

const blogPostSchema = z.object({
  slug: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  category: z.string().optional(),
  readTime: z.string().optional(),
  date: z.string().optional(),
  content: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  keywords: z.string().optional(),
  status: z.enum(['Published', 'Draft']).default('Published'),
});

export async function GET(request: NextRequest) {
  try {
    const db = await getDatabase();
    const blogCollection = db.collection('blog');

    const blogPosts = await blogCollection.find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json({
      blogPosts: blogPosts.map((post) => ({
        id: post._id.toString(),
        slug: post.slug,
        title: post.title,
        description: post.description,
        image: post.image,
        category: post.category,
        readTime: post.readTime,
        date: post.date,
        content: post.content,
        metaTitle: post.metaTitle,
        metaDescription: post.metaDescription,
        keywords: post.keywords,
        status: post.status,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      })),
    });
  } catch (error) {
    console.error('Get blog posts error:', error);
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
    const blogData = blogPostSchema.parse(body);

    const db = await getDatabase();
    const blogCollection = db.collection('blog');

    const result = await blogCollection.insertOne({
      ...blogData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({
      id: result.insertedId.toString(),
      ...blogData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Create blog post error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

