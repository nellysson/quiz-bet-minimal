import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllArticles } from "@/utils/article-utils"

export const metadata = {
  title: "Artigos Astrológicos | Portal Astral",
  description: "Explore nossos artigos sobre astrologia, signos, planetas e muito mais.",
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Artigos Astrológicos</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore nossos artigos sobre astrologia, signos, planetas e muito mais. Aprofunde seu conhecimento sobre o
          cosmos e as influências astrais.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.slug} className="overflow-hidden transition-all hover:shadow-lg">
            <Link href={`/artigos/${article.slug}`}>
              <div className="relative h-48 w-full">
                <Image
                  src={article.featuredImage || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="mb-2 flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {typeof tag === "string" ? tag : tag.name}
                    </Badge>
                  ))}
                </div>
                <h3 className="mb-2 line-clamp-2 text-xl font-bold">{article.title}</h3>
                <p className="line-clamp-3 text-muted-foreground">{article.excerpt}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
