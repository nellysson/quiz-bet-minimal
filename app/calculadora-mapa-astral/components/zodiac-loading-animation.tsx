"use client"

import { useState, useEffect } from "react"
import { zodiacSigns } from "@/data/zodiac-signs"

interface ZodiacLoadingAnimationProps {
  isLoading: boolean
}

export default function ZodiacLoadingAnimation({ isLoading }: ZodiacLoadingAnimationProps) {
  const [currentSignIndex, setCurrentSignIndex] = useState(0)
  const [message, setMessage] = useState("Iniciando a leitura dos astros...")

  const loadingMessages = [
    "Iniciando a leitura dos astros...",
    "Consultando as posições planetárias...",
    "Analisando seu signo solar...",
    "Descobrindo seu ascendente...",
    "Interpretando seu signo lunar...",
    "Mapeando as casas astrológicas...",
    "Calculando aspectos planetários...",
    "Decifrando as mensagens cósmicas...",
    "Seu mapa astral está quase pronto...",
    "Finalizando os detalhes da sua carta astral...",
    "Revelando os segredos das estrelas...",
  ]

  useEffect(() => {
    if (!isLoading) return

    // Alternar entre os signos
    const signInterval = setInterval(() => {
      setCurrentSignIndex((prevIndex) => (prevIndex + 1) % zodiacSigns.length)
    }, 1000)

    // Alternar entre as mensagens
    const messageInterval = setInterval(() => {
      setMessage((prevMessage) => {
        const currentIndex = loadingMessages.indexOf(prevMessage)
        const nextIndex = (currentIndex + 1) % loadingMessages.length
        return loadingMessages[nextIndex]
      })
    }, 3000)

    return () => {
      clearInterval(signInterval)
      clearInterval(messageInterval)
    }
  }, [isLoading])

  if (!isLoading) return null

  const currentSign = zodiacSigns[currentSignIndex]

  return (
    <div className="flex flex-col items-center justify-center h-[400px] text-center">
      <div className="relative mb-8">
        <div className="text-8xl animate-pulse-slow">{currentSign.symbol}</div>
        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/10 animate-ping"></div>
      </div>

      <p className="text-xl font-medium mb-2">{message}</p>
      <p className="text-lg text-muted-foreground">{currentSign.name}</p>

      <div className="mt-8 flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
    </div>
  )
}
