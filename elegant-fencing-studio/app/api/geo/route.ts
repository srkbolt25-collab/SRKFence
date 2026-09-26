import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const headers = request.headers;

  const countryCode =
    headers.get("x-vercel-ip-country") ||
    headers.get("cf-ipcountry") ||
    headers.get("x-country-code") ||
    headers.get("x-appengine-country") ||
    "";

  return NextResponse.json({
    countryCode: countryCode.toUpperCase(),
  });
}
