"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function ConsentBannerAdvanced() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Sempre ativo
    analytics: true,
    marketing: true,
    personalization: true,
  })

  useEffect(() => {
    // Verificar se o usuário já deu consentimento
    const hasConsent = localStorage.getItem("lgpd-consent")

    // Se não tiver consentimento, mostrar o banner
    if (!hasConsent) {
      setShowBanner(true)
    } else {
      // Carregar preferências salvas
      try {
        const savedPreferences = JSON.parse(localStorage.getItem("lgpd-preferences") || "{}")
        if (savedPreferences) {
          setPreferences((prev) => ({ ...prev, ...savedPreferences }))
        }
      } catch (error) {
        console.error("Erro ao carregar preferências:", error)
      }
    }
  }, [])

  const acceptAllConsent = () => {
    // Salvar consentimento total no localStorage
    localStorage.setItem("lgpd-consent", "true")
    localStorage.setItem(
      "lgpd-preferences",
      JSON.stringify({
        necessary: true,
        analytics: true,
        marketing: true,
        personalization: true,
      }),
    )
    // Fechar o banner
    setShowBanner(false)
  }

  const savePreferences = () => {
    // Salvar preferências personalizadas
    localStorage.setItem("lgpd-consent", "true")
    localStorage.setItem("lgpd-preferences", JSON.stringify(preferences))
    // Fechar o diálogo e o banner
    setShowDialog(false)
    setShowBanner(false)
  }

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!showBanner) return null

  return (
    <>
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
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowDialog(true)} className="whitespace-nowrap">
                Configurar
              </Button>
              <Button onClick={acceptAllConsent} className="whitespace-nowrap" size="sm">
                Prosseguir
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={acceptAllConsent}
                className="h-8 w-8 rounded-full"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Configurações de Privacidade</DialogTitle>
            <DialogDescription>Personalize suas preferências de cookies e tecnologias semelhantes.</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="flex items-start space-x-4">
              <Checkbox
                id="necessary"
                checked={preferences.necessary}
                disabled={true} // Sempre ativo
              />
              <div className="space-y-1 leading-none">
                <label
                  htmlFor="necessary"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Cookies Necessários
                </label>
                <p className="text-sm text-muted-foreground">
                  Essenciais para o funcionamento do site. Não podem ser desativados.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Checkbox
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={() => handlePreferenceChange("analytics")}
              />
              <div className="space-y-1 leading-none">
                <label
                  htmlFor="analytics"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Cookies Analíticos
                </label>
                <p className="text-sm text-muted-foreground">
                  Nos ajudam a entender como você usa o site, melhorando a experiência.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Checkbox
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={() => handlePreferenceChange("marketing")}
              />
              <div className="space-y-1 leading-none">
                <label
                  htmlFor="marketing"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Cookies de Marketing
                </label>
                <p className="text-sm text-muted-foreground">
                  Usados para exibir anúncios relevantes com base em seus interesses.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Checkbox
                id="personalization"
                checked={preferences.personalization}
                onCheckedChange={() => handlePreferenceChange("personalization")}
              />
              <div className="space-y-1 leading-none">
                <label
                  htmlFor="personalization"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Cookies de Personalização
                </label>
                <p className="text-sm text-muted-foreground">
                  Permitem que o site lembre de suas preferências e forneça recursos personalizados.
                </p>
              </div>
            </div>
          </div>

          <DialogFooter className="flex justify-between sm:justify-between">
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Cancelar
            </Button>
            <Button onClick={savePreferences}>Salvar Preferências</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
