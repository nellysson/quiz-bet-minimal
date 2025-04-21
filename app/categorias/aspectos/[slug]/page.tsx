import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { aspects } from "@/data/aspects"
import { AspectDetailContent } from "@/components/aspect-detail-content"
import { AspectBreadcrumb } from "@/components/aspect-breadcrumb"
import { RelatedAspects } from "@/components/related-aspects"

type AspectPageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: AspectPageProps): Promise<Metadata> {
  const aspect = aspects.find((a) => a.slug === params.slug)

  if (!aspect) {
    return {
      title: "Aspecto não encontrado | Portal Astral",
    }
  }

  return {
    title: `${aspect.name} (${aspect.symbol}) | Aspectos Astrológicos | Portal Astral`,
    description: aspect.description.substring(0, 160),
  }
}

export default function AspectPage({ params }: AspectPageProps) {
  const aspect = aspects.find((a) => a.slug === params.slug)

  if (!aspect) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <AspectBreadcrumb aspectName={aspect.name} />

      <Link
        href="/categorias/aspectos"
        className="mb-6 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Voltar para Aspectos
      </Link>

      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">{aspect.name}</h1>
          <span className="text-5xl">{aspect.symbol}</span>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          <div className="rounded-md bg-muted px-3 py-1 text-sm">
            Ângulo: <span className="font-semibold">{aspect.angle}°</span>
          </div>
          <div className="rounded-md bg-muted px-3 py-1 text-sm">
            Tipo: <span className="font-semibold">{aspect.type}</span>
          </div>
          <div className="rounded-md bg-muted px-3 py-1 text-sm">
            Orbe: <span className="font-semibold">{aspect.orb || "8°"}</span>
          </div>
        </div>

        <AspectDetailContent aspect={aspect} />

        <RelatedAspects currentSlug={params.slug} />
      </div>
    </div>
  )
}
