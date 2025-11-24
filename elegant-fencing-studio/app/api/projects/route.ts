import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { authenticateRequest } from '@/lib/middleware';
import { z } from 'zod';
import { ObjectId } from 'mongodb';

const projectSchema = z.object({
  title: z.string().optional(),
  location: z.string().optional(),
  category: z.string().optional(),
  year: z.string().optional(),
  description: z.string().optional(),
  images: z.array(z.string()).optional(),
  beforeImage: z.string().optional(),
  afterImage: z.string().optional(),
  videoUrl: z.string().optional(),
  client: z.string().optional(),
  testimonial: z.string().optional(),
  status: z.enum(['Published', 'Draft']).default('Published'),
});

export async function GET(request: NextRequest) {
  try {
    const db = await getDatabase();
    const projectsCollection = db.collection('projects');

    const projects = await projectsCollection.find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json({
      projects: projects.map((project) => ({
        id: project._id.toString(),
        title: project.title,
        location: project.location,
        category: project.category,
        year: project.year,
        description: project.description,
        images: project.images || [],
        beforeImage: project.beforeImage,
        afterImage: project.afterImage,
        videoUrl: project.videoUrl,
        client: project.client,
        testimonial: project.testimonial,
        status: project.status,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt,
      })),
    });
  } catch (error) {
    console.error('Get projects error:', error);
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
    const projectData = projectSchema.parse(body);

    const db = await getDatabase();
    const projectsCollection = db.collection('projects');

    const result = await projectsCollection.insertOne({
      ...projectData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({
      id: result.insertedId.toString(),
      ...projectData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Create project error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

