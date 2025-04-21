import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { astrologiaVedicaTopics } from "@/data/astrologia-vedica-topics"
import { VedicAstrologyHero } from "@/components/vedic-astrology-hero"
import { VedicAstrologySitemap } from "@/components/vedic-astrology-sitemap"

export const metadata: Metadata = {
  title: "Astrologia Védica | Astrologia",
  description: "Explore os conceitos fundamentais da astrologia védica indiana (Jyotish)",
}

export default function AstrologiaVedicaPage() {
  return (
    <div>
      <VedicAstrologyHero />

      <div className="container mx-auto px-4 py-12" id="topicos">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Conceitos Fundamentais</h2>
          <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto mb-6">
            <p>
              A Astrologia Védica, também conhecida como Jyotish (que significa "ciência da luz"), é um dos sistemas
              astrológicos mais antigos do mundo, com origens que remontam a mais de 5.000 anos na Índia antiga.
            </p>
            <p>
              Diferente da Astrologia Ocidental que utiliza o zodíaco tropical, a Astrologia Védica baseia-se no zodíaco
              sideral, que está alinhado com as posições reais das constelações no céu. Esta diferença fundamental
              resulta em interpretações e cálculos distintos entre os dois sistemas.
            </p>
            <p>
              Explore os tópicos abaixo para aprofundar seu conhecimento sobre este fascinante sistema astrológico que
              continua a influenciar milhões de pessoas ao redor do mundo.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {astrologiaVedicaTopics.map((topic) => (
            <Link
              href={`/categorias/astrologia-vedica/${topic.slug}`}
              key={topic.slug}
              className="transition-transform hover:scale-[1.02]"
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{topic.name}</CardTitle>
                  <CardDescription className="text-base">{topic.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-muted-foreground">{topic.description.split(".")[0]}.</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-primary font-medium">Saiba mais →</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <VedicAstrologySitemap />
    </div>
  )
}
