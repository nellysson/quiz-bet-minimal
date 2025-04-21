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
import MapaVedicoResult from "./components/mapa-vedico-result"
import { generateMapaVedico } from "./actions/generate-mapa-vedico"

const formSchema = z.object({
  nome: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  dataNascimento: z.string().min(1, { message: "Data de nascimento é obrigatória" }),
  horaNascimento: z.string().min(1, { message: "Hora de nascimento é obrigatória" }),
  cidade: z.string().min(2, { message: "Cidade deve ter pelo menos 2 caracteres" }),
  pais: z.string().min(2, { message: "País deve ter pelo menos 2 caracteres" }),
})

export default function CalculadoraMapaVedico() {
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
      console.log("Iniciando geração do mapa védico para:", values.nome)
      const mapaVedico = await generateMapaVedico(values)
      console.log("Mapa védico gerado com sucesso")

      // Verificar se o resultado é uma string HTML válida
      if (typeof mapaVedico !== "string" || mapaVedico.trim() === "") {
        console.error("Resultado do mapa védico inválido:", mapaVedico)
        throw new Error("O mapa védico gerado está vazio ou inválido")
      }

      // Verificar se o resultado contém tags HTML básicas
      if (!mapaVedico.includes("<div") && !mapaVedico.includes("<p") && !mapaVedico.includes("<h")) {
        console.warn("O mapa védico não parece conter HTML válido:", mapaVedico.substring(0, 100))
      }

      setResult(mapaVedico)

      toast({
        title: "Mapa védico gerado com sucesso",
        description: "Seu mapa védico personalizado foi criado.",
      })
    } catch (error) {
      console.error("Erro ao gerar mapa védico:", error)
      setError("Não foi possível gerar o mapa védico. Por favor, tente novamente mais tarde.")

      toast({
        title: "Erro ao gerar mapa védico",
        description: "Ocorreu um erro ao gerar seu mapa védico. Por favor, tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Calculadora de Mapa Védico</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Descubra seu mapa védico personalizado com base nas posições dos astros no momento do seu nascimento. A
          astrologia védica (Jyotish) utiliza o zodíaco sideral e dá ênfase às nakshatras (constelações lunares).
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Seus Dados</CardTitle>
            <CardDescription>
              Preencha com suas informações de nascimento para gerar seu mapa védico personalizado.
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
                        A hora de nascimento é essencial para calcular seu Lagna (ascendente védico) com precisão.
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
                      Gerando Mapa Védico...
                    </>
                  ) : (
                    "Gerar Meu Mapa Védico"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <MapaVedicoResult result={result} isLoading={isLoading} error={error} userName={userName} />
      </div>
    </div>
  )
}
