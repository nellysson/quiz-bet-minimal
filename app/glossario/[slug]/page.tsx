import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { glossaryTerms } from "@/data/glossary-terms"
import PortalAstralAd from "@/components/portal-astral-ad"

interface GlossaryTermPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: GlossaryTermPageProps) {
  const term = glossaryTerms.find((t) => t.slug === params.slug)

  if (!term) {
    return {
      title: "Termo não encontrado | Portal Astral",
      description: "O termo que você está procurando não foi encontrado.",
    }
  }

  return {
    title: `${term.term} | Glossário de Astrologia`,
    description: term.shortDefinition,
  }
}

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({
    slug: term.slug,
  }))
}

export default function GlossaryTermPage({ params }: GlossaryTermPageProps) {
  const term = glossaryTerms.find((t) => t.slug === params.slug)

  if (!term) {
    notFound()
  }

  // Encontrar termos relacionados
  const relatedTerms = glossaryTerms
    .filter((t) => term.relatedTerms.includes(t.slug) && t.slug !== term.slug)
    .slice(0, 3)

  // Encontrar outros termos da mesma categoria
  const sameCategoryTerms = glossaryTerms
    .filter((t) => t.category === term.category && t.slug !== term.slug)
    .slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/glossario" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar ao Glossário
        </Link>
      </Button>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{term.term}</h1>

          <div className="bg-muted/30 rounded-lg px-4 py-3 mb-6 inline-block">
            <span className="text-lg">{term.shortDefinition}</span>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {term.description.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* CTA para Mapa Astral */}
          <div className="mt-10 mb-8 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 p-6 border border-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="text-3xl md:text-4xl">✨</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Descubra como {term.term} influencia seu mapa astral</h3>
                <p className="text-muted-foreground">
                  Gere seu mapa astral personalizado e entenda como os astros influenciam sua vida.
                </p>
              </div>
              <Button asChild size="lg" className="whitespace-nowrap">
                <Link href="/categorias/mapa-astral" className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Criar Mapa Astral
                </Link>
              </Button>
            </div>
          </div>

          {term.relatedTerms.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Termos Relacionados</h2>
              <div className="flex flex-wrap gap-2">
                {term.relatedTerms.map((relatedSlug) => {
                  const relatedTerm = glossaryTerms.find((t) => t.slug === relatedSlug)
                  return relatedTerm ? (
                    <Link
                      key={relatedSlug}
                      href={`/glossario/${relatedSlug}`}
                      className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {relatedTerm.term}
                    </Link>
                  ) : null
                })}
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="sticky top-24 space-y-6">
            {/* CTA para Mapa Astral na barra lateral */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Mapa Astral Personalizado</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Descubra como os astros influenciam sua personalidade, relacionamentos e destino com um mapa astral
                  completo.
                </p>
                <Button asChild className="w-full">
                  <Link href="/categorias/mapa-astral">Criar Meu Mapa Astral</Link>
                </Button>
              </CardContent>
            </Card>

            {relatedTerms.length > 0 && (
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-3">Explore Também</h3>
                  <div className="space-y-2">
                    {relatedTerms.map((relatedTerm) => (
                      <Link
                        key={relatedTerm.slug}
                        href={`/glossario/${relatedTerm.slug}`}
                        className="block rounded-md bg-muted p-3 hover:bg-muted/80"
                      >
                        <div className="flex items-center justify-between">
                          <span>{relatedTerm.term}</span>
                          <ArrowLeft className="h-4 w-4 rotate-180" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {sameCategoryTerms.length > 0 && (
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-3">Mesma Categoria</h3>
                  <div className="space-y-2">
                    {sameCategoryTerms.map((categoryTerm) => (
                      <Link
                        key={categoryTerm.slug}
                        href={`/glossario/${categoryTerm.slug}`}
                        className="block rounded-md bg-muted p-3 hover:bg-muted/80"
                      >
                        <div className="flex items-center justify-between">
                          <span>{categoryTerm.term}</span>
                          <ArrowLeft className="h-4 w-4 rotate-180" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Anúncio no final da página */}
      <div className="mt-12">
        <PortalAstralAd />
      </div>
    </div>
  )
}
