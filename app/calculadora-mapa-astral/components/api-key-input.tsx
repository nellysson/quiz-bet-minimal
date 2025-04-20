"use client"

import { useState } from "react"
import type { UseFormReturn } from "react-hook-form"
import { Eye, EyeOff, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ApiKeyInputProps {
  form: UseFormReturn<any>
}

export default function ApiKeyInput({ form }: ApiKeyInputProps) {
  const [showApiKey, setShowApiKey] = useState(false)

  // Verificar se há uma chave API salva no localStorage ao carregar o componente
  useState(() => {
    const savedApiKey = localStorage.getItem("openai_api_key")
    if (savedApiKey) {
      form.setValue("apiKey", savedApiKey)
    }
  })

  // Função para salvar a chave API no localStorage
  const saveApiKey = () => {
    const apiKey = form.getValues("apiKey")
    if (apiKey) {
      localStorage.setItem("openai_api_key", apiKey)
      alert("Chave API salva com sucesso!")
    }
  }

  return (
    <FormField
      control={form.control}
      name="apiKey"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-2">
            Chave API do OpenAI
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-5 w-5 rounded-full p-0">
                    <HelpCircle className="h-4 w-4" />
                    <span className="sr-only">Ajuda</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    Você precisa de uma chave API do OpenAI para usar esta calculadora. Obtenha sua chave em{" "}
                    <a
                      href="https://platform.openai.com/api-keys"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline"
                    >
                      platform.openai.com/api-keys
                    </a>
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </FormLabel>
          <FormControl>
            <div className="relative">
              <Input type={showApiKey ? "text" : "password"} placeholder="sk-..." {...field} className="pr-10" />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">{showApiKey ? "Esconder" : "Mostrar"} chave API</span>
              </Button>
            </div>
          </FormControl>
          <div className="flex justify-between">
            <FormDescription>
              Sua chave API é armazenada apenas no seu navegador e nunca é compartilhada.
            </FormDescription>
            <Button type="button" variant="outline" size="sm" onClick={saveApiKey} className="text-xs">
              Salvar Chave
            </Button>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
