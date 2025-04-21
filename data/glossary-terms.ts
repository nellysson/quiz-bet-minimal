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
    image: "/mundane-astrology-world-chart.png",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Sinastria",
    slug: "sinastria",
    shortDefinition: "Estudo da compatibilidade entre mapas astrais de duas ou mais pessoas.",
    description:
      "A Sinastria é a técnica astrológica que estuda a compatibilidade e dinâmica entre duas ou mais pessoas através da comparação de seus mapas natais. É comumente utilizada para analisar relacionamentos românticos, mas também pode ser aplicada a relações familiares, de amizade ou profissionais.",
    relatedTerms: ["mapa-composto", "mapa-davison", "aspectos-astrologicos", "compatibilidade"],
    image: "/overlapping-synastry-charts.png",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Conjunção",
    slug: "conjuncao",
    shortDefinition: "Aspecto de 0° entre dois planetas, indicando fusão de energias.",
    description:
      "A Conjunção é um aspecto astrológico que ocorre quando dois planetas estão posicionados no mesmo grau ou muito próximos um do outro no mapa natal (com uma orbe de aproximadamente 8-10°). Este aspecto representa uma fusão ou mistura das energias dos planetas envolvidos.",
    relatedTerms: ["aspectos-astrologicos", "orbe", "planetas"],
    image: "/celestial-alignment.png",
    category: "aspectos",
  },
  {
    term: "Trígono",
    slug: "trigono",
    shortDefinition: "Aspecto de 120° entre planetas, indicando harmonia e fluxo natural.",
    description:
      "O Trígono é um aspecto astrológico que ocorre quando dois planetas estão separados por aproximadamente 120 graus no zodíaco (com uma orbe de cerca de 8°). É considerado o aspecto mais harmonioso e benéfico na astrologia.",
    relatedTerms: ["aspectos-astrologicos", "sextil", "elementos-astrologicos"],
    image: "/astrological-trine.png",
    category: "aspectos",
  },
  {
    term: "Quadratura",
    slug: "quadratura",
    shortDefinition: "Aspecto de 90° entre planetas, indicando tensão e desafio.",
    description:
      "A Quadratura é um aspecto astrológico que ocorre quando dois planetas estão separados por aproximadamente 90 graus no zodíaco (com uma orbe de cerca de 8°). É considerado um aspecto desafiador ou de tensão.",
    relatedTerms: ["aspectos-astrologicos", "oposicao", "t-quadrado"],
    image: "/astrological-square.png",
    category: "aspectos",
  },
  {
    term: "Oposição",
    slug: "oposicao",
    shortDefinition: "Aspecto de 180° entre planetas, indicando polaridade e equilíbrio.",
    description:
      "A Oposição é um aspecto astrológico que ocorre quando dois planetas estão separados por aproximadamente 180 graus no zodíaco (com uma orbe de cerca de 8-10°). É considerado um aspecto de tensão, mas também de consciência e equilíbrio.",
    relatedTerms: ["aspectos-astrologicos", "quadratura", "polaridades-zodiacais"],
    image: "/astrological-opposition.png",
    category: "aspectos",
  },
  {
    term: "Sextil",
    slug: "sextil",
    shortDefinition: "Aspecto de 60° entre planetas, indicando oportunidade e harmonia suave.",
    description:
      "O Sextil é um aspecto astrológico que ocorre quando dois planetas estão separados por aproximadamente 60 graus no zodíaco (com uma orbe de cerca de 5-6°). É considerado um aspecto harmonioso e benéfico, embora mais sutil que o trígono.",
    relatedTerms: ["aspectos-astrologicos", "trigono", "elementos-astrologicos"],
    image: "/astrological-sextile.png",
    category: "aspectos",
  },
  {
    term: "Sol",
    slug: "sol",
    shortDefinition: "Representa a identidade essencial, vitalidade e propósito de vida.",
    description:
      "Na astrologia, o Sol representa o núcleo da identidade, a essência do ser, a vitalidade e o propósito central na vida de uma pessoa. É o princípio da consciência individual e da autoexpressão.",
    relatedTerms: ["signo-solar", "leo", "casa-5", "vitalidade"],
    image: "/golden-astrology-sun.png",
    category: "planetas",
  },
  {
    term: "Lua",
    slug: "lua",
    shortDefinition: "Representa as emoções, instintos, memórias e necessidades de segurança.",
    description:
      "Na astrologia, a Lua representa o mundo emocional e subconsciente, os instintos, hábitos, memórias e necessidades de segurança e pertencimento. Enquanto o Sol simboliza quem somos conscientemente, a Lua revela quem somos emocionalmente e por instinto.",
    relatedTerms: ["signo-lunar", "cancer", "casa-4", "fases-da-lua"],
    image: "/silver-moon-astrology.png",
    category: "planetas",
  },
  {
    term: "Mercúrio",
    slug: "mercurio",
    shortDefinition: "Representa a mente, comunicação, aprendizado e percepção.",
    description:
      "Na astrologia, Mercúrio representa a mente racional, o intelecto, a comunicação, o aprendizado, a percepção e o processamento de informações. É o planeta associado a como pensamos, falamos, escrevemos e trocamos ideias.",
    relatedTerms: ["gemeos", "virgem", "retrogrado", "comunicacao"],
    image: "/astrological-mercury-symbol.png",
    category: "planetas",
  },
  {
    term: "Vênus",
    slug: "venus",
    shortDefinition: "Representa amor, beleza, prazer, valores e afinidades.",
    description:
      "Na astrologia, Vênus representa o princípio do amor, beleza, harmonia, prazer, valores pessoais e afinidades. É o planeta associado a como amamos, o que valorizamos e apreciamos, e como buscamos prazer e satisfação.",
    relatedTerms: ["touro", "libra", "amor", "valores"],
    image: "/astrological-venus.png",
    category: "planetas",
  },
  // Novos termos a serem adicionados
  {
    term: "Signo Solar",
    slug: "signo-solar",
    shortDefinition: "O signo do zodíaco onde o Sol estava posicionado no momento do nascimento.",
    description:
      "O Signo Solar é o signo do zodíaco onde o Sol estava posicionado no momento do seu nascimento. É o signo mais conhecido popularmente, aquele que as pessoas geralmente se referem quando perguntam 'qual é o seu signo?'. Representa a essência da personalidade, a expressão consciente do ser, a vitalidade e o propósito de vida.",
    relatedTerms: ["sol", "mapa-natal", "signos-do-zodiaco", "identidade"],
    image: "/zodiac-wheel-sunsigns.png",
    category: "signos",
  },
  {
    term: "Signo Lunar",
    slug: "signo-lunar",
    shortDefinition: "O signo do zodíaco onde a Lua estava posicionada no momento do nascimento.",
    description:
      "O Signo Lunar é o signo do zodíaco onde a Lua estava posicionada no momento do seu nascimento. Representa o mundo emocional, as reações instintivas, necessidades de segurança, hábitos e padrões subconscientes. Enquanto o Signo Solar mostra quem você é conscientemente, o Signo Lunar revela quem você é emocionalmente e como reage instintivamente às situações.",
    relatedTerms: ["lua", "mapa-natal", "signos-do-zodiaco", "emocoes"],
    image: "/celestial-emotions.png",
    category: "signos",
  },
  {
    term: "Marte",
    slug: "marte",
    shortDefinition: "Representa energia, ação, desejo, assertividade e impulso.",
    description:
      "Na astrologia, Marte representa o princípio da energia, ação, iniciativa, coragem, desejo, assertividade e impulso. É o planeta associado a como agimos, como expressamos nossa raiva, como perseguimos nossos desejos e como competimos. Marte também está ligado à sexualidade, especialmente no aspecto de desejo e conquista.",
    relatedTerms: ["aries", "escorpiao", "energia", "acao", "desejo"],
    image: "/astrological-mars-red.png",
    category: "planetas",
  },
  {
    term: "Júpiter",
    slug: "jupiter",
    shortDefinition: "Representa expansão, crescimento, abundância, sabedoria e fé.",
    description:
      "Na astrologia, Júpiter representa o princípio da expansão, crescimento, otimismo, abundância, sabedoria, fé e busca por significado. É o planeta associado a como expandimos nossos horizontes, seja através de viagens, educação superior, filosofia ou espiritualidade. Júpiter também está ligado à sorte, oportunidades e generosidade.",
    relatedTerms: ["sagitario", "peixes", "expansao", "crescimento", "abundancia"],
    image: "/astrological-jupiter-symbol.png",
    category: "planetas",
  },
  {
    term: "Saturno",
    slug: "saturno",
    shortDefinition: "Representa estrutura, responsabilidade, limites, disciplina e maturidade.",
    description:
      "Na astrologia, Saturno representa o princípio da estrutura, responsabilidade, limites, disciplina, paciência e maturidade. É o planeta associado a como lidamos com desafios, como construímos fundações sólidas e como amadurecemos através das experiências. Saturno também está ligado ao tempo, autoridade, tradição e às lições que precisamos aprender nesta vida.",
    relatedTerms: ["capricornio", "aquario", "responsabilidade", "limites", "maturidade"],
    image: "/placeholder.svg?height=200&width=200&query=saturn symbol in astrology",
    category: "planetas",
  },
  {
    term: "Urano",
    slug: "urano",
    shortDefinition: "Representa mudança, originalidade, liberdade, revolução e inovação.",
    description:
      "Na astrologia, Urano representa o princípio da mudança repentina, originalidade, liberdade, revolução, inovação e genialidade. É o planeta associado a como quebramos padrões estabelecidos, como expressamos nossa individualidade e como nos libertamos de restrições. Urano também está ligado à tecnologia, ciência, insights intuitivos e ao inesperado.",
    relatedTerms: ["aquario", "mudanca", "originalidade", "liberdade", "revolucao"],
    image: "/placeholder.svg?height=200&width=200&query=uranus symbol in astrology",
    category: "planetas",
  },
  {
    term: "Netuno",
    slug: "netuno",
    shortDefinition: "Representa intuição, sonhos, espiritualidade, ilusão e transcendência.",
    description:
      "Na astrologia, Netuno representa o princípio da intuição, sonhos, imaginação, espiritualidade, compaixão, ilusão e transcendência. É o planeta associado a como nos conectamos com o todo, como dissolvemos fronteiras e como acessamos reinos além do material. Netuno também está ligado às artes, inspiração, sensibilidade psíquica e ao subconsciente coletivo.",
    relatedTerms: ["peixes", "intuicao", "espiritualidade", "sonhos", "compaixao"],
    image: "/placeholder.svg?height=200&width=200&query=neptune symbol in astrology blue",
    category: "planetas",
  },
  {
    term: "Plutão",
    slug: "plutao",
    shortDefinition: "Representa transformação profunda, poder, regeneração, morte e renascimento.",
    description:
      "Na astrologia, Plutão representa o princípio da transformação profunda, poder, regeneração, morte simbólica e renascimento. É o planeta associado a como enfrentamos crises que nos levam a mudanças fundamentais, como lidamos com poder e controle, e como nos regeneramos após períodos de destruição. Plutão também está ligado ao oculto, tabus, obsessões e ao inconsciente profundo.",
    relatedTerms: ["escorpiao", "transformacao", "poder", "regeneracao", "morte-e-renascimento"],
    image: "/placeholder.svg?height=200&width=200&query=pluto symbol in astrology",
    category: "planetas",
  },
  {
    term: "Quincunce",
    slug: "quincunce",
    shortDefinition: "Aspecto de 150° entre planetas, indicando ajuste e integração.",
    description:
      "O Quincunce, também conhecido como Inconjunção, é um aspecto astrológico que ocorre quando dois planetas estão separados por aproximadamente 150 graus no zodíaco (com uma orbe de cerca de 3-4°). É considerado um aspecto de ajuste e integração, onde energias muito diferentes precisam encontrar uma forma de trabalhar juntas, frequentemente através de adaptações e concessões.",
    relatedTerms: ["aspectos-astrologicos", "inconjuncao", "ajuste", "adaptacao"],
    image: "/placeholder.svg?height=200&width=200&query=quincunx aspect 150 degrees in astrology",
    category: "aspectos",
  },
  {
    term: "Stellium",
    slug: "stellium",
    shortDefinition: "Agrupamento de três ou mais planetas em um mesmo signo ou casa.",
    description:
      "Um Stellium ocorre quando três ou mais planetas estão posicionados no mesmo signo ou na mesma casa astrológica. Esta configuração cria uma concentração de energia naquele signo ou área da vida, tornando-a particularmente significativa e influente no mapa natal. Um Stellium pode indicar talentos especiais, desafios recorrentes ou uma área de foco importante na vida da pessoa.",
    relatedTerms: ["concentracao-planetaria", "mapa-natal", "signos-do-zodiaco", "casas-astrologicas"],
    image: "/placeholder.svg?height=200&width=200&query=stellium planets in one sign astrology",
    category: "configuracoes-planetarias",
  },
  {
    term: "Parte da Fortuna",
    slug: "parte-da-fortuna",
    shortDefinition:
      "Ponto calculado a partir das posições do Sol, Lua e Ascendente, indicando felicidade e realização.",
    description:
      "A Parte da Fortuna é um ponto matemático calculado a partir das posições do Sol, Lua e Ascendente no mapa natal. Representa a área da vida onde a pessoa pode encontrar felicidade, realização e fluxo natural. É considerada um ponto de harmonia onde os princípios da identidade (Sol), emoções (Lua) e experiência de vida (Ascendente) se integram de forma positiva.",
    relatedTerms: ["pontos-arabicos", "sol", "lua", "ascendente", "fortuna"],
    image: "/placeholder.svg?height=200&width=200&query=part of fortune symbol in astrology",
    category: "pontos-especiais",
  },
  {
    term: "Nodo Norte",
    slug: "nodo-norte",
    shortDefinition: "Ponto que indica o caminho de crescimento e evolução espiritual nesta vida.",
    description:
      "O Nodo Norte, também conhecido como Cabeça do Dragão, é um dos pontos lunares que representa o caminho de crescimento, evolução e desenvolvimento espiritual nesta vida. Indica qualidades, talentos e experiências que precisamos desenvolver para evoluir, mesmo que sejam desafiadores ou desconfortáveis inicialmente. O Nodo Norte aponta para o futuro e para o que devemos incorporar em nossa jornada.",
    relatedTerms: ["nodo-sul", "eixo-nodal", "karma", "destino", "evolucao-espiritual"],
    image: "/placeholder.svg?height=200&width=200&query=north node dragon's head astrology",
    category: "pontos-especiais",
  },
  {
    term: "Nodo Sul",
    slug: "nodo-sul",
    shortDefinition: "Ponto que indica padrões familiares, hábitos e comportamentos do passado.",
    description:
      "O Nodo Sul, também conhecido como Cauda do Dragão, é um dos pontos lunares que representa padrões familiares, hábitos, comportamentos e talentos trazidos de vidas passadas ou da primeira metade da vida. Indica uma zona de conforto que, embora familiar e fácil, pode nos manter estagnados se nos apegarmos demais a ela. O Nodo Sul aponta para o passado e para o que precisamos transcender para evoluir.",
    relatedTerms: ["nodo-norte", "eixo-nodal", "karma", "passado", "zona-de-conforto"],
    image: "/placeholder.svg?height=200&width=200&query=south node dragon's tail astrology",
    category: "pontos-especiais",
  },
  {
    term: "Casa 1",
    slug: "casa-1",
    shortDefinition: "Representa a identidade, aparência física, personalidade e como nos apresentamos ao mundo.",
    description:
      "A Casa 1, também conhecida como Casa do Ascendente, representa a identidade pessoal, aparência física, personalidade, atitude perante a vida e como nos apresentamos ao mundo. É a casa do 'eu', da autoexpressão e da primeira impressão que causamos nos outros. Planetas nesta casa influenciam fortemente a personalidade e a forma como a pessoa é percebida pelos outros.",
    relatedTerms: ["ascendente", "aries", "marte", "identidade", "personalidade"],
    image: "/placeholder.svg?height=200&width=200&query=first house astrology identity",
    category: "casas",
  },
  {
    term: "Casa 2",
    slug: "casa-2",
    shortDefinition: "Representa recursos materiais, valores, talentos e segurança financeira.",
    description:
      "A Casa 2 representa recursos materiais, valores pessoais, talentos, posses, dinheiro e segurança financeira. É a casa que mostra como lidamos com o que é nosso, tanto em termos materiais quanto em termos de valores e autoestima. Planetas nesta casa influenciam a relação com dinheiro, bens materiais e o senso de valor próprio.",
    relatedTerms: ["touro", "venus", "recursos", "valores", "dinheiro"],
    image: "/placeholder.svg?height=200&width=200&query=second house astrology resources",
    category: "casas",
  },
  {
    term: "Casa 3",
    slug: "casa-3",
    shortDefinition: "Representa comunicação, aprendizado, irmãos, vizinhança e deslocamentos curtos.",
    description:
      "A Casa 3 representa comunicação, pensamento, aprendizado, educação básica, irmãos, parentes próximos, vizinhança e deslocamentos curtos. É a casa que mostra como processamos informações, como nos comunicamos e expressamos nossas ideias. Planetas nesta casa influenciam o estilo de comunicação, a curiosidade intelectual e a relação com irmãos e ambiente próximo.",
    relatedTerms: ["gemeos", "mercurio", "comunicacao", "aprendizado", "irmãos"],
    image: "/placeholder.svg?height=200&width=200&query=third house astrology communication",
    category: "casas",
  },
  {
    term: "Casa 4",
    slug: "casa-4",
    shortDefinition: "Representa lar, família, raízes, ancestralidade e base emocional.",
    description:
      "A Casa 4 representa o lar, família, raízes, ancestralidade, base emocional e o final da vida. É a casa que mostra nossa conexão com o passado, nossas origens e como construímos nossa base de segurança emocional. Planetas nesta casa influenciam a relação com a família, especialmente com a figura materna, e a forma como criamos nosso espaço seguro no mundo.",
    relatedTerms: ["cancer", "lua", "lar", "familia", "raizes"],
    image: "/placeholder.svg?height=200&width=200&query=fourth house astrology home family",
    category: "casas",
  },
  {
    term: "Casa 5",
    slug: "casa-5",
    shortDefinition: "Representa criatividade, romance, filhos, prazer e autoexpressão.",
    description:
      "A Casa 5 representa criatividade, romance, filhos, prazer, diversão, hobbies, jogos e autoexpressão. É a casa que mostra como expressamos nossa individualidade de forma criativa e como buscamos prazer e alegria na vida. Planetas nesta casa influenciam a expressão criativa, a relação com filhos e a forma como vivenciamos o amor romântico.",
    relatedTerms: ["leao", "sol", "criatividade", "romance", "filhos"],
    image: "/placeholder.svg?height=200&width=200&query=fifth house astrology creativity romance",
    category: "casas",
  },
  {
    term: "Casa 6",
    slug: "casa-6",
    shortDefinition: "Representa trabalho, rotina, saúde, serviço e hábitos diários.",
    description:
      "A Casa 6 representa trabalho, rotina, saúde, serviço, hábitos diários e cuidados com o corpo. É a casa que mostra como organizamos nossa vida cotidiana, como servimos aos outros e como cuidamos da nossa saúde física e mental. Planetas nesta casa influenciam a relação com o trabalho, a eficiência nas tarefas diárias e a saúde.",
    relatedTerms: ["virgem", "mercurio", "trabalho", "saude", "rotina"],
    image: "/placeholder.svg?height=200&width=200&query=sixth house astrology work health",
    category: "casas",
  },
  {
    term: "Casa 7",
    slug: "casa-7",
    shortDefinition: "Representa relacionamentos, parcerias, casamento e contratos.",
    description:
      "A Casa 7 representa relacionamentos, parcerias, casamento, contratos e o 'outro' em geral. É a casa que mostra como nos relacionamos com os outros em termos de igualdade e como estabelecemos parcerias significativas. Planetas nesta casa influenciam a forma como nos comprometemos, como escolhemos parceiros e como lidamos com acordos e contratos.",
    relatedTerms: ["libra", "venus", "relacionamentos", "casamento", "parcerias"],
    image: "/placeholder.svg?height=200&width=200&query=seventh house astrology relationships",
    category: "casas",
  },
  {
    term: "Casa 8",
    slug: "casa-8",
    shortDefinition: "Representa transformação, sexualidade, recursos compartilhados, morte e renascimento.",
    description:
      "A Casa 8 representa transformação profunda, sexualidade, recursos compartilhados, heranças, morte (simbólica ou literal) e renascimento. É a casa que mostra como lidamos com crises, intimidade profunda e os recursos dos outros. Planetas nesta casa influenciam a capacidade de transformação, a relação com a sexualidade e como lidamos com poder e controle.",
    relatedTerms: ["escorpiao", "plutao", "transformacao", "sexualidade", "recursos-compartilhados"],
    image: "/placeholder.svg?height=200&width=200&query=eighth house astrology transformation",
    category: "casas",
  },
  {
    term: "Casa 9",
    slug: "casa-9",
    shortDefinition: "Representa filosofia, educação superior, viagens longas, espiritualidade e expansão mental.",
    description:
      "A Casa 9 representa filosofia, educação superior, viagens longas, espiritualidade, expansão mental e busca por significado. É a casa que mostra como expandimos nossos horizontes, seja através de estudos avançados, viagens ao exterior ou exploração espiritual. Planetas nesta casa influenciam a visão de mundo, crenças religiosas ou filosóficas e a busca por conhecimento superior.",
    relatedTerms: ["sagitario", "jupiter", "filosofia", "viagens", "espiritualidade"],
    image: "/placeholder.svg?height=200&width=200&query=ninth house astrology philosophy travel",
    category: "casas",
  },
  {
    term: "Casa 10",
    slug: "casa-10",
    shortDefinition: "Representa carreira, status social, reputação, autoridade e propósito público.",
    description:
      "A Casa 10, também conhecida como Meio do Céu (MC), representa carreira, status social, reputação, autoridade, ambições e propósito público. É a casa que mostra como nos apresentamos ao mundo profissionalmente e como buscamos reconhecimento social. Planetas nesta casa influenciam a carreira, a relação com figuras de autoridade (especialmente a paterna) e as aspirações profissionais.",
    relatedTerms: ["capricornio", "saturno", "carreira", "status", "autoridade"],
    image: "/placeholder.svg?height=200&width=200&query=tenth house astrology career status",
    category: "casas",
  },
  {
    term: "Casa 11",
    slug: "casa-11",
    shortDefinition: "Representa amizades, grupos, causas sociais, esperanças e objetivos futuros.",
    description:
      "A Casa 11 representa amizades, grupos, redes sociais, causas humanitárias, esperanças e objetivos futuros. É a casa que mostra como nos conectamos com a coletividade, como participamos de grupos e como contribuímos para causas maiores que nós mesmos. Planetas nesta casa influenciam a vida social, a relação com amigos e a capacidade de trabalhar em equipe por objetivos comuns.",
    relatedTerms: ["aquario", "urano", "amizades", "grupos", "objetivos-futuros"],
    image: "/placeholder.svg?height=200&width=200&query=eleventh house astrology friends groups",
    category: "casas",
  },
  {
    term: "Casa 12",
    slug: "casa-12",
    shortDefinition: "Representa o inconsciente, espiritualidade, isolamento, sacrifício e transcendência.",
    description:
      "A Casa 12 representa o inconsciente, espiritualidade, isolamento, sacrifício, transcendência e o que está oculto. É a casa que mostra nossa conexão com o todo, nossos medos subconscientes e como nos dissolvemos em algo maior. Planetas nesta casa influenciam a vida interior, a intuição, a compaixão e a capacidade de transcender limitações materiais.",
    relatedTerms: ["peixes", "netuno", "inconsciente", "espiritualidade", "transcendencia"],
    image: "/placeholder.svg?height=200&width=200&query=twelfth house astrology unconscious spirituality",
    category: "casas",
  },
  {
    term: "Retorno de Saturno",
    slug: "retorno-de-saturno",
    shortDefinition: "Período de transição e maturidade que ocorre aproximadamente aos 29-30 anos.",
    description:
      "O Retorno de Saturno é um trânsito astrológico que ocorre quando Saturno retorna à mesma posição que ocupava no momento do nascimento, aproximadamente aos 29-30 anos de idade. É considerado um período significativo de transição para a vida adulta plena, marcado por desafios, reavaliações e decisões importantes. Durante este período, somos chamados a assumir responsabilidades, definir estruturas duradouras e abandonar padrões imaturos.",
    relatedTerms: ["saturno", "transitos", "maturidade", "responsabilidade", "ciclos-de-vida"],
    image: "/placeholder.svg?height=200&width=200&query=saturn return astrology maturity",
    category: "transitos",
  },
  {
    term: "Inferno Astral",
    slug: "inferno-astral",
    shortDefinition: "Período de aproximadamente 30 dias antes do aniversário, marcado por introspecção e reavaliação.",
    description:
      "O Inferno Astral é um termo popular na astrologia brasileira que se refere ao período de aproximadamente 30 dias antes do aniversário, quando o Sol transita pela casa 12 do mapa natal. É caracterizado por uma energia mais introspectiva, reflexiva e, por vezes, desafiadora. Durante este período, tendemos a fazer um balanço do ano que passou e podemos nos sentir mais sensíveis, cansados ou propensos a reavaliações profundas.",
    relatedTerms: ["casa-12", "sol", "transitos", "introspecção", "ciclo-solar"],
    image: "/placeholder.svg?height=200&width=200&query=pre birthday astrology introspection",
    category: "transitos",
  },
  {
    term: "Quíron",
    slug: "quiron",
    shortDefinition: "Representa a ferida interior, o processo de cura e a capacidade de curar os outros.",
    description:
      "Quíron é um asteroide ou planeta anão que, na astrologia, representa a 'ferida que não cicatriza completamente', o processo de cura interior e a capacidade de curar os outros através das próprias feridas. Sua posição no mapa natal indica uma área de dor profunda, mas também de grande sabedoria e potencial curativo. Quíron simboliza o arquétipo do 'curador ferido', aquele que, através da própria experiência de dor, desenvolve compaixão e habilidade para ajudar os outros.",
    relatedTerms: ["ferida-interior", "cura", "compaixao", "sabedoria", "vulnerabilidade"],
    image: "/placeholder.svg?height=200&width=200&query=chiron wounded healer astrology",
    category: "asteroides",
  },
  {
    term: "Lilith",
    slug: "lilith",
    shortDefinition: "Representa o feminino selvagem, a sexualidade instintiva e a rebeldia contra normas patriarcais.",
    description:
      "Lilith, também conhecida como Lua Negra, é um ponto matemático no mapa astral que representa o feminino selvagem, a sexualidade instintiva, a rebeldia contra normas patriarcais e a recusa em se submeter. Sua posição no mapa natal indica onde tendemos a experimentar rejeição ou marginalização por não nos conformarmos, mas também onde encontramos nossa autenticidade e poder pessoal através da aceitação de aspectos sombrios e instintivos.",
    relatedTerms: ["lua-negra", "feminino-selvagem", "sexualidade", "rebeldia", "sombra"],
    image: "/placeholder.svg?height=200&width=200&query=black moon lilith astrology feminine power",
    category: "pontos-especiais",
  },
  {
    term: "Progressões",
    slug: "progressoes",
    shortDefinition: "Técnica que mostra a evolução do mapa natal ao longo do tempo.",
    description:
      "As Progressões são uma técnica astrológica que mostra a evolução interna do mapa natal ao longo do tempo. Baseiam-se no princípio de que um dia após o nascimento equivale a um ano de vida. Através das progressões, podemos observar como os planetas 'progridem' ou se movem lentamente, revelando o desenvolvimento psicológico e espiritual da pessoa. As progressões complementam os trânsitos, mostrando mudanças internas enquanto os trânsitos mostram eventos externos.",
    relatedTerms: ["progressoes-secundarias", "progressoes-solares", "evolucao", "desenvolvimento-interno"],
    image: "/placeholder.svg?height=200&width=200&query=progressed chart astrology evolution",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Efemérides",
    slug: "efemerides",
    shortDefinition: "Tabelas que mostram as posições diárias dos planetas no zodíaco.",
    description:
      "As Efemérides são tabelas astronômicas que mostram as posições diárias dos planetas, Sol, Lua e outros corpos celestes no zodíaco. São ferramentas essenciais para astrólogos, permitindo calcular mapas astrais para qualquer data e hora. As efemérides tradicionais são publicadas em forma de livro, mostrando as posições planetárias ao meio-dia GMT para cada dia do ano, embora hoje existam também versões digitais e softwares que calculam estas posições automaticamente.",
    relatedTerms: ["calculos-astrologicos", "posicoes-planetarias", "astronomia", "tabelas-astronomicas"],
    image: "/placeholder.svg?height=200&width=200&query=ephemeris astrology planetary positions",
    category: "ferramentas-astrologicas",
  },
  {
    term: "Trânsitos",
    slug: "transitos",
    shortDefinition: "Movimento atual dos planetas e sua interação com o mapa natal.",
    description:
      "Os Trânsitos referem-se ao movimento atual dos planetas pelo céu e como eles interagem com os planetas e pontos do mapa natal. São considerados a principal técnica de previsão astrológica, indicando períodos de oportunidades, desafios e transformações. Cada planeta em trânsito afeta diferentes áreas da vida, dependendo da casa que está transitando e dos aspectos que forma com os planetas natais.",
    relatedTerms: ["previsao-astrologica", "ciclos-planetarios", "aspectos-em-transito", "timing"],
    image: "/placeholder.svg?height=200&width=200&query=transits astrology timing prediction",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Revolução Solar",
    slug: "revolucao-solar",
    shortDefinition: "Mapa astrológico calculado para o momento exato em que o Sol retorna à sua posição natal.",
    description:
      "A Revolução Solar é um mapa astrológico calculado para o momento exato em que o Sol retorna à sua posição natal, o que ocorre anualmente próximo ao aniversário. Este mapa é usado como uma técnica de previsão, mostrando as tendências e temas para o ano que se inicia no aniversário. A Revolução Solar é interpretada em conjunto com o mapa natal e outras técnicas preditivas, oferecendo insights sobre as áreas de foco, oportunidades e desafios para o ciclo anual.",
    relatedTerms: ["aniversario", "previsao-anual", "retorno-solar", "ciclo-solar"],
    image: "/placeholder.svg?height=200&width=200&query=solar return birthday astrology prediction",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Zodíaco",
    slug: "zodiaco",
    shortDefinition: "Faixa de constelações por onde aparentemente passam o Sol, a Lua e os planetas.",
    description:
      "O Zodíaco é uma faixa de constelações que se estende aproximadamente 8 graus para cada lado da eclíptica, o caminho aparente do Sol ao redor da Terra. É dividido em doze segmentos iguais de 30 graus, cada um associado a um signo. Na astrologia ocidental, usamos principalmente o zodíaco tropical, baseado nas estações do ano, enquanto a astrologia védica utiliza o zodíaco sideral, alinhado com as constelações físicas. O zodíaco serve como um mapa celeste para localizar a posição dos planetas.",
    relatedTerms: ["signos-do-zodiaco", "ecliptica", "zodiaco-tropical", "zodiaco-sideral"],
    image: "/placeholder.svg?height=200&width=200&query=zodiac wheel twelve signs constellations",
    category: "fundamentos",
  },
  {
    term: "Meio do Céu (MC)",
    slug: "meio-do-ceu",
    shortDefinition: "Ponto mais alto do mapa astral, representando carreira, reputação e propósito público.",
    description:
      "O Meio do Céu (Medium Coeli ou MC) é o ponto mais alto do mapa astral, representando o meridiano local no momento do nascimento. É o cúspide da Casa 10 e simboliza a carreira, reputação pública, status social, autoridade e propósito na sociedade. O signo no MC indica como a pessoa busca reconhecimento e como expressa sua autoridade no mundo. É considerado um dos quatro ângulos principais do mapa, junto com o Ascendente, Descendente e Fundo do Céu.",
    relatedTerms: ["casa-10", "carreira", "reputacao", "angulos-do-mapa", "capricornio"],
    image: "/celestial-career-path.png",
    category: "angulos",
  },
  {
    term: "Fundo do Céu (IC)",
    slug: "fundo-do-ceu",
    shortDefinition: "Ponto mais baixo do mapa astral, representando lar, raízes e base emocional.",
    description:
      "O Fundo do Céu (Imum Coeli ou IC) é o ponto mais baixo do mapa astral, diretamente oposto ao Meio do Céu. É o cúspide da Casa 4 e simboliza o lar, família, raízes, ancestralidade e base emocional. O signo no IC indica como a pessoa busca segurança emocional e como se conecta com suas origens. Representa também o final da vida e questões relacionadas ao passado e à vida privada. É um dos quatro ângulos principais do mapa astral.",
    relatedTerms: ["casa-4", "lar", "familia", "angulos-do-mapa", "cancer"],
    image: "/astrological-roots.png",
    category: "angulos",
  },
  {
    term: "Descendente",
    slug: "descendente",
    shortDefinition: "Ponto oeste do mapa astral, representando relacionamentos e parcerias.",
    description:
      "O Descendente é o ponto oeste do mapa astral, diretamente oposto ao Ascendente. É o cúspide da Casa 7 e simboliza relacionamentos, parcerias, casamento e como nos relacionamos com os outros. O signo no Descendente frequentemente indica qualidades que buscamos em parceiros ou que projetamos nos outros. Representa o 'você' em contraste com o 'eu' do Ascendente. É um dos quatro ângulos principais do mapa astral e uma área significativa para entender dinâmicas relacionais.",
    relatedTerms: ["casa-7", "relacionamentos", "parcerias", "angulos-do-mapa", "libra"],
    image: "/astrological-partnership-wheel.png",
    category: "angulos",
  },
  {
    term: "Regente do Mapa",
    slug: "regente-do-mapa",
    shortDefinition: "Planeta que rege o signo do Ascendente, tendo influência especial sobre todo o mapa.",
    description:
      "O Regente do Mapa é o planeta que rege o signo do Ascendente, exercendo uma influência especial sobre todo o mapa astral. Este planeta é considerado o 'governante' do mapa e sua posição por signo e casa oferece insights importantes sobre o propósito de vida e a forma como a pessoa navega sua jornada. A condição do Regente do Mapa - seus aspectos, dignidades e debilidades - afeta significativamente como a pessoa expressa sua personalidade e aborda a vida.",
    relatedTerms: ["ascendente", "regencia-planetaria", "dignidades-essenciais", "proposito-de-vida"],
    image: "/astrological-chart-ruler.png",
    category: "tecnicas-interpretativas",
  },
  {
    term: "Planeta Retrógrado",
    slug: "planeta-retrogrado",
    shortDefinition: "Movimento aparente de um planeta para trás, indicando revisão e internalização.",
    description:
      "Um Planeta Retrógrado é aquele que, visto da Terra, parece se mover para trás no zodíaco. Este é um fenômeno óptico causado pelas diferentes velocidades orbitais dos planetas. Na astrologia, planetas retrógrados indicam áreas de vida onde somos chamados a revisar, reconsiderar e internalizar as energias daquele planeta. Frequentemente apontam para questões kármicas, talentos não desenvolvidos de vidas passadas ou áreas onde precisamos de mais reflexão e trabalho interior antes de expressá-las externamente.",
    relatedTerms: ["mercurio-retrogrado", "venus-retrogrado", "marte-retrogrado", "karma", "introspecção"],
    image: "/cosmic-dance-retrograde.png",
    category: "movimentos-planetarios",
  },
  {
    term: "Domicílio Planetário",
    slug: "domicilio-planetario",
    shortDefinition: "Signo regido naturalmente por um planeta, onde sua energia se expressa com mais força.",
    description:
      "O Domicílio Planetário é o signo regido naturalmente por um planeta, onde sua energia se expressa com mais força e clareza. Quando um planeta está em seu domicílio, ele funciona de maneira ideal, expressando suas qualidades de forma harmoniosa e eficaz. Por exemplo, Marte está em domicílio em Áries, Vênus em Touro e Libra, Mercúrio em Gêmeos e Virgem, e assim por diante. Um planeta em domicílio no mapa natal indica uma área de força natural e talento inato.",
    relatedTerms: ["regencia-planetaria", "dignidades-essenciais", "exaltacao", "detrimento", "queda"],
    image: "/placeholder.svg?height=200&width=200&query=planetary domicile rulership astrology",
    category: "dignidades-planetarias",
  },
  {
    term: "Exaltação",
    slug: "exaltacao",
    shortDefinition: "Signo onde um planeta expressa suas qualidades de forma elevada e refinada.",
    description:
      "A Exaltação é um signo onde um planeta expressa suas qualidades de forma elevada, refinada e até mesmo idealizada, embora diferente de seu domicílio natural. Quando um planeta está em seu signo de exaltação, suas energias são amplificadas e expressas de maneira particularmente positiva. Por exemplo, o Sol é exaltado em Áries, a Lua em Touro, Júpiter em Câncer, e assim por diante. Um planeta exaltado no mapa natal indica uma área de especial talento e potencial para expressão elevada.",
    relatedTerms: ["dignidades-essenciais", "domicilio-planetario", "detrimento", "queda", "planetas"],
    image: "/placeholder.svg?height=200&width=200&query=planetary exaltation astrology dignity",
    category: "dignidades-planetarias",
  },
  {
    term: "Queda",
    slug: "queda",
    shortDefinition: "Signo onde um planeta expressa suas qualidades de forma enfraquecida ou desafiadora.",
    description:
      "A Queda é um signo onde um planeta expressa suas qualidades de forma enfraquecida, desafiadora ou menos eficaz. Quando um planeta está em seu signo de queda, suas energias encontram dificuldades para se manifestar de maneira harmoniosa. Por exemplo, o Sol está em queda em Libra, a Lua em Escorpião, Vênus em Virgem, e assim por diante. Um planeta em queda no mapa natal indica uma área que pode requerer mais esforço consciente para desenvolver, mas que também pode oferecer profundas lições e crescimento através dos desafios.",
    relatedTerms: ["dignidades-essenciais", "domicilio-planetario", "exaltacao", "detrimento", "planetas"],
    image: "/placeholder.svg?height=200&width=200&query=planetary fall astrology challenge",
    category: "dignidades-planetarias",
  },
  {
    term: "Detrimento",
    slug: "detrimento",
    shortDefinition: "Signo oposto ao domicílio de um planeta, onde sua energia encontra mais resistência.",
    description:
      "O Detrimento é o signo oposto ao domicílio natural de um planeta, onde sua energia encontra mais resistência e dificuldade para se expressar. Quando um planeta está em detrimento, suas qualidades podem se manifestar de forma exagerada, distorcida ou inibida. Por exemplo, Marte está em detrimento em Libra, Vênus em Escorpião e Áries, e assim por diante. Um planeta em detrimento no mapa natal indica uma área de desafio que, quando trabalhada conscientemente, pode levar a um desenvolvimento significativo e uma expressão mais equilibrada.",
    relatedTerms: ["dignidades-essenciais", "domicilio-planetario", "exaltacao", "queda", "planetas"],
    image: "/placeholder.svg?height=200&width=200&query=planetary detriment astrology challenge",
    category: "dignidades-planetarias",
  },
  {
    term: "Vertex",
    slug: "vertex",
    shortDefinition: "Ponto de destino e encontros significativos no mapa astral.",
    description:
      "O Vertex é um ponto sensível no mapa astral, calculado a partir da intersecção da eclíptica com o círculo vertical primário. É considerado um 'ponto de destino' ou 'ponto de encontros significativos', frequentemente associado a encontros fatídicos, relacionamentos kármicos e momentos de sincronicidade. Localizado geralmente na 5ª, 6ª, 7ª ou 8ª casa, o Vertex representa experiências que parecem estar fora do nosso controle consciente, mas que têm um impacto profundo em nossa jornada de vida.",
    relatedTerms: ["antivertex", "pontos-arabicos", "destino", "sincronicidade", "karma"],
    image: "/placeholder.svg?height=200&width=200&query=vertex astrology fate destiny",
    category: "pontos-especiais",
  },
  {
    term: "Antivertex",
    slug: "antivertex",
    shortDefinition: "Ponto oposto ao Vertex, representando escolhas conscientes e autodeterminação.",
    description:
      "O Antivertex é o ponto diretamente oposto ao Vertex no mapa astral. Enquanto o Vertex representa encontros fatídicos e experiências que parecem estar fora do nosso controle, o Antivertex simboliza escolhas conscientes, autodeterminação e áreas onde temos maior capacidade de direcionamento voluntário. Este ponto está associado a como podemos conscientemente moldar nosso destino e fazer escolhas que alinhem nossa vida com nossos valores e propósitos mais profundos.",
    relatedTerms: ["vertex", "pontos-arabicos", "livre-arbitrio", "escolhas-conscientes", "autodeterminacao"],
    image: "/placeholder.svg?height=200&width=200&query=antivertex astrology free will choice",
    category: "pontos-especiais",
  },
  {
    term: "Termos Egípcios",
    slug: "termos-egipcios",
    shortDefinition: "Divisões de cada signo em cinco partes desiguais, cada uma regida por um planeta.",
    description:
      "Os Termos Egípcios (ou Términos) são divisões de cada signo do zodíaco em cinco partes desiguais, cada uma regida por um dos cinco planetas visíveis (excluindo o Sol e a Lua): Mercúrio, Vênus, Marte, Júpiter e Saturno. Esta é uma das dignidades essenciais na astrologia tradicional, junto com domicílio, exaltação, triplicidade e face. A posição de um planeta em um termo específico modifica sua expressão e força. Os Termos Egípcios são particularmente utilizados na astrologia helenística e medieval para análises detalhadas de dignidades planetárias.",
    relatedTerms: ["dignidades-essenciais", "faces", "triplicidades", "astrologia-tradicional", "planetas"],
    image: "/placeholder.svg?height=200&width=200&query=egyptian terms astrology dignity",
    category: "dignidades-planetarias",
  },
  {
    term: "Faces (Decanatos)",
    slug: "faces-decanatos",
    shortDefinition: "Divisões de cada signo em três partes iguais de 10 graus, cada uma com um regente planetário.",
    description:
      "As Faces, também conhecidas como Decanatos, são divisões de cada signo do zodíaco em três partes iguais de 10 graus cada, totalizando 36 faces no zodíaco completo. Cada face tem um regente planetário que modifica a expressão do signo naqueles graus específicos. Na astrologia tradicional, as faces seguem a ordem caldeia dos planetas: Saturno, Júpiter, Marte, Sol, Vênus, Mercúrio e Lua. Esta é uma das dignidades essenciais menores e oferece nuances adicionais na interpretação de um mapa astral, especialmente em análises mais detalhadas.",
    relatedTerms: ["decanatos", "dignidades-essenciais", "termos-egipcios", "astrologia-tradicional", "planetas"],
    image: "/placeholder.svg?height=200&width=200&query=decans faces astrology divisions",
    category: "dignidades-planetarias",
  },
  {
    term: "Sistema Placidus",
    slug: "sistema-placidus",
    shortDefinition: "Sistema de casas mais popular no Ocidente, baseado em divisões de tempo.",
    description:
      "O Sistema Placidus é o sistema de casas astrológicas mais utilizado no Ocidente, desenvolvido pelo monge italiano Placidus de Titis no século XVII. Baseia-se em divisões de tempo, calculando as casas através do movimento diurno dos planetas do horizonte leste ao Meio do Céu. Este sistema cria casas de tamanhos desiguais e pode apresentar problemas em latitudes extremas (próximas aos polos), onde algumas casas podem se tornar muito pequenas ou até mesmo desaparecer. O Placidus é particularmente valorizado por sua correlação com o movimento aparente do Sol ao longo do dia.",
    relatedTerms: ["casas-astrologicas", "sistemas-de-casas", "meio-do-ceu", "ascendente", "mapa-natal"],
    image: "/placeholder.svg?height=200&width=200&query=placidus house system astrology",
    category: "sistemas-de-casas",
  },
  {
    term: "Sistema Koch",
    slug: "sistema-koch",
    shortDefinition: "Sistema de casas baseado no nascimento simbólico do indivíduo ao longo do dia.",
    description:
      "O Sistema Koch, também conhecido como Sistema de Casas do Nascimento, foi desenvolvido pelo astrólogo alemão Walter Koch no século XX. Este sistema baseia-se no conceito de 'nascimento simbólico', calculando as casas através de um método que divide o tempo que um ponto leva para se mover do horizonte leste ao Meio do Céu. O Koch é semelhante ao Placidus em alguns aspectos, mas produz cúspides de casas ligeiramente diferentes. É particularmente popular na Alemanha e em partes da Europa, sendo valorizado por alguns astrólogos por sua precisão em questões relacionadas ao tempo e eventos.",
    relatedTerms: ["casas-astrologicas", "sistemas-de-casas", "sistema-placidus", "meio-do-ceu", "ascendente"],
    image: "/placeholder.svg?height=200&width=200&query=koch house system astrology",
    category: "sistemas-de-casas",
  },
  {
    term: "Sistema Whole Sign",
    slug: "sistema-whole-sign",
    shortDefinition: "Sistema de casas mais antigo, onde cada signo completo constitui uma casa.",
    description:
      "O Sistema Whole Sign (Signo Inteiro) é o sistema de casas mais antigo conhecido na astrologia ocidental, utilizado na astrologia helenística e ainda popular hoje. Neste sistema, cada casa corresponde exatamente a um signo completo do zodíaco, começando pelo signo que contém o Ascendente, que se torna a primeira casa. É um sistema simples e direto, onde as cúspides das casas coincidem com o início de cada signo (0°). O Whole Sign tem ganhado popularidade renovada nos últimos anos devido à sua simplicidade, clareza e eficácia demonstrada em estudos de casos históricos e contemporâneos.",
    relatedTerms: [
      "casas-astrologicas",
      "sistemas-de-casas",
      "signos-do-zodiaco",
      "astrologia-helenistica",
      "ascendente",
    ],
    image: "/placeholder.svg?height=200&width=200&query=whole sign house system astrology",
    category: "sistemas-de-casas",
  },
  {
    term: "Sistema Porfírio",
    slug: "sistema-porfirio",
    shortDefinition: "Sistema de casas que divide o espaço entre ângulos em três partes iguais.",
    description:
      "O Sistema Porfírio é um dos sistemas de casas astrológicas mais antigos, atribuído ao filósofo neoplatônico Porfírio do século III. Este sistema divide o espaço entre os quatro ângulos principais (Ascendente, Meio do Céu, Descendente e Fundo do Céu) em três partes iguais para criar as doze casas. É um sistema relativamente simples que pode ser calculado manualmente e funciona em todas as latitudes. O Porfírio foi amplamente utilizado na astrologia medieval e é ainda apreciado por sua abordagem direta e geométrica para a divisão das casas.",
    relatedTerms: [
      "casas-astrologicas",
      "sistemas-de-casas",
      "angulos-do-mapa",
      "astrologia-medieval",
      "geometria-astral",
    ],
    image: "/placeholder.svg?height=200&width=200&query=porphyry house system astrology",
    category: "sistemas-de-casas",
  },
  {
    term: "Sistema Campanus",
    slug: "sistema-campanus",
    shortDefinition: "Sistema de casas baseado em divisões iguais do círculo vertical primário.",
    description:
      "O Sistema Campanus é um sistema de casas astrológicas desenvolvido pelo matemático italiano Giovanni Campano no século XIII. Este sistema baseia-se na divisão do círculo vertical primário (que passa pelos polos leste e oeste e pelo zênite e nadir) em doze partes iguais. As casas são então formadas pelos grandes círculos que passam pelos polos norte e sul e pelos pontos de divisão no círculo vertical. O Campanus é considerado um sistema altamente matemático e geométrico, apreciado por sua elegância e precisão espacial, embora seja menos comum na prática astrológica contemporânea.",
    relatedTerms: [
      "casas-astrologicas",
      "sistemas-de-casas",
      "geometria-astral",
      "astrologia-medieval",
      "matematica-astrologica",
    ],
    image: "/placeholder.svg?height=200&width=200&query=campanus house system astrology",
    category: "sistemas-de-casas",
  },
  {
    term: "Astrologia Eletiva",
    slug: "astrologia-eletiva",
    shortDefinition: "Técnica para escolher o momento mais favorável para iniciar um empreendimento.",
    description:
      "A Astrologia Eletiva é a técnica de escolher o momento mais favorável para iniciar um empreendimento ou atividade, baseando-se nas configurações astrológicas. Diferente da Astrologia Horária, que responde a perguntas específicas, a Eletiva busca criar intencionalmente um 'mapa de nascimento' para um projeto, casamento, viagem, cirurgia, assinatura de contrato ou qualquer iniciativa importante. O astrólogo analisa os trânsitos planetários, fases lunares, aspectos e posições das casas para determinar o momento que oferece as melhores energias para o sucesso do empreendimento em questão.",
    relatedTerms: ["astrologia-horaria", "eleicao-astrologica", "timing", "iniciativas", "fases-lunares"],
    image: "/placeholder.svg?height=200&width=200&query=electional astrology timing success",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Astrologia Médica",
    slug: "astrologia-medica",
    shortDefinition: "Estudo das correspondências entre astrologia e saúde física e mental.",
    description:
      "A Astrologia Médica é o estudo das correspondências entre os corpos celestes e a saúde física e mental. Esta antiga tradição associa planetas, signos e casas a diferentes partes do corpo, sistemas fisiológicos e potenciais predisposições a determinadas condições. Por exemplo, Áries governa a cabeça, Touro a garganta, Leão o coração, etc. Na astrologia tradicional, era uma ferramenta importante para diagnóstico e tratamento, embora hoje seja geralmente utilizada como complemento à medicina convencional, oferecendo insights sobre tendências constitucionais, ciclos de saúde e abordagens holísticas para o bem-estar.",
    relatedTerms: ["saude", "corpo-humano", "planetas", "signos-do-zodiaco", "medicina-holistica"],
    image: "/placeholder.svg?height=200&width=200&query=medical astrology health body",
    category: "ramos-astrologicos",
  },
  {
    term: "Astrologia Cármica",
    slug: "astrologia-carmica",
    shortDefinition: "Estudo das influências de vidas passadas e lições da alma no mapa astral.",
    description:
      "A Astrologia Cármica é uma abordagem que estuda o mapa astral como um reflexo de experiências de vidas passadas e lições que a alma precisa aprender nesta encarnação. Foca-se particularmente nos Nodos Lunares, Saturno, Quíron, planetas retrógrados e a Casa 12, que são considerados indicadores de karma e padrões repetitivos. Esta vertente da astrologia busca identificar talentos trazidos de outras vidas, desafios kármicos a serem superados e o propósito evolutivo da alma. A Astrologia Cármica oferece uma perspectiva espiritual e transformadora, ajudando a pessoa a compreender e transcender padrões limitantes.",
    relatedTerms: ["nodo-norte", "nodo-sul", "saturno", "quiron", "reencarnacao", "evolucao-espiritual"],
    image: "/placeholder.svg?height=200&width=200&query=karmic astrology soul lessons past lives",
    category: "ramos-astrologicos",
  },
  {
    term: "Astrologia Psicológica",
    slug: "astrologia-psicologica",
    shortDefinition: "Abordagem que integra astrologia e psicologia para autoconhecimento e desenvolvimento pessoal.",
    description:
      "A Astrologia Psicológica é uma abordagem moderna que integra princípios astrológicos com conceitos da psicologia, particularmente a psicologia junguiana, para promover autoconhecimento e desenvolvimento pessoal. Desenvolvida principalmente por astrólogos como Dane Rudhyar e Liz Greene, esta vertente vê o mapa astral como um retrato da psique, onde planetas representam diferentes funções psicológicas e aspectos simbolizam dinâmicas internas. Diferente da astrologia tradicional focada em previsões, a Astrologia Psicológica enfatiza o potencial de crescimento, integração da sombra e individuação, utilizando o mapa como uma ferramenta para compreender motivações inconscientes e facilitar a transformação pessoal.",
    relatedTerms: [
      "psicologia-junguiana",
      "autoconhecimento",
      "sombra",
      "inconsciente",
      "individuacao",
      "desenvolvimento-pessoal",
    ],
    image: "/placeholder.svg?height=200&width=200&query=psychological astrology self knowledge jung",
    category: "ramos-astrologicos",
  },
  {
    term: "Astrologia Esotérica",
    slug: "astrologia-esoterica",
    shortDefinition: "Abordagem espiritual da astrologia focada na evolução da alma e propósito cósmico.",
    description:
      "A Astrologia Esotérica, também conhecida como Astrologia da Alma, é uma abordagem espiritual desenvolvida principalmente por Alice Bailey e baseada nos ensinamentos de Djwhal Khul. Esta vertente foca na evolução da alma e no propósito cósmico, indo além da personalidade para explorar dimensões mais profundas do ser. Utiliza regências planetárias esotéricas (diferentes das tradicionais), raios de energia e triângulos de força para compreender o caminho evolutivo da alma. A Astrologia Esotérica trabalha com três níveis de interpretação: personalidade (exotérica), alma (esotérica) e espírito (hierárquica), oferecendo uma visão multidimensional do propósito encarnacional.",
    relatedTerms: ["alice-bailey", "raios", "regencias-esotericas", "evolucao-espiritual", "proposito-da-alma"],
    image: "/placeholder.svg?height=200&width=200&query=esoteric astrology soul purpose rays",
    category: "ramos-astrologicos",
  },
  {
    term: "Astrologia de Relocação",
    slug: "astrologia-de-relocacao",
    shortDefinition: "Estudo de como o mapa astral se modifica quando a pessoa se muda para outro local.",
    description:
      "A Astrologia de Relocação, também conhecida como Astrologia Astrocartográfica, estuda como o mapa astral se modifica quando a pessoa se muda para outro local geográfico. Esta técnica recalcula as posições das casas e ângulos do mapa natal como se a pessoa tivesse nascido no novo local, mantendo as mesmas posições planetárias por signo e aspectos. A Relocação permite identificar lugares onde determinadas energias planetárias são amplificadas, ajudando a escolher locais favoráveis para diferentes objetivos como carreira, relacionamentos, criatividade ou crescimento espiritual. É uma ferramenta valiosa para quem considera mudanças de residência ou viagens prolongadas.",
    relatedTerms: [
      "astrocartografia",
      "linhas-planetarias",
      "mudanca-geografica",
      "angulos-do-mapa",
      "casas-astrologicas",
    ],
    image: "/placeholder.svg?height=200&width=200&query=relocation astrology astrocartography travel",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Lua Fora de Curso",
    slug: "lua-fora-de-curso",
    shortDefinition: "Período em que a Lua não forma mais aspectos maiores antes de mudar de signo.",
    description:
      "A Lua Fora de Curso (Moon Void of Course) é um fenômeno astrológico que ocorre quando a Lua não formará mais nenhum aspecto maior (conjunção, sextil, quadratura, trígono ou oposição) com outros planetas antes de mudar de signo. Durante este período, que pode durar de minutos a dias, as atividades tendem a não se desenvolver como planejado, há mais confusão, desvios e resultados inesperados. Tradicionalmente, é considerado um momento desfavorável para iniciar novos projetos, tomar decisões importantes ou fazer compras significativas. No entanto, é ideal para atividades contemplativas, finalização de tarefas, meditação e descanso.",
    relatedTerms: ["lua", "aspectos-astrologicos", "timing", "astrologia-horaria", "astrologia-eletiva"],
    image: "/placeholder.svg?height=200&width=200&query=void of course moon astrology timing",
    category: "fenomenos-astrologicos",
  },
  {
    term: "Estrela Fixa",
    slug: "estrela-fixa",
    shortDefinition:
      "Estrelas além do nosso sistema solar que influenciam o mapa astral quando alinhadas com planetas.",
    description:
      "As Estrelas Fixas são estrelas além do nosso sistema solar que, na astrologia tradicional, exercem influências específicas quando alinhadas com planetas ou pontos sensíveis no mapa astral. Diferente dos planetas que se movem constantemente pelo zodíaco, as estrelas fixas parecem relativamente imóveis (embora na realidade se movam muito lentamente). Algumas das mais importantes incluem Aldebaran, Regulus, Antares e Fomalhaut (as quatro estrelas reais), Sirius, Spica, Algol e Alcyone (das Plêiades). Cada estrela fixa possui qualidades específicas e pode amplificar ou modificar a expressão de um planeta quando em conjunção. Na astrologia tradicional, as estrelas fixas eram consideradas poderosas influências, especialmente quando conjuntas a luminares ou ângulos do mapa.",
    relatedTerms: ["constelacoes", "planetas", "conjuncao", "astrologia-tradicional", "influencias-celestes"],
    image: "/placeholder.svg?height=200&width=200&query=fixed stars astrology constellations",
    category: "corpos-celestes",
  },
  {
    term: "Eclipses",
    slug: "eclipses",
    shortDefinition:
      "Fenômenos celestes que ocorrem quando Sol, Lua e Terra se alinham, gerando períodos de transformação.",
    description:
      "Os Eclipses são fenômenos celestes que ocorrem quando Sol, Lua e Terra se alinham. No Eclipse Solar, a Lua nova bloqueia a luz do Sol; no Eclipse Lunar, a Lua cheia passa pela sombra da Terra. Astrologicamente, os eclipses são considerados portais poderosos de transformação e mudança acelerada. Ocorrem próximos aos Nodos Lunares e seus efeitos podem ser sentidos semanas antes e meses depois. Quando um eclipse ativa pontos sensíveis no mapa natal (formando conjunção ou oposição com planetas ou ângulos), pode desencadear eventos significativos relacionados à casa e ao planeta afetados, frequentemente trazendo revelações, finalizações e novos começos.",
    relatedTerms: ["eclipse-solar", "eclipse-lunar", "nodos-lunares", "transformacao", "ciclos-lunares"],
    image: "/placeholder.svg?height=200&width=200&query=eclipse astrology transformation portal",
    category: "fenomenos-astrologicos",
  },
  {
    term: "Progressão Secundária",
    slug: "progressao-secundaria",
    shortDefinition: "Técnica preditiva onde cada dia após o nascimento equivale a um ano de vida.",
    description:
      "A Progressão Secundária é uma técnica preditiva onde cada dia após o nascimento equivale a um ano de vida da pessoa. Por exemplo, o mapa progressado para os 30 anos seria calculado usando a posição dos planetas 30 dias após o nascimento. Esta técnica mostra a evolução interna e o desenvolvimento psicológico ao longo da vida. As progressões são particularmente úteis para observar mudanças de signo dos planetas pessoais (especialmente Mercúrio, Vênus e Marte) e as fases progressadas da Lua, que ocorrem aproximadamente a cada 27-28 anos. As progressões complementam os trânsitos, mostrando o desenvolvimento interno enquanto os trânsitos indicam eventos externos.",
    relatedTerms: [
      "progressoes",
      "previsao-astrologica",
      "desenvolvimento-interno",
      "evolucao-pessoal",
      "ciclos-de-vida",
    ],
    image: "/placeholder.svg?height=200&width=200&query=secondary progressions astrology evolution",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Direção Primária",
    slug: "direcao-primaria",
    shortDefinition: "Técnica preditiva antiga baseada na rotação da Terra, onde cada grau equivale a um ano de vida.",
    description:
      "A Direção Primária é uma das técnicas preditivas mais antigas da astrologia, baseada na rotação da Terra em torno de seu eixo. Neste método, o movimento dos planetas e pontos do mapa natal é projetado ao longo da eclíptica, onde cada grau de movimento equivale aproximadamente a um ano de vida. As Direções Primárias eram amplamente utilizadas na astrologia tradicional e medieval, sendo consideradas particularmente eficazes para prever eventos significativos e momentos de mudança. Embora seja uma técnica complexa que requer cálculos elaborados, muitos astrólogos tradicionais ainda a consideram uma das ferramentas preditivas mais precisas e poderosas.",
    relatedTerms: ["previsao-astrologica", "progressoes", "transitos", "astrologia-tradicional", "ciclos-de-vida"],
    image: "/placeholder.svg?height=200&width=200&query=primary directions astrology prediction",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Retorno Lunar",
    slug: "retorno-lunar",
    shortDefinition: "Mapa calculado para o momento em que a Lua retorna à sua posição natal, a cada 27-28 dias.",
    description:
      "O Retorno Lunar é um mapa astrológico calculado para o momento exato em que a Lua retorna à mesma posição (grau e signo) que ocupava no nascimento, o que ocorre aproximadamente a cada 27-28 dias. Este mapa oferece insights sobre as tendências emocionais, experiências e eventos do mês lunar que se inicia. É uma técnica preditiva de curto prazo, particularmente útil para acompanhar ciclos emocionais, relações familiares e questões domésticas. O Retorno Lunar pode ser calculado para o local de nascimento ou para o local atual de residência, com este último refletindo mais precisamente as circunstâncias presentes.",
    relatedTerms: ["lua", "ciclos-lunares", "previsao-astrologica", "emocoes", "ciclos-mensais"],
    image: "/placeholder.svg?height=200&width=200&query=lunar return monthly prediction astrology",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Asteroides",
    slug: "asteroides",
    shortDefinition: "Corpos celestes menores que oferecem nuances adicionais na interpretação astrológica.",
    description:
      "Os Asteroides são corpos celestes menores que orbitam o Sol, principalmente na faixa entre Marte e Júpiter. Na astrologia moderna, vários asteroides são incorporados à interpretação para oferecer nuances adicionais. Os mais utilizados são os quatro asteroides principais: Ceres (nutrição, maternidade), Palas (sabedoria, criatividade intelectual), Juno (parcerias, compromisso) e Vesta (devoção, foco). Outros asteroides populares incluem Quíron (ferida interior, cura), Eros (paixão erótica), Psique (alma), Lilith (feminino selvagem) e asteroides com nomes de figuras mitológicas ou históricas. Eles enriquecem a interpretação do mapa, oferecendo insights sobre áreas específicas da vida.",
    relatedTerms: ["ceres", "palas", "juno", "vesta", "quiron", "corpos-celestes"],
    image: "/placeholder.svg?height=200&width=200&query=asteroids astrology ceres pallas juno vesta",
    category: "corpos-celestes",
  },
  {
    term: "Previsão Astrológica",
    slug: "previsao-astrologica",
    shortDefinition: "Estudo dos ciclos planetários para antecipar tendências e períodos significativos.",
    description:
      "A Previsão Astrológica é o estudo dos ciclos planetários e sua interação com o mapa natal para antecipar tendências, oportunidades, desafios e períodos significativos na vida de uma pessoa. Utiliza diversas técnicas como trânsitos (movimento atual dos planetas), progressões (evolução interna), direções, retornos solares e lunares, eclipses e ciclos planetários. Diferente da adivinhação, a previsão astrológica trabalha com probabilidades e tendências, reconhecendo o papel do livre-arbítrio nas escolhas individuais. Seu objetivo é oferecer consciência sobre os ciclos temporais, permitindo que a pessoa navegue os períodos com maior compreensão e faça escolhas mais alinhadas com os fluxos cósmicos.",
    relatedTerms: ["transitos", "progressoes", "revolucao-solar", "eclipses", "ciclos-planetarios", "timing"],
    image: "/placeholder.svg?height=200&width=200&query=astrological prediction forecasting cycles",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Interpretação Natal",
    slug: "interpretacao-natal",
    shortDefinition: "Análise do mapa astral de nascimento para compreender personalidade, potenciais e desafios.",
    description:
      "A Interpretação Natal é a análise detalhada do mapa astral calculado para o momento exato do nascimento, visando compreender a personalidade, potenciais, desafios e tendências de vida da pessoa. Envolve o estudo das posições planetárias por signo e casa, aspectos entre planetas, configurações especiais, elementos, modalidades e outros fatores. Uma interpretação completa considera a integração de todos estes elementos, buscando uma visão holística que respeite a complexidade do indivíduo. Dependendo da abordagem do astrólogo, pode enfatizar previsões, psicologia, espiritualidade ou desenvolvimento pessoal, oferecendo insights sobre diversos aspectos como vocação, relacionamentos, talentos, desafios e propósito de vida.",
    relatedTerms: ["mapa-natal", "personalidade", "potenciais", "desafios", "proposito-de-vida", "autoconhecimento"],
    image: "/placeholder.svg?height=200&width=200&query=natal chart interpretation birth astrology",
    category: "tecnicas-interpretativas",
  },
  {
    term: "Almutem",
    slug: "almutem",
    shortDefinition: "Planeta com maior dignidade essencial e acidental em um ponto específico do mapa.",
    description:
      "O Almutem é o planeta que possui a maior soma de dignidades essenciais (domicílio, exaltação, triplicidade, termo e face) e acidentais (casa, aspectos, etc.) em um ponto específico do mapa astral. Na astrologia tradicional, o Almutem Figuris é o planeta com maior dignidade em todos os cinco pontos hylegiais (Sol, Lua, Ascendente, Parte da Fortuna e Lua Nova/Cheia pré-natal), sendo considerado o regente geral do mapa. O conceito de Almutem é utilizado para determinar qual planeta tem a maior influência sobre determinada área da vida ou sobre o mapa como um todo, oferecendo insights importantes sobre o destino e as tendências predominantes.",
    relatedTerms: [
      "dignidades-essenciais",
      "dignidades-acidentais",
      "regente-do-mapa",
      "astrologia-tradicional",
      "pontos-hylegiais",
    ],
    image: "/placeholder.svg?height=200&width=200&query=almutem traditional astrology dignity",
    category: "tecnicas-interpretativas",
  },
  {
    term: "Parte do Espírito",
    slug: "parte-do-espirito",
    shortDefinition: "Ponto calculado a partir do Ascendente, Sol e Lua, indicando propósito espiritual e vocação.",
    description:
      "A Parte do Espírito, também conhecida como Parte do Sol, é um ponto arábico calculado a partir das posições do Ascendente, Sol e Lua. Sua fórmula é: Ascendente + Sol - Lua (para mapas diurnos) ou Ascendente + Lua - Sol (para mapas noturnos). Enquanto a Parte da Fortuna representa felicidade material e bem-estar físico, a Parte do Espírito indica propósito espiritual, vocação e realização da alma. Este ponto mostra onde e como podemos encontrar significado profundo, expressão criativa e conexão com nosso propósito maior. Na astrologia tradicional, era considerada especialmente importante para questões relacionadas à carreira, reputação e contribuição para o mundo.",
    relatedTerms: ["parte-da-fortuna", "pontos-arabicos", "proposito-espiritual", "vocacao", "realizacao-da-alma"],
    image: "/placeholder.svg?height=200&width=200&query=part of spirit pars solis astrology purpose",
    category: "pontos-especiais",
  },
  {
    term: "Fortuna Diurna",
    slug: "fortuna-diurna",
    shortDefinition: "Cálculo da Parte da Fortuna para mapas de nascimento durante o dia (Sol acima do horizonte).",
    description:
      "A Fortuna Diurna refere-se ao cálculo da Parte da Fortuna para mapas de nascimento diurnos, ou seja, quando o Sol está acima do horizonte (casas 7 a 12). Neste caso, a fórmula utilizada é: Ascendente + Lua - Sol. Este ponto indica áreas de fluxo natural, felicidade, prosperidade e bem-estar físico. Na astrologia tradicional, a distinção entre cálculos diurnos e noturnos (sect) era considerada fundamental para a correta interpretação de vários elementos do mapa, incluindo as partes arábicas. A Parte da Fortuna diurna mostra onde encontramos facilidade e abundância através da expressão emocional (Lua) em harmonia com nossa identidade consciente (Sol).",
    relatedTerms: ["parte-da-fortuna", "fortuna-noturna", "sect", "pontos-arabicos", "prosperidade"],
    image: "/placeholder.svg?height=200&width=200&query=diurnal fortune part of fortune day chart",
    category: "pontos-especiais",
  },
  {
    term: "Fortuna Noturna",
    slug: "fortuna-noturna",
    shortDefinition: "Cálculo da Parte da Fortuna para mapas de nascimento durante a noite (Sol abaixo do horizonte).",
    description:
      "A Fortuna Noturna refere-se ao cálculo da Parte da Fortuna para mapas de nascimento noturnos, ou seja, quando o Sol está abaixo do horizonte (casas 1 a 6). Neste caso, a fórmula utilizada é: Ascendente + Sol - Lua. Este ponto indica áreas de fluxo natural, felicidade, prosperidade e bem-estar físico. Na astrologia tradicional, a distinção entre cálculos noturnos e diurnos (sect) era considerada essencial para a correta interpretação. A Parte da Fortuna noturna mostra onde encontramos facilidade e abundância através da expressão de nossa identidade consciente (Sol) em harmonia com nossas necessidades emocionais (Lua).",
    relatedTerms: ["parte-da-fortuna", "fortuna-diurna", "sect", "pontos-arabicos", "prosperidade"],
    image: "/placeholder.svg?height=200&width=200&query=nocturnal fortune part of fortune night chart",
    category: "pontos-especiais",
  },
  {
    term: "Hora Planetária",
    slug: "hora-planetaria",
    shortDefinition: "Divisão do dia e da noite em 12 partes iguais, cada uma regida por um planeta.",
    description:
      "A Hora Planetária é um sistema tradicional que divide o período entre o nascer e o pôr do sol (dia) e entre o pôr do sol e o nascer do sol (noite) em 12 partes iguais cada, resultando em 24 horas planetárias de duração variável ao longo do ano. Cada hora é regida por um dos sete planetas tradicionais (Sol, Lua, Mercúrio, Vênus, Marte, Júpiter e Saturno) seguindo a ordem caldeia. O regente da primeira hora do dia determina o regente do dia da semana. As horas planetárias são utilizadas na astrologia horária, magia ritual, eleições astrológicas e para escolher momentos propícios para atividades específicas alinhadas com a energia do planeta regente.",
    relatedTerms: ["planetas", "dias-da-semana", "astrologia-horaria", "astrologia-eletiva", "magia-ritual"],
    image: "/placeholder.svg?height=200&width=200&query=planetary hours traditional astrology timing",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Senhor do Tempo",
    slug: "senhor-do-tempo",
    shortDefinition: "Planeta que rege um período específico da vida segundo técnicas preditivas tradicionais.",
    description:
      "O Senhor do Tempo (Time Lord) é um conceito da astrologia helenística e medieval que se refere ao planeta que rege um período específico da vida segundo técnicas preditivas tradicionais como Firdaria, Profecções e Cronócrator. Estes sistemas dividem a vida em períodos governados por diferentes planetas, que se tornam temporariamente mais influentes. Por exemplo, nas Profecções anuais, a cada ano um signo diferente (e seu regente) se torna o 'Senhor do Ano'. O planeta que atua como Senhor do Tempo ativa as áreas do mapa natal relacionadas a ele e seus trânsitos ganham especial importância durante seu período de regência.",
    relatedTerms: ["firdaria", "profeccoes", "cronocrator", "previsao-astrologica", "astrologia-tradicional"],
    image: "/placeholder.svg?height=200&width=200&query=time lord chronocrator traditional astrology",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Anaretas",
    slug: "anaretas",
    shortDefinition: "Planeta ou ponto que indica potencial de perigo ou dano significativo no mapa astral.",
    description:
      "Anaretas é um termo da astrologia tradicional que se refere a um planeta ou ponto que indica potencial de perigo ou dano significativo no mapa astral. Originalmente associado à previsão de longevidade e causas de morte, o conceito tem sido reinterpretado na astrologia moderna para indicar áreas de desafio extremo ou transformação profunda. Um planeta pode se tornar anareta quando está mal posicionado (em detrimento ou queda), aflito por aspectos desafiadores, ou quando ocupa casas consideradas perigosas (6, 8 ou 12). O estudo dos anaretas era parte importante da astrologia médica e preditiva tradicional, embora hoje seja abordado com uma perspectiva mais psicológica e metafórica.",
    relatedTerms: ["hyleg", "alcocoden", "astrologia-medica", "casas-cadentes", "transformacao-profunda"],
    image: "/placeholder.svg?height=200&width=200&query=anareta traditional astrology challenge",
    category: "tecnicas-interpretativas",
  },
  {
    term: "Trânsitos Lentos",
    slug: "transitos-lentos",
    shortDefinition: "Movimento dos planetas exteriores (Júpiter a Plutão) e seu impacto em períodos longos.",
    description:
      "Os Trânsitos Lentos referem-se ao movimento dos planetas exteriores (Júpiter, Saturno, Urano, Netuno e Plutão) pelo zodíaco e seu impacto quando formam aspectos com pontos do mapa natal. Por terem órbitas mais longas, estes planetas permanecem em um signo por períodos extensos: Júpiter cerca de 1 ano, Saturno 2-3 anos, Urano 7 anos, Netuno 14 anos e Plutão até 30 anos em um único signo. Seus trânsitos marcam fases importantes de desenvolvimento, transformação e reestruturação, frequentemente associados a eventos significativos e mudanças profundas. Os trânsitos lentos tendem a corresponder a processos de longo prazo e são especialmente impactantes quando formam aspectos com planetas pessoais ou ângulos do mapa natal.",
    relatedTerms: ["transitos", "planetas-exteriores", "ciclos-planetarios", "previsao-astrologica", "transformacao"],
    image: "/placeholder.svg?height=200&width=200&query=slow transits outer planets astrology",
    category: "transitos",
  },
  {
    term: "Trânsitos Rápidos",
    slug: "transitos-rapidos",
    shortDefinition: "Movimento dos planetas interiores (Sol a Marte) e seu impacto em períodos curtos.",
    description:
      "Os Trânsitos Rápidos referem-se ao movimento dos planetas interiores (Sol, Lua, Mercúrio, Vênus e Marte) pelo zodíaco e seu impacto quando formam aspectos com pontos do mapa natal. Por terem órbitas mais curtas, estes planetas se movem rapidamente pelos signos: a Lua percorre todo o zodíaco em aproximadamente 28 dias, Mercúrio e Vênus em alguns meses, o Sol em um ano e Marte em cerca de 2 anos. Seus trânsitos tendem a corresponder a eventos cotidianos, humores passageiros e situações de curta duração. Embora geralmente menos impactantes que os trânsitos lentos, os trânsitos rápidos podem desencadear eventos significativos quando ativam configurações importantes do mapa natal ou coincidem com trânsitos lentos.",
    relatedTerms: [
      "transitos",
      "planetas-interiores",
      "ciclos-planetarios",
      "previsao-astrologica",
      "eventos-cotidianos",
    ],
    image: "/placeholder.svg?height=200&width=200&query=fast transits inner planets astrology",
    category: "transitos",
  },
  {
    term: "Ascendente Retrógrado",
    slug: "ascendente-retrogrado",
    shortDefinition: "Conceito errôneo, pois o Ascendente é um ponto matemático que não pode ser retrógrado.",
    description:
      "O termo 'Ascendente Retrógrado' é um conceito errôneo na astrologia, pois o Ascendente é um ponto matemático calculado a partir da rotação da Terra, não um corpo celeste que possa ter movimento retrógrado. O Ascendente representa o signo que estava nascendo no horizonte leste no momento do nascimento e sempre se move em uma direção constante devido à rotação da Terra. A confusão pode surgir quando o regente do Ascendente (o planeta que governa o signo ascendente) está retrógrado, o que é uma configuração válida e significativa. Neste caso, a expressão da personalidade e abordagem da vida pode ser mais interiorizada, reflexiva ou não-convencional.",
    relatedTerms: ["ascendente", "planeta-retrogrado", "regente-do-mapa", "conceitos-erroneos", "rotacao-terrestre"],
    image: "/placeholder.svg?height=200&width=200&query=ascendant misconception astrology",
    category: "conceitos-astrologicos",
  },
  {
    term: "Astrologia Infantil",
    slug: "astrologia-infantil",
    shortDefinition:
      "Estudo do mapa astral de crianças para compreender temperamento, talentos e necessidades específicas.",
    description:
      "A Astrologia Infantil é o estudo do mapa astral de bebês e crianças para compreender seu temperamento inato, talentos, desafios e necessidades específicas. Esta abordagem especializada ajuda pais, educadores e cuidadores a entender melhor a criança como indivíduo único, respeitando sua natureza essencial. A interpretação enfatiza potenciais a serem nutridos, desafios a serem apoiados com sensibilidade e estratégias educacionais alinhadas com o temperamento da criança. Diferente da astrologia para adultos, a infantil considera o estágio de desenvolvimento, reconhecendo que muitos aspectos do mapa ainda estão em processo de manifestação e que o ambiente e a educação têm papel fundamental na expressão do potencial natal.",
    relatedTerms: [
      "temperamento",
      "desenvolvimento-infantil",
      "educacao",
      "talentos-inatos",
      "necessidades-emocionais",
    ],
    image: "/placeholder.svg?height=200&width=200&query=child astrology development talents",
    category: "ramos-astrologicos",
  },
  {
    term: "Astrologia Empresarial",
    slug: "astrologia-empresarial",
    shortDefinition: "Aplicação da astrologia para timing de negócios, análise de empresas e tendências de mercado.",
    description:
      "A Astrologia Empresarial é a aplicação de princípios astrológicos ao mundo dos negócios, finanças e empreendedorismo. Inclui a análise do momento de fundação de empresas (mapa astral da empresa), timing para lançamentos, fusões, contratos e decisões importantes, compatibilidade entre sócios, seleção de equipes e previsão de tendências de mercado. Astrólogos empresariais também analisam ciclos econômicos através de configurações planetárias maiores, como conjunções Júpiter-Saturno e ciclos de Urano e Plutão. Esta especialidade combina astrologia horária, eletiva, mundana e sinastria para oferecer insights estratégicos que complementam (não substituem) análises convencionais de mercado e planejamento empresarial.",
    relatedTerms: [
      "astrologia-financeira",
      "ciclos-economicos",
      "timing-de-negocios",
      "mapa-empresarial",
      "tendencias-de-mercado",
    ],
    image: "/placeholder.svg?height=200&width=200&query=business astrology market timing",
    category: "ramos-astrologicos",
  },
  {
    term: "Astrologia Financeira",
    slug: "astrologia-financeira",
    shortDefinition: "Estudo dos ciclos planetários para prever tendências econômicas e movimentos de mercado.",
    description:
      "A Astrologia Financeira é o estudo dos ciclos planetários e suas correlações com tendências econômicas, movimentos de mercado e comportamento de ativos financeiros. Esta especialidade analisa trânsitos planetários, eclipses, retrogradações e ciclos maiores como conjunções Júpiter-Saturno e ciclos de Urano e Plutão para identificar potenciais pontos de virada, períodos de expansão ou contração econômica e setores favorecidos em diferentes momentos. Praticantes desta área também podem analisar mapas astrais de bolsas de valores, moedas, commodities e até mesmo criptomoedas. A Astrologia Financeira é utilizada como ferramenta complementar por alguns investidores e traders, oferecendo uma perspectiva de timing baseada em ciclos cósmicos que vai além da análise técnica e fundamental convencional.",
    relatedTerms: [
      "ciclos-economicos",
      "mercado-financeiro",
      "investimentos",
      "astrologia-empresarial",
      "previsao-de-mercado",
    ],
    image: "/placeholder.svg?height=200&width=200&query=financial astrology market cycles investment",
    category: "ramos-astrologicos",
  },
  {
    term: "Zodíaco Sideral",
    slug: "zodiaco-sideral",
    shortDefinition: "Sistema zodiacal baseado nas constelações físicas, utilizado na astrologia védica.",
    description:
      "O Zodíaco Sideral é um sistema zodiacal que se alinha com as constelações físicas no céu, em contraste com o Zodíaco Tropical que se baseia nas estações do ano. Devido à precessão dos equinócios (um movimento lento da Terra que causa um deslocamento gradual entre os dois sistemas), existe atualmente uma diferença de aproximadamente 23° entre os zodíacos sideral e tropical. O Zodíaco Sideral é utilizado principalmente na Astrologia Védica (Jyotish) e em algumas outras tradições astrológicas orientais. Neste sistema, as posições planetárias são calculadas em relação às estrelas fixas, o que resulta em posições de signos diferentes das encontradas na astrologia ocidental para a mesma data de nascimento.",
    relatedTerms: ["zodiaco-tropical", "astrologia-vedica", "precessao-dos-equinocios", "jyotish", "ayanamsa"],
    image: "/placeholder.svg?height=200&width=200&query=sidereal zodiac constellations vedic astrology",
    category: "sistemas-astrologicos",
  },
  {
    term: "Zodíaco Tropical",
    slug: "zodiaco-tropical",
    shortDefinition: "Sistema zodiacal baseado nas estações do ano, utilizado na astrologia ocidental.",
    description:
      "O Zodíaco Tropical é um sistema zodiacal baseado nas estações do ano, onde o ponto zero de Áries é definido pelo equinócio de primavera no hemisfério norte (por volta de 21 de março). Este sistema, utilizado predominantemente na astrologia ocidental, não se alinha diretamente com as constelações físicas devido à precessão dos equinócios. O Zodíaco Tropical é um sistema sazonal que reflete os ciclos da natureza e a relação da Terra com o Sol ao longo do ano. Seus defensores argumentam que ele captura melhor as energias arquetípicas associadas a cada período do ano e as qualidades essenciais dos signos, independentemente da posição das constelações físicas.",
    relatedTerms: ["zodiaco-sideral", "astrologia-ocidental", "equinocio", "solsticio", "estacoes"],
    image: "/placeholder.svg?height=200&width=200&query=tropical zodiac seasons western astrology",
    category: "sistemas-astrologicos",
  },
  {
    term: "Aspecto Aplicativo",
    slug: "aspecto-aplicativo",
    shortDefinition: "Aspecto que está se formando entre dois planetas em movimento.",
    description:
      "Um Aspecto Aplicativo ocorre quando dois planetas estão se aproximando para formar um aspecto exato. Na astrologia tradicional e horária, os aspectos aplicativos são considerados mais potentes e indicam eventos que estão por vir ou situações que ainda se desenvolverão. A energia do aspecto está aumentando e seu efeito tende a ser mais forte e direto. Os aspectos aplicativos são especialmente importantes na astrologia horária e eletiva para determinar o timing e a probabilidade de eventos futuros.",
    relatedTerms: ["aspectos-astrologicos", "aspecto-separativo", "orbe", "astrologia-horaria", "timing"],
    image: "/placeholder.svg?height=200&width=200&query=applying aspect astrology planets approaching",
    category: "aspectos",
  },
  {
    term: "Aspecto Separativo",
    slug: "aspecto-separativo",
    shortDefinition: "Aspecto que está se desfazendo entre dois planetas em movimento.",
    description:
      "Um Aspecto Separativo ocorre quando dois planetas já formaram um aspecto exato e agora estão se afastando um do outro. Na astrologia tradicional e horária, os aspectos separativos indicam eventos que já ocorreram ou situações que estão perdendo força e influência. A energia do aspecto está diminuindo e seu efeito tende a ser mais fraco ou relacionado a questões do passado. Os aspectos separativos são importantes na astrologia horária para determinar se um evento já aconteceu ou se uma oportunidade já passou.",
    relatedTerms: ["aspectos-astrologicos", "aspecto-aplicativo", "orbe", "astrologia-horaria", "timing"],
    image: "/placeholder.svg?height=200&width=200&query=separating aspect astrology planets moving apart",
    category: "aspectos",
  },
  {
    term: "Signo Interceptado",
    slug: "signo-interceptado",
    shortDefinition: "Signo que está contido inteiramente dentro de uma casa, sem ocupar nenhuma cúspide.",
    description:
      "Um Signo Interceptado ocorre quando um signo inteiro está contido dentro de uma casa astrológica, sem ocupar nenhuma cúspide de casa. Isso acontece em sistemas de casas de tamanho desigual (como Placidus) e em latitudes extremas. Quando um signo está interceptado, sua energia pode ser de difícil acesso consciente, ficando 'presa' ou menos disponível para expressão direta. Os planetas em signos interceptados podem indicar talentos ocultos, questões kármicas ou áreas da vida que requerem esforço extra para serem integradas. A interceptação sempre ocorre em pares opostos do zodíaco.",
    relatedTerms: ["casa-interceptada", "sistemas-de-casas", "signos-do-zodiaco", "cuspidesde-casas", "placidus"],
    image: "/placeholder.svg?height=200&width=200&query=intercepted sign astrology hidden energy",
    category: "signos",
  },
  {
    term: "Casa Vazia",
    slug: "casa-vazia",
    shortDefinition: "Casa astrológica que não contém planetas.",
    description:
      "Uma Casa Vazia é uma casa astrológica que não contém nenhum planeta no mapa natal. Isso não significa que esta área da vida seja irrelevante ou inativa, apenas que não há um foco planetário direto nela. A energia e os assuntos desta casa são expressos principalmente através do planeta que a rege (o regente da casa), sua posição por signo e casa, e seus aspectos. Por exemplo, uma Casa 7 vazia (relacionamentos) seria interpretada observando-se onde está o regente de Libra (tradicionalmente Vênus) e como ele está configurado no mapa.",
    relatedTerms: ["casas-astrologicas", "regente-da-casa", "planetas", "interpretacao-natal", "foco-de-energia"],
    image: "/placeholder.svg?height=200&width=200&query=empty house astrology ruler interpretation",
    category: "casas",
  },
  {
    term: "Casa Interceptada",
    slug: "casa-interceptada",
    shortDefinition: "Casa que contém um signo interceptado em seu interior.",
    description:
      "Uma Casa Interceptada é uma casa astrológica que contém um signo interceptado em seu interior. Isso significa que há um signo completamente contido dentro da casa, sem ocupar nenhuma cúspide. As casas interceptadas frequentemente são maiores que as outras e contêm dois signos completos. Os assuntos desta casa podem ser complexos, com camadas ocultas ou aspectos que precisam ser trabalhados em profundidade. A expressão da casa depende tanto do signo na cúspide quanto do signo interceptado, criando uma dinâmica dual que pode requerer maior consciência para ser integrada efetivamente.",
    relatedTerms: ["signo-interceptado", "sistemas-de-casas", "cuspidesde-casas", "placidus", "complexidade"],
    image: "/placeholder.svg?height=200&width=200&query=intercepted house astrology complex energy",
    category: "casas",
  },
  {
    term: "Signo Dominante",
    slug: "signo-dominante",
    shortDefinition:
      "Signo que exerce maior influência no mapa astral devido à concentração de planetas ou pontos importantes.",
    description:
      "Um Signo Dominante é aquele que exerce maior influência no mapa astral devido à concentração de planetas ou pontos importantes nele. Quando vários planetas (especialmente pessoais como Sol, Lua, Mercúrio, Vênus e Marte) estão no mesmo signo, as qualidades deste signo se tornam proeminentes na personalidade e experiência de vida da pessoa. O signo dominante pode se manifestar de forma mais evidente que o próprio signo solar, colorindo fortemente a expressão geral do indivíduo. A dominância também pode ocorrer quando o signo ascendente e solar são o mesmo, ou quando o regente do mapa está em seu próprio signo.",
    relatedTerms: ["stellium", "concentracao-planetaria", "signos-do-zodiaco", "personalidade", "enfase-zodiacal"],
    image: "/placeholder.svg?height=200&width=200&query=dominant sign astrology planetary concentration",
    category: "signos",
  },
  {
    term: "Astro Dominante",
    slug: "astro-dominante",
    shortDefinition: "Planeta que exerce maior influência no mapa astral devido à sua posição, aspectos ou função.",
    description:
      "O Astro Dominante é o planeta que exerce maior influência no mapa astral devido à sua posição, aspectos, função ou proeminência. Um planeta pode se tornar dominante por várias razões: estar angular (próximo aos ângulos do mapa), formar muitos aspectos com outros planetas, ser o regente do Ascendente (regente do mapa), estar em domicílio ou exaltação, ou ser o foco de uma configuração importante como um stellium ou yod. O astro dominante frequentemente indica uma função psicológica ou área de vida que assume papel central na experiência da pessoa, colorindo fortemente sua personalidade e abordagem geral da existência.",
    relatedTerms: [
      "planeta-regente",
      "angulos-do-mapa",
      "aspectos-astrologicos",
      "dignidades-essenciais",
      "personalidade",
    ],
    image: "/placeholder.svg?height=200&width=200&query=dominant planet astrology influential celestial body",
    category: "planetas",
  },
  {
    term: "Lunação",
    slug: "lunacao",
    shortDefinition: "Ciclo completo da Lua, do início de uma Lua Nova até o início da próxima.",
    description:
      "A Lunação é o ciclo completo da Lua, que dura aproximadamente 29,5 dias, do início de uma Lua Nova até o início da próxima. Este ciclo inclui todas as fases lunares: Lua Nova, Crescente, Cheia e Minguante. Na astrologia, cada lunação é influenciada pelo signo em que ocorre a Lua Nova e pelos aspectos que a conjunção Sol-Lua forma com outros planetas. As lunações são utilizadas para previsões de curto prazo e para compreender ciclos emocionais, criativos e de manifestação. Cada fase da lunação tem qualidades energéticas específicas que podem ser aproveitadas para diferentes tipos de atividades e iniciativas.",
    relatedTerms: ["lua-nova", "lua-cheia", "fases-da-lua", "ciclos-lunares", "previsao-astrologica"],
    image: "/placeholder.svg?height=200&width=200&query=lunation cycle moon phases astrology",
    category: "fenomenos-astrologicos",
  },
  {
    term: "Lua Nova",
    slug: "lua-nova",
    shortDefinition: "Fase lunar em que a Lua está em conjunção com o Sol, marcando o início de um novo ciclo.",
    description:
      "A Lua Nova ocorre quando a Lua está em conjunção com o Sol (mesmo grau do zodíaco), marcando o início de um novo ciclo lunar. Nesta fase, a Lua não é visível no céu noturno, pois sua face iluminada está voltada para longe da Terra. Astrologicamente, a Lua Nova representa novos começos, sementes sendo plantadas e o início de um ciclo de crescimento. É considerado um momento propício para definir intenções, iniciar projetos e visualizar o que se deseja manifestar. O signo em que ocorre a Lua Nova influencia a qualidade energética do ciclo de 29,5 dias que se inicia, destacando temas específicos a serem trabalhados.",
    relatedTerms: ["lunacao", "conjuncao", "ciclos-lunares", "novos-comecos", "intencoes"],
    image: "/placeholder.svg?height=200&width=200&query=new moon astrology beginnings intentions",
    category: "fenomenos-astrologicos",
  },
  {
    term: "Lua Crescente",
    slug: "lua-crescente",
    shortDefinition: "Fase lunar entre a Lua Nova e a Lua Cheia, representando crescimento e construção.",
    description:
      "A Lua Crescente é a fase lunar que ocorre entre a Lua Nova e a Lua Cheia, quando a porção iluminada da Lua visível da Terra está aumentando. Esta fase inclui o Primeiro Quarto (quando a Lua forma um ângulo de 90° com o Sol) e é associada a crescimento, construção e desenvolvimento. Astrologicamente, é um período favorável para tomar ações concretas, superar obstáculos iniciais e construir sobre as intenções estabelecidas na Lua Nova. A energia está em expansão, apoiando esforços consistentes e a superação de desafios. É um momento de comprometimento com o processo de manifestação e de ajustes necessários nos planos iniciais.",
    relatedTerms: ["lunacao", "lua-nova", "primeiro-quarto", "crescimento", "acao"],
    image: "/placeholder.svg?height=200&width=200&query=waxing moon astrology growth action",
    category: "fenomenos-astrologicos",
  },
  {
    term: "Lua Cheia",
    slug: "lua-cheia",
    shortDefinition: "Fase lunar em que a Lua está em oposição ao Sol, representando culminação e clareza.",
    description:
      "A Lua Cheia ocorre quando a Lua está em oposição ao Sol (180° de distância no zodíaco), com sua face completamente iluminada visível da Terra. Astrologicamente, representa o ponto de culminação, realização e máxima clareza no ciclo lunar. É um momento de maior consciência, quando questões ocultas vêm à tona e os resultados dos esforços iniciados na Lua Nova se tornam evidentes. A energia da Lua Cheia é intensa, amplificando emoções e intuição. É favorável para celebrações, rituais, trabalhos espirituais e para obter insights sobre situações. O signo em que ocorre a Lua Cheia influencia a qualidade desta culminação e os temas que são iluminados.",
    relatedTerms: ["lunacao", "oposicao", "ciclos-lunares", "culminacao", "clareza", "consciencia"],
    image: "/placeholder.svg?height=200&width=200&query=full moon astrology culmination awareness",
    category: "fenomenos-astrologicos",
  },
  {
    term: "Lua Minguante",
    slug: "lua-minguante",
    shortDefinition: "Fase lunar entre a Lua Cheia e a Lua Nova, representando liberação e reflexão.",
    description:
      "A Lua Minguante é a fase lunar que ocorre entre a Lua Cheia e a próxima Lua Nova, quando a porção iluminada da Lua visível da Terra está diminuindo. Esta fase inclui o Último Quarto (quando a Lua forma um ângulo de 270° com o Sol) e é associada a liberação, reflexão e integração. Astrologicamente, é um período favorável para soltar o que não serve mais, processar experiências, extrair aprendizados e preparar-se para o próximo ciclo. A energia está se interiorizando, apoiando a contemplação, finalização de projetos e a limpeza de padrões obsoletos. É um momento de gratidão pelo que foi realizado e de criação de espaço para novas possibilidades.",
    relatedTerms: ["lunacao", "lua-cheia", "ultimo-quarto", "liberacao", "reflexao", "integracao"],
    image: "/placeholder.svg?height=200&width=200&query=waning moon astrology release reflection",
    category: "fenomenos-astrologicos",
  },
  {
    term: "Eixo Nodal",
    slug: "eixo-nodal",
    shortDefinition: "Linha que conecta o Nodo Norte e o Nodo Sul, representando o caminho evolutivo da alma.",
    description:
      "O Eixo Nodal é a linha que conecta o Nodo Norte (Cabeça do Dragão) e o Nodo Sul (Cauda do Dragão) no mapa astral. Estes pontos são formados pela intersecção da órbita da Lua com a eclíptica (o caminho aparente do Sol). O eixo nodal representa o caminho evolutivo da alma, com o Nodo Sul indicando habilidades, padrões e comportamentos trazidos do passado (vidas passadas ou primeira metade da vida), e o Nodo Norte apontando para qualidades e experiências que precisamos desenvolver para evoluir espiritualmente. O signo e a casa onde se encontram os Nodos oferecem insights sobre as lições kármicas específicas e o propósito de vida da pessoa.",
    relatedTerms: ["nodo-norte", "nodo-sul", "karma", "evolucao-espiritual", "proposito-de-vida"],
    image: "/placeholder.svg?height=200&width=200&query=nodal axis astrology soul evolution path",
    category: "pontos-especiais",
  },
  {
    term: "Eixo do Dragão",
    slug: "eixo-do-dragao",
    shortDefinition: "Outro nome para o Eixo Nodal, referindo-se à mitologia do dragão celeste.",
    description:
      "O Eixo do Dragão é outro nome para o Eixo Nodal, referindo-se à antiga mitologia do dragão celeste cujo corpo atravessa o céu. Na tradição astrológica, a Cabeça do Dragão (Nodo Norte) e a Cauda do Dragão (Nodo Sul) representam os pontos onde o dragão 'engole' e 'libera' os luminares durante os eclipses. Esta terminologia tem raízes na astrologia védica e em tradições orientais, onde Rahu (Cabeça) e Ketu (Cauda) são considerados planetas sombra ou nodos lunares. O Eixo do Dragão carrega simbolismo profundo relacionado ao karma, destino e a jornada evolutiva da alma através de múltiplas encarnações.",
    relatedTerms: ["eixo-nodal", "cabeça-do-dragao", "cauda-do-dragao", "rahu", "ketu", "eclipses"],
    image: "/placeholder.svg?height=200&width=200&query=dragon axis astrology rahu ketu",
    category: "pontos-especiais",
  },
  {
    term: "Cabeça do Dragão",
    slug: "cabeca-do-dragao",
    shortDefinition: "Nome tradicional do Nodo Norte, representando o caminho de crescimento futuro.",
    description:
      "A Cabeça do Dragão é o nome tradicional do Nodo Norte lunar, um dos pontos onde a órbita da Lua cruza a eclíptica (o caminho aparente do Sol). Simbolicamente, representa o caminho de crescimento futuro, qualidades a serem desenvolvidas nesta vida e experiências que, embora possam ser desafiadoras inicialmente, são essenciais para a evolução espiritual. Na astrologia védica, é conhecido como Rahu e considerado um planeta sombra com natureza expansiva semelhante a Júpiter e Saturno. A posição da Cabeça do Dragão por signo e casa no mapa natal indica áreas onde somos chamados a sair da zona de conforto e desenvolver novas habilidades para cumprir nosso propósito maior.",
    relatedTerms: ["nodo-norte", "eixo-nodal", "eixo-do-dragao", "rahu", "evolucao-espiritual"],
    image: "/placeholder.svg?height=200&width=200&query=dragon's head north node astrology",
    category: "pontos-especiais",
  },
  {
    term: "Cauda do Dragão",
    slug: "cauda-do-dragao",
    shortDefinition: "Nome tradicional do Nodo Sul, representando padrões e habilidades do passado.",
    description:
      "A Cauda do Dragão é o nome tradicional do Nodo Sul lunar, um dos pontos onde a órbita da Lua cruza a eclíptica (o caminho aparente do Sol). Simbolicamente, representa padrões, comportamentos e habilidades trazidos do passado (vidas passadas ou primeira metade da vida). É uma zona de conforto e facilidade, mas também de possível estagnação se nos apegarmos demais a ela. Na astrologia védica, é conhecido como Ketu e considerado um planeta sombra com natureza espiritualizada semelhante a Marte e Netuno. A posição da Cauda do Dragão por signo e casa no mapa natal indica áreas onde temos talentos inatos mas que precisamos transcender ou utilizar de forma mais consciente para apoiar nosso caminho evolutivo.",
    relatedTerms: ["nodo-sul", "eixo-nodal", "eixo-do-dragao", "ketu", "karma", "talentos-inatos"],
    image: "/placeholder.svg?height=200&width=200&query=dragon's tail south node astrology",
    category: "pontos-especiais",
  },
  {
    term: "Trânsito de Saturno",
    slug: "transito-de-saturno",
    shortDefinition:
      "Movimento de Saturno pelo zodíaco e sua interação com o mapa natal, trazendo lições de estrutura e responsabilidade.",
    description:
      "O Trânsito de Saturno refere-se ao movimento deste planeta pelo zodíaco e sua interação com pontos do mapa natal. Saturno leva aproximadamente 29,5 anos para completar uma volta no zodíaco, permanecendo cerca de 2,5 anos em cada signo. Seus trânsitos são conhecidos por trazer lições de estrutura, responsabilidade, limites e maturidade. Quando Saturno transita sobre planetas natais ou pontos sensíveis, frequentemente ocorrem desafios, restrições ou a necessidade de trabalho árduo e paciência. Períodos significativos incluem o Retorno de Saturno (aos 29-30 anos e 58-60 anos), os quadrantes de Saturno (aos 7, 14, 21, 36, 43 anos, etc.) e os trânsitos pelas casas angulares. Embora desafiadores, os trânsitos de Saturno oferecem oportunidades para construir fundações sólidas e alcançar realizações duradouras.",
    relatedTerms: ["saturno", "retorno-de-saturno", "transitos-lentos", "responsabilidade", "estrutura", "maturidade"],
    image: "/placeholder.svg?height=200&width=200&query=saturn transit astrology responsibility structure",
    category: "transitos",
  },
  {
    term: "Trânsito de Plutão",
    slug: "transito-de-plutao",
    shortDefinition:
      "Movimento de Plutão pelo zodíaco e sua interação com o mapa natal, trazendo transformação profunda e regeneração.",
    description:
      "O Trânsito de Plutão refere-se ao movimento deste planeta pelo zodíaco e sua interação com pontos do mapa natal. Plutão leva aproximadamente 248 anos para completar uma volta no zodíaco, permanecendo entre 12 e 31 anos em cada signo (devido à sua órbita excêntrica). Seus trânsitos são conhecidos por trazer transformações profundas, crises que levam à regeneração, encontros com poder e sombra, e processos de morte e renascimento simbólicos. Quando Plutão transita sobre planetas natais ou pontos sensíveis, frequentemente ocorrem mudanças irreversíveis, revelações de verdades ocultas e a necessidade de soltar controle. Embora intensos e por vezes dolorosos, os trânsitos de Plutão oferecem oportunidades para empoderamento autêntico e renovação profunda após processos de purificação.",
    relatedTerms: ["plutao", "transitos-lentos", "transformacao", "poder", "regeneracao", "morte-e-renascimento"],
    image: "/placeholder.svg?height=200&width=200&query=pluto transit astrology transformation regeneration",
    category: "transitos",
  },
  {
    term: "Trânsito de Netuno",
    slug: "transito-de-netuno",
    shortDefinition:
      "Movimento de Netuno pelo zodíaco e sua interação com o mapa natal, trazendo dissolução de fronteiras e expansão espiritual.",
    description:
      "O Trânsito de Netuno refere-se ao movimento deste planeta pelo zodíaco e sua interação com pontos do mapa natal. Netuno leva aproximadamente 165 anos para completar uma volta no zodíaco, permanecendo cerca de 14 anos em cada signo. Seus trânsitos são conhecidos por trazer dissolução de fronteiras, experiências místicas ou espirituais, inspiração criativa, mas também confusão, ilusão e a necessidade de transcender o ego. Quando Netuno transita sobre planetas natais ou pontos sensíveis, frequentemente ocorrem períodos de nebulosidade, idealização, desilusão e eventual clareza espiritual. Os trânsitos de Netuno pedem rendição ao fluxo da vida, desenvolvimento da intuição e compaixão, e a capacidade de navegar em águas incertas com fé e sensibilidade.",
    relatedTerms: ["netuno", "transitos-lentos", "espiritualidade", "intuicao", "dissolucao", "transcendencia"],
    image: "/placeholder.svg?height=200&width=200&query=neptune transit astrology spirituality dissolution",
    category: "transitos",
  },
  {
    term: "Trânsito de Urano",
    slug: "transito-de-urano",
    shortDefinition:
      "Movimento de Urano pelo zodíaco e sua interação com o mapa natal, trazendo mudanças súbitas e libertação.",
    description:
      "O Trânsito de Urano refere-se ao movimento deste planeta pelo zodíaco e sua interação com pontos do mapa natal. Urano leva aproximadamente 84 anos para completar uma volta no zodíaco, permanecendo cerca de 7 anos em cada signo. Seus trânsitos são conhecidos por trazer mudanças súbitas, quebra de padrões, libertação, originalidade e eventos inesperados. Quando Urano transita sobre planetas natais ou pontos sensíveis, frequentemente ocorrem revoluções pessoais, insights repentinos, separações necessárias e a urgência de expressar a individualidade autêntica. Períodos significativos incluem a Oposição de Urano (aos 38-44 anos) e o Retorno de Urano (aos 84 anos). Os trânsitos de Urano, embora desestabilizadores, oferecem oportunidades para despertar, inovação e alinhamento com o verdadeiro self além de condicionamentos sociais.",
    relatedTerms: ["urano", "transitos-lentos", "mudanca", "liberdade", "originalidade", "despertar"],
    image: "/placeholder.svg?height=200&width=200&query=uranus transit astrology change awakening",
    category: "transitos",
  },
  {
    term: "Planetas Geracionais",
    slug: "planetas-geracionais",
    shortDefinition:
      "Urano, Netuno e Plutão, que permanecem em cada signo por anos ou décadas, influenciando gerações inteiras.",
    description:
      "Os Planetas Geracionais são Urano, Netuno e Plutão, que devido às suas órbitas longas, permanecem em cada signo por anos ou décadas, influenciando gerações inteiras. Urano (7 anos por signo) representa mudanças sociais, tecnologia e valores de liberdade de uma geração. Netuno (14 anos por signo) reflete ideais espirituais, artísticos e as ilusões coletivas. Plutão (12-31 anos por signo) indica transformações profundas nas estruturas de poder e obsessões coletivas. No mapa individual, a posição destes planetas por signo tem significado geracional, enquanto sua casa e aspectos com planetas pessoais mostram como estas energias coletivas se manifestam na experiência única da pessoa. Os planetas geracionais são especialmente importantes em análises sociológicas, históricas e de tendências culturais.",
    relatedTerms: ["urano", "netuno", "plutao", "geracoes", "influencias-coletivas", "movimentos-sociais"],
    image: "/placeholder.svg?height=200&width=200&query=generational planets astrology collective influence",
    category: "planetas",
  },
  {
    term: "Signo Cúspide",
    slug: "signo-cuspide",
    shortDefinition: "Nascimento próximo à transição entre dois signos, incorporando qualidades de ambos.",
    description:
      "O termo Signo Cúspide refere-se ao nascimento próximo à transição entre dois signos do zodíaco (geralmente dentro de 3 dias antes ou depois da mudança de signo), resultando na incorporação de qualidades de ambos os signos na personalidade. Por exemplo, alguém nascido na cúspide de Áries-Touro (por volta de 19-22 de abril) pode demonstrar tanto a iniciativa e coragem de Áries quanto a determinação e sensualidade de Touro. É importante notar que, tecnicamente, o Sol está sempre em um signo específico em determinado momento, mas a proximidade com o signo adjacente pode colorir a expressão do signo solar. Para determinar o signo solar exato, é necessário calcular o mapa natal com hora precisa de nascimento.",
    relatedTerms: ["signos-do-zodiaco", "transicao-de-signos", "personalidade-mista", "sol", "influencias-zodiacais"],
    image: "/placeholder.svg?height=200&width=200&query=cusp sign astrology mixed zodiac qualities",
    category: "signos",
  },
  {
    term: "Cúspide da Casa",
    slug: "cuspide-da-casa",
    shortDefinition:
      "Linha divisória entre duas casas astrológicas, marcando o início de uma nova área de experiência.",
    description:
      "A Cúspide da Casa é a linha divisória entre duas casas astrológicas, marcando o início de uma nova área de experiência no mapa natal. O signo na cúspide de uma casa influencia como os assuntos daquela casa são expressos e abordados. Por exemplo, Virgem na cúspide da Casa 10 sugere uma abordagem meticulosa e analítica à carreira. As cúspides mais importantes são as dos ângulos: Ascendente (cúspide da Casa 1), Fundo do Céu (cúspide da Casa 4), Descendente (cúspide da Casa 7) e Meio do Céu (cúspide da Casa 10). Diferentes sistemas de casas calculam as cúspides de maneiras distintas, resultando em variações nas posições das casas. Planetas próximos a uma cúspide (dentro de 3-5 graus) podem influenciar ambas as casas adjacentes.",
    relatedTerms: [
      "casas-astrologicas",
      "sistemas-de-casas",
      "angulos-do-mapa",
      "signos-nas-casas",
      "interpretacao-natal",
    ],
    image: "/placeholder.svg?height=200&width=200&query=house cusp astrology division experience",
    category: "casas",
  },
  {
    term: "Planeta na Casa",
    slug: "planeta-na-casa",
    shortDefinition:
      "Posicionamento de um planeta em uma determinada casa astrológica, influenciando como sua energia se manifesta.",
    description:
      "Planeta na Casa refere-se ao posicionamento de um planeta em uma determinada casa astrológica no mapa natal. Esta posição indica a área da vida onde a energia do planeta se manifesta mais fortemente e como ela é direcionada. Por exemplo, Vênus na Casa 5 indica que a energia de amor, prazer e valores estéticos se expressa através da criatividade, romance, filhos e atividades prazerosas. A interpretação de um planeta em uma casa considera tanto a natureza do planeta quanto o significado da casa, criando uma síntese única. Também são importantes os aspectos que o planeta forma com outros, sua dignidade essencial e o signo em que se encontra. A posição dos planetas por casa é fundamental na interpretação do mapa natal, revelando onde e como as diferentes energias planetárias são vivenciadas na experiência concreta da pessoa.",
    relatedTerms: ["casas-astrologicas", "planetas", "interpretacao-natal", "areas-da-vida", "energia-planetaria"],
    image: "/placeholder.svg?height=200&width=200&query=planet in house astrology life area expression",
    category: "interpretacao-astrologica",
  },
  {
    term: "Planeta fora de signo",
    slug: "planeta-fora-de-signo",
    shortDefinition: "Conceito errôneo, pois um planeta sempre está em algum signo do zodíaco.",
    description:
      "Planeta fora de signo é um conceito errôneo na astrologia, pois um planeta sempre está posicionado em algum signo do zodíaco. O zodíaco é um círculo completo de 360 graus dividido em 12 signos de 30 graus cada, cobrindo toda a eclíptica. Portanto, é astronomicamente impossível que um planeta esteja 'fora' de um signo. A confusão pode surgir quando se discute planetas em casas interceptadas ou quando um planeta está próximo à cúspide entre dois signos. No entanto, mesmo nestes casos, o planeta sempre ocupa um grau específico de um signo específico. Para determinar o signo exato de um planeta, é necessário calcular sua posição precisa em graus no mapa astral.",
    relatedTerms: ["signos-do-zodiaco", "posicao-planetaria", "conceitos-erroneos", "ecliptica", "graus-zodiacais"],
    image: "/placeholder.svg?height=200&width=200&query=planet zodiac sign position astrology misconception",
    category: "conceitos-astrologicos",
  },
  {
    term: "Planeta fora de curso",
    slug: "planeta-fora-de-curso",
    shortDefinition: "Estado em que um planeta não formará mais aspectos maiores antes de mudar de signo.",
    description:
      "Planeta fora de curso (ou void of course) é um estado em que um planeta não formará mais nenhum aspecto maior (conjunção, sextil, quadratura, trígono ou oposição) com outros planetas antes de mudar de signo. O termo é mais comumente aplicado à Lua, mas pode ser usado para qualquer planeta. Quando um planeta está fora de curso, sua energia pode se manifestar de forma menos direcionada, com resultados imprevisíveis ou ineficazes. Na astrologia horária e eletiva, planetas fora de curso (especialmente a Lua) são considerados desfavoráveis para iniciar novos empreendimentos, pois sugerem que a situação não se desenvolverá como planejado ou não terá consequências significativas. No entanto, este período pode ser favorável para atividades contemplativas, finalização de tarefas ou situações onde se deseja evitar interferências.",
    relatedTerms: ["lua-fora-de-curso", "aspectos-astrologicos", "astrologia-horaria", "astrologia-eletiva", "timing"],
    image: "/placeholder.svg?height=200&width=200&query=void of course planet astrology timing",
    category: "estados-planetarios",
  },
  {
    term: "Dignidade essencial",
    slug: "dignidade-essencial",
    shortDefinition:
      "Força e eficácia de um planeta baseada em sua posição zodiacal (domicílio, exaltação, triplicidade, termo e face).",
    description:
      "Dignidade essencial é um conceito da astrologia tradicional que se refere à força e eficácia de um planeta baseada em sua posição zodiacal. Existem cinco dignidades essenciais, em ordem decrescente de força: domicílio (o signo regido naturalmente pelo planeta), exaltação (signo onde o planeta expressa suas qualidades de forma elevada), triplicidade (elemento compatível com o planeta), termo (segmentos específicos de cada signo atribuídos a diferentes planetas) e face (decanatos de 10 graus). Um planeta com muitas dignidades essenciais é considerado 'forte' e capaz de manifestar suas qualidades de forma positiva e eficaz. A análise das dignidades essenciais era fundamental na astrologia tradicional para avaliar a condição geral dos planetas e sua capacidade de produzir resultados favoráveis nas áreas da vida que governam.",
    relatedTerms: [
      "domicilio-planetario",
      "exaltacao",
      "triplicidade",
      "termos-egipcios",
      "faces-decanatos",
      "astrologia-tradicional",
    ],
    image: "/placeholder.svg?height=200&width=200&query=essential dignity traditional astrology planetary strength",
    category: "dignidades-planetarias",
  },
  {
    term: "Dignidade acidental",
    slug: "dignidade-acidental",
    shortDefinition:
      "Força de um planeta baseada em fatores como posição por casa, aspectos e outras condições circunstanciais.",
    description:
      "Dignidade acidental é um conceito da astrologia tradicional que se refere à força de um planeta baseada em fatores circunstanciais além de sua posição zodiacal. Inclui elementos como posição por casa (planetas em casas angulares são mais fortes), aspectos com outros planetas (especialmente com benéficos), velocidade (planetas rápidos são mais fortes), direção (direto vs. retrógrado), relação com o Sol (oriental ou ocidental), entre outros. Enquanto as dignidades essenciais se referem à natureza intrínseca do planeta, as dignidades acidentais refletem sua condição temporária ou contextual. Um planeta pode ter pouca dignidade essencial mas ser acidentalmente forte (ou vice-versa). Na astrologia tradicional, a combinação de dignidades essenciais e acidentais era utilizada para uma avaliação completa da condição planetária e sua capacidade de manifestação.",
    relatedTerms: [
      "dignidade-essencial",
      "casas-angulares",
      "aspectos-astrologicos",
      "astrologia-tradicional",
      "condicao-planetaria",
    ],
    image: "/placeholder.svg?height=200&width=200&query=accidental dignity traditional astrology planetary condition",
    category: "dignidades-planetarias",
  },
  {
    term: "Mapa Composto",
    slug: "mapa-composto",
    shortDefinition: "Mapa astrológico criado a partir da média matemática das posições planetárias de duas pessoas.",
    description:
      "O Mapa Composto é uma técnica de sinastria (astrologia de relacionamentos) que cria um novo mapa astrológico a partir da média matemática das posições planetárias e pontos de duas pessoas. Por exemplo, se o Sol de uma pessoa está a 15° de Áries e o da outra a 15° de Gêmeos, o Sol composto estará a 15° de Touro. Este mapa representa a relação como uma entidade própria, revelando sua dinâmica interna, propósito e potencial. O Mapa Composto é particularmente útil para entender relacionamentos de longo prazo, casamentos e parcerias de negócios. Ele mostra a 'personalidade' da relação, suas forças, desafios e o que os dois indivíduos criam juntos. Diferente da sinastria tradicional que compara dois mapas, o Composto cria um terceiro mapa que representa a união.",
    relatedTerms: ["sinastria", "mapa-davison", "relacionamentos", "compatibilidade", "astrologia-de-relacionamentos"],
    image: "/placeholder.svg?height=200&width=200&query=composite chart relationship astrology union",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Mapa Dracônico",
    slug: "mapa-draconico",
    shortDefinition:
      "Mapa astrológico calculado a partir do Nodo Norte como ponto de referência, revelando propósito espiritual.",
    description:
      "O Mapa Dracônico é uma técnica astrológica que recalcula as posições planetárias usando o Nodo Norte (Cabeça do Dragão) como ponto de referência zero, em vez do equinócio de primavera tradicional. Este mapa é considerado uma representação do propósito espiritual e da alma, revelando motivações mais profundas e aspectos kármicos que podem estar ocultos no mapa natal convencional. No Mapa Dracônico, as posições dos planetas são deslocadas em relação ao mapa natal, criando uma nova perspectiva interpretativa. Quando comparado com o mapa natal, o Dracônico pode revelar tensões entre a personalidade externa (natal) e o propósito da alma (dracônico). É particularmente valorizado na astrologia esotérica e kármica para compreender a missão espiritual e padrões de vidas passadas.",
    relatedTerms: ["nodo-norte", "astrologia-karmica", "proposito-espiritual", "eixo-nodal", "evolucao-da-alma"],
    image: "/placeholder.svg?height=200&width=200&query=draconic chart spiritual purpose soul astrology",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Mapa Kármico",
    slug: "mapa-karmico",
    shortDefinition: "Análise do mapa natal focada em padrões de vidas passadas e lições da alma nesta encarnação.",
    description:
      "O Mapa Kármico é uma abordagem interpretativa que analisa o mapa natal com foco em padrões de vidas passadas e lições da alma nesta encarnação. Não é um mapa separado, mas uma leitura especializada do mapa natal convencional, dando ênfase a elementos considerados kármicos: Nodos Lunares, Saturno, Quíron, planetas retrógrados, a Casa 12, a Parte da Fortuna e aspectos específicos. O Mapa Kármico busca identificar talentos trazidos de outras vidas (Nodo Sul), desafios a serem superados (Saturno, Quíron), dívidas kármicas (planetas em quadratura com os Nodos) e o propósito evolutivo da alma (Nodo Norte). Esta abordagem oferece insights sobre padrões repetitivos, bloqueios subconscientes e o caminho de crescimento espiritual, ajudando a pessoa a compreender sua jornada em um contexto mais amplo de evolução da alma.",
    relatedTerms: ["astrologia-karmica", "nodos-lunares", "saturno", "quiron", "planetas-retrogrados", "casa-12"],
    image: "/placeholder.svg?height=200&width=200&query=karmic chart past lives soul lessons astrology",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Sinastria Kármica",
    slug: "sinastria-karmica",
    shortDefinition: "Análise de relacionamentos focada em conexões de vidas passadas e propósito evolutivo conjunto.",
    description:
      "A Sinastria Kármica é uma abordagem especializada da astrologia de relacionamentos que foca em conexões de vidas passadas e no propósito evolutivo conjunto. Esta técnica examina aspectos específicos entre dois mapas natais que sugerem vínculos kármicos, como: contatos entre planetas pessoais e Nodos Lunares, aspectos envolvendo Saturno, Quíron e planetas retrógrados, conexões com a Casa 12, e padrões repetitivos de aspectos. A Sinastria Kármica busca identificar a natureza da conexão prévia (harmoniosa ou desafiadora), lições a serem aprendidas juntos, dívidas a serem pagas e o potencial de crescimento mútuo. Esta abordagem oferece uma perspectiva mais profunda sobre a atração magnética entre pessoas e o propósito espiritual do relacionamento, ajudando a transcender padrões limitantes e a honrar o contrato de almas subjacente.",
    relatedTerms: [
      "sinastria",
      "astrologia-karmica",
      "nodos-lunares",
      "relacionamentos",
      "contratos-de-alma",
      "vidas-passadas",
    ],
    image: "/placeholder.svg?height=200&width=200&query=karmic synastry past life connections relationships",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Mapa Progressivo",
    slug: "mapa-progressivo",
    shortDefinition:
      "Mapa astrológico calculado a partir das progressões secundárias, mostrando a evolução pessoal ao longo do tempo.",
    description:
      "O Mapa Progressivo é um mapa astrológico calculado a partir das progressões secundárias, onde cada dia após o nascimento equivale a um ano de vida. Este mapa mostra a evolução psicológica e o desenvolvimento interno da pessoa ao longo do tempo. Diferente dos trânsitos que mostram influências externas temporárias, o Mapa Progressivo revela mudanças graduais na personalidade, atitudes e perspectivas. Elementos importantes incluem mudanças de signo dos planetas pessoais (especialmente Mercúrio, Vênus e Marte), fases progressadas da Lua (que ocorrem aproximadamente a cada 27-28 anos), e aspectos formados entre planetas progressados e natais. O Mapa Progressivo é interpretado em conjunto com o mapa natal e os trânsitos para uma compreensão completa do processo de desenvolvimento pessoal em determinado momento da vida.",
    relatedTerms: [
      "progressoes-secundarias",
      "evolucao-pessoal",
      "desenvolvimento-interno",
      "previsao-astrologica",
      "ciclos-de-vida",
    ],
    image: "/placeholder.svg?height=200&width=200&query=progressed chart evolution development astrology",
    category: "tecnicas-astrologicas",
  },
  {
    term: "Planeta em combustão",
    slug: "planeta-em-combustao",
    shortDefinition: "Planeta que está a menos de 8,5 graus do Sol, tendo sua energia ofuscada ou enfraquecida.",
    description:
      "Um Planeta em Combustão é aquele que está a menos de 8,5 graus do Sol (mas não dentro de 0,5 grau, o que seria cazimi). Na astrologia tradicional, esta condição é considerada uma debilidade acidental, pois o brilho intenso do Sol 'queima' ou ofusca a energia do planeta, tornando-a menos acessível ou eficaz. Planetas em combustão podem representar qualidades que são difíceis de expressar conscientemente, talentos subdesenvolvidos ou áreas da vida onde a pessoa sente falta de clareza ou confiança. Mercúrio e Vênus são os planetas mais frequentemente em combustão devido à proximidade de suas órbitas com o Sol. Esta condição era especialmente importante na astrologia horária e eletiva, onde planetas em combustão eram considerados enfraquecidos para produzir os resultados desejados.",
    relatedTerms: [
      "cazimi",
      "dignidade-acidental",
      "sol",
      "debilidade-planetaria",
      "astrologia-tradicional",
      "conjuncao",
    ],
    image: "/placeholder.svg?height=200&width=200&query=combust planet astrology sun weakness",
    category: "estados-planetarios",
  },
  {
    term: "Planeta Cazimi",
    slug: "planeta-cazimi",
    shortDefinition: "Planeta que está a menos de 0,5 grau do Sol, tendo sua energia amplificada e fortalecida.",
    description:
      "Um Planeta Cazimi (do árabe 'kasimi', significando 'como se estivesse no coração') é aquele que está em conjunção exata com o Sol, a menos de 0,5 grau de distância. Diferente da combustão, que enfraquece o planeta, o cazimi é considerado uma condição de dignidade e força excepcional na astrologia tradicional. Um planeta cazimi está simbolicamente 'no coração do rei', recebendo proteção e poder especiais. Esta condição representa uma fusão perfeita entre a consciência (Sol) e a função específica do planeta, resultando em clareza, foco e eficácia extraordinários naquela área. Mercúrio e Vênus são os únicos planetas que podem estar cazimi. Na astrologia horária e eletiva, um planeta cazimi era considerado extremamente favorável para questões relacionadas à sua natureza.",
    relatedTerms: [
      "planeta-em-combustao",
      "dignidade-acidental",
      "sol",
      "conjuncao",
      "astrologia-tradicional",
      "forca-planetaria",
    ],
    image: "/placeholder.svg?height=200&width=200&query=cazimi planet heart of sun astrology strength",
    category: "estados-planetarios",
  },
  {
    term: "Planeta retrógrado no natal",
    slug: "planeta-retrogrado-no-natal",
    shortDefinition:
      "Planeta que aparenta movimento para trás no mapa natal, indicando internalização e revisão de sua energia.",
    description:
      "Um Planeta Retrógrado no Natal é aquele que, no momento do nascimento, aparentava mover-se para trás no zodíaco visto da Terra. Esta condição sugere que a energia do planeta é internalizada, revisada e processada de forma mais profunda e reflexiva. Planetas retrógrados natais frequentemente indicam áreas da vida que requerem reavaliação, integração de experiências passadas (possivelmente de vidas anteriores) e desenvolvimento não-convencional. Mercúrio retrógrado pode indicar um pensamento mais intuitivo que linear; Vênus retrógrado, uma reavaliação de valores e relacionamentos; Marte retrógrado, uma abordagem indireta à ação e assertividade. Aproximadamente 20% das pessoas nascem com Mercúrio retrógrado, enquanto planetas externos como Urano, Netuno e Plutão estão retrógrados cerca de 40% do tempo, tornando esta condição bastante comum.",
    relatedTerms: ["planeta-retrogrado", "movimento-aparente", "internalizacao", "karma", "desenvolvimento-nao-linear"],
    image: "/placeholder.svg?height=200&width=200&query=natal retrograde planet internalized energy",
    category: "estados-planetarios",
  },
  {
    term: "Eclipse Solar",
    slug: "eclipse-solar",
    shortDefinition: "Fenômeno astronômico onde a Lua bloqueia a luz do Sol, associado a novos começos significativos.",
    description:
      "O Eclipse Solar é um fenômeno astronômico que ocorre durante a Lua Nova, quando a Lua se posiciona entre a Terra e o Sol, bloqueando parcial ou totalmente a luz solar. Astrologicamente, os eclipses solares são considerados Luas Novas amplificadas, marcando períodos de novos começos significativos, mudanças de direção e eventos catalisadores. Ocorrem próximos aos Nodos Lunares e seus efeitos podem ser sentidos até seis meses após o evento. Quando um eclipse solar ativa pontos sensíveis no mapa natal (formando conjunção com planetas ou ângulos), pode desencadear novos capítulos importantes na área da vida representada pela casa onde ocorre. Os eclipses solares frequentemente trazem situações inesperadas que abrem portas para novos caminhos, embora possam inicialmente causar desorientação devido à 'luz' temporariamente bloqueada.",
    relatedTerms: [
      "lua-nova",
      "nodos-lunares",
      "eclipses",
      "novos-comecos",
      "mudancas-significativas",
      "eventos-catalisadores",
    ],
    image: "/placeholder.svg?height=200&width=200&query=solar eclipse astrology new beginnings",
    category: "fenomenos-astrologicos",
  },
  {
    term: "Eclipse Lunar",
    slug: "eclipse-lunar",
    shortDefinition:
      "Fenômeno astronômico onde a Terra bloqueia a luz do Sol na Lua, associado a culminações e revelações.",
    description:
      "O Eclipse Lunar é um fenômeno astronômico que ocorre durante a Lua Cheia, quando a Terra se posiciona entre o Sol e a Lua, projetando sua sombra sobre a superfície lunar. Astrologicamente, os eclipses lunares são considerados Luas Cheias amplificadas, marcando períodos de culminação, revelação e liberação. Ocorrem próximos aos Nodos Lunares e seus efeitos podem ser sentidos até seis meses após o evento. Quando um eclipse lunar ativa pontos sensíveis no mapa natal (formando conjunção ou oposição com planetas ou ângulos), pode trazer à tona questões subconscientes, finalizar ciclos importantes e revelar verdades ocultas na área da vida representada pela casa onde ocorre. Os eclipses lunares frequentemente trazem clareza emocional e insights profundos, embora possam inicialmente intensificar emoções e criar situações dramáticas que pedem resolução.",
    relatedTerms: [
      "lua-cheia",
      "nodos-lunares",
      "eclipses",
      "culminacao",
      "revelacao",
      "liberacao",
      "ciclos-emocionais",
    ],
    image: "/placeholder.svg?height=200&width=200&query=lunar eclipse astrology culmination revelation",
    category: "fenomenos-astrologicos",
  },
  {
    term: "Cruz Fixa",
    slug: "cruz-fixa",
    shortDefinition:
      "Configuração formada pelos signos fixos (Touro, Leão, Escorpião e Aquário), representando estabilidade e determinação.",
    description:
      "A Cruz Fixa é uma configuração astrológica formada pelos quatro signos fixos do zodíaco: Touro, Leão, Escorpião e Aquário. Estes signos estão separados por 90 graus (formando quadraturas) ou 180 graus (formando oposições) entre si. A Cruz Fixa representa qualidades de estabilidade, determinação, persistência e resistência à mudança. Quando um mapa natal tem vários planetas nestes signos, especialmente nos ângulos, a pessoa tende a ser determinada, leal, resistente e capaz de manter o foco em objetivos de longo prazo. No entanto, também pode haver tendência à teimosia, inflexibilidade e dificuldade em adaptar-se a circunstâncias mutáveis. A Cruz Fixa está associada ao elemento Terra em seu aspecto mais estável e consolidador.",
    relatedTerms: ["signos-fixos", "touro", "leao", "escorpiao", "aquario", "modalidades", "quadratura", "oposicao"],
    image: "/placeholder.svg?height=200&width=200&query=fixed cross astrology stability determination",
    category: "configuracoes-zodiacais",
  },
  {
    term: "Cruz Mutável",
    slug: "cruz-mutavel",
    shortDefinition:
      "Configuração formada pelos signos mutáveis (Gêmeos, Virgem, Sagitário e Peixes), representando adaptabilidade e versatilidade.",
    description:
      "A Cruz Mutável é uma configuração astrológica formada pelos quatro signos mutáveis do zodíaco: Gêmeos, Virgem, Sagitário e Peixes. Estes signos estão separados por 90 graus (formando quadraturas) ou 180 graus (formando oposições) entre si. A Cruz Mutável representa qualidades de adaptabilidade, versatilidade, flexibilidade e capacidade de resposta às mudanças. Quando um mapa natal tem vários planetas nestes signos, especialmente nos ângulos, a pessoa tende a ser versátil, comunicativa, curiosa e capaz de se ajustar a diferentes circunstâncias. No entanto, também pode haver tendência à dispersão, indecisão e dificuldade em manter o foco ou estabelecer estruturas estáveis. A Cruz Mutável está associada ao elemento Ar em seu aspecto mais fluido e comunicativo.",
    relatedTerms: [
      "signos-mutaveis",
      "gemeos",
      "virgem",
      "sagitario",
      "peixes",
      "modalidades",
      "quadratura",
      "oposicao",
    ],
    image: "/placeholder.svg?height=200&width=200&query=mutable cross astrology adaptability versatility",
    category: "configuracoes-zodiacais",
  },
  {
    term: "Cruz Cardinal",
    slug: "cruz-cardinal",
    shortDefinition:
      "Configuração formada pelos signos cardinais (Áries, Câncer, Libra e Capricórnio), representando iniciativa e ação.",
    description:
      "A Cruz Cardinal é uma configuração astrológica formada pelos quatro signos cardinais do zodíaco: Áries, Câncer, Libra e Capricórnio. Estes signos estão separados por 90 graus (formando quadraturas) ou 180 graus (formando oposições) entre si. A Cruz Cardinal representa qualidades de iniciativa, ação, liderança e capacidade de começar novos empreendimentos. Quando um mapa natal tem vários planetas nestes signos, especialmente nos ângulos, a pessoa tende a ser proativa, ambiciosa, orientada para objetivos e capaz de iniciar projetos com energia. No entanto, também pode haver tendência à impulsividade, impaciência e dificuldade em completar o que foi iniciado antes de passar para o próximo desafio. A Cruz Cardinal está associada ao elemento Fogo em seu aspecto mais dinâmico e iniciador.",
    relatedTerms: [
      "signos-cardinais",
      "aries",
      "cancer",
      "libra",
      "capricornio",
      "modalidades",
      "quadratura",
      "oposicao",
    ],
    image: "/placeholder.svg?height=200&width=200&query=cardinal cross astrology initiative action",
    category: "configuracoes-zodiacais",
  },
  {
    term: "Eixo Áries–Libra",
    slug: "eixo-aries-libra",
    shortDefinition:
      "Eixo zodiacal que representa a polaridade entre identidade individual (Áries) e relacionamentos (Libra).",
    description:
      "O Eixo Áries–Libra é um dos seis eixos polares do zodíaco, representando a dinâmica entre identidade individual (Áries) e relacionamentos/parcerias (Libra). Este eixo explora o equilíbrio entre autonomia e cooperação, assertividade e diplomacia, independência e interdependência. Áries, regido por Marte, representa o impulso para a autoafirmação, iniciativa e ação direta. Libra, regida por Vênus, representa a busca por harmonia, equilíbrio e conexão com os outros. Quando planetas ou pontos importantes (como os Nodos Lunares) se alinham neste eixo, a pessoa frequentemente trabalha com questões de identidade versus relacionamento, aprendendo a equilibrar necessidades pessoais com compromissos e a integrar assertividade com consideração pelos outros.",
    relatedTerms: [
      "aries",
      "libra",
      "polaridades-zodiacais",
      "identidade",
      "relacionamentos",
      "equilibrio",
      "eixos-zodiacais",
    ],
    image: "/placeholder.svg?height=200&width=200&query=aries libra axis identity relationships astrology",
    category: "eixos-zodiacais",
  },
  {
    term: "Eixo Touro–Escorpião",
    slug: "eixo-touro-escorpiao",
    shortDefinition:
      "Eixo zodiacal que representa a polaridade entre recursos materiais (Touro) e recursos compartilhados/transformação (Escorpião).",
    description:
      "O Eixo Touro–Escorpião é um dos seis eixos polares do zodíaco, representando a dinâmica entre recursos materiais e valores pessoais (Touro) e recursos compartilhados, intimidade e transformação (Escorpião). Este eixo explora o equilíbrio entre estabilidade e mudança, posse e partilha, segurança e vulnerabilidade. Touro, regido por Vênus, representa o impulso para construir, acumular e desfrutar do mundo material com os cinco sentidos. Escorpião, tradicionalmente regido por Marte e modernamente por Plutão, representa a busca por profundidade emocional, intimidade transformadora e poder regenerativo. Quando planetas ou pontos importantes (como os Nodos Lunares) se alinham neste eixo, a pessoa frequentemente trabalha com questões de apego versus desapego, valores pessoais versus valores compartilhados, e segurança material versus transformação profunda.",
    relatedTerms: [
      "touro",
      "escorpiao",
      "polaridades-zodiacais",
      "recursos",
      "transformacao",
      "valores",
      "eixos-zodiacais",
    ],
    image: "/placeholder.svg?height=200&width=200&query=taurus scorpio axis resources transformation astrology",
    category: "eixos-zodiacais",
  },
  {
    term: "Eixo Gêmeos–Sagitário",
    slug: "eixo-gemeos-sagitario",
    shortDefinition:
      "Eixo zodiacal que representa a polaridade entre conhecimento factual (Gêmeos) e compreensão filosófica (Sagitário).",
    description:
      "O Eixo Gêmeos–Sagitário é um dos seis eixos polares do zodíaco, representando a dinâmica entre conhecimento factual e comunicação cotidiana (Gêmeos) e compreensão filosófica, visão ampla e busca por significado (Sagitário). Este eixo explora o equilíbrio entre informação e sabedoria, percepção imediata e perspectiva expandida, curiosidade específica e busca por verdades universais. Gêmeos, regido por Mercúrio, representa o impulso para coletar informações, comunicar ideias e fazer conexões lógicas. Sagitário, regido por Júpiter, representa a busca por compreensão mais ampla, significado filosófico e expansão de horizontes. Quando planetas ou pontos importantes (como os Nodos Lunares) se alinham neste eixo, a pessoa frequentemente trabalha com questões de conhecimento versus sabedoria, fatos versus significados, e detalhes versus visão geral.",
    relatedTerms: [
      "gemeos",
      "sagitario",
      "polaridades-zodiacais",
      "conhecimento",
      "sabedoria",
      "comunicacao",
      "eixos-zodiacais",
    ],
    image: "/placeholder.svg?height=200&width=200&query=gemini sagittarius axis knowledge wisdom astrology",
    category: "eixos-zodiacais",
  },
  {
    term: "Eixo Câncer–Capricórnio",
    slug: "eixo-cancer-capricornio",
    shortDefinition:
      "Eixo zodiacal que representa a polaridade entre lar/família (Câncer) e carreira/estrutura social (Capricórnio).",
    description:
      "O Eixo Câncer–Capricórnio é um dos seis eixos polares do zodíaco, representando a dinâmica entre lar, família e segurança emocional (Câncer) e carreira, estrutura social e responsabilidade pública (Capricórnio). Este eixo explora o equilíbrio entre vida privada e pública, nutrição emocional e realização material, raízes pessoais e ambições sociais. Câncer, regido pela Lua, representa o impulso para nutrir, proteger e criar conexões emocionais profundas. Capricórnio, regido por Saturno, representa a busca por estrutura, status, realização profissional e responsabilidade social. Quando planetas ou pontos importantes (como os Nodos Lunares) se alinham neste eixo, a pessoa frequentemente trabalha com questões de equilíbrio entre vida pessoal e profissional, segurança emocional versus realização material, e necessidades internas versus expectativas externas.",
    relatedTerms: [
      "cancer",
      "capricornio",
      "polaridades-zodiacais",
      "lar",
      "carreira",
      "seguranca-emocional",
      "eixos-zodiacais",
    ],
    image: "/placeholder.svg?height=200&width=200&query=cancer capricorn axis home career astrology",
    category: "eixos-zodiacais",
  },
  {
    term: "Eixo Leão–Aquário",
    slug: "eixo-leao-aquario",
    shortDefinition:
      "Eixo zodiacal que representa a polaridade entre expressão individual (Leão) e consciência coletiva (Aquário).",
    description:
      "O Eixo Leão–Aquário é um dos seis eixos polares do zodíaco, representando a dinâmica entre expressão individual, criatividade pessoal e autoafirmação (Leão) e consciência coletiva, inovação social e pertencimento a grupos (Aquário). Este eixo explora o equilíbrio entre individualidade e coletividade, expressão pessoal e contribuição para o bem comum, criação e inovação. Leão, regido pelo Sol, representa o impulso para brilhar, expressar a singularidade e ser reconhecido por suas criações únicas. Aquário, tradicionalmente regido por Saturno e modernamente por Urano, representa a busca por originalidade dentro de contextos sociais, reforma de sistemas e conexão com ideais humanitários. Quando planetas ou pontos importantes (como os Nodos Lunares) se alinham neste eixo, a pessoa frequentemente trabalha com questões de expressão individual versus contribuição coletiva, reconhecimento pessoal versus progresso social.",
    relatedTerms: [
      "leao",
      "aquario",
      "polaridades-zodiacais",
      "individualidade",
      "coletividade",
      "criatividade",
      "eixos-zodiacais",
    ],
    image: "/placeholder.svg?height=200&width=200&query=leo aquarius axis individual collective astrology",
    category: "eixos-zodiacais",
  },
  {
    term: "Eixo Virgem–Peixes",
    slug: "eixo-virgem-peixes",
    shortDefinition:
      "Eixo zodiacal que representa a polaridade entre análise/serviço prático (Virgem) e intuição/dissolução de fronteiras (Peixes).",
    description:
      "O Eixo Virgem–Peixes é um dos seis eixos polares do zodíaco, representando a dinâmica entre análise, discernimento e serviço prático (Virgem) e intuição, compaixão e dissolução de fronteiras (Peixes). Este eixo explora o equilíbrio entre razão e intuição, ordem e caos, serviço específico e compaixão universal. Virgem, regido por Mercúrio, representa o impulso para analisar, aperfeiçoar, organizar e ser útil de maneiras práticas. Peixes, tradicionalmente regido por Júpiter e modernamente por Netuno, representa a busca por conexão espiritual, transcendência de limites e união com o todo. Quando planetas ou pontos importantes (como os Nodos Lunares) se alinham neste eixo, a pessoa frequentemente trabalha com questões de discernimento versus aceitação, crítica versus compaixão, e serviço prático versus entrega espiritual.",
    relatedTerms: ["virgem", "peixes", "polaridades-zodiacais", "analise", "intuicao", "servico", "eixos-zodiacais"],
    image: "/placeholder.svg?height=200&width=200&query=virgo pisces axis analysis intuition astrology",
    category: "eixos-zodiacais",
  },
  {
    term: "Signo de Queda",
    slug: "signo-de-queda",
    shortDefinition: "Signo onde um planeta expressa suas qualidades de forma enfraquecida ou desafiadora.",
    description:
      "O Signo de Queda é o signo do zodíaco onde um planeta expressa suas qualidades de forma enfraquecida, desafiadora ou menos eficaz. É considerado uma dignidade essencial negativa na astrologia tradicional. Cada planeta tem um signo específico de queda: o Sol em Libra, a Lua em Escorpião, Mercúrio em Peixes, Vênus em Virgem, Marte em Câncer, Júpiter em Capricórnio, Saturno em Áries, Urano em Touro, Netuno em Virgem e Plutão em Libra. Quando um planeta está em seu signo de queda no mapa natal, suas energias encontram dificuldades para se manifestar de maneira harmoniosa, frequentemente exigindo mais esforço consciente para serem expressas positivamente. No entanto, esta posição também pode oferecer profundas lições e crescimento através dos desafios, resultando em uma expressão mais consciente e refinada da energia planetária.",
    relatedTerms: [
      "dignidades-essenciais",
      "domicilio-planetario",
      "exaltacao",
      "detrimento",
      "planetas",
      "astrologia-tradicional",
    ],
    image: "/placeholder.svg?height=200&width=200&query=fall sign astrology planetary weakness challenge",
    category: "dignidades-planetarias",
  },
  {
    term: "Signo de Exílio",
    slug: "signo-de-exilio",
    shortDefinition: "Signo oposto ao domicílio de um planeta, onde sua energia encontra mais resistência.",
    description:
      "O Signo de Exílio, também conhecido como Detrimento, é o signo do zodíaco oposto ao domicílio natural de um planeta, onde sua energia encontra mais resistência e dificuldade para se expressar. É considerado uma dignidade essencial negativa na astrologia tradicional. Cada planeta tem um signo específico de exílio (ou dois, no caso de Mercúrio e Vênus): o Sol em Aquário, a Lua em Capricórnio, Mercúrio em Sagitário e Peixes, Vênus em Escorpião e Áries, Marte em Touro e Libra, Júpiter em Gêmeos, Saturno em Câncer, Urano em Leão, Netuno em Virgem e Plutão em Touro. Quando um planeta está em seu signo de exílio no mapa natal, suas qualidades podem se manifestar de forma exagerada, distorcida ou inibida, frequentemente resultando em compensações ou expressões não-convencionais. Esta posição oferece desafios que, quando trabalhados conscientemente, podem levar a um desenvolvimento significativo e uma expressão mais equilibrada da energia planetária.",
    relatedTerms: [
      "detrimento",
      "dignidades-essenciais",
      "domicilio-planetario",
      "exaltacao",
      "queda",
      "planetas",
      "astrologia-tradicional",
    ],
    image: "/placeholder.svg?height=200&width=200&query=detriment exile sign astrology planetary challenge",
    category: "dignidades-planetarias",
  },
]
