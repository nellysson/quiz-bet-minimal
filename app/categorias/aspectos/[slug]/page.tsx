import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { aspects } from "@/data/aspects"

interface AspectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: AspectPageProps): Promise<Metadata> {
  const aspect = aspects.find((a) => a.slug === params.slug)

  if (!aspect) {
    return {
      title: "Aspecto não encontrado | Portal Astral",
      description: "O aspecto astrológico que você está procurando não foi encontrado.",
    }
  }

  return {
    title: `${aspect.name} | Aspectos Astrológicos`,
    description: aspect.description.substring(0, 160),
  }
}

export async function generateStaticParams() {
  return aspects.map((aspect) => ({
    slug: aspect.slug,
  }))
}

export default function AspectPage({ params }: AspectPageProps) {
  const aspect = aspects.find((a) => a.slug === params.slug)

  if (!aspect) {
    notFound()
  }

  // Encontrar aspectos do mesmo tipo
  const sameTypeAspects = aspects.filter((a) => a.type === aspect.type && a.slug !== aspect.slug)

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/categorias/aspectos" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar aos Aspectos
        </Link>
      </Button>

      <div className="mb-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-4">
            <h1 className="text-3xl font-bold md:text-4xl">{aspect.name}</h1>
            <span className="text-4xl">{aspect.symbol}</span>
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            <div className="rounded-md bg-muted px-3 py-1">
              <span className="font-medium">Ângulo:</span> {aspect.angle}°
            </div>
            <div className="rounded-md bg-muted px-3 py-1">
              <span className="font-medium">Tipo:</span> {aspect.type}
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>{aspect.description}</p>

            <h2>Como interpretar o {aspect.name}</h2>
            <p>
              Quando encontramos um {aspect.name.toLowerCase()} entre planetas em um mapa natal, devemos considerar que
              as energias desses planetas estão interagindo de uma forma
              {aspect.type === "Harmonioso"
                ? " fluida e cooperativa"
                : aspect.type === "Desafiador"
                  ? " tensa e desafiadora"
                  : " neutra, que pode se expressar de diferentes maneiras dependendo dos planetas envolvidos"}
              .
            </p>

            <p>
              Por exemplo, um {aspect.name.toLowerCase()} entre o Sol e Vênus pode indicar
              {aspect.type === "Harmonioso"
                ? " uma expressão natural e harmoniosa entre a identidade e os valores estéticos da pessoa"
                : aspect.type === "Desafiador"
                  ? " uma tensão entre a autoexpressão e os relacionamentos, que pode gerar crescimento através do desafio"
                  : " uma fusão entre a identidade e os valores da pessoa, intensificando ambas as energias"}
              .
            </p>
          </div>
        </div>

        <div>
          <div className="sticky top-24 space-y-6">
            <div className="overflow-hidden rounded-lg">
              <div className="relative aspect-square w-full">
                <Image
                  src={aspect.image || "/placeholder.svg?height=400&width=400&query=astrological aspect"}
                  alt={aspect.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {sameTypeAspects.length > 0 && (
              <div>
                <h3 className="mb-3 text-xl font-semibold">Outros Aspectos {aspect.type}s</h3>
                <div className="space-y-2">
                  {sameTypeAspects.map((relatedAspect) => (
                    <Link
                      key={relatedAspect.slug}
                      href={`/categorias/aspectos/${relatedAspect.slug}`}
                      className="block rounded-md bg-muted p-3 hover:bg-muted/80"
                    >
                      <div className="flex items-center justify-between">
                        <span>{relatedAspect.name}</span>
                        <span>
                          {relatedAspect.symbol} ({relatedAspect.angle}°)
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
