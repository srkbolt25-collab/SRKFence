import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { authenticateRequest } from '@/lib/middleware';

// Configure Cloudinary
if (!cloudinary.config().cloud_name) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dx9swmsqj',
    api_key: process.env.CLOUDINARY_API_KEY || '662941863259932',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'SQLdzNdWgpUsEC9p7pAodetuIN4',
  });
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

    const formData = await request.formData();
    const files = formData.getAll('files') as File[];
    const folder = formData.get('folder') as string || 'products';

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'No files provided' },
        { status: 400 }
      );
    }

    const uploadPromises = files.map(async (file) => {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: `srkfence/${folder}`,
            resource_type: 'auto',
            transformation: [
              { quality: 'auto' },
              { fetch_format: 'auto' },
            ],
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve({
                url: result?.secure_url,
                public_id: result?.public_id,
                width: result?.width,
                height: result?.height,
              });
            }
          }
        );

        uploadStream.end(buffer);
      });
    });

    const results = await Promise.all(uploadPromises);

    return NextResponse.json({
      success: true,
      images: results,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload images' },
      { status: 500 }
    );
  }
}

