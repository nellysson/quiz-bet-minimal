"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Play } from "lucide-react"

interface VideoPaywallProps {
  onComplete: () => void
}

export default function VideoPaywall({ onComplete }: VideoPaywallProps) {
  const [timeRemaining, setTimeRemaining] = useState(30)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [imaLoaded, setImaLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const adContainerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const adsLoaderRef = useRef<any>(null)

  // Função para calcular as dimensões do player com base no tamanho do container
  const getPlayerDimensions = () => {
    if (!containerRef.current) return { width: 640, height: 360 }

    const containerWidth = containerRef.current.clientWidth
    // Manter proporção 16:9
    const height = Math.floor((containerWidth * 9) / 16)

    return { width: containerWidth, height }
  }

  // Carregar o script do IMA SDK quando o componente montar
  useEffect(() => {
    // Função para carregar o script do IMA SDK
    const loadImaScript = () => {
      if (document.querySelector('script[src*="ima3.js"]')) {
        setImaLoaded(true)
        return
      }

      const script = document.createElement("script")
      script.src = "//imasdk.googleapis.com/js/sdkloader/ima3.js"
      script.async = true
      script.onload = () => setImaLoaded(true)
      document.head.appendChild(script)
    }

    // Verificar se o script já está carregado
    if (window.google && window.google.ima) {
      setImaLoaded(true)
    } else {
      loadImaScript()
    }

    return () => {
      // Limpar o timer quando o componente desmontar
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }

      // Limpar o adsLoader se existir
      if (adsLoaderRef.current) {
        adsLoaderRef.current.destroy()
      }
    }
  }, [])

  // Inicializar o IMA SDK e começar a reprodução
  const initializeIMA = () => {
    if (!window.google || !window.google.ima || !videoRef.current || !adContainerRef.current) {
      console.error("IMA SDK não está disponível ou referências não estão prontas")
      // Fallback: reproduzir o vídeo normal
      if (videoRef.current) {
        videoRef.current.play()
        setIsPlaying(true)
        startTimer()
      }
      return
    }

    try {
      // Limpar o conteúdo anterior
      while (adContainerRef.current.firstChild) {
        adContainerRef.current.removeChild(adContainerRef.current.firstChild)
      }

      const dimensions = getPlayerDimensions()

      const adDisplayContainer = new window.google.ima.AdDisplayContainer(adContainerRef.current, videoRef.current)
      adDisplayContainer.initialize()

      // Criar o gerenciador de anúncios
      const adsLoader = new window.google.ima.AdsLoader(adDisplayContainer)
      adsLoaderRef.current = adsLoader

      // Configurar os eventos do gerenciador de anúncios
      adsLoader.addEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (event: any) => {
        const adsManager = event.getAdsManager(videoRef.current)

        // Adicionar listeners para eventos do gerenciador de anúncios
        adsManager.addEventListener(window.google.ima.AdEvent.Type.STARTED, () => {
          setIsPlaying(true)
          startTimer()
        })

        adsManager.addEventListener(window.google.ima.AdEvent.Type.COMPLETE, () => {
          if (timeRemaining > 0) {
            // Se o anúncio terminar antes dos 30 segundos, continuar com o vídeo normal
            if (videoRef.current) {
              videoRef.current.play()
            }
          }
        })

        adsManager.addEventListener(window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED, () => {
          // Quando todos os anúncios terminarem, reproduzir o vídeo normal
          if (videoRef.current && timeRemaining > 0) {
            videoRef.current.play()
          }
        })

        adsManager.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, () => {
          // Em caso de erro, reproduzir o vídeo normal
          if (videoRef.current) {
            videoRef.current.play()
            startTimer()
          }
        })

        // Iniciar os anúncios
        try {
          adsManager.init(dimensions.width, dimensions.height, window.google.ima.ViewMode.NORMAL)
          adsManager.start()
        } catch (adError) {
          console.error("Erro ao iniciar anúncios:", adError)
          // Em caso de erro, reproduzir o vídeo normal
          if (videoRef.current) {
            videoRef.current.play()
            startTimer()
          }
        }
      })

      // Configurar a solicitação de anúncio
      const adsRequest = new window.google.ima.AdsRequest()
      adsRequest.adTagUrl =
        "https://googleads.g.doubleclick.net/pagead/ads?ad_type=standardvideo&client=ca-video-pub-6503684672960142&description_url=http%3A%2F%2FV%C3%ADdeo+sobre+assuntos+cotidianos&videoad_start_delay=0&max_ad_duration=30000"

      // Definir as dimensões com base no tamanho atual do container
      adsRequest.linearAdSlotWidth = dimensions.width
      adsRequest.linearAdSlotHeight = dimensions.height
      adsRequest.nonLinearAdSlotWidth = dimensions.width
      adsRequest.nonLinearAdSlotHeight = Math.floor(dimensions.height / 3)

      // Solicitar anúncios
      adsLoader.requestAds(adsRequest)
    } catch (error) {
      console.error("Erro ao inicializar IMA:", error)
      // Em caso de erro, reproduzir o vídeo normal
      if (videoRef.current) {
        videoRef.current.play()
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

  // Iniciar a reprodução do vídeo manualmente quando o usuário clicar no botão de play
  const handleStartVideo = () => {
    setIsPlaying(true)

    // Inicializar o IMA SDK e começar a reprodução
    if (imaLoaded) {
      initializeIMA()
    } else {
      // Se o IMA SDK não estiver carregado, reproduzir o vídeo normal
      if (videoRef.current) {
        videoRef.current.play()
        startTimer()
      }
    }
  }

  // Fallback para o caso do vídeo começar a reproduzir sem o IMA
  const handleVideoPlay = () => {
    if (!hasStarted) {
      startTimer()
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl md:text-2xl">Assista ao vídeo para ver seu mapa astral</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center px-2 sm:px-4 md:px-6">
        <div ref={containerRef} className="relative w-full max-w-3xl mx-auto">
          {/* Container para anúncios */}
          <div ref={adContainerRef} className="absolute inset-0 z-10"></div>

          {/* Vídeo principal */}
          <video
            ref={videoRef}
            className="w-full h-auto aspect-video bg-black"
            src="https://media.canva.com/v2/files/uri:ifs%3A%2F%2FV%2F40uPmaCfkyZ-IsFUcFCh56eNDev-fkAUz12th9RLZPg.mp4?csig=AAAAAAAAAAAAAAAAAAAAALPX0JvuJW4SeVxN50ZjcH96oCdhaOleY8WC0DaHWVhz&exp=1745280120&signer=video-rpc&token=AAIAAVYALzQwdVBtYUNma3laLUlzRlVjRkNoNTZlTkRldi1ma0FVejEydGg5UkxaUGcubXA0AAAAAAGWWs00wL34c6CuJVXf9LuL6LB9cdmZVv1PnRYjlWq9B-p_RNC-"
            controls={false}
            playsInline
            onPlay={handleVideoPlay}
            muted={false}
            poster="/cosmic-dust.png"
          />

          {/* Botão de play sempre visível até que o vídeo comece */}
          {!isPlaying && (
            <Button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 rounded-full w-16 h-16 flex items-center justify-center"
              onClick={handleStartVideo}
              variant="outline"
              size="icon"
            >
              <Play className="h-8 w-8" />
            </Button>
          )}
        </div>

        {/* Contador - só exibido após o início da reprodução */}
        {hasStarted && (
          <div className="mt-6 flex items-center justify-center gap-2 text-base md:text-lg font-medium">
            <Clock className="h-5 w-5" />
            <span>
              {timeRemaining > 0
                ? `Aguarde ${timeRemaining} segundos para acessar seu mapa astral`
                : "Você já pode acessar seu mapa astral!"}
            </span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center px-4 pb-6">
        <Button onClick={onComplete} disabled={timeRemaining > 0} size="lg" className="mt-2 w-full sm:w-auto">
          {timeRemaining > 0 ? `Aguarde ${timeRemaining}s` : "Ver meu mapa astral"}
        </Button>
      </CardFooter>
    </Card>
  )
}
