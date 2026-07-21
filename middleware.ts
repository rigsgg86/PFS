import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((request) => {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-prime-fleet-portal', 'true');

  return NextResponse.next({ request: { headers: requestHeaders } });
});

export const config = {
  matcher: ['/((?!api/auth|_next/static|_next/image|favicon.ico).*)'],
};
