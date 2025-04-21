import { NextResponse } from "next/server"

export async function GET() {
  // Definir a data atual para lastmod
  const currentDate = new Date().toISOString().split("T")[0]
  const lastBuildDate = new Date().toUTCString()

  // Construir o XML do sitemap principal
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
  <title>Portal Astral - Sitemaps</title>
  <link>https://portalastral.com.br</link>
  <description>Sitemaps do Portal Astral - Seu guia completo de astrologia</description>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
  <language>pt-BR</language>
  <sy:updatePeriod>hourly</sy:updatePeriod>
  <sy:updateFrequency>1</sy:updateFrequency>

  <sitemap>
    <loc>https://portalastral.com.br/artigossitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>

  <sitemap>
    <loc>https://portalastral.com.br/glossariositemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>

  <sitemap>
    <loc>https://portalastral.com.br/signossitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`

  // Retornar o XML com o tipo de conteúdo apropriado
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
