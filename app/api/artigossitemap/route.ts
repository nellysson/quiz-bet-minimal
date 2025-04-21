import { articlesData } from "@/data/articles-data"
import { NextResponse } from "next/server"

export async function GET() {
  // Definir a data atual para lastmod
  const currentDate = new Date().toISOString().split("T")[0]
  const lastBuildDate = new Date().toUTCString()

  // Construir o XML do sitemap
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
  <title>Portal Astral - Artigos</title>
  <link>https://portalastral.com.br/artigos</link>
  <description>Artigos sobre astrologia, signos, planetas e muito mais</description>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
  <language>pt-BR</language>
  <sy:updatePeriod>hourly</sy:updatePeriod>
  <sy:updateFrequency>1</sy:updateFrequency>
  <image>https://portalastral.com.br/logo.png</image>
`

  // Add the main article page
  xml += "  <url>\n"
  xml += "    <loc>https://portalastral.com.br/artigos</loc>\n"
  xml += `    <lastmod>${currentDate}</lastmod>\n`
  xml += "    <changefreq>weekly</changefreq>\n"
  xml += "    <priority>0.9</priority>\n"
  xml += "  </url>\n"

  // Add each individual article
  articlesData.forEach((article) => {
    xml += "  <item>\n"
    xml += `    <title><![CDATA[${article.title}]]></title>\n`
    xml += `    <loc>https://portalastral.com.br/artigos/${article.slug}</link>\n`
    xml += `    <pubDate>${currentDate}</pubDate>\n`
    xml += `    <category><![CDATA[Artigos]]></category>\n`
    xml += `    <description><![CDATA[${article.excerpt}]]></description>\n`
    xml += "  </item>\n"
  })

  xml += "</urlset>"

  // Retornar o XML com o tipo de conteúdo apropriado
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
