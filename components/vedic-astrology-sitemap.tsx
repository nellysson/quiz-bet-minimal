import Link from "next/link"
import { astrologiaVedicaTopics } from "@/data/astrologia-vedica-topics"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export function VedicAstrologySitemap() {
  // Extrair as seções de cada tópico para criar um sitemap mais detalhado
  const sitemapData = astrologiaVedicaTopics.map((topic) => {
    const sections =
      topic.fullContent?.map((section) => ({
        title: section.title,
        slug: section.title ? createSlug(section.title) : undefined,
      })) || []

    return {
      ...topic,
      sections,
    }
  })

  return (
    <div className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Mapa do Site - Astrologia Védica</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Páginas Principais</CardTitle>
              <CardDescription>Navegue pelas páginas principais da seção de Astrologia Védica</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="/categorias/astrologia-vedica" className="text-primary hover:underline flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Página Principal de Astrologia Védica
                  </Link>
                </li>
                <li>
                  <Link href="/calculadora-mapa-astral" className="text-primary hover:underline flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Calculadora de Mapa Astral Védico
                  </Link>
                </li>
                <li>
                  <Link href="/glossario-astrologia-vedica" className="text-primary hover:underline flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Glossário de Termos da Astrologia Védica
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {sitemapData.map((topic) => (
            <Card key={topic.slug} className="h-full">
              <CardHeader>
                <CardTitle>
                  <Link
                    href={`/categorias/astrologia-vedica/${topic.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {topic.name}
                  </Link>
                </CardTitle>
                <CardDescription>{topic.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                {topic.sections.length > 0 ? (
                  <ul className="space-y-2">
                    {topic.sections.map((section, index) => (
                      <li key={index}>
                        <Link
                          href={`/categorias/astrologia-vedica/${topic.slug}#${section.slug}`}
                          className="text-muted-foreground hover:text-primary flex items-center"
                        >
                          <ChevronRight className="h-4 w-4 mr-2" />
                          {section.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">Conteúdo completo sobre {topic.name.toLowerCase()}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// Função auxiliar para criar slugs a partir dos títulos das seções
function createSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim()
}
