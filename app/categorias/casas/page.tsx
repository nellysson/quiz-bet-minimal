import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { houses } from "@/data/houses"

export const metadata: Metadata = {
  title: "Casas Astrológicas | Portal Astral",
  description: "Conheça as 12 casas astrológicas, suas áreas de influência e significados no mapa natal.",
}

export default function CasasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-4xl font-bold">Casas Astrológicas</h1>

      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="text-lg text-muted-foreground">
          As Casas Astrológicas são doze setores ou compartimentos que dividem o mapa natal, cada um representando uma
          área específica da vida. Enquanto os signos descrevem 'como' as energias se manifestam, as casas mostram
          'onde' elas atuam em nossa experiência.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {houses.map((house) => (
          <Card key={house.slug} className="overflow-hidden">
            <CardContent className="p-0">
              <Link href={`/categorias/casas/${house.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={house.image || "/placeholder.svg?height=200&width=200&query=astrological house"}
                    alt={house.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{house.name}</h2>
                    <span className="text-xl font-bold">{house.number}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{house.governs}</p>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
