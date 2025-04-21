"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

interface VideoPaywallProps {
  onComplete: () => void
}

export default function VideoPaywall({ onComplete }: VideoPaywallProps) {
  const [timeRemaining, setTimeRemaining] = useState(30)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const adContainerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Inicializar o anúncio quando o componente montar
  useEffect(() => {
    // Função para carregar o script do IMA SDK
    const loadImaScript = () => {
      const script = document.createElement("script")
      script.src = "//imasdk.googleapis.com/js/sdkloader/ima3.js"
      script.async = true
      script.onload = initializeIMA
      document.head.appendChild(script)
    }

    // Verificar se o script já está carregado
    if (window.google && window.google.ima) {
      initializeIMA()
    } else {
      loadImaScript()
    }

    return () => {
      // Limpar o timer quando o componente desmontar
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  // Inicializar o IMA SDK
  const initializeIMA = () => {
    if (!window.google || !window.google.ima || !videoRef.current || !adContainerRef.current) {
      console.error("IMA SDK não está disponível ou referências não estão prontas")
      return
    }

    try {
      const adDisplayContainer = new window.google.ima.AdDisplayContainer(adContainerRef.current, videoRef.current)
      adDisplayContainer.initialize()

      // Criar o gerenciador de anúncios
      const adsLoader = new window.google.ima.AdsLoader(adDisplayContainer)

      // Configurar os eventos do gerenciador de anúncios
      adsLoader.addEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (event: any) => {
        const adsManager = event.getAdsManager(videoRef.current)

        // Adicionar listeners para eventos do gerenciador de anúncios
        adsManager.addEventListener(window.google.ima.AdEvent.Type.STARTED, () => {
          setIsPlaying(true)
          startTimer()
        })

        adsManager.addEventListener(window.google.ima.AdEvent.Type.COMPLETE, () => {
          setIsPlaying(false)
          if (timeRemaining > 0) {
            // Se o anúncio terminar antes dos 30 segundos, continuar com o vídeo normal
            if (videoRef.current) {
              videoRef.current.play()
            }
          }
        })

        // Iniciar os anúncios
        try {
          adsManager.init(640, 360, window.google.ima.ViewMode.NORMAL)
          adsManager.start()
        } catch (adError) {
          console.error("Erro ao iniciar anúncios:", adError)
          // Em caso de erro, reproduzir o vídeo normal
          if (videoRef.current) {
            videoRef.current.play()
            setIsPlaying(true)
            startTimer()
          }
        }
      })

      // Configurar a solicitação de anúncio
      const adsRequest = new window.google.ima.AdsRequest()
      adsRequest.adTagUrl =
        "https://googleads.g.doubleclick.net/pagead/ads?ad_type=standardvideo_text_image&client=ca-video-pub-6503684672960142&description_url=http%3A%2F%2FV%C3%ADdeo+sobre+assuntos+cotidianos&videoad_start_delay=0&max_ad_duration=30000"
      adsRequest.linearAdSlotWidth = 640
      adsRequest.linearAdSlotHeight = 360
      adsRequest.nonLinearAdSlotWidth = 640
      adsRequest.nonLinearAdSlotHeight = 150

      // Solicitar anúncios
      adsLoader.requestAds(adsRequest)
    } catch (error) {
      console.error("Erro ao inicializar IMA:", error)
      // Em caso de erro, reproduzir o vídeo normal
      if (videoRef.current) {
        videoRef.current.play()
        setIsPlaying(true)
        startTimer()
      }
    }
  }

  // Iniciar o timer de 30 segundos
  const startTimer = () => {
    if (!hasStarted) {
      setHasStarted(true)

      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            if (timerRef.current) {
              clearInterval(timerRef.current)
            }
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
  }

  // Iniciar a reprodução do vídeo manualmente (necessário para alguns navegadores)
  const handleStartVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
      startTimer()
    }
  }

  // Fallback para iniciar o timer se o anúncio não carregar
  const handleVideoPlay = () => {
    if (!isPlaying) {
      setIsPlaying(true)
      startTimer()
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Assista ao vídeo para ver seu mapa astral</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Container para anúncios */}
          <div ref={adContainerRef} className="absolute inset-0 z-10"></div>

          {/* Vídeo principal */}
          <video
            ref={videoRef}
            className="w-full h-auto"
            src="https://media.canva.com/v2/files/uri:ifs%3A%2F%2FV%2F40uPmaCfkyZ-IsFUcFCh56eNDev-fkAUz12th9RLZPg.mp4?csig=AAAAAAAAAAAAAAAAAAAAALPX0JvuJW4SeVxN50ZjcH96oCdhaOleY8WC0DaHWVhz&exp=1745280120&signer=video-rpc&token=AAIAAVYALzQwdVBtYUNma3laLUlzRlVjRkNoNTZlTkRldi1ma0FVejEydGg5UkxaUGcubXA0AAAAAAGWWs00wL34c6CuJVXf9LuL6LB9cdmZVv1PnRYjlWq9B-p_RNC-"
            controls={false}
            playsInline
            onPlay={handleVideoPlay}
            muted={false}
          />

          {/* Botão de iniciar para dispositivos móveis */}
          {!isPlaying && !hasStarted && (
            <Button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              onClick={handleStartVideo}
            >
              Iniciar Vídeo
            </Button>
          )}

          {/* Contador */}
          <div className="mt-4 flex items-center justify-center gap-2 text-lg font-medium">
            <Clock className="h-5 w-5" />
            <span>
              {timeRemaining > 0
                ? `Aguarde ${timeRemaining} segundos para acessar seu mapa astral`
                : "Você já pode acessar seu mapa astral!"}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={onComplete} disabled={timeRemaining > 0} size="lg" className="mt-4">
          {timeRemaining > 0 ? `Aguarde ${timeRemaining}s` : "Ver meu mapa astral"}
        </Button>
      </CardFooter>
    </Card>
  )
}
