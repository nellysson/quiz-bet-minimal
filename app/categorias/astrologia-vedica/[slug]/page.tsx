import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { astrologiaVedicaTopics } from "@/data/astrologia-vedica-topics"
import Image from "next/image"

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

export default function AstrologiaVedicaPage({ params }: AstrologiaVedicaPageProps) {
  const topic = astrologiaVedicaTopics.find((t) => t.slug === params.slug)

  if (!topic) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/categorias/astrologia-vedica" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar à Astrologia Védica
        </Link>
      </Button>

      <div className="mb-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{topic.name}</h1>

          <div className="bg-muted/30 rounded-lg px-4 py-3 mb-6 inline-block">
            <span className="text-lg">{topic.shortDescription}</span>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {topic.description.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div>
          <div className="sticky top-24">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4">
              <Image
                src={
                  topic.image && topic.image.trim() !== ""
                    ? topic.image
                    : "/placeholder.svg?height=400&width=400&query=vedic+astrology+symbol"
                }
                alt={topic.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h3 className="font-medium mb-2">Explore mais tópicos</h3>
              <ul className="space-y-2">
                {astrologiaVedicaTopics
                  .filter((t) => t.slug !== topic.slug)
                  .slice(0, 3)
                  .map((relatedTopic) => (
                    <li key={relatedTopic.slug}>
                      <Link
                        href={`/categorias/astrologia-vedica/${relatedTopic.slug}`}
                        className="text-primary hover:underline"
                      >
                        {relatedTopic.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
