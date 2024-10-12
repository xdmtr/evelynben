// File: app/api/set-cookie/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Set a cookie with SameSite=None and Secure attributes
  const response = NextResponse.json({ message: 'Cookie set with SameSite and Secure attributes' });

  // Set the cookie in the response headers
  response.cookies.set('myCookie', 'value', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/',
  });

  return response;
}
