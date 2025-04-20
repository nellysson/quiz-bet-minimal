import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { aspects } from "@/data/aspects"

export const metadata: Metadata = {
  title: "Aspectos Astrológicos | Portal Astral",
  description: "Conheça os principais aspectos astrológicos, seus significados e influências no mapa natal.",
}

export default function AspectosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-4xl font-bold">Aspectos Astrológicos</h1>

      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="text-lg text-muted-foreground">
          Os Aspectos Astrológicos são ângulos específicos formados entre planetas no mapa natal, que indicam como as
          energias planetárias interagem entre si. Eles são fundamentais para a interpretação astrológica, pois mostram
          áreas de harmonia, tensão ou potencial em nossa personalidade e vida.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {aspects.map((aspect) => (
          <Card key={aspect.slug} className="overflow-hidden">
            <CardContent className="p-0">
              <Link href={`/categorias/aspectos/${aspect.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={aspect.image || "/placeholder.svg?height=200&width=200&query=astrological aspect"}
                    alt={aspect.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{aspect.name}</h2>
                    <span className="text-3xl">{aspect.symbol}</span>
                  </div>
                  <div className="mb-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-muted px-2 py-1 text-xs">{aspect.angle}°</span>
                    <span className="rounded-full bg-muted px-2 py-1 text-xs">{aspect.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{aspect.description.substring(0, 100)}...</p>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
