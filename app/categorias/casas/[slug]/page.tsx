import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { houses } from "@/data/houses"

interface HousePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: HousePageProps): Promise<Metadata> {
  const house = houses.find((h) => h.slug === params.slug)

  if (!house) {
    return {
      title: "Casa Astrológica não encontrada | Portal Astral",
      description: "A casa astrológica que você está procurando não foi encontrada.",
    }
  }

  return {
    title: `${house.name} | Casas Astrológicas`,
    description: house.governs,
  }
}

export async function generateStaticParams() {
  return houses.map((house) => ({
    slug: house.slug,
  }))
}

export default function HousePage({ params }: HousePageProps) {
  const house = houses.find((h) => h.slug === params.slug)

  if (!house) {
    notFound()
  }

  // Encontrar casas relacionadas (anterior e próxima)
  const prevHouse = houses.find((h) => h.number === house.number - 1)
  const nextHouse = houses.find((h) => h.number === house.number + 1)

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/categorias/casas" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar às Casas Astrológicas
        </Link>
      </Button>

      <div className="mb-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-4">
            <h1 className="text-3xl font-bold md:text-4xl">{house.name}</h1>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
              {house.number}
            </span>
          </div>

          <div className="mb-6 rounded-md bg-muted px-3 py-1 inline-block">
            <span className="font-medium">Governa:</span> {house.governs}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>{house.description}</p>
          </div>
        </div>

        <div>
          <div className="sticky top-24 space-y-6">
            <div className="overflow-hidden rounded-lg">
              <div className="relative aspect-square w-full">
                <Image
                  src={house.image || "/placeholder.svg?height=400&width=400&query=astrological house"}
                  alt={house.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">Navegação de Casas</h3>
              <div className="space-y-2">
                {prevHouse && (
                  <Link
                    href={`/categorias/casas/${prevHouse.slug}`}
                    className="block rounded-md bg-muted p-3 hover:bg-muted/80"
                  >
                    <div className="flex items-center justify-between">
                      <span>← Casa Anterior: {prevHouse.name}</span>
                      <span className="font-bold">{prevHouse.number}</span>
                    </div>
                  </Link>
                )}

                {nextHouse && (
                  <Link
                    href={`/categorias/casas/${nextHouse.slug}`}
                    className="block rounded-md bg-muted p-3 hover:bg-muted/80"
                  >
                    <div className="flex items-center justify-between">
                      <span>Próxima Casa: {nextHouse.name}</span>
                      <span className="font-bold">{nextHouse.number} →</span>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
