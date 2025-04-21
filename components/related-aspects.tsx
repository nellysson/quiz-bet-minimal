import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { aspects } from "@/data/aspects"

type RelatedAspectsProps = {
  currentSlug: string
}

export function RelatedAspects({ currentSlug }: RelatedAspectsProps) {
  // Get all aspects except the current one
  const relatedAspects = aspects.filter((aspect) => aspect.slug !== currentSlug).slice(0, 3)

  return (
    <div className="mt-12">
      <h2 className="mb-4 text-2xl font-bold">Aspectos Relacionados</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {relatedAspects.map((aspect) => (
          <Card key={aspect.slug} className="overflow-hidden">
            <CardContent className="p-4">
              <Link href={`/categorias/aspectos/${aspect.slug}`}>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{aspect.name}</h3>
                  <span className="text-2xl">{aspect.symbol}</span>
                </div>
                <div className="mb-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-2 py-1 text-xs">{aspect.angle}°</span>
                </div>
                <p className="text-sm text-muted-foreground">{aspect.description.substring(0, 80)}...</p>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
