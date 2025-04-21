"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import ExportPDFButton from "./export-pdf-button"
import VedicLoadingAnimation from "./vedic-loading-animation"
import { useEffect, useState } from "react"

interface MapaVedicoResultProps {
  result: string | null
  isLoading: boolean
  error: string | null
  userName?: string
}

export default function MapaVedicoResult({ result, isLoading, error, userName = "" }: MapaVedicoResultProps) {
  const [processedResult, setProcessedResult] = useState<string | null>(null)

  useEffect(() => {
    if (result) {
      // Processar o resultado para remover marcações de código
      let processed = result

      // Remover marcações de código Markdown
      processed = processed.replace(/^```html\s*/i, "").replace(/```\s*$/i, "")

      // Verificar se ainda há marcações de código e removê-las
      if (processed.startsWith("```")) {
        const endIndex = processed.indexOf("```", 3)
        if (endIndex !== -1) {
          processed = processed.substring(endIndex + 3)
        } else {
          processed = processed.substring(3)
        }
      }

      // Remover qualquer marcação de código no final
      processed = processed.replace(/```\s*$/g, "")

      setProcessedResult(processed)
    } else {
      setProcessedResult(null)
    }
  }, [result])

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Seu Mapa Védico</CardTitle>
        <CardDescription>
          Interpretação personalizada baseada na astrologia Jyotish e nas posições dos astros no momento do seu
          nascimento.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <VedicLoadingAnimation />
        ) : error ? (
          <div className="flex flex-col items-center justify-center h-[400px] text-center text-destructive">
            <AlertCircle className="h-12 w-12 mb-4" />
            <p className="text-lg font-medium">Erro ao gerar o mapa védico</p>
            <p className="text-sm mt-2">{error}</p>
          </div>
        ) : processedResult ? (
          <div className="space-y-4 overflow-auto max-h-[70vh] pr-2">
            <div
              className="prose prose-sm dark:prose-invert max-w-none mapa-vedico-content"
              dangerouslySetInnerHTML={{ __html: processedResult }}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[400px] text-center text-muted-foreground">
            <div className="text-6xl mb-4">🕉️</div>
            <p className="text-lg font-medium">Seu mapa védico aparecerá aqui</p>
            <p className="text-sm">
              Preencha o formulário e clique em "Gerar Meu Mapa Védico" para receber sua interpretação personalizada.
            </p>
          </div>
        )}
      </CardContent>
      {processedResult && (
        <CardFooter className="flex justify-end">
          <ExportPDFButton content={processedResult} userName={userName} />
        </CardFooter>
      )}
    </Card>
  )
}
