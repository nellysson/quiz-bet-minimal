import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { zodiacSigns } from "@/data/zodiac-signs"

export const metadata: Metadata = {
  title: "Signos do Zodíaco | Portal Astral",
  description: "Conheça os 12 signos do zodíaco, suas características, elementos, modalidades e datas.",
}

export default function SignosPage() {
  // Função para obter a imagem correta para cada signo
  const getSignImage = (slug: string) => {
    // Mapeamento de fallback caso a imagem específica não exista
    const signImageMap: Record<string, string> = {
      aries: "/signs/aries.png",
      touro: "/signs/touro.png",
      gemeos: "/signs/gemeos.png",
      cancer: "/signs/cancer.png",
      leao: "/signs/leao.png",
      virgem: "/signs/virgem.png",
      libra: "/signs/libra.png",
      escorpiao: "/signs/escorpiao.png",
      sagitario: "/signs/sagitario.png",
      capricornio: "/signs/capricornio.png",
      aquario: "/signs/aquario.png",
      peixes: "/signs/peixes.png",
    }

    return signImageMap[slug] || `/placeholder.svg?height=200&width=200&query=zodiac sign ${slug}`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-4xl font-bold">Signos do Zodíaco</h1>

      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="text-lg text-muted-foreground">
          Os 12 signos do zodíaco representam diferentes energias e características que influenciam nossa personalidade
          e comportamento. Cada signo está associado a um elemento (Fogo, Terra, Ar, Água) e uma modalidade (Cardinal,
          Fixo, Mutável).
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {zodiacSigns.map((sign) => (
          <Card key={sign.slug} className="overflow-hidden">
            <CardContent className="p-0">
              <Link href={`/categorias/signos/${sign.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={getSignImage(sign.slug) || "/placeholder.svg"}
                    alt={sign.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{sign.name}</h2>
                    <span className="text-3xl">{sign.symbol}</span>
                  </div>
                  <div className="mb-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-muted px-2 py-1 text-xs">{sign.element}</span>
                    <span className="rounded-full bg-muted px-2 py-1 text-xs">{sign.modality}</span>
                    <span className="rounded-full bg-muted px-2 py-1 text-xs">{sign.dates}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{sign.shortDescription}</p>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
