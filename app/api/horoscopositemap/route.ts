import { zodiacSigns } from "@/data/zodiac-signs"
import { NextResponse } from "next/server"

export async function GET() {
  // Definir a data atual para lastmod
  const currentDate = new Date().toISOString().split("T")[0]

  // Construir o XML do sitemap
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  // Adicionar a página principal do horóscopo
  xml += `  <url>
    <loc>https://portalastral.com.br/horoscopo</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`

  // Adicionar cada signo individual do horóscopo
  zodiacSigns.forEach((sign) => {
    xml += `  <url>
    <loc>https://portalastral.com.br/horoscopo/${sign.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`
  })

  // Adicionar a página da calculadora
  xml += `  <url>
    <loc>https://portalastral.com.br/calculadora</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`

  xml += "</urlset>"

  // Retornar o XML com o tipo de conteúdo apropriado
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
