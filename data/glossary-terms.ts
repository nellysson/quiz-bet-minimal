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
]
