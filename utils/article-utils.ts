import type { Article } from "@/types/article"
import { articlesData } from "@/data/articles-data"

// Obter todos os artigos
export function getAllArticles(): Article[] {
  return articlesData
}

// Obter artigos em destaque (os 3 primeiros)
export function getFeaturedArticles(): Article[] {
  return articlesData.slice(0, 3)
}

// Obter artigos recentes (os 3 primeiros)
export function getRecentArticles(): Article[] {
  return articlesData.slice(0, 3)
}

// Obter artigo por slug
export function getArticleBySlug(slug: string): Article | undefined {
  return articlesData.find((article) => article.slug === slug)
}

// Obter artigos relacionados por tags
export function getRelatedArticles(currentArticle: Article, limit = 3): Article[] {
  return articlesData
    .filter(
      (article) => article.id !== currentArticle.id && article.tags.some((tag) => currentArticle.tags.includes(tag)),
    )
    .slice(0, limit)
}

// Obter artigos por tag
export function getArticlesByTag(tag: string): Article[] {
  return articlesData.filter((article) => article.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
}
