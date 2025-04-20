"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

interface AdsenseAdProps {
  slot: string
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical"
  style?: React.CSSProperties
  responsive?: boolean
  className?: string
}

export default function AdsenseAd({
  slot,
  format = "auto",
  style = {},
  responsive = true,
  className = "",
}: AdsenseAdProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const adKey = `ad-${slot}-${pathname}`

  useEffect(() => {
    // Tenta carregar o anúncio quando o componente é montado ou a rota muda
    try {
      // @ts-ignore
      if (window.adsbygoogle && adRef.current) {
        // @ts-ignore
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error("Erro ao carregar anúncio:", error)
    }
  }, [pathname]) // Recarrega quando a rota muda

  return (
    <div className={`ad-container ${className}`} key={adKey}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-6503684672960142"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(responsive ? { "data-full-width-responsive": "true" } : {})}
      ></ins>
    </div>
  )
}
