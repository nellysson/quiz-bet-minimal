import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Calculadora de Mapa Astral | Portal Astral",
  description: "Descubra seu mapa astral personalizado com base nas posições dos astros no momento do seu nascimento.",
}

export default function CalculadoraMapaAstralLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">{children}</div>
}
