import type { Metadata } from "next"
import SearchBar from "@/components/search-bar"
import AlphabeticalList from "@/components/alphabetical-list"
import { glossaryTerms } from "@/data/glossary-terms"

export const metadata: Metadata = {
  title: "Glossário Completo de Astrologia | Astro Glossário",
  description:
    "Explore nosso glossário completo de astrologia com mais de 50 termos importantes, definições claras e explicações detalhadas.",
}

export default function GlossarioPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q?.toLowerCase()

  let filteredTerms = glossaryTerms

  if (query) {
    filteredTerms = glossaryTerms.filter(
      (term) =>
        term.term.toLowerCase().includes(query) ||
        term.shortDefinition.toLowerCase().includes(query) ||
        term.description.toLowerCase().includes(query),
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-4xl font-bold">Glossário de Astrologia</h1>

      <div className="mx-auto mb-8 max-w-2xl">
        <SearchBar />
      </div>

      {query && (
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            {filteredTerms.length > 0
              ? `Resultados para "${query}" (${filteredTerms.length})`
              : `Nenhum resultado encontrado para "${query}"`}
          </h2>
        </div>
      )}

      <AlphabeticalList terms={filteredTerms} showLetters={!query} />
    </div>
  )
}
