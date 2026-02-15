import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
    'google-site-verification: googleb75c81f093d3c5b2.html',
    {
      headers: {
        'Content-Type': 'text/html',
      },
    }
  );
}
