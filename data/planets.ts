import type { Planet } from "@/types/glossary"

export const planets: Planet[] = [
  {
    name: "Sol",
    slug: "sol",
    symbol: "☉",
    type: "Luminar",
    rulesOver: ["Leão", "Vitalidade", "Identidade", "Propósito"],
    description:
      "Representa a identidade essencial, vitalidade e propósito de vida. O Sol é o centro do nosso sistema solar e, na astrologia, simboliza nosso núcleo, nossa essência e como brilhamos no mundo.",
    image: "/planets/sol-novo.jpg",
  },
  {
    name: "Lua",
    slug: "lua",
    symbol: "☽",
    type: "Luminar",
    rulesOver: ["Câncer", "Emoções", "Instintos", "Hábitos"],
    description:
      "Representa as emoções, instintos, memórias e necessidades de segurança. A Lua governa nosso mundo interior, nossas reações instintivas e como nos sentimos nutrido emocionalmente.",
    image: "/planets/lua-nova.jpg",
  },
  {
    name: "Mercúrio",
    slug: "mercurio",
    symbol: "☿",
    type: "Planeta Pessoal",
    rulesOver: ["Gêmeos", "Virgem", "Comunicação", "Pensamento"],
    description:
      "Representa a mente, comunicação, aprendizado e percepção. Mercúrio governa como processamos informações, nos comunicamos e raciocinamos.",
    image: "/planets/mercurio-novo.jpg",
  },
  {
    name: "Vênus",
    slug: "venus",
    symbol: "♀",
    type: "Planeta Pessoal",
    rulesOver: ["Touro", "Libra", "Amor", "Beleza", "Valores"],
    description:
      "Representa amor, beleza, prazer, valores e afinidades. Vênus governa como amamos, o que valorizamos e como buscamos harmonia e prazer.",
    image: "/planets/venus-novo.jpg",
  },
  {
    name: "Marte",
    slug: "marte",
    symbol: "♂",
    type: "Planeta Pessoal",
    rulesOver: ["Áries", "Escorpião (tradicional)", "Ação", "Desejo"],
    description:
      "Representa ação, desejo, assertividade, coragem e energia física. Marte governa como agimos, competimos e expressamos nossa energia e sexualidade.",
    image: "/planets/marte-novo.jpg",
  },
  {
    name: "Júpiter",
    slug: "jupiter",
    symbol: "♃",
    type: "Planeta Social",
    rulesOver: ["Sagitário", "Peixes (tradicional)", "Expansão", "Sabedoria"],
    description:
      "Representa expansão, crescimento, otimismo, sabedoria e abundância. Júpiter governa como crescemos, nos expandimos e buscamos significado na vida.",
    image: "/planets/jupiter-novo.jpg",
  },
  {
    name: "Saturno",
    slug: "saturno",
    symbol: "♄",
    type: "Planeta Social",
    rulesOver: ["Capricórnio", "Aquário (tradicional)", "Estrutura", "Limites"],
    description:
      "Representa estrutura, limites, responsabilidade, disciplina e maturidade. Saturno governa como lidamos com desafios, construímos estruturas e desenvolvemos maestria.",
    image: "/planets/saturno-novo.jpg",
  },
  {
    name: "Urano",
    slug: "urano",
    symbol: "♅",
    type: "Planeta Transpessoal",
    rulesOver: ["Aquário", "Originalidade", "Revolução", "Inovação"],
    description:
      "Representa mudança, originalidade, revolução, liberdade e inovação. Urano governa como rompemos padrões, buscamos liberdade e trazemos novas ideias.",
    image: "/planets/urano-novo.jpg",
  },
  {
    name: "Netuno",
    slug: "netuno",
    symbol: "♆",
    type: "Planeta Transpessoal",
    rulesOver: ["Peixes", "Intuição", "Espiritualidade", "Transcendência"],
    description:
      "Representa intuição, espiritualidade, imaginação, dissolução e transcendência. Netuno governa como nos conectamos com o todo e transcendemos limites.",
    image: "/planets/netuno-novo.jpg",
  },
  {
    name: "Plutão",
    slug: "plutao",
    symbol: "♇",
    type: "Planeta Transpessoal",
    rulesOver: ["Escorpião", "Transformação", "Poder", "Regeneração"],
    description:
      "Representa transformação profunda, poder, morte e renascimento. Plutão governa como enfrentamos crises transformadoras e acessamos poder interior.",
    image: "/planets/plutao-novo.jpg",
  },
]
