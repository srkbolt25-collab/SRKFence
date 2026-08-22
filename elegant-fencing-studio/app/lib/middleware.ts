import { NextRequest, NextResponse } from 'next/server';
export async function authenticateRequest(request: NextRequest) {
  // JWT auth removed for admin APIs as requested.
  // Return a truthy payload so existing route checks continue to work.
  return { userId: 'admin-657706', email: 'admin657706@srkfence.com' };
}

export function createErrorResponse(message: string, status: number = 400) {
  return NextResponse.json({ error: message }, { status });
}

export function createSuccessResponse(data: any, status: number = 200) {
  return NextResponse.json(data, { status });
}

