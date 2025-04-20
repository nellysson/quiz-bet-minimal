import type { GlossaryTerm } from "@/types/glossary"

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Ascendente",
    slug: "ascendente",
    shortDefinition: "Signo que estava nascendo no horizonte leste no momento do nascimento.",
    description:
      "O Ascendente é o signo que estava nascendo no horizonte leste no momento exato do seu nascimento. Ele representa a sua máscara social, a primeira impressão que você causa nas pessoas e também influencia características físicas. O Ascendente é um dos pontos mais importantes do mapa astral, pois representa como nos apresentamos ao mundo exterior e como filtramos nossas experiências.",
    relatedTerms: ["mapa-natal", "casas-astrologicas", "signos-do-zodiaco"],
    image: "/placeholder.svg?key=hlcrr",
    category: "mapa-natal",
  },
  {
    term: "Mapa Natal",
    slug: "mapa-natal",
    shortDefinition: "Representação gráfica das posições dos astros no momento do nascimento.",
    description:
      "O Mapa Natal, também conhecido como Carta Natal ou Horóscopo Natal, é uma representação gráfica das posições exatas dos planetas, Sol, Lua e outros pontos astrológicos no momento exato do seu nascimento, visto da perspectiva do local onde você nasceu. Este mapa funciona como uma espécie de 'fotografia do céu' no instante do seu nascimento e é considerado pelos astrólogos como um retrato da sua personalidade, potenciais, desafios e oportunidades de vida.",
    relatedTerms: ["ascendente", "casas-astrologicas", "aspectos-astrologicos"],
    image: "/placeholder.svg?key=ot623",
    category: "mapa-natal",
  },
  {
    term: "Signos do Zodíaco",
    slug: "signos-do-zodiaco",
    shortDefinition: "Os doze segmentos de 30 graus que dividem a eclíptica.",
    description:
      "Os Signos do Zodíaco são os doze segmentos de 30 graus cada que dividem a eclíptica, que é o caminho aparente do Sol ao redor da Terra ao longo do ano. Cada signo representa um conjunto de qualidades, características e energias específicas que influenciam diferentes aspectos da personalidade e da vida.",
    relatedTerms: ["elementos-astrologicos", "modalidades", "planetas"],
    image: "/placeholder.svg?key=250p2",
    category: "signos",
  },
  {
    term: "Planetas",
    slug: "planetas",
    shortDefinition: "Corpos celestes que representam diferentes aspectos da personalidade e da vida.",
    description:
      "Na astrologia, os planetas são considerados os atores principais do mapa natal, representando diferentes facetas da personalidade e áreas da vida. Cada planeta governa energias específicas e influencia como nos expressamos em determinados aspectos.",
    relatedTerms: ["sol", "lua", "mercurio", "venus", "marte"],
    image: "/placeholder.svg?key=0k7h5",
    category: "planetas",
  },
  {
    term: "Casas Astrológicas",
    slug: "casas-astrologicas",
    shortDefinition: "Doze setores que representam diferentes áreas da vida.",
    description:
      "As Casas Astrológicas são doze setores ou compartimentos que dividem o mapa natal, cada um representando uma área específica da vida. Enquanto os signos descrevem 'como' as energias se manifestam, as casas mostram 'onde' elas atuam em nossa experiência.",
    relatedTerms: ["ascendente", "mapa-natal", "meio-do-ceu"],
    image: "/placeholder.svg?key=rszlp",
    category: "casas",
  },
  {
    term: "Aspectos Astrológicos",
    slug: "aspectos-astrologicos",
    shortDefinition: "Ângulos formados entre planetas que indicam como suas energias interagem.",
    description:
      "Os Aspectos Astrológicos são ângulos específicos formados entre planetas no mapa natal, que indicam como as energias planetárias interagem entre si. Eles são fundamentais para a interpretação astrológica, pois mostram áreas de harmonia, tensão ou potencial em nossa personalidade e vida.",
    relatedTerms: ["conjuncao", "trigono", "quadratura", "oposicao", "sextil"],
    image: "/astrological-aspects-wheel.png",
    category: "aspectos",
  },
  {
    term: "Elementos Astrológicos",
    slug: "elementos-astrologicos",
    shortDefinition: "Fogo, Terra, Ar e Água - as quatro energias básicas que classificam os signos.",
    description:
      "Os Elementos Astrológicos são as quatro energias fundamentais que classificam os doze signos do zodíaco: Fogo, Terra, Ar e Água. Cada elemento representa um modo básico de expressão e experiência.",
    relatedTerms: ["fogo", "terra", "ar", "agua", "signos-do-zodiaco"],
    image: "/astrological-elements-wheel.png",
    category: "elementos",
  },
  {
    term: "Modalidades",
    slug: "modalidades",
    shortDefinition: "Cardinal, Fixo e Mutável - os três modos de operação dos signos.",
    description:
      "As Modalidades ou Qualidades são os três modos de operação que classificam os doze signos do zodíaco: Cardinal, Fixo e Mutável. Elas descrevem como cada signo expressa sua energia e interage com o mundo.",
    relatedTerms: ["cardinal", "fixo", "mutavel", "signos-do-zodiaco"],
    image: "/astrological-wheel-cardinal-fixed-mutable.png",
    category: "modalidades",
  },
  {
    term: "Astrologia Védica",
    slug: "astrologia-vedica",
    shortDefinition: "Sistema astrológico indiano baseado no zodíaco sideral.",
    description:
      "A Astrologia Védica, também conhecida como Jyotish, é o sistema astrológico tradicional da Índia, com raízes nos antigos textos védicos. Diferente da Astrologia Ocidental que utiliza o zodíaco tropical (baseado nas estações), a Astrologia Védica usa o zodíaco sideral, que se alinha com as constelações físicas.",
    relatedTerms: ["nakshatras", "dashas", "zodiaco-sideral", "jyotish"],
    image: "/vedic-astrology-chart.png",
    category: "sistemas-astrologicos",
  },
  {
    term: "Astrologia Horária",
    slug: "astrologia-horaria",
    shortDefinition: "Técnica que responde perguntas específicas analisando o mapa do momento da pergunta.",
    description:
      "A Astrologia Horária é uma técnica astrológica antiga usada para responder perguntas específicas através da análise do mapa astrológico do momento exato em que a pergunta é formulada. O nome 'horária' vem do latim 'hora', referindo-se à importância do momento preciso da questão.",
    relatedTerms: ["querent", "quesited", "combustao", "recepcao-mutua"],
    image: "/horary-chart-question.png",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Astrologia Mundana",
    slug: "astrologia-mundana",
    shortDefinition: "Estudo dos eventos mundiais e coletivos através da astrologia.",
    description:
      "A Astrologia Mundana é o ramo da astrologia que estuda eventos coletivos, tendências sociais, políticas e econômicas, assim como o destino de nações, cidades e instituições. É uma das mais antigas aplicações da astrologia, tendo sido utilizada por conselheiros reais e líderes ao longo da história.",
    relatedTerms: ["ingressos-solares", "grandes-conjuncoes", "eclipses", "ciclos-planetarios"],
    image: "/placeholder.svg?height=200&width=200&query=mundane astrology world events chart",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Sinastria",
    slug: "sinastria",
    shortDefinition: "Estudo da compatibilidade entre mapas astrais de duas ou mais pessoas.",
    description:
      "A Sinastria é a técnica astrológica que estuda a compatibilidade e dinâmica entre duas ou mais pessoas através da comparação de seus mapas natais. É comumente utilizada para analisar relacionamentos românticos, mas também pode ser aplicada a relações familiares, de amizade ou profissionais.",
    relatedTerms: ["mapa-composto", "mapa-davison", "aspectos-astrologicos", "compatibilidade"],
    image: "/placeholder.svg?height=200&width=200&query=synastry chart with two birth charts overlapping",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Conjunção",
    slug: "conjuncao",
    shortDefinition: "Aspecto de 0° entre dois planetas, indicando fusão de energias.",
    description:
      "A Conjunção é um aspecto astrológico que ocorre quando dois planetas estão posicionados no mesmo grau ou muito próximos um do outro no mapa natal (com uma orbe de aproximadamente 8-10°). Este aspecto representa uma fusão ou mistura das energias dos planetas envolvidos.",
    relatedTerms: ["aspectos-astrologicos", "orbe", "planetas"],
    image: "/placeholder.svg?height=200&width=200&query=conjunction aspect 0 degrees in astrology",
    category: "aspectos",
  },
  {
    term: "Trígono",
    slug: "trigono",
    shortDefinition: "Aspecto de 120° entre planetas, indicando harmonia e fluxo natural.",
    description:
      "O Trígono é um aspecto astrológico que ocorre quando dois planetas estão separados por aproximadamente 120 graus no zodíaco (com uma orbe de cerca de 8°). É considerado o aspecto mais harmonioso e benéfico na astrologia.",
    relatedTerms: ["aspectos-astrologicos", "sextil", "elementos-astrologicos"],
    image: "/placeholder.svg?height=200&width=200&query=trine aspect 120 degrees in astrology",
    category: "aspectos",
  },
  {
    term: "Quadratura",
    slug: "quadratura",
    shortDefinition: "Aspecto de 90° entre planetas, indicando tensão e desafio.",
    description:
      "A Quadratura é um aspecto astrológico que ocorre quando dois planetas estão separados por aproximadamente 90 graus no zodíaco (com uma orbe de cerca de 8°). É considerado um aspecto desafiador ou de tensão.",
    relatedTerms: ["aspectos-astrologicos", "oposicao", "t-quadrado"],
    image: "/placeholder.svg?height=200&width=200&query=square aspect 90 degrees in astrology",
    category: "aspectos",
  },
  {
    term: "Oposição",
    slug: "oposicao",
    shortDefinition: "Aspecto de 180° entre planetas, indicando polaridade e equilíbrio.",
    description:
      "A Oposição é um aspecto astrológico que ocorre quando dois planetas estão separados por aproximadamente 180 graus no zodíaco (com uma orbe de cerca de 8-10°). É considerado um aspecto de tensão, mas também de consciência e equilíbrio.",
    relatedTerms: ["aspectos-astrologicos", "quadratura", "polaridades-zodiacais"],
    image: "/placeholder.svg?height=200&width=200&query=opposition aspect 180 degrees in astrology",
    category: "aspectos",
  },
  {
    term: "Sextil",
    slug: "sextil",
    shortDefinition: "Aspecto de 60° entre planetas, indicando oportunidade e harmonia suave.",
    description:
      "O Sextil é um aspecto astrológico que ocorre quando dois planetas estão separados por aproximadamente 60 graus no zodíaco (com uma orbe de cerca de 5-6°). É considerado um aspecto harmonioso e benéfico, embora mais sutil que o trígono.",
    relatedTerms: ["aspectos-astrologicos", "trigono", "elementos-astrologicos"],
    image: "/placeholder.svg?height=200&width=200&query=sextile aspect 60 degrees in astrology",
    category: "aspectos",
  },
  {
    term: "Sol",
    slug: "sol",
    shortDefinition: "Representa a identidade essencial, vitalidade e propósito de vida.",
    description:
      "Na astrologia, o Sol representa o núcleo da identidade, a essência do ser, a vitalidade e o propósito central na vida de uma pessoa. É o princípio da consciência individual e da autoexpressão.",
    relatedTerms: ["signo-solar", "leo", "casa-5", "vitalidade"],
    image: "/placeholder.svg?height=200&width=200&query=sun symbol in astrology golden",
    category: "planetas",
  },
  {
    term: "Lua",
    slug: "lua",
    shortDefinition: "Representa as emoções, instintos, memórias e necessidades de segurança.",
    description:
      "Na astrologia, a Lua representa o mundo emocional e subconsciente, os instintos, hábitos, memórias e necessidades de segurança e pertencimento. Enquanto o Sol simboliza quem somos conscientemente, a Lua revela quem somos emocionalmente e por instinto.",
    relatedTerms: ["signo-lunar", "cancer", "casa-4", "fases-da-lua"],
    image: "/placeholder.svg?height=200&width=200&query=moon symbol in astrology silver",
    category: "planetas",
  },
  {
    term: "Mercúrio",
    slug: "mercurio",
    shortDefinition: "Representa a mente, comunicação, aprendizado e percepção.",
    description:
      "Na astrologia, Mercúrio representa a mente racional, o intelecto, a comunicação, o aprendizado, a percepção e o processamento de informações. É o planeta associado a como pensamos, falamos, escrevemos e trocamos ideias.",
    relatedTerms: ["gemeos", "virgem", "retrogrado", "comunicacao"],
    image: "/placeholder.svg?height=200&width=200&query=mercury symbol in astrology",
    category: "planetas",
  },
  {
    term: "Vênus",
    slug: "venus",
    shortDefinition: "Representa amor, beleza, prazer, valores e afinidades.",
    description:
      "Na astrologia, Vênus representa o princípio do amor, beleza, harmonia, prazer, valores pessoais e afinidades. É o planeta associado a como amamos, o que valorizamos e apreciamos, e como buscamos prazer e satisfação.",
    relatedTerms: ["touro", "libra", "amor", "valores"],
    image: "/placeholder.svg?height=200&width=200&query=venus symbol in astrology",
    category: "planetas",
  },
]
