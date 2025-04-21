"use client"

import { useEffect, useState } from "react"

const vedicLoadingMessages = [
  "Consultando as estrelas no zodíaco sideral...",
  "Analisando a posição da Lua nas Nakshatras...",
  "Calculando seu Lagna (Ascendente Védico)...",
  "Interpretando a influência de Rahu e Ketu...",
  "Mapeando as Bhavas (casas) em seu mapa...",
  "Avaliando os doshas planetários...",
  "Consultando os textos védicos antigos...",
  "Analisando os ciclos de Dashas em sua vida...",
  "Interpretando as conjunções planetárias...",
  "Calculando a força dos Grahas (planetas)...",
  "Determinando seu Atmakaraka (significador da alma)...",
  "Avaliando os aspectos planetários védicos...",
  "Consultando os sábios astrológicos...",
  "Analisando seu Arudha Lagna...",
  "Calculando as divisões harmônicas (Vargas)...",
]

export default function VedicLoadingAnimation() {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % vedicLoadingMessages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-[400px] text-center p-6">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-amber-500 rounded-full animate-spin border-t-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-3xl">🕉️</div>
        </div>
      </div>
      <p className="text-xl font-medium mb-4">Gerando seu mapa védico</p>
      <div className="h-16 flex items-center justify-center">
        <p className="text-sm text-amber-700 animate-pulse transition-opacity duration-500">
          {vedicLoadingMessages[messageIndex]}
        </p>
      </div>
      <p className="text-xs mt-6 text-gray-500 max-w-md">
        A astrologia védica (Jyotish) é uma ciência antiga com mais de 5.000 anos de tradição. Estamos analisando
        cuidadosamente seu mapa para fornecer insights profundos.
      </p>
    </div>
  )
}
