import { glossaryTerms } from "@/data/glossary-terms"
import { NextResponse } from "next/server"

export async function GET() {
  // Definir a data atual para lastmod
  const currentDate = new Date().toISOString().split("T")[0]
  const lastBuildDate = new Date().toUTCString()

  // Construir o XML do sitemap
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">\n'

  // Adicionar metadados do site
  xml += "  <title>Portal Astral - Glossário</title>\n"
  xml += "  <link>https://portalastral.com.br/glossario</link>\n"
  xml += "  <description>Glossário completo de termos astrológicos</description>\n"
  xml += `  <lastBuildDate>${lastBuildDate}</lastBuildDate>\n`
  xml += "  <language>pt-BR</language>\n"
  xml += "  <sy:updatePeriod>hourly</sy:updatePeriod>\n"
  xml += "  <sy:updateFrequency>1</sy:updateFrequency>\n"
  xml += "  <image>https://portalastral.com.br/logo.png</image>\n"

  // Adicionar a página principal do glossário
  xml += "  <url>\n"
  xml += "    <loc>https://portalastral.com.br/glossario</loc>\n"
  xml += `    <lastmod>${currentDate}</lastmod>\n`
  xml += "    <changefreq>weekly</changefreq>\n"
  xml += "    <priority>0.9</priority>\n"
  xml += "  </url>\n"

  // Adicionar cada termo do glossário individual
  glossaryTerms.forEach((term) => {
    xml += "  <item>\n"
    xml += `    <title><![CDATA[${term.term}]]></title>\n`
    xml += `    <link>https://portalastral.com.br/glossario/${term.slug}</link>\n`
    xml += `    <pubDate>${currentDate}</pubDate>\n`
    xml += `    <category><![CDATA[Glossário]]></category>\n`
    xml += `    <description><![CDATA[${term.shortDefinition}]]></description>\n`
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
