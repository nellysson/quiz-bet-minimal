import Image from "next/image"
import { Button } from "@/components/ui/button"
import SearchBar from "@/components/search-bar"
import AlphabeticalList from "@/components/alphabetical-list"
import FeaturedCategories from "@/components/featured-categories"
import { glossaryTerms } from "@/data/glossary-terms"
import { zodiacSigns } from "@/data/zodiac-signs"
import { ChevronDown } from "lucide-react"
import RecentArticles from "@/components/recent-articles"
import PortalAstralAd from "@/components/portal-astral-ad"

export default function Home() {
  return (
    <div>
      {/* Hero Section com a nova imagem cósmica */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 z-0">
          <Image src="/cosmic-background.png" alt="Cosmos" fill className="object-cover" priority />
          {/* Overlay gradiente para melhorar a legibilidade do texto */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        {/* Círculo de signos do zodíaco estático */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="zodiac-circle-static">
            {zodiacSigns.map((sign, index) => {
              // Calcular a posição em um círculo
              const angle = (index * 30 * Math.PI) / 180 // 30 graus por signo, convertido para radianos
              const radius = 42 // Raio do círculo em vh
              const top = 50 + radius * Math.sin(angle)
              const left = 50 + radius * Math.cos(angle)

              return (
                <div
                  key={sign.slug}
                  className="zodiac-symbol-static"
                  style={{
                    top: `${top}vh`,
                    left: `${left}vw`,
                    color: "white",
                    fontSize: "2.5rem",
                    opacity: 0.6,
                  }}
                >
                  {sign.symbol}
                </div>
              )
            })}
          </div>
        </div>

        {/* Conteúdo da hero section */}
        <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            {/* Efeito de brilho atrás do título */}
            <div className="relative mb-6 inline-block">
              <div className="absolute -inset-1 blur-xl rounded-full bg-primary/30"></div>
              <h1 className="relative text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                Portal Astral
              </h1>
            </div>

            <p className="mb-8 text-lg text-white/90 md:text-xl lg:text-2xl">
              Descubra os segredos do cosmos, explore os signos do zodíaco e compreenda as influências planetárias que
              moldam nossa jornada pela vida.
            </p>

            <div className="mb-10 w-full max-w-2xl mx-auto">
              <SearchBar />
            </div>

            {/* Localizar a seção de botões na hero section */}

            {/* Substituir a div com os botões existentes por esta versão atualizada com apenas 3 botões: */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href="/categorias/mapa-astral"
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 text-lg px-6 py-6 h-auto shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-105 border-0"
              >
                Criar Meu Mapa Astral
              </Button>
              <Button
                href="/calculadora"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-6 py-6 h-auto shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105"
              >
                Calcular Meu Signo
              </Button>
              <Button
                href="/horoscopo"
                size="lg"
                className="bg-cyan-600 text-white hover:bg-cyan-700 text-lg px-6 py-6 h-auto shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
              >
                Horóscopo de Hoje
              </Button>
            </div>
          </div>

          {/* Seta de rolagem para baixo */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Categorias Principais
            </span>
          </h2>
          <FeaturedCategories />
        </div>
      </section>

      {/* Anúncio antes da seção de Artigos Recentes */}
      <div className="container mx-auto px-4 my-8 w-full">
        <PortalAstralAd />
      </div>

      {/* Seção de Artigos Recentes */}
      <section className="py-16 bg-gradient-to-b from-background/95 via-background to-background/95">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Artigos Recentes
            </span>
          </h2>
          <RecentArticles />
          <div className="mt-8 text-center">
            <Button href="/artigos" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Ver Todos os Artigos
            </Button>
          </div>
        </div>
      </section>

      {/* Anúncio antes da seção de Termos Populares */}
      <div className="container mx-auto px-4 my-8 w-full">
        <PortalAstralAd />
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Termos Populares
            </span>
          </h2>
          <AlphabeticalList terms={glossaryTerms.slice(0, 20)} />
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="rounded-xl bg-gradient-to-r from-purple-900/30 to-primary/20 p-8 backdrop-blur-sm border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">Horóscopo do Dia</h2>
              <p className="text-muted-foreground">Descubra o que os astros reservam para você hoje.</p>
            </div>
            <Button
              href="/horoscopo"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              Ver Horóscopo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
