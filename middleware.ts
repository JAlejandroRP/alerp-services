import { NextRequest, NextResponse } from "next/server";

const getSubdomain = (request: NextRequest): string => {
  const host = request.headers.get('host');

  if (!host) throw 'Cant read host from headers'

  const subdomain = host.replace('.localhost:3000', '');
  return subdomain
}

export async function middleware(request: NextRequest, response: NextResponse) {
  // Exceptuar archivos estáticos
  if (request.nextUrl.pathname.match(/\.(css|js|png|jpg|svg|ico|woff2|woff)$/)) {
    return NextResponse.next();
  }

  const subdomain = getSubdomain(request);
  // const host = request.headers.get('host');

  // console.log(host, request.nextUrl.pathname);


  // if(host === 'localhost:3000' && request.nextUrl.pathname === '/short-url'){
  //   return NextResponse.redirect(new URL(`short-url.${host}`, request.url))
  // }

  if (subdomain === 'short-url') {
    return NextResponse.rewrite(new URL('/short-url/short' + request.nextUrl.pathname, request.url));
  }

  if (subdomain === 'bucitos') {
    return NextResponse.rewrite(new URL('/bucitos/bucitos' + request.nextUrl.pathname, request.url));
  }

  return NextResponse.next();
}