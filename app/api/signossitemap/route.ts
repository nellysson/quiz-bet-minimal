import { zodiacSigns } from "@/data/zodiac-signs"
import { NextResponse } from "next/server"

export async function GET() {
  // Definir a data atual para lastmod
  const currentDate = new Date().toISOString().split("T")[0]

  // Construir o XML do sitemap
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  // Adicionar a página principal de signos
  xml += "  <url>\n"
  xml += "    <loc>https://portalastral.com.br/categorias/signos</loc>\n"
  xml += `    <lastmod>${currentDate}</lastmod>\n`
  xml += "    <changefreq>monthly</changefreq>\n"
  xml += "    <priority>0.9</priority>\n"
  xml += "  </url>\n"

  // Adicionar cada signo individual
  zodiacSigns.forEach((sign) => {
    xml += "  <url>\n"
    xml += `    <loc>https://portalastral.com.br/categorias/signos/${sign.slug}</loc>\n`
    xml += `    <lastmod>${currentDate}</lastmod>\n`
    xml += "    <changefreq>monthly</changefreq>\n"
    xml += "    <priority>0.8</priority>\n"
    xml += "  </url>\n"
  })

  xml += "</urlset>"

  // Retornar o XML com o tipo de conteúdo apropriado
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
