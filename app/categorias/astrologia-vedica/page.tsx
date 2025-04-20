import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import PortalAstralAd from "@/components/portal-astral-ad"

export const metadata: Metadata = {
  title: "Astrologia Védica | Portal Astral",
  description:
    "Conheça a astrologia védica (Jyotish), suas diferenças da astrologia ocidental e seus principais conceitos.",
}

export default function AstrologiaVedicaPage() {
  // Tópicos relacionados à astrologia védica
  const topics = [
    {
      title: "Introdução à Jyotish",
      description: "Conheça os fundamentos da astrologia védica indiana",
      image: "/vedic-astrology-chart.png",
      slug: "introducao-jyotish",
    },
    {
      title: "Zodíaco Sideral",
      description: "Entenda as diferenças entre o zodíaco sideral e tropical",
      image: "/celestial-zodiac-wheel.png",
      slug: "zodiaco-sideral",
    },
    {
      title: "Nakshatras",
      description: "As 27 mansões lunares da astrologia védica",
      image: "/astrological-moon.png",
      slug: "nakshatras",
    },
    {
      title: "Dashas",
      description: "O sistema de períodos planetários que prevê ciclos de vida",
      image: "/astrological-planets.png",
      slug: "dashas",
    },
    {
      title: "Grahas (Planetas)",
      description: "O papel dos planetas na astrologia védica",
      image: "/astrological-planets-symbols.png",
      slug: "grahas-planetas",
    },
    {
      title: "Remédios Védicos",
      description: "Práticas e rituais para harmonizar energias planetárias",
      image: "/vedic-astrology.png",
      slug: "remedios-vedicos",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Astrologia Védica (Jyotish)</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          A astrologia védica, também conhecida como Jyotish, é o sistema astrológico tradicional da Índia, com raízes
          nos antigos textos védicos. Diferente da astrologia ocidental, utiliza o zodíaco sideral e um sistema
          elaborado de mansões lunares.
        </p>
      </div>

      {/* Banner principal */}
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-12">
        <Image src="/vedic-astrology-chart.png" alt="Astrologia Védica" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="p-8 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A Ciência da Luz dos Vedas</h2>
            <p className="text-white/80">
              Jyotish, que significa "ciência da luz", é considerada uma das disciplinas mais antigas e precisas para
              compreender o destino e o karma.
            </p>
            <Link
              href="/calculadora"
              className="mt-4 inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcular Meu Mapa Védico
            </Link>
          </div>
        </div>
      </div>

      {/* Anúncio após o banner */}
      <PortalAstralAd />

      {/* Tópicos da astrologia védica */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {topics.map((topic) => (
          <Card key={topic.slug} className="overflow-hidden transition-all hover:shadow-lg">
            <Link href={`/categorias/${topic.slug}`}>
              <div className="relative h-48 w-full">
                <Image src={topic.image || "/placeholder.svg"} alt={topic.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                <p className="text-muted-foreground">{topic.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {/* Seção informativa */}
      <div className="bg-muted/30 rounded-xl p-8 my-12">
        <h2 className="text-2xl font-bold mb-4">Diferenças entre Astrologia Védica e Ocidental</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Zodíaco Sideral vs. Tropical</h3>
            <p className="mb-4">
              A principal diferença entre os dois sistemas está no zodíaco utilizado. A astrologia védica usa o zodíaco
              sideral, que se alinha com as constelações físicas. Já a astrologia ocidental usa o zodíaco tropical,
              baseado nas estações do ano. Devido à precessão dos equinócios, há uma diferença de aproximadamente 23°
              entre os dois sistemas.
            </p>
            <h3 className="text-xl font-semibold mb-3">Nakshatras</h3>
            <p>
              A astrologia védica dá grande ênfase às 27 Nakshatras ou mansões lunares, que dividem o zodíaco em
              segmentos de aproximadamente 13°20' cada. Cada Nakshatra tem suas próprias características, deidade
              regente e simbolismo.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Sistema de Dashas</h3>
            <p className="mb-4">
              Um elemento único da astrologia védica é o sistema de Dashas, que são períodos planetários que indicam
              quando diferentes energias planetárias serão dominantes na vida de uma pessoa. O sistema Vimshottari Dasha
              é o mais comum, com um ciclo total de 120 anos.
            </p>
            <h3 className="text-xl font-semibold mb-3">Abordagem Remediativa</h3>
            <p>
              A astrologia védica oferece remédios específicos para harmonizar energias planetárias desafiantes, como
              mantras, pedras preciosas, rituais e práticas espirituais. Esta abordagem remediativa é uma parte integral
              do sistema, diferente da astrologia ocidental que tende a ser mais psicológica e interpretativa.
            </p>
          </div>
        </div>
      </div>

      {/* Anúncio no final da página */}
      <PortalAstralAd />
    </div>
  )
}
