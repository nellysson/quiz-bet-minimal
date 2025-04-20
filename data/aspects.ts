import type { Aspect } from "@/types/glossary"

export const aspects: Aspect[] = [
  {
    name: "Conjunção",
    slug: "conjuncao",
    symbol: "☌",
    angle: 0,
    type: "Neutro",
    description:
      "Fusão de energias planetárias, intensificação mútua. A natureza da conjunção depende dos planetas envolvidos. Representa união, início de ciclo e concentração de energia.",
    image: "/placeholder.svg?height=200&width=200&query=conjunction aspect 0 degrees in astrology",
  },
  {
    name: "Sextil",
    slug: "sextil",
    symbol: "*",
    angle: 60,
    type: "Harmonioso",
    description:
      "Oportunidades, facilidades e potenciais que podem ser desenvolvidos com algum esforço consciente. Representa fluxo suave de energia que requer iniciativa para ser aproveitado.",
    image: "/placeholder.svg?height=200&width=200&query=sextile aspect 60 degrees in astrology",
  },
  {
    name: "Quadratura",
    slug: "quadratura",
    symbol: "□",
    angle: 90,
    type: "Desafiador",
    description:
      "Tensão e fricção entre energias planetárias, criando obstáculos que motivam crescimento e desenvolvimento. Representa desafios que exigem ação e ajustes para serem superados.",
    image: "/placeholder.svg?height=200&width=200&query=square aspect 90 degrees in astrology",
  },
  {
    name: "Trígono",
    slug: "trigono",
    symbol: "△",
    angle: 120,
    type: "Harmonioso",
    description:
      "Fluxo suave de energia entre planetas, criando talentos naturais, facilidades e oportunidades. Representa harmonia, criatividade e dons inatos que fluem sem esforço.",
    image: "/placeholder.svg?height=200&width=200&query=trine aspect 120 degrees in astrology",
  },
  {
    name: "Oposição",
    slug: "oposicao",
    symbol: "☍",
    angle: 180,
    type: "Desafiador",
    description:
      "Polaridade ou dualidade entre energias planetárias, criando tensão que busca integração e equilíbrio. Representa consciência através do outro e necessidade de encontrar meio-termo.",
    image: "/placeholder.svg?height=200&width=200&query=opposition aspect 180 degrees in astrology",
  },
  {
    name: "Quincúncio",
    slug: "quincuncio",
    symbol: "⚻",
    angle: 150,
    type: "Desafiador",
    description:
      "Ajuste, desconforto e necessidade de adaptação entre energias planetárias que não se relacionam naturalmente. Representa a necessidade de integrar qualidades aparentemente incompatíveis.",
    image: "/placeholder.svg?height=200&width=200&query=quincunx aspect 150 degrees in astrology",
  },
  {
    name: "Semi-Sextil",
    slug: "semi-sextil",
    symbol: "⚺",
    angle: 30,
    type: "Neutro",
    description:
      "Leve tensão criativa entre signos adjacentes, oferecendo oportunidades sutis de crescimento. Representa pequenos ajustes e estímulos para desenvolvimento gradual.",
    image: "/placeholder.svg?height=200&width=200&query=semi-sextile aspect 30 degrees in astrology",
  },
]
