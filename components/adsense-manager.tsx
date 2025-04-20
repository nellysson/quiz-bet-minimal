"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function AdsenseManager() {
  const pathname = usePathname()
  const adsLoaded = useRef(false)

  useEffect(() => {
    // Inicializa os anúncios na primeira carga
    if (!adsLoaded.current) {
      try {
        // @ts-ignore
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        adsLoaded.current = true
      } catch (error) {
        console.error("Erro ao inicializar AdSense:", error)
      }
    } else {
      // Recarrega os anúncios quando a rota muda
      try {
        // @ts-ignore
        if (window.adsbygoogle && typeof window.adsbygoogle.push === "function") {
          // @ts-ignore
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        }
      } catch (error) {
        console.error("Erro ao recarregar AdSense:", error)
      }
    }
  }, [pathname]) // Executa quando o pathname muda

  return null // Este componente não renderiza nada visualmente
}
