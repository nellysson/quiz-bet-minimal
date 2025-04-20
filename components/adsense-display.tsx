"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface AdsenseDisplayProps {
  slot: string
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical"
  style?: React.CSSProperties
  className?: string
}

export default function AdsenseDisplay({
  slot,
  format = "auto",
  style = { display: "block" },
  className = "",
}: AdsenseDisplayProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      // @ts-ignore
      if (window.adsbygoogle && adRef.current) {
        // @ts-ignore
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error("Erro ao carregar anúncio:", error)
    }
  }, [])

  return (
    <div className={`ad-container ${className}`} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-6503684672960142"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}
