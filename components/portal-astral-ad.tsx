"use client"

import { useEffect, useRef } from "react"

export default function PortalAstralAd() {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Função para carregar o anúncio quando o elemento estiver visível e dimensionado
    const loadAd = () => {
      try {
        if (!adRef.current) return

        // Verificar se o elemento tem largura
        const width = adRef.current.offsetWidth
        if (width === 0) {
          // Se não tiver largura, tentar novamente em 100ms
          setTimeout(loadAd, 100)
          return
        }

        // @ts-ignore
        if (window.adsbygoogle) {
          // @ts-ignore
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        }
      } catch (error) {
        console.error("Erro ao carregar anúncio:", error)
      }
    }

    // Usar requestAnimationFrame para garantir que o DOM esteja renderizado
    window.requestAnimationFrame(() => {
      // Pequeno atraso para garantir que o layout esteja estável
      setTimeout(loadAd, 200)
    })

    // Cleanup function
    return () => {
      // Limpar qualquer timeout pendente se o componente for desmontado
    }
  }, [])

  return (
    <div className="my-8 w-full flex flex-col items-center">
      <div className="text-center text-xs text-muted-foreground mb-2">ANÚNCIO</div>
      <div ref={adRef} className="text-center min-w-[300px] w-full max-w-[728px]" style={{ minHeight: "90px" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "100%", minHeight: "90px" }}
          data-ad-client="ca-pub-6503684672960142"
          data-ad-slot="3623547634"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  )
}
