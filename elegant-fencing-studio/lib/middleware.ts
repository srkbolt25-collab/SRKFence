import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './auth';

export async function authenticateRequest(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.substring(7);
  const payload = verifyToken(token);
  
  return payload;
}

export function createErrorResponse(message: string, status: number = 400) {
  return NextResponse.json({ error: message }, { status });
}

export function createSuccessResponse(data: any, status: number = 200) {
  return NextResponse.json(data, { status });
}

