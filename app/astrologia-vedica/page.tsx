import type { Metadata } from "next"
import { VedicAstrologySitemap } from "@/components/vedic-astrology-sitemap"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Mapa do Site - Astrologia Védica | Astrologia",
  description: "Navegue por todos os tópicos e recursos sobre Astrologia Védica disponíveis em nosso site",
}

export default function VedicAstrologySitemapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/categorias/astrologia-vedica" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar à Astrologia Védica
        </Link>
      </Button>

      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-6">Mapa do Site - Astrologia Védica</h1>
        <p className="text-xl text-muted-foreground">
          Explore todos os recursos e conteúdos sobre Astrologia Védica disponíveis em nosso site. Use este mapa para
          encontrar facilmente os tópicos que mais lhe interessam.
        </p>
      </div>

      <VedicAstrologySitemap />
    </div>
  )
}
