import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import ExportPDFButton from "./export-pdf-button"
import ZodiacLoadingAnimation from "./zodiac-loading-animation"

interface MapaAstralResultProps {
  result: string | null
  isLoading: boolean
  error: string | null
  userName?: string
}

export default function MapaAstralResult({ result, isLoading, error, userName = "" }: MapaAstralResultProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Seu Mapa Astral</CardTitle>
        <CardDescription>
          Interpretação personalizada baseada nas posições dos astros no momento do seu nascimento.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <ZodiacLoadingAnimation isLoading={isLoading} />
        ) : error ? (
          <div className="flex flex-col items-center justify-center h-[400px] text-center text-destructive">
            <AlertCircle className="h-12 w-12 mb-4" />
            <p className="text-lg font-medium">Erro ao gerar o mapa astral</p>
            <p className="text-sm mt-2">{error}</p>
          </div>
        ) : result ? (
          <div className="space-y-4 overflow-auto max-h-[70vh] pr-2">
            <div
              className="prose prose-sm dark:prose-invert max-w-none mapa-astral-content"
              dangerouslySetInnerHTML={{ __html: result }}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[400px] text-center text-muted-foreground">
            <div className="text-6xl mb-4">✨</div>
            <p className="text-lg font-medium">Seu mapa astral aparecerá aqui</p>
            <p className="text-sm">
              Preencha o formulário e clique em "Gerar Meu Mapa Astral" para receber sua interpretação personalizada.
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
