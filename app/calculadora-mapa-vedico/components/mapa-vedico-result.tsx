import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import ExportPDFButton from "./export-pdf-button"
import VedicLoadingAnimation from "./vedic-loading-animation"

interface MapaVedicoResultProps {
  result: string | null
  isLoading: boolean
  error: string | null
  userName?: string
}

export default function MapaVedicoResult({ result, isLoading, error, userName = "" }: MapaVedicoResultProps) {
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
        ) : result ? (
          <div className="space-y-4 overflow-auto max-h-[70vh] pr-2">
            <div
              className="prose prose-sm dark:prose-invert max-w-none mapa-vedico-content"
              dangerouslySetInnerHTML={{ __html: result }}
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
      {result && (
        <CardFooter className="flex justify-end">
          <ExportPDFButton content={result} userName={userName} />
        </CardFooter>
      )}
    </Card>
  )
}
