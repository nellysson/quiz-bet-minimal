"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { glossaryTerms } from "@/data/glossary-terms"
import ForceReloadLink from "./force-reload-link"

export default function SearchBar() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<Array<{ term: string; slug: string }>>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)

    if (value.length > 2) {
      setIsSearching(true)
      const filteredResults = glossaryTerms
        .filter((item) => item.term.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5)
        .map((item) => ({ term: item.term, slug: item.slug }))

      setSearchResults(filteredResults)
    } else {
      setIsSearching(false)
      setSearchResults([])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      // Usar window.location para forçar recarregamento completo
      window.location.href = `/glossario?q=${encodeURIComponent(searchTerm)}`
      setSearchTerm("")
      setSearchResults([])
      setIsSearching(false)
    }
  }

  return (
    <div className="relative w-full">
      <form onSubmit={handleSubmit} className="relative">
        <Input
          type="search"
          placeholder="Buscar termos de astrologia..."
          className="w-full pl-10 bg-white/10 text-white border-white/30 placeholder:text-white/70 focus-visible:ring-primary h-14 text-lg rounded-full backdrop-blur-sm"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70" />
        <Button
          type="submit"
          variant="ghost"
          size="sm"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-12 rounded-full bg-primary/80 hover:bg-primary text-white px-6"
        >
          Buscar
        </Button>
      </form>

      {isSearching && searchResults.length > 0 && (
        <div className="absolute z-10 mt-2 w-full rounded-xl border border-white/20 bg-black/80 p-3 shadow-lg backdrop-blur-md">
          <ul className="space-y-1">
            {searchResults.map((result) => (
              <li key={result.slug}>
                <ForceReloadLink
                  href={`/glossario/${result.slug}`}
                  className="block w-full rounded-lg px-4 py-3 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {result.term}
                </ForceReloadLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
