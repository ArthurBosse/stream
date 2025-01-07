import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function middleware(request: NextRequest) {
  // Record page view
  if (!request.nextUrl.pathname.startsWith('/_next')) {
    await supabase.from('page_views').insert({
      ip: request.ip || request.headers.get('x-forwarded-for') || 'unknown',
      user_agent: request.headers.get('user-agent') || 'unknown',
      page_url: request.nextUrl.pathname
    });
  }

  // Handle redirections
  if (request.nextUrl.pathname.startsWith('/movie/')) {
    const id = request.nextUrl.pathname.split('/')[2];
    return NextResponse.redirect(new URL(`/film/${id}`, request.url));
  }

  if (request.nextUrl.pathname.startsWith('/category/')) {
    const category = request.nextUrl.pathname.split('/')[2];
    return NextResponse.redirect(new URL(`/categorie/${category}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};