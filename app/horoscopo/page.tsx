"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { zodiacSigns } from "@/data/zodiac-signs"
import { horoscopePredictions } from "@/data/horoscope-predictions"

export default function HoroscopePage() {
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const now = new Date()
    setCurrentDate(
      now.toLocaleDateString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    )
  }, [])

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

  // Função para obter uma previsão aleatória para um signo
  const getRandomPrediction = (signSlug: string) => {
    const predictions = horoscopePredictions[signSlug] || []
    if (predictions.length === 0) return "Previsão não disponível para hoje."

    // Usar o dia da semana como seed para a "aleatoriedade"
    const dayOfWeek = new Date().getDay()
    const index = dayOfWeek % predictions.length
    return predictions[index]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-2 text-center text-4xl font-bold">Horóscopo Diário</h1>
      <p className="mb-8 text-center text-lg text-muted-foreground">{currentDate}</p>

      <Tabs defaultValue="todos" className="mx-auto max-w-4xl">
        <TabsList className="mb-6 flex flex-wrap justify-center">
          <TabsTrigger value="todos">Todos os Signos</TabsTrigger>
          {zodiacSigns.map((sign) => (
            <TabsTrigger key={sign.slug} value={sign.slug}>
              {sign.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="todos">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {zodiacSigns.map((sign) => (
              <Card key={sign.slug}>
                <CardContent className="p-4">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={getSignImage(sign.slug) || "/placeholder.svg"}
                        alt={sign.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{sign.name}</h2>
                      <p className="text-sm text-muted-foreground">{sign.dates}</p>
                    </div>
                  </div>
                  <p className="mb-3 text-sm">{getRandomPrediction(sign.slug)}</p>
                  <Link
                    href={`/categorias/signos/${sign.slug}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Saiba mais sobre {sign.name}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {zodiacSigns.map((sign) => (
          <TabsContent key={sign.slug} value={sign.slug}>
            <Card>
              <CardContent className="p-6">
                <div className="mb-6 grid gap-6 md:grid-cols-3">
                  <div className="relative aspect-square overflow-hidden rounded-lg md:h-auto">
                    <Image
                      src={getSignImage(sign.slug) || "/placeholder.svg"}
                      alt={sign.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h2 className="mb-2 text-3xl font-bold">{sign.name}</h2>
                    <p className="mb-4 text-muted-foreground">{sign.dates}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-muted px-3 py-1 text-sm">{sign.element}</span>
                      <span className="rounded-full bg-muted px-3 py-1 text-sm">{sign.modality}</span>
                      <span className="rounded-full bg-muted px-3 py-1 text-sm">Regente: {sign.rulingPlanet}</span>
                    </div>
                    <p className="mb-2 text-lg font-medium">Horóscopo de Hoje:</p>
                    <p className="text-lg">{getRandomPrediction(sign.slug)}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="mb-3 text-xl font-semibold">Características de {sign.name}</h3>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {sign.traits.map((trait, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        {trait}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Link href={`/categorias/signos/${sign.slug}`} className="font-medium text-primary hover:underline">
                    Saiba mais sobre {sign.name}
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
