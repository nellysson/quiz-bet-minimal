"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Loader2, Info, RefreshCw } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

async function checkApiKey() {
  try {
    console.log("Iniciando verificação da chave API")
    const response = await fetch("/api/check-api-key")
    const data = await response.json()
    console.log("Resultado da verificação:", data)
    return data.valid
  } catch (error) {
    console.error("Erro ao verificar chave API:", error)
    return false
  }
}

export default function ApiKeyDiagnostic() {
  const [isChecking, setIsChecking] = useState(false)
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [showFallbackMessage, setShowFallbackMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const runCheck = async () => {
    setIsChecking(true)
    setErrorMessage(null)
    try {
      const valid = await checkApiKey()
      setIsValid(valid)
      setShowFallbackMessage(!valid)
    } catch (error) {
      setIsValid(false)
      setShowFallbackMessage(true)
      setErrorMessage(error instanceof Error ? error.message : "Erro desconhecido ao verificar a API")
    } finally {
      setIsChecking(false)
    }
  }

  useEffect(() => {
    runCheck()
  }, [])

  return (
    <>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Diagnóstico da API
            {isValid === true && <CheckCircle className="h-5 w-5 text-green-500" />}
            {isValid === false && <XCircle className="h-5 w-5 text-red-500" />}
            {isValid === null && <Loader2 className="h-5 w-5 animate-spin" />}
          </CardTitle>
          <CardDescription>Verificação da configuração da API do OpenAI</CardDescription>
        </CardHeader>
        <CardContent>
          {isValid === true && (
            <p className="text-green-500">
              A chave API do OpenAI está configurada corretamente e funcionando! Você pode gerar mapas astrais
              detalhados.
            </p>
          )}
          {isValid === false && (
            <div className="text-red-500">
              <p className="mb-2">A chave API do OpenAI não está configurada corretamente ou não está funcionando.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Verifique se a variável de ambiente OPENAI_API_KEY está definida no projeto Vercel</li>
                <li>Certifique-se de que a chave API é válida e tem saldo disponível</li>
                <li>Verifique se a chave tem permissões para acessar o modelo gpt-3.5-turbo</li>
                <li>Tente reimplantar o projeto para garantir que as variáveis de ambiente sejam carregadas</li>
              </ul>
              {errorMessage && (
                <div className="mt-3 p-2 bg-red-50 rounded border border-red-200">
                  <p className="font-semibold">Mensagem de erro:</p>
                  <p className="text-sm">{errorMessage}</p>
                </div>
              )}
            </div>
          )}
          {isValid === null && <p>Verificando a configuração da API...</p>}
        </CardContent>
        <CardFooter>
          <Button
            onClick={runCheck}
            disabled={isChecking}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            {isChecking ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Verificando...
              </>
            ) : (
              <>
                <RefreshCw className="h-4 w-4" />
                Verificar Novamente
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      {showFallbackMessage && (
        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertTitle>Modo de Fallback Ativado</AlertTitle>
          <AlertDescription>
            <p className="mb-2">
              A calculadora está funcionando em modo de fallback devido à falta de uma chave API válida. Os mapas
              astrais gerados serão simplificados e baseados em cálculos básicos.
            </p>
            <p>
              Para obter mapas astrais mais precisos e detalhados, verifique se a variável de ambiente OPENAI_API_KEY
              está corretamente configurada no seu projeto Vercel e se a chave tem permissões para o modelo
              gpt-3.5-turbo.
            </p>
          </AlertDescription>
        </Alert>
      )}
    </>
  )
}
