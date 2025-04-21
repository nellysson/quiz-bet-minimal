import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { astrologiaVedicaTopics } from "@/data/astrologia-vedica-topics"

interface AstrologiaVedicaPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: AstrologiaVedicaPageProps): Promise<Metadata> {
  const topic = astrologiaVedicaTopics.find((t) => t.slug === params.slug)

  if (!topic) {
    return {
      title: "Tópico não encontrado | Astrologia Védica",
      description: "O tópico que você está procurando não foi encontrado.",
    }
  }

  return {
    title: `${topic.name} | Astrologia Védica`,
    description: topic.shortDescription,
  }
}

export async function generateStaticParams() {
  return astrologiaVedicaTopics.map((topic) => ({
    slug: topic.slug,
  }))
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

export default function AstrologiaVedicaPage({ params }: AstrologiaVedicaPageProps) {
  const topic = astrologiaVedicaTopics.find((t) => t.slug === params.slug)

  if (!topic) {
    notFound()
  }

  // Encontrar o índice do tópico atual
  const currentIndex = astrologiaVedicaTopics.findIndex((t) => t.slug === params.slug)
  const prevTopic = currentIndex > 0 ? astrologiaVedicaTopics[currentIndex - 1] : null
  const nextTopic = currentIndex < astrologiaVedicaTopics.length - 1 ? astrologiaVedicaTopics[currentIndex + 1] : null

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/categorias/astrologia-vedica" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar à Astrologia Védica
        </Link>
      </Button>

      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{topic.name}</h1>
          <div className="bg-muted/30 rounded-lg px-6 py-4 mb-6">
            <p className="text-xl">{topic.shortDescription}</p>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          {topic.fullContent ? (
            <>
              {topic.fullContent.map((section, index) => (
                <section
                  key={index}
                  id={section.title ? createSlug(section.title) : `section-${index}`}
                  className="mb-8 scroll-mt-24"
                >
                  {section.title && <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>}
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </>
          ) : (
            <>
              {topic.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </>
          )}
        </div>

        <div className="border-t border-border pt-6">
          <h3 className="text-xl font-semibold mb-4">Explore mais tópicos de Astrologia Védica</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {prevTopic && (
              <Link
                href={`/categorias/astrologia-vedica/${prevTopic.slug}`}
                className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <span className="text-sm text-muted-foreground">Anterior</span>
                <p className="font-medium">{prevTopic.name}</p>
              </Link>
            )}
            {nextTopic && (
              <Link
                href={`/categorias/astrologia-vedica/${nextTopic.slug}`}
                className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <span className="text-sm text-muted-foreground">Próximo</span>
                <p className="font-medium">{nextTopic.name}</p>
              </Link>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}
