import { zodiacSigns } from "@/data/zodiac-signs"
import { NextResponse } from "next/server"

export async function GET() {
  // Definir a data atual para lastmod
  const currentDate = new Date().toISOString().split("T")[0]

  // Build the XML sitemap
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  // Add the main sign page
  xml += `  <url>
    <loc>https://portalastral.com.br/categorias/signos</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
`

  // Add each individual sign
  zodiacSigns.forEach((sign) => {
    xml += `  <url>
    <loc>https://portalastral.com.br/categorias/signos/${sign.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`
  })

  xml += "</urlset>"

  // Return the XML with the appropriate content type
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
