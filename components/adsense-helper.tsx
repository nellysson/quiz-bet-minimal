"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function AdsenseHelper() {
  const pathname = usePathname()
  const initialized = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Função para recarregar anúncios com verificação de largura
    const reloadAds = () => {
      try {
        // Verificar se o DOM está pronto e se os slots de anúncios têm largura
        const adSlots = document.querySelectorAll(".adsbygoogle")
        let allSlotsHaveWidth = true

        adSlots.forEach((slot) => {
          if ((slot as HTMLElement).offsetWidth === 0) {
            allSlotsHaveWidth = false
          }
        })

        if (!allSlotsHaveWidth) {
          // Se algum slot não tiver largura, tentar novamente em 100ms
          if (timeoutRef.current) clearTimeout(timeoutRef.current)
          timeoutRef.current = setTimeout(reloadAds, 100)
          return
        }

        // @ts-ignore
        if (window.adsbygoogle && typeof window.adsbygoogle.push === "function") {
          console.log("Recarregando anúncios do AdSense...")
          // @ts-ignore
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        }
      } catch (error) {
        console.error("Erro ao recarregar anúncios:", error)
      }
    }

    // Inicializar AdSense na primeira carga
    if (!initialized.current) {
      const script = document.createElement("script")
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6503684672960142"
      script.async = true
      script.crossOrigin = "anonymous"
      script.onload = () => {
        console.log("Script do AdSense carregado")
        // Usar requestAnimationFrame para garantir que o DOM esteja renderizado
        window.requestAnimationFrame(() => {
          // Pequeno atraso para garantir que o layout esteja estável
          setTimeout(reloadAds, 500)
        })
        initialized.current = true
      }
      document.head.appendChild(script)
    } else {
      // Recarregar anúncios quando a rota muda, com um pequeno atraso
      window.requestAnimationFrame(() => {
        setTimeout(reloadAds, 500)
      })
    }

    // Também recarregar quando a página terminar de carregar
    const handleLoad = () => {
      window.requestAnimationFrame(() => {
        setTimeout(reloadAds, 500)
      })
    }

    window.addEventListener("load", handleLoad)

    return () => {
      window.removeEventListener("load", handleLoad)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [pathname]) // Executa quando o pathname muda

  return null // Este componente não renderiza nada visualmente
}
