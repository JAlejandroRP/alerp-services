import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib/supabase/middleware";

const getSubdomain = (request: NextRequest): string => {
  const host = request.headers.get('host');

  if (!host) throw 'Cant read host from headers'

  const subdomain = host.replace('.localhost:3000', '');
  return subdomain
}

export async function middleware(request: NextRequest, response: NextResponse) {
  await updateSession(request)
  // console.log(session);

  // Exceptuar archivos estáticos
  if (request.nextUrl.pathname.match(/\.(css|js|png|jpg|svg|ico|woff2|woff)$/)) {
    // if(session)
    // return session;
    return NextResponse.next();
  }


  if (request.nextUrl.pathname.includes('/sign-in') ||
    request.nextUrl.pathname.includes('/sign-up')) {
    return NextResponse.next()
  }


  const subdomain = getSubdomain(request);

  if (subdomain === 'short-url') {
    return NextResponse.rewrite(new URL('/short-url' + request.nextUrl.pathname, request.url));
  }

  if (subdomain === 'bucitos') {
    return NextResponse.rewrite(new URL('/bucitos' + request.nextUrl.pathname, request.url));
  }



  return NextResponse.next();
}