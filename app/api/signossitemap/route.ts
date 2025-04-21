import { zodiacSigns } from "@/data/zodiac-signs"
import { NextResponse } from "next/server"

export async function GET() {
  // Definir a data atual para lastmod
  const currentDate = new Date().toISOString().split("T")[0]
  const lastBuildDate = new Date().toUTCString()

  // Build the XML sitemap
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">\n'

  // Add site metadata
  xml += "  <title>Portal Astral - Signos do Zodíaco</title>\n"
  xml += "  <link>https://portalastral.com.br/categorias/signos</link>\n"
  xml += "  <description>Informações completas sobre os signos do zodíaco</description>\n"
  xml += `  <lastBuildDate>${lastBuildDate}</lastBuildDate>\n`
  xml += "  <language>pt-BR</language>\n"
  xml += "  <sy:updatePeriod>hourly</sy:updatePeriod>\n"
  xml += "  <sy:updateFrequency>1</sy:updateFrequency>\n"
  xml += "  <image>https://portalastral.com.br/logo.png</image>\n"

  // Add the main sign page
  xml += "  <url>\n"
  xml += "    <loc>https://portalastral.com.br/categorias/signos</loc>\n"
  xml += `    <lastmod>${currentDate}</lastmod>\n`
  xml += "    <changefreq>monthly</changefreq>\n"
  xml += "    <priority>0.9</priority>\n"
  xml += "  </url>\n"

  // Add each individual sign
  zodiacSigns.forEach((sign) => {
    xml += "  <item>\n"
    xml += `    <title><![CDATA[${sign.name}]]></title>\n`
    xml += `    <link>https://portalastral.com.br/categorias/signos/${sign.slug}</link>\n`
    xml += `    <pubDate>${currentDate}</pubDate>\n`
    xml += `    <category><![CDATA[Signos do Zodíaco]]></category>\n`
    xml += `    <description><![CDATA[${sign.shortDescription}]]></description>\n`
    xml += "  </item>\n"
  })

  xml += "</urlset>"

  // Return the XML with the appropriate content type
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
