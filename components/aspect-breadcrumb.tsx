import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

type AspectBreadcrumbProps = {
  aspectName: string
}

export function AspectBreadcrumb({ aspectName }: AspectBreadcrumbProps) {
  return (
    <nav className="mb-6 flex items-center text-sm text-muted-foreground">
      <Link href="/" className="flex items-center hover:text-primary">
        <Home className="mr-1 h-4 w-4" />
        <span>Início</span>
      </Link>
      <ChevronRight className="mx-2 h-4 w-4" />
      <Link href="/categorias" className="hover:text-primary">
        Categorias
      </Link>
      <ChevronRight className="mx-2 h-4 w-4" />
      <Link href="/categorias/aspectos" className="hover:text-primary">
        Aspectos
      </Link>
      <ChevronRight className="mx-2 h-4 w-4" />
      <span className="font-medium text-foreground">{aspectName}</span>
    </nav>
  )
}
