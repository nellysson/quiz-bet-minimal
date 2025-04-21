import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { astrologiaVedicaTopics } from "@/data/astrologia-vedica-topics"

export const metadata: Metadata = {
  title: "Astrologia Védica | Astrologia",
  description: "Explore os conceitos fundamentais da astrologia védica indiana (Jyotish)",
}

export default function AstrologiaVedicaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Astrologia Védica</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Explore os conceitos fundamentais da astrologia védica indiana, também conhecida como Jyotish, um sistema
          astrológico com raízes nos antigos textos védicos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {astrologiaVedicaTopics.map((topic) => (
          <Link
            href={`/categorias/astrologia-vedica/${topic.slug}`}
            key={topic.slug}
            className="transition-transform hover:scale-[1.02]"
          >
            <Card className="h-full overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={
                    topic.image && topic.image.trim() !== ""
                      ? topic.image
                      : "/placeholder.svg?height=400&width=600&query=vedic+astrology"
                  }
                  alt={topic.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{topic.name}</CardTitle>
                <CardDescription>{topic.shortDescription}</CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="text-sm text-muted-foreground">Saiba mais →</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
