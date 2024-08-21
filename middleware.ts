import { NextRequest, NextResponse } from "next/server";

const getSubdomain = (request: NextRequest): string => {
  const host = request.headers.get('host');

  if (!host) throw 'Cant read host from headers'

  const subdomain = host.replace('.localhost:3000', '');
  return subdomain
}

export async function middleware(request: NextRequest, response: NextResponse) {
  const subdomain = getSubdomain(request)

  if(subdomain === 'test') {
    return NextResponse.rewrite(new URL('/test', request.url));
  }

  if(subdomain === 'bucitos') {
    return NextResponse.rewrite(new URL('/bucitos', request.url));
  }

  return NextResponse.next(); // Return updated session for users
}