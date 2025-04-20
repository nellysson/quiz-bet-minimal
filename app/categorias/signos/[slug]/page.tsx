import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { zodiacSigns } from "@/data/zodiac-signs"
// Importar o componente de anúncio específico
import PortalAstralAd from "@/components/portal-astral-ad"

interface SignPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: SignPageProps): Promise<Metadata> {
  const sign = zodiacSigns.find((s) => s.slug === params.slug)

  if (!sign) {
    return {
      title: "Signo não encontrado | Portal Astral",
      description: "O signo que você está procurando não foi encontrado.",
    }
  }

  return {
    title: `${sign.name} | Signos do Zodíaco`,
    description: sign.shortDescription,
  }
}

export async function generateStaticParams() {
  return zodiacSigns.map((sign) => ({
    slug: sign.slug,
  }))
}

export default function SignPage({ params }: SignPageProps) {
  const sign = zodiacSigns.find((s) => s.slug === params.slug)

  if (!sign) {
    notFound()
  }

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

    return signImageMap[slug] || `/placeholder.svg?height=400&width=400&query=zodiac sign ${slug}`
  }

  // Encontrar signos do mesmo elemento
  const sameElementSigns = zodiacSigns.filter((s) => s.element === sign.element && s.slug !== sign.slug).slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/categorias/signos" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar aos Signos
        </Link>
      </Button>

      <div className="mb-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-4">
            <h1 className="text-3xl font-bold md:text-4xl">{sign.name}</h1>
            <span className="text-4xl">{sign.symbol}</span>
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            <div className="rounded-md bg-muted px-3 py-1">
              <span className="font-medium">Elemento:</span> {sign.element}
            </div>
            <div className="rounded-md bg-muted px-3 py-1">
              <span className="font-medium">Modalidade:</span> {sign.modality}
            </div>
            <div className="rounded-md bg-muted px-3 py-1">
              <span className="font-medium">Datas:</span> {sign.dates}
            </div>
            <div className="rounded-md bg-muted px-3 py-1">
              <span className="font-medium">Planeta Regente:</span> {sign.rulingPlanet}
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {sign.description.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div>
          <div className="sticky top-24 space-y-6">
            <div className="overflow-hidden rounded-lg">
              <div className="relative aspect-square w-full">
                <Image
                  src={getSignImage(sign.slug) || "/placeholder.svg"}
                  alt={sign.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">Características</h3>
              <ul className="space-y-2">
                {sign.traits.map((trait, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    {trait}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">Outros Signos de {sign.element}</h3>
              <div className="space-y-2">
                {sameElementSigns.map((relatedSign) => (
                  <Link
                    key={relatedSign.slug}
                    href={`/categorias/signos/${relatedSign.slug}`}
                    className="block rounded-md bg-muted p-3 hover:bg-muted/80"
                  >
                    <div className="flex items-center justify-between">
                      <span>{relatedSign.name}</span>
                      <span>{relatedSign.symbol}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anúncio antes da seção de compatibilidade */}
      <PortalAstralAd />

      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Compatibilidade de {sign.name}</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>{sign.compatibility}</p>
        </div>
      </div>

      {/* Anúncio no final da página */}
      <PortalAstralAd />
    </div>
  )
}
