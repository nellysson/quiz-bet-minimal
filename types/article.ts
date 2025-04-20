export interface ArticleTag {
  id: string
  name: string
  slug: string
}

export interface ArticlePage {
  id: number
  title: string
  subtitle?: string
  content: string
  slug: string
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  featuredImage: string
  tags: string[] | ArticleTag[]
  pages: ArticlePage[]
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
  relatedArticles: string[] // IDs dos artigos relacionados
  isFeatured?: boolean
}
