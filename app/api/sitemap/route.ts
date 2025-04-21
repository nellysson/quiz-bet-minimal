import { NextResponse } from "next/server"

export async function GET() {
  // Definir a data atual para lastmod
  const currentDate = new Date().toISOString().split("T")[0]

  // Construir o XML do sitemap principal
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  // Adicionar referência ao sitemap de artigos
  xml += "  <sitemap>\n"
  xml += "    <loc>https://astro-glossario.vercel.app/artigossitemap.xml</loc>\n"
  xml += `    <lastmod>${currentDate}</lastmod>\n`
  xml += "  </sitemap>\n"

  // Adicionar referência ao sitemap de glossário (a ser criado)
  xml += "  <sitemap>\n"
  xml += "    <loc>https://astro-glossario.vercel.app/glossariositemapxml</loc>\n"
  xml += `    <lastmod>${currentDate}</lastmod>\n`
  xml += "  </sitemap>\n"

  // Adicionar referência ao sitemap de signos (a ser criado)
  xml += "  <sitemap>\n"
  xml += "    <loc>https://astro-glossario.vercel.app/signossitemap.xml</loc>\n"
  xml += `    <lastmod>${currentDate}</lastmod>\n`
  xml += "  </sitemap>\n"

  xml += "</sitemapindex>"

  // Retornar o XML com o tipo de conteúdo apropriado
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
