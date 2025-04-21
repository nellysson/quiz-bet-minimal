export interface ContentSection {
  title?: string
  content: string[]
}

export interface AstrologiaVedicaTopic {
  name: string
  slug: string
  shortDescription: string
  description: string
  image?: string
  fullContent?: ContentSection[]
}
