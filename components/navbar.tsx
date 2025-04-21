"use client"

import { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Moon, Search, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import TraditionalLink from "./traditional-link"

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const routes = [
    { href: "/", label: "Início" },
    { href: "/glossario", label: "Glossário" },
    { href: "/categorias/signos", label: "Signos" },
    { href: "/categorias/planetas", label: "Planetas" },
    { href: "/categorias/casas", label: "Casas" },
    { href: "/artigos", label: "Artigos" },
    { href: "/horoscopo", label: "Horóscopo" },
    { href: "/calculadora", label: "Calculadora" },
    { href: "/calculadora-mapa-vedico", label: "Mapa Védico" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <TraditionalLink href="/" className="flex items-center">
              <Image src="/logo.png" alt="Portal Astral" width={200} height={67} className="h-auto" />
            </TraditionalLink>
            <div className="mt-8 flex flex-col space-y-3">
              {routes.map((route) => (
                <TraditionalLink
                  key={route.href}
                  href={route.href}
                  className={`${
                    pathname === route.href ? "text-foreground" : "text-muted-foreground"
                  } text-sm font-medium transition-colors hover:text-foreground`}
                >
                  {route.label}
                </TraditionalLink>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <TraditionalLink href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/logo.png" alt="Portal Astral" width={200} height={67} className="h-auto" />
        </TraditionalLink>
        <nav className="hidden flex-1 md:flex">
          <ul className="flex flex-row space-x-4">
            {routes.map((route) => (
              <li key={route.href}>
                <TraditionalLink
                  href={route.href}
                  className={`${
                    pathname === route.href ? "text-foreground" : "text-muted-foreground"
                  } text-sm font-medium transition-colors hover:text-foreground`}
                >
                  {route.label}
                </TraditionalLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Alternar tema"
            className="mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Alternar tema</span>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Pesquisar" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isSearchOpen && (
        <div className="container py-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Pesquisar termos, signos, planetas..."
              className="w-full rounded-md border border-input bg-background pl-8 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        </div>
      )}
    </header>
  )
}
