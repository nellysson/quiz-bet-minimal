import type { MetadataRoute } from "next"
import { glossaryTerms } from "@/data/glossary-terms"
import { zodiacSigns } from "@/data/zodiac-signs"
// Adicionar o import para os artigos
import { articlesData } from "@/data/articles-data"

const baseUrl = "https://astro-glossario.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/glossario`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categorias/signos`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categorias/planetas`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categorias/casas`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categorias/aspectos`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categorias/mapa-natal`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/horoscopo`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculadora`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    // Adicionar a rota para a página de artigos no array routes
    {
      url: `${baseUrl}/artigos`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]

  // Adicionar termos do glossário
  const glossaryRoutes = glossaryTerms.map((term) => ({
    url: `${baseUrl}/glossario/${term.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Adicionar signos
  const signRoutes = zodiacSigns.map((sign) => ({
    url: `${baseUrl}/categorias/signos/${sign.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Adicionar artigos
  const articleRoutes = articlesData.map((article) => ({
    url: `${baseUrl}/artigos/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Atualizar o return para incluir articleRoutes
  return [...routes, ...glossaryRoutes, ...signRoutes, ...articleRoutes]
}
