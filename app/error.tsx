"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container flex h-[70vh] flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Algo deu errado!</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Parece que houve um problema ao carregar esta página. Tente novamente ou volte para a página inicial.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>Tentar Novamente</Button>
        <Button variant="outline" asChild>
          <Link href="/">Voltar para a Página Inicial</Link>
        </Button>
      </div>
    </div>
  )
}
