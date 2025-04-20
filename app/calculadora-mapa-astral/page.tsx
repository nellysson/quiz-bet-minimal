"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import MapaAstralResult from "./components/mapa-astral-result"
import { generateMapaAstral } from "./actions/generate-mapa-astral"

const formSchema = z.object({
  nome: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  dataNascimento: z.string().min(1, { message: "Data de nascimento é obrigatória" }),
  horaNascimento: z.string().min(1, { message: "Hora de nascimento é obrigatória" }),
  cidade: z.string().min(2, { message: "Cidade deve ter pelo menos 2 caracteres" }),
  pais: z.string().min(2, { message: "País deve ter pelo menos 2 caracteres" }),
})

export default function CalculadoraMapaAstral() {
  const [result, setResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()
  const [userName, setUserName] = useState("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      dataNascimento: "",
      horaNascimento: "",
      cidade: "",
      pais: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setResult(null)
    setError(null)
    setUserName(values.nome)

    try {
      console.log("Iniciando geração do mapa astral para:", values.nome)
      const mapaAstral = await generateMapaAstral(values)
      console.log("Mapa astral gerado com sucesso")

      // Verificar se o resultado é uma string HTML válida
      if (typeof mapaAstral !== "string" || mapaAstral.trim() === "") {
        console.error("Resultado do mapa astral inválido:", mapaAstral)
        throw new Error("O mapa astral gerado está vazio ou inválido")
      }

      // Verificar se o resultado contém tags HTML básicas
      if (!mapaAstral.includes("<div") && !mapaAstral.includes("<p") && !mapaAstral.includes("<h")) {
        console.warn("O mapa astral não parece conter HTML válido:", mapaAstral.substring(0, 100))
      }

      setResult(mapaAstral)

      toast({
        title: "Mapa astral gerado com sucesso",
        description: "Seu mapa astral personalizado foi criado.",
      })
    } catch (error) {
      console.error("Erro ao gerar mapa astral:", error)

      // Mesmo com erro, não mostraremos mensagem de erro para o usuário
      // Em vez disso, usaremos o resultado de fallback
      try {
        console.log("Tentando gerar mapa astral de fallback")
        const fallbackResult = await generateMapaAstral(values)

        // Verificar o fallback também
        if (typeof fallbackResult !== "string" || fallbackResult.trim() === "") {
          throw new Error("O mapa astral de fallback está vazio ou inválido")
        }

        setResult(fallbackResult)

        toast({
          title: "Mapa astral gerado com sucesso",
          description: "Seu mapa astral personalizado foi criado.",
        })
      } catch (fallbackError) {
        console.error("Erro ao gerar mapa astral de fallback:", fallbackError)
        const errorMessage = "Não foi possível gerar o mapa astral. Por favor, tente novamente mais tarde."
        setError(errorMessage)

        toast({
          title: "Erro ao gerar mapa astral",
          description: errorMessage,
          variant: "destructive",
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Calculadora de Mapa Astral</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Descubra seu mapa astral personalizado com base nas posições dos astros no momento do seu nascimento. Preencha
          o formulário abaixo para receber uma interpretação detalhada.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Seus Dados</CardTitle>
            <CardDescription>
              Preencha com suas informações de nascimento para gerar seu mapa astral personalizado.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dataNascimento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data de Nascimento</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="horaNascimento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hora de Nascimento</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormDescription>
                        A hora de nascimento é essencial para calcular seu ascendente com precisão.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cidade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cidade de Nascimento</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: São Paulo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pais"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>País de Nascimento</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Brasil" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Gerando Mapa Astral...
                    </>
                  ) : (
                    "Gerar Meu Mapa Astral"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <MapaAstralResult result={result} isLoading={isLoading} error={error} userName={userName} />
      </div>
    </div>
  )
}
