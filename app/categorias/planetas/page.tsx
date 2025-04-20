import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { planets } from "@/data/planets"

export const metadata: Metadata = {
  title: "Planetas na Astrologia | Portal Astral",
  description: "Conheça os planetas e seus significados na astrologia, suas influências e simbolismos.",
}

export default function PlanetasPage() {
  // Função para obter a cor de destaque com base no planeta
  const getPlanetColor = (slug: string) => {
    switch (slug) {
      case "sol":
        return "from-yellow-500 to-orange-500"
      case "lua":
        return "from-blue-400 to-indigo-500"
      case "mercurio":
        return "from-amber-500 to-yellow-600"
      case "venus":
        return "from-pink-400 to-rose-500"
      case "marte":
        return "from-red-500 to-red-600"
      case "jupiter":
        return "from-orange-400 to-amber-600"
      case "saturno":
        return "from-slate-400 to-slate-600"
      case "urano":
        return "from-cyan-400 to-teal-500"
      case "netuno":
        return "from-indigo-400 to-blue-600"
      case "plutao":
        return "from-purple-400 to-violet-600"
      default:
        return "from-primary to-primary-foreground"
    }
  }

  // Função para obter a cor de borda com base no planeta
  const getPlanetBorderColor = (slug: string) => {
    switch (slug) {
      case "sol":
        return "border-yellow-300"
      case "lua":
        return "border-blue-200"
      case "mercurio":
        return "border-amber-300"
      case "venus":
        return "border-pink-300"
      case "marte":
        return "border-red-300"
      case "jupiter":
        return "border-orange-300"
      case "saturno":
        return "border-slate-300"
      case "urano":
        return "border-cyan-300"
      case "netuno":
        return "border-indigo-300"
      case "plutao":
        return "border-purple-300"
      default:
        return "border-primary-200"
    }
  }

  // Função para obter a cor de texto com base no planeta
  const getPlanetTextColor = (slug: string) => {
    switch (slug) {
      case "sol":
        return "text-yellow-600"
      case "lua":
        return "text-blue-600"
      case "mercurio":
        return "text-amber-600"
      case "venus":
        return "text-pink-600"
      case "marte":
        return "text-red-600"
      case "jupiter":
        return "text-orange-600"
      case "saturno":
        return "text-slate-600"
      case "urano":
        return "text-cyan-600"
      case "netuno":
        return "text-indigo-600"
      case "plutao":
        return "text-purple-600"
      default:
        return "text-primary"
    }
  }

  // Função para obter a cor de fundo com base no planeta
  const getPlanetBgColor = (slug: string) => {
    switch (slug) {
      case "sol":
        return "bg-yellow-50"
      case "lua":
        return "bg-blue-50"
      case "mercurio":
        return "bg-amber-50"
      case "venus":
        return "bg-pink-50"
      case "marte":
        return "bg-red-50"
      case "jupiter":
        return "bg-orange-50"
      case "saturno":
        return "bg-slate-50"
      case "urano":
        return "bg-cyan-50"
      case "netuno":
        return "bg-indigo-50"
      case "plutao":
        return "bg-purple-50"
      default:
        return "bg-primary-50"
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Planetas na Astrologia
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Na astrologia, os planetas são considerados os atores principais do mapa natal, representando diferentes
          facetas da personalidade e áreas da vida.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {planets.map((planet) => (
          <Link key={planet.slug} href={`/categorias/planetas/${planet.slug}`} className="group">
            <div
              className={`relative overflow-hidden rounded-lg border ${getPlanetBorderColor(planet.slug)} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full`}
            >
              {/* Overlay gradiente */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${getPlanetColor(planet.slug)} opacity-10 group-hover:opacity-20 transition-opacity duration-300 z-10`}
              ></div>

              {/* Imagem de fundo */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={planet.image || "/placeholder.svg?height=400&width=400&query=planet"}
                  alt={planet.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay de gradiente na parte inferior para melhorar legibilidade do texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-20"></div>
              </div>

              {/* Símbolo do planeta */}
              <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md z-30">
                <span className={`text-xl ${getPlanetTextColor(planet.slug)}`}>{planet.symbol}</span>
              </div>

              {/* Conteúdo sobreposto na parte inferior */}
              <div className="absolute bottom-0 left-0 right-0 p-3 z-30">
                <h2 className="text-lg font-semibold text-white">{planet.name}</h2>
                <div className="flex items-center justify-between mt-1">
                  <span
                    className={`inline-block rounded-full ${getPlanetBgColor(planet.slug)} px-2 py-0.5 text-xs ${getPlanetTextColor(planet.slug)} font-medium`}
                  >
                    {planet.type}
                  </span>
                  <span className="text-xs text-white/80">{planet.rulesOver[0]}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
