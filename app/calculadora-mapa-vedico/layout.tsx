import type React from "react"

export default function CalculadoraMapaVedicoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-200 py-8">{children}</div>
  )
}
