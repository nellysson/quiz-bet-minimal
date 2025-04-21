import { NextResponse } from "next/server"

export async function GET() {
  // Definir a data atual para lastmod
  const currentDate = new Date().toISOString().split("T")[0]

  // Construir o XML do sitemap
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  // Adicionar a página principal do mapa astral
  xml += `  <url>
   <loc>https://portalastral.com.br/categorias/mapa-astral</loc>
   <lastmod>${currentDate}</lastmod>
   <changefreq>monthly</changefreq>
   <priority>0.9</priority>
 </url>
`

  // Adicionar a página da calculadora de mapa astral
  xml += `  <url>
   <loc>https://portalastral.com.br/calculadora-mapa-astral</loc>
   <lastmod>${currentDate}</lastmod>
   <changefreq>monthly</changefreq>
   <priority>0.8</priority>
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
