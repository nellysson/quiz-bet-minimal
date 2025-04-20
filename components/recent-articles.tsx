import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getRecentArticles } from "@/utils/article-utils"
import ForceReloadLink from "@/components/force-reload-link"

export default function RecentArticles() {
  // Pegar os artigos mais recentes
  const recentArticles = getRecentArticles()

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {recentArticles.map((article) => (
        <Card key={article.slug} className="overflow-hidden transition-all hover:shadow-lg">
          <ForceReloadLink href={`/artigos/${article.slug}`}>
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
          </ForceReloadLink>
        </Card>
      ))}
    </div>
  )
}
