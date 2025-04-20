import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex h-[70vh] flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">404 - Página Não Encontrada</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Ops! A página que você está procurando parece ter se perdido nas estrelas.
      </p>
      <Button asChild>
        <Link href="/">Voltar para a Página Inicial</Link>
      </Button>
    </div>
  )
}
