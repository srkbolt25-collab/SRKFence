import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { z } from 'zod';

const rfqSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  address: z.string().min(1),
  companyName: z.string().min(1),
  country: z.string().optional(),
  city: z.string().min(1),
  mobileNumber: z.string().min(1),
  comments: z.string().optional(),
  items: z.array(z.object({
    productId: z.string(),
    productTitle: z.string(),
    quantity: z.number().min(1),
  })),
  totalItems: z.number().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const rfqData = rfqSchema.parse(body);

    const db = await getDatabase();
    const rfqCollection = db.collection('rfq_submissions');

    const result = await rfqCollection.insertOne({
      ...rfqData,
      status: 'Pending',
      submittedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({
      id: result.insertedId.toString(),
      message: 'RFQ submitted successfully',
      ...rfqData,
    }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Create RFQ error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Optional: Add authentication check for admin access
    const db = await getDatabase();
    const rfqCollection = db.collection('rfq_submissions');

    const rfqs = await rfqCollection.find({}).sort({ submittedAt: -1 }).toArray();

    return NextResponse.json({
      rfqs: rfqs.map((rfq) => ({
        id: rfq._id.toString(),
        fullName: rfq.fullName,
        email: rfq.email,
        address: rfq.address,
        companyName: rfq.companyName,
        country: rfq.country,
        city: rfq.city,
        mobileNumber: rfq.mobileNumber,
        comments: rfq.comments,
        items: rfq.items,
        totalItems: rfq.totalItems,
        status: rfq.status,
        submittedAt: rfq.submittedAt,
      })),
    });
  } catch (error) {
    console.error('Get RFQs error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

