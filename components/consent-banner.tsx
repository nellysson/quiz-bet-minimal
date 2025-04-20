"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Verificar se o usuário já deu consentimento
    const hasConsent = localStorage.getItem("lgpd-consent")

    // Se não tiver consentimento, mostrar o banner
    if (!hasConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptConsent = () => {
    // Salvar consentimento no localStorage
    localStorage.setItem("lgpd-consent", "true")
    // Fechar o banner
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="pr-8 max-w-3xl">
            <p className="text-sm text-muted-foreground">
              Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços,
              personalizar publicidade e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, você está
              ciente dessa funcionalidade.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={acceptConsent} className="whitespace-nowrap" size="sm">
              Prosseguir
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={acceptConsent}
              className="h-8 w-8 rounded-full"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
