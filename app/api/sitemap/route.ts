import { NextResponse } from 'next/server';

export const revalidate = 3600; // 1 hour (60 * 60)

export async function GET() {
  const urls = [
    '/en/',
    '/fr/',
    '/ar/'
  ];
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (u) => `  <url>
    <loc>${base}${u}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${base}${u.replace(/^\/(en|fr|ar)/, '/en')}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${base}${u.replace(/^\/(en|fr|ar)/, '/fr')}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${base}${u.replace(/^\/(en|fr|ar)/, '/ar')}" />
  </url>`
  )
  .join('\n')}
</urlset>`;
  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } });
}

