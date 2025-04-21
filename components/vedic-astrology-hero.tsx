import Link from "next/link"
import { Button } from "@/components/ui/button"

export function VedicAstrologyHero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/vedic-astrology-hero.png')" }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">Astrologia Védica</h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8 drop-shadow-md">
          Descubra a sabedoria ancestral da Jyotish, o sistema astrológico tradicional da Índia com mais de 5.000 anos
          de história
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild className="bg-amber-500 hover:bg-amber-600 text-white border-0">
            <Link href="#topicos">Explorar Tópicos</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/20">
            <Link href="/calculadora-mapa-astral">Calcular Mapa Védico</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
