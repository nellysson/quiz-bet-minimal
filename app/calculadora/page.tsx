"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { zodiacSigns } from "@/data/zodiac-signs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CalculadoraPage() {
  const [birthDate, setBirthDate] = useState("")
  const [birthTime, setBirthTime] = useState("")
  const [birthPlace, setBirthPlace] = useState("")
  const [result, setResult] = useState<{
    sunSign?: (typeof zodiacSigns)[0]
    ascendantSign?: (typeof zodiacSigns)[0]
    moonSign?: (typeof zodiacSigns)[0]
  } | null>(null)

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

    return signImageMap[slug] || `/placeholder.svg?height=64&width=64&query=zodiac sign ${slug}`
  }

  const calculateSigns = (e: React.FormEvent) => {
    e.preventDefault()

    if (!birthDate) return

    // Extrair mês e dia da data de nascimento
    const date = new Date(birthDate)
    const month = date.getMonth() + 1 // getMonth() retorna 0-11
    const day = date.getDate()

    // Encontrar o signo solar com base na data
    let sunSign = null
    for (const sign of zodiacSigns) {
      const [startMonth, startDay, endMonth, endDay] = sign.dateRanges

      if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
        sunSign = sign
        break
      }
    }

    // Simulação de cálculo de ascendente e lua
    // Em um sistema real, isso seria calculado com base em algoritmos astronômicos
    const ascendantIndex = (month + day) % 12
    const moonIndex = (month * 2 + day) % 12

    const ascendantSign = zodiacSigns[ascendantIndex]
    const moonSign = zodiacSigns[moonIndex]

    setResult({
      sunSign,
      ascendantSign,
      moonSign,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-4xl font-bold">Calculadora de Signos</h1>

      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="text-lg text-muted-foreground">
          Descubra seu signo solar, ascendente e lunar com nossa calculadora astrológica. Preencha os dados abaixo para
          obter seu resultado.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <form onSubmit={calculateSigns} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="birthDate">Data de Nascimento</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthTime">Horário de Nascimento (opcional)</Label>
                <Input id="birthTime" type="time" value={birthTime} onChange={(e) => setBirthTime(e.target.value)} />
                <p className="text-xs text-muted-foreground">Necessário para calcular o ascendente com precisão.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthPlace">Local de Nascimento (opcional)</Label>
                <Input
                  id="birthPlace"
                  type="text"
                  placeholder="Ex: São Paulo, Brasil"
                  value={birthPlace}
                  onChange={(e) => setBirthPlace(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Ajuda a calcular posições planetárias com maior precisão.
                </p>
              </div>

              <Button type="submit" className="w-full">
                Calcular Meus Signos
              </Button>
            </form>
          </CardContent>
        </Card>

        <div>
          {result ? (
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-semibold">Seus Signos</h2>

                {result.sunSign && (
                  <div className="mb-6">
                    <h3 className="mb-2 text-lg font-medium">Signo Solar: {result.sunSign.name}</h3>
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          src={getSignImage(result.sunSign.slug) || "/placeholder.svg"}
                          alt={result.sunSign.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{result.sunSign.shortDescription}</p>
                        <Link
                          href={`/categorias/signos/${result.sunSign.slug}`}
                          className="mt-1 text-sm font-medium text-primary hover:underline"
                        >
                          Saiba mais
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {result.ascendantSign && birthTime && (
                  <div className="mb-6">
                    <h3 className="mb-2 text-lg font-medium">Ascendente: {result.ascendantSign.name}</h3>
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          src={getSignImage(result.ascendantSign.slug) || "/placeholder.svg"}
                          alt={result.ascendantSign.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          O ascendente representa sua aparência e como os outros te veem.
                        </p>
                        <Link
                          href={`/categorias/signos/${result.ascendantSign.slug}`}
                          className="mt-1 text-sm font-medium text-primary hover:underline"
                        >
                          Saiba mais
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {result.moonSign && (
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Lua: {result.moonSign.name}</h3>
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          src={getSignImage(result.moonSign.slug) || "/placeholder.svg"}
                          alt={result.moonSign.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">A lua representa suas emoções e mundo interior.</p>
                        <Link
                          href={`/categorias/signos/${result.moonSign.slug}`}
                          className="mt-1 text-sm font-medium text-primary hover:underline"
                        >
                          Saiba mais
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {!birthTime && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Para um cálculo mais preciso do ascendente, adicione seu horário de nascimento.
                  </p>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="flex h-full flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
              <div className="mb-4 text-4xl">✨</div>
              <h3 className="mb-2 text-xl font-medium">Descubra Seus Signos</h3>
              <p className="text-muted-foreground">
                Preencha o formulário ao lado para descobrir seu signo solar, ascendente e lunar.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
