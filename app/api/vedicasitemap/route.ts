import { NextResponse } from "next/server"
import { astrologiaVedicaTopics } from "@/data/astrologia-vedica-topics"

export async function GET() {
  // Definir a data atual para lastmod
  const currentDate = new Date().toISOString().split("T")[0]

  // Criar o cabeçalho do XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://portalastral.com.br/categorias/astrologia-vedica</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`

  // Adicionar cada tópico de astrologia védica ao sitemap
  astrologiaVedicaTopics.forEach((topic) => {
    xml += `
  <url>
    <loc>https://portalastral.com.br/categorias/astrologia-vedica/${topic.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  })

  // Fechar o XML
  xml += `
</urlset>`

  // Retornar o XML com o tipo de conteúdo apropriado
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
