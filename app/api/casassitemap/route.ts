import { houses } from "@/data/houses"
import { NextResponse } from "next/server"

export async function GET() {
  // Definir a data atual para lastmod
  const currentDate = new Date().toISOString().split("T")[0]

  // Construir o XML do sitemap
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  // Adicionar a página principal das casas
  xml += `  <url>
   <loc>https://portalastral.com.br/categorias/casas</loc>
   <lastmod>${currentDate}</lastmod>
   <changefreq>monthly</changefreq>
   <priority>0.9</priority>
 </url>
`

  // Adicionar cada casa individual
  houses.forEach((house) => {
    xml += `  <url>
   <loc>https://portalastral.com.br/categorias/casas/${house.slug}</loc>
   <lastmod>${currentDate}</lastmod>
   <changefreq>monthly</changefreq>
   <priority>0.7</priority>
 </url>
`
  })

  xml += "</urlset>"

  // Retornar o XML com o tipo de conteúdo apropriado
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
