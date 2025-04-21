import type { MetadataRoute } from "next"
import { glossaryTerms } from "@/data/glossary-terms"
import { zodiacSigns } from "@/data/zodiac-signs"
import { articlesData } from "@/data/articles-data"
import { houses } from "@/data/houses"
import { planets } from "@/data/planets"
import { astrologiaVedicaTopics } from "@/data/astrologia-vedica-topics"

const baseUrl = "https://portalastral.com.br"

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
      url: `${baseUrl}/categorias/astrologia-vedica`,
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

  // Adicionar planetas
  const planetRoutes = planets.map((planet) => ({
    url: `${baseUrl}/categorias/planetas/${planet.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Adicionar casas
  const houseRoutes = houses.map((house) => ({
    url: `${baseUrl}/categorias/casas/${house.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Adicionar artigos
  const articleRoutes = articlesData.map((article) => ({
    url: `${baseUrl}/artigos/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Adicionar tópicos de astrologia védica
  const vedicRoutes = astrologiaVedicaTopics.map((topic) => ({
    url: `${baseUrl}/categorias/astrologia-vedica/${topic.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    ...routes,
    ...glossaryRoutes,
    ...signRoutes,
    ...planetRoutes,
    ...houseRoutes,
    ...articleRoutes,
    ...vedicRoutes,
  ]
}
