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
    image: "/placeholder.svg?height=200&width=200&query=venus symbol in astrology",
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
    image: "/placeholder.svg?height=200&width=200&query=sun sign zodiac wheel",
    category: "signos",
  },
  {
    term: "Signo Lunar",
    slug: "signo-lunar",
    shortDefinition: "O signo do zodíaco onde a Lua estava posicionada no momento do nascimento.",
    description:
      "O Signo Lunar é o signo do zodíaco onde a Lua estava posicionada no momento do seu nascimento. Representa o mundo emocional, as reações instintivas, necessidades de segurança, hábitos e padrões subconscientes. Enquanto o Signo Solar mostra quem você é conscientemente, o Signo Lunar revela quem você é emocionalmente e como reage instintivamente às situações.",
    relatedTerms: ["lua", "mapa-natal", "signos-do-zodiaco", "emocoes"],
    image: "/placeholder.svg?height=200&width=200&query=moon sign zodiac emotional nature",
    category: "signos",
  },
  {
    term: "Marte",
    slug: "marte",
    shortDefinition: "Representa energia, ação, desejo, assertividade e impulso.",
    description:
      "Na astrologia, Marte representa o princípio da energia, ação, iniciativa, coragem, desejo, assertividade e impulso. É o planeta associado a como agimos, como expressamos nossa raiva, como perseguimos nossos desejos e como competimos. Marte também está ligado à sexualidade, especialmente no aspecto de desejo e conquista.",
    relatedTerms: ["aries", "escorpiao", "energia", "acao", "desejo"],
    image: "/placeholder.svg?height=200&width=200&query=mars symbol in astrology red",
    category: "planetas",
  },
  {
    term: "Júpiter",
    slug: "jupiter",
    shortDefinition: "Representa expansão, crescimento, abundância, sabedoria e fé.",
    description:
      "Na astrologia, Júpiter representa o princípio da expansão, crescimento, otimismo, abundância, sabedoria, fé e busca por significado. É o planeta associado a como expandimos nossos horizontes, seja através de viagens, educação superior, filosofia ou espiritualidade. Júpiter também está ligado à sorte, oportunidades e generosidade.",
    relatedTerms: ["sagitario", "peixes", "expansao", "crescimento", "abundancia"],
    image: "/placeholder.svg?height=200&width=200&query=jupiter symbol in astrology",
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
      "A Astrologia Financeira é o estudo dos ciclos planetários e suas correlações com tendências econômicas, movimentos de mercado e comportamento de ativos financeiros. Esta especialidade analisa trânsitos planetários, eclipses, retrogradações e ciclos maiores como conjunções Júpiter-Saturno para identificar potenciais pontos de virada, períodos de expansão ou contração econômica e setores favorecidos em diferentes momentos. Praticantes desta área também podem analisar mapas astrais de bolsas de valores, moedas, commodities e até mesmo criptomoedas. A Astrologia Financeira é utilizada como ferramenta complementar por alguns investidores e traders, oferecendo uma perspectiva de timing baseada em ciclos cósmicos que vai além da análise técnica e fundamental convencional.",
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
]
