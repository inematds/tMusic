import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Normaliza URLs malformadas como "trackstrk_3" -> "/_/tracks/trk_3"
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Se começar com "/tracks" sem separadores, corrija
  // Exemplos problemáticos vistos no log: "trackstrk_3" (sem barra)
  if (/^\/?(tracks)(trk_\d+)/i.test(pathname)) {
    const match = pathname.match(/^\/?(tracks)(trk_\d+)/i);
    const id = match?.[2];
    if (id) {
      const url = req.nextUrl.clone();
      url.pathname = `/_/tracks/${id}`;
      return NextResponse.redirect(url);
    }
  }

  // Se o path for algo como "/trackstrk_3" (literalmente colado)
  if (/^\/?(trackstrk_\d+)/i.test(pathname)) {
    const id = pathname.replace(/^\/?trackstrk_(\d+)/i, 'trk_$1');
    if (id.startsWith('trk_')) {
      const url = req.nextUrl.clone();
      url.pathname = `/tracks/${id}`;
      return NextResponse.redirect(url);
    }
  }

  // Normaliza colagens sem barra para DJs: "djsdj_1" -> "/_/djs/dj_1"
  if (/^\/?(djs)(dj_\w+)/i.test(pathname)) {
    const match = pathname.match(/^\/?(djs)(dj_\w+)/i);
    const id = match?.[2];
    if (id) {
      const url = req.nextUrl.clone();
      url.pathname = `/djs/${id}`;
      return NextResponse.redirect(url);
    }
  }

  // Normaliza colagens sem barra para Bandas: "bandsbnd_1" -> "/_/bands/bnd_1"
  if (/^\/?(bands?)(bnd_\w+)/i.test(pathname)) {
    const match = pathname.match(/^\/?(bands?)(bnd_\w+)/i);
    const id = match?.[2];
    if (id) {
      const url = req.nextUrl.clone();
      url.pathname = `/bands/${id}`;
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/:path*'
  ]
};
