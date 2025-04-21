import { NextResponse } from "next/server"

export async function GET() {
  // Definir a data atual para lastmod
  const currentDate = new Date().toISOString().split("T")[0]

  // Adicionar o sitemap dos aspectos ao sitemap principal
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
<sitemap>
  <loc>https://portalastral.com.br/planetassitemap.xml</loc>
  <lastmod>${currentDate}</lastmod>
</sitemap>
<sitemap>
  <loc>https://portalastral.com.br/horoscopositemap.xml</loc>
  <lastmod>${currentDate}</lastmod>
</sitemap>
<sitemap>
  <loc>https://portalastral.com.br/casassitemap.xml</loc>
  <lastmod>${currentDate}</lastmod>
</sitemap>
<sitemap>
  <loc>https://portalastral.com.br/aspectossitemap.xml</loc>
  <lastmod>${currentDate}</lastmod>
</sitemap>
<sitemap>
  <loc>https://portalastral.com.br/mapaastralssitemap.xml</loc>
  <lastmod>${currentDate}</lastmod>
</sitemap>
<sitemap>
  <loc>https://portalastral.com.br/vedicasitemap.xml</loc>
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
