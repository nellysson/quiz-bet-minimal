import { glossaryTerms } from "@/data/glossary-terms"
import { NextResponse } from "next/server"

export async function GET() {
  // Definir a data atual para lastmod
  const currentDate = new Date().toISOString().split("T")[0]

  // Construir o XML do sitemap
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  // Adicionar a página principal do glossário
  xml += "  <url>\n"
  xml += "    <loc>https://portalastral.com.br/glossario</loc>\n"
  xml += `    <lastmod>${currentDate}</lastmod>\n`
  xml += "    <changefreq>weekly</changefreq>\n"
  xml += "    <priority>0.9</priority>\n"
  xml += "  </url>\n"

  // Adicionar cada termo do glossário individual
  glossaryTerms.forEach((term) => {
    xml += "  <url>\n"
    xml += `    <loc>https://portalastral.com.br/glossario/${term.slug}</loc>\n`
    xml += `    <lastmod>${currentDate}</lastmod>\n`
    xml += "    <changefreq>monthly</changefreq>\n"
    xml += "    <priority>0.7</priority>\n"
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
