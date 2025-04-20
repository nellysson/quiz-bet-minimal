import { Card, CardContent } from "@/components/ui/card"
import type { GlossaryTerm } from "@/types/glossary"
import ForceReloadLink from "@/components/force-reload-link"

interface AlphabeticalListProps {
  terms: GlossaryTerm[]
  showLetters?: boolean
}

export default function AlphabeticalList({ terms, showLetters = false }: AlphabeticalListProps) {
  // Organizar termos por letra inicial
  const groupedTerms: Record<string, GlossaryTerm[]> = {}

  terms.forEach((term) => {
    const firstLetter = term.term.charAt(0).toUpperCase()
    if (!groupedTerms[firstLetter]) {
      groupedTerms[firstLetter] = []
    }
    groupedTerms[firstLetter].push(term)
  })

  // Ordenar as letras
  const sortedLetters = Object.keys(groupedTerms).sort()

  return (
    <div className="space-y-8">
      {showLetters && (
        <div className="flex flex-wrap justify-center gap-2">
          {sortedLetters.map((letter) => (
            <ForceReloadLink
              key={letter}
              href={`#letter-${letter}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-md"
            >
              {letter}
            </ForceReloadLink>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {terms.map((term) => (
          <Card
            key={term.slug}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-white/10 bg-black/5 backdrop-blur-sm"
          >
            <CardContent className="p-0">
              <ForceReloadLink
                href={`/glossario/${term.slug}`}
                className="block p-4 hover:bg-white/5 transition-colors"
              >
                <h3 className="font-medium text-lg">{term.term}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{term.shortDefinition}</p>
              </ForceReloadLink>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
