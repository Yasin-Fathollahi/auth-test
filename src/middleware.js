import { NextResponse } from 'next/server';
export async function middleware(request) {
  const url = request.nextUrl.clone();
  if (request.nextUrl.pathname === '/') {
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  if (request.nextUrl.pathname === '/dashboard') {
    const cookie = request.cookies.get('isLoggedIn');

    if (!cookie) {
      url.pathname = '/auth';
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/', '/dashboard'],
};
