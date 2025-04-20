export interface GlossaryTerm {
  term: string
  slug: string
  shortDefinition: string
  description: string
  relatedTerms: string[]
  image: string
  category: string
}

export interface ZodiacSign {
  name: string
  slug: string
  symbol: string
  element: string
  modality: string
  rulingPlanet: string
  dates: string
  dateRanges: [number, number, number, number] // [startMonth, startDay, endMonth, endDay]
  shortDescription: string
  description: string
  traits: string[]
  compatibility: string
  image: string
}

export interface Planet {
  name: string
  slug: string
  symbol: string
  type: string
  rulesOver: string[]
  description: string
  image: string
}

export interface House {
  number: number
  name: string
  slug: string
  governs: string
  description: string
  image: string
}

export interface Aspect {
  name: string
  slug: string
  symbol: string
  angle: number
  type: string
  description: string
  image: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface HoroscopePredictions {
  [key: string]: string[]
}
