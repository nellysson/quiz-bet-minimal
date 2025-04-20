import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Home,
  User,
  Heart,
  Book,
  Briefcase,
  Users,
  Sparkles,
  GraduationCap,
  Award,
  UsersIcon,
  Moon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { houses } from "@/data/houses"

interface HousePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: HousePageProps): Promise<Metadata> {
  const house = houses.find((h) => h.slug === params.slug)

  if (!house) {
    return {
      title: "Casa Astrológica não encontrada | Portal Astral",
      description: "A casa astrológica que você está procurando não foi encontrada.",
    }
  }

  return {
    title: `${house.name} | Casas Astrológicas`,
    description: house.governs,
  }
}

export async function generateStaticParams() {
  return houses.map((house) => ({
    slug: house.slug,
  }))
}

export default function HousePage({ params }: HousePageProps) {
  const house = houses.find((h) => h.slug === params.slug)

  if (!house) {
    notFound()
  }

  // Encontrar casas relacionadas (anterior e próxima)
  const prevHouse = houses.find((h) => h.number === house.number - 1)
  const nextHouse = houses.find((h) => h.number === house.number + 1)

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/categorias/casas" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar às Casas Astrológicas
        </Link>
      </Button>

      <div className="mb-8">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
            {house.number}
          </div>
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">{house.name}</h1>
            <div className="mt-2 rounded-md bg-muted px-3 py-1 inline-block">
              <span className="font-medium">Governa:</span> {house.governs}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{house.description}</p>

              <h2>Significado e Simbolismo</h2>
              <p>{getExtendedDescription(house.number)}</p>

              <h2>Planetas na {house.name}</h2>
              <p>{getPlanetaryInfluence(house.number)}</p>

              <h2>Regência Natural</h2>
              <p>{getNaturalRulership(house.number)}</p>

              <h2>Aspectos Psicológicos</h2>
              <p>{getPsychologicalAspects(house.number)}</p>

              <h2>Desafios e Oportunidades</h2>
              <p>{getChallengesAndOpportunities(house.number)}</p>
            </div>
          </div>

          <div>
            <div className="sticky top-24 space-y-6">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Informações Rápidas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 text-primary">{getHouseIcon(house.number)}</div>
                    <div>
                      <span className="font-medium">Elemento:</span> {getHouseElement(house.number)}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 text-primary">{getHouseIcon(house.number)}</div>
                    <div>
                      <span className="font-medium">Modalidade:</span> {getHouseModality(house.number)}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 text-primary">{getHouseIcon(house.number)}</div>
                    <div>
                      <span className="font-medium">Regente Natural:</span> {getHouseRuler(house.number)}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 text-primary">{getHouseIcon(house.number)}</div>
                    <div>
                      <span className="font-medium">Signo Natural:</span> {getHouseSign(house.number)}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 text-primary">{getHouseIcon(house.number)}</div>
                    <div>
                      <span className="font-medium">Classificação:</span> {getHouseClassification(house.number)}
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold">Navegação de Casas</h3>
                <div className="space-y-2">
                  {prevHouse && (
                    <Link
                      href={`/categorias/casas/${prevHouse.slug}`}
                      className="block rounded-md bg-muted p-3 hover:bg-muted/80"
                    >
                      <div className="flex items-center justify-between">
                        <span>← Casa Anterior: {prevHouse.name}</span>
                        <span className="font-bold">{prevHouse.number}</span>
                      </div>
                    </Link>
                  )}

                  {nextHouse && (
                    <Link
                      href={`/categorias/casas/${nextHouse.slug}`}
                      className="block rounded-md bg-muted p-3 hover:bg-muted/80"
                    >
                      <div className="flex items-center justify-between">
                        <span>Próxima Casa: {nextHouse.name}</span>
                        <span className="font-bold">{nextHouse.number} →</span>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Função para obter o ícone da casa
function getHouseIcon(houseNumber: number) {
  switch (houseNumber) {
    case 1:
      return <User />
    case 2:
      return <Sparkles />
    case 3:
      return <Book />
    case 4:
      return <Home />
    case 5:
      return <Heart />
    case 6:
      return <Briefcase />
    case 7:
      return <Users />
    case 8:
      return <Sparkles />
    case 9:
      return <GraduationCap />
    case 10:
      return <Award />
    case 11:
      return <UsersIcon />
    case 12:
      return <Moon />
    default:
      return <Home />
  }
}

// Função para obter o elemento da casa
function getHouseElement(houseNumber: number): string {
  const elements = {
    1: "Fogo",
    2: "Terra",
    3: "Ar",
    4: "Água",
    5: "Fogo",
    6: "Terra",
    7: "Ar",
    8: "Água",
    9: "Fogo",
    10: "Terra",
    11: "Ar",
    12: "Água",
  }
  return elements[houseNumber as keyof typeof elements] || ""
}

// Função para obter a modalidade da casa
function getHouseModality(houseNumber: number): string {
  const modalities = {
    1: "Cardinal",
    2: "Fixo",
    3: "Mutável",
    4: "Cardinal",
    5: "Fixo",
    6: "Mutável",
    7: "Cardinal",
    8: "Fixo",
    9: "Mutável",
    10: "Cardinal",
    11: "Fixo",
    12: "Mutável",
  }
  return modalities[houseNumber as keyof typeof modalities] || ""
}

// Função para obter o regente natural da casa
function getHouseRuler(houseNumber: number): string {
  const rulers = {
    1: "Marte",
    2: "Vênus",
    3: "Mercúrio",
    4: "Lua",
    5: "Sol",
    6: "Mercúrio",
    7: "Vênus",
    8: "Plutão",
    9: "Júpiter",
    10: "Saturno",
    11: "Urano",
    12: "Netuno",
  }
  return rulers[houseNumber as keyof typeof rulers] || ""
}

// Função para obter o signo natural da casa
function getHouseSign(houseNumber: number): string {
  const signs = {
    1: "Áries",
    2: "Touro",
    3: "Gêmeos",
    4: "Câncer",
    5: "Leão",
    6: "Virgem",
    7: "Libra",
    8: "Escorpião",
    9: "Sagitário",
    10: "Capricórnio",
    11: "Aquário",
    12: "Peixes",
  }
  return signs[houseNumber as keyof typeof signs] || ""
}

// Função para obter a classificação da casa
function getHouseClassification(houseNumber: number): string {
  if ([1, 4, 7, 10].includes(houseNumber)) return "Angular"
  if ([2, 5, 8, 11].includes(houseNumber)) return "Sucedente"
  return "Cadente"
}

// Função para obter descrição estendida da casa
function getExtendedDescription(houseNumber: number): string {
  const descriptions = {
    1: "A Primeira Casa, também conhecida como Casa do Ascendente, representa o início de tudo no mapa astral. Ela simboliza o nascimento, o começo da vida e a forma como nos apresentamos ao mundo. Esta casa governa a aparência física, a personalidade imediata, a atitude perante a vida e a primeira impressão que causamos nos outros. É o 'eu' em sua forma mais pura e direta, antes de qualquer influência externa. A Primeira Casa também está relacionada à vitalidade física, à constituição corporal e à maneira como iniciamos projetos e enfrentamos novos começos.",

    2: "A Segunda Casa representa nossos recursos materiais, valores pessoais e senso de autoestima. Esta casa governa dinheiro, posses, talentos naturais e a forma como construímos segurança material e emocional. Ela revela nossa relação com o que valorizamos, tanto em termos materiais quanto em termos de princípios e valores internos. A Segunda Casa também está relacionada à forma como geramos renda, nossos hábitos financeiros e nossa capacidade de manifestar abundância. É onde aprendemos a valorizar a nós mesmos e a reconhecer nossos próprios recursos internos.",

    3: "A Terceira Casa governa a comunicação, o aprendizado inicial, o ambiente próximo e as conexões cotidianas. Esta casa está relacionada à forma como processamos e compartilhamos informações, nosso estilo de comunicação e nossa curiosidade intelectual. Ela rege irmãos, vizinhos, deslocamentos curtos e o ambiente educacional primário. A Terceira Casa também representa nossa capacidade de adaptação, versatilidade mental e habilidade de conectar ideias. É onde desenvolvemos nossas habilidades de expressão e onde nossa mente racional opera no dia a dia.",

    4: "A Quarta Casa representa o lar, a família, as raízes e a base emocional. Esta casa governa nossa conexão com o passado, nossas origens, ancestralidade e memórias de infância. Ela revela como construímos nosso senso de segurança emocional e como nos relacionamos com nossa família, especialmente com a figura materna. A Quarta Casa também está relacionada ao final da vida, propriedades imobiliárias e o ambiente doméstico que criamos. É onde buscamos pertencimento e onde nos sentimos verdadeiramente em casa, tanto física quanto emocionalmente.",

    5: "A Quinta Casa representa a criatividade, o romance, os filhos, o prazer e a autoexpressão. Esta casa governa como expressamos nossa individualidade de forma criativa, como buscamos diversão e como nos envolvemos em atividades que trazem alegria. Ela rege namoros, aventuras amorosas, hobbies, jogos e a relação com filhos ou projetos criativos. A Quinta Casa também está relacionada à nossa capacidade de assumir riscos, nossa confiança criativa e nossa expressão dramática. É onde brilhamos, nos divertimos e expressamos nosso eu autêntico sem medo de julgamento.",

    6: "A Sexta Casa representa o trabalho cotidiano, a saúde, a rotina e o serviço. Esta casa governa como organizamos nossa vida diária, como cuidamos de nossa saúde física e mental, e como servimos aos outros. Ela rege hábitos, eficiência, habilidades práticas e a relação com colegas de trabalho. A Sexta Casa também está relacionada à nossa capacidade de análise, discernimento e aperfeiçoamento. É onde aprendemos a ser úteis, a desenvolver disciplina e a encontrar satisfação no trabalho bem feito e no cuidado com o corpo e a mente.",

    7: "A Sétima Casa representa os relacionamentos, parcerias, casamento e contratos. Esta casa governa como nos relacionamos com os outros em termos de igualdade, como estabelecemos parcerias significativas e como nos comprometemos. Ela rege o casamento, sociedades comerciais, contratos e a forma como lidamos com o 'outro' em geral. A Sétima Casa também está relacionada à nossa capacidade de cooperação, diplomacia e busca por equilíbrio nas relações. É onde aprendemos sobre nós mesmos através do espelho que os outros nos proporcionam.",

    8: "A Oitava Casa representa transformação, sexualidade, recursos compartilhados, morte e renascimento. Esta casa governa como lidamos com crises, perdas, heranças e a intimidade profunda. Ela rege a sexualidade como forma de conexão profunda, impostos, seguros, dívidas e recursos que compartilhamos com outros. A Oitava Casa também está relacionada à nossa capacidade de regeneração, ao poder pessoal e à investigação do oculto. É onde enfrentamos nossos medos mais profundos, experimentamos transformações intensas e descobrimos recursos internos que nem sabíamos que tínhamos.",

    9: "A Nona Casa representa filosofia, viagens longas, educação superior e espiritualidade. Esta casa governa como expandimos nossos horizontes, seja através de estudos avançados, viagens ao exterior ou exploração espiritual. Ela rege crenças religiosas ou filosóficas, publicações, questões legais e culturas estrangeiras. A Nona Casa também está relacionada à nossa busca por significado, sabedoria e compreensão mais ampla da vida. É onde transcendemos os limites do cotidiano e buscamos uma visão mais elevada e abrangente da existência.",

    10: "A Décima Casa, também conhecida como Meio do Céu (MC), representa a carreira, o status social, a reputação e a autoridade. Esta casa governa nossas ambições profissionais, nossa contribuição para a sociedade e como somos vistos publicamente. Ela rege figuras de autoridade (especialmente a paterna), estruturas sociais e nosso senso de responsabilidade. A Décima Casa também está relacionada às nossas metas de longo prazo, realizações e legado. É onde buscamos reconhecimento, construímos nossa reputação e encontramos nosso lugar na estrutura social.",

    11: "A Décima Primeira Casa representa amizades, grupos, causas sociais, esperanças e objetivos futuros. Esta casa governa como nos conectamos com a coletividade, como participamos de grupos e como contribuímos para causas maiores que nós mesmos. Ela rege amigos, redes sociais, organizações e ideais humanitários. A Décima Primeira Casa também está relacionada à nossa capacidade de inovação, originalidade e visão de futuro. É onde expressamos nossa individualidade dentro de um contexto coletivo e onde trabalhamos para criar um futuro melhor para todos.",

    12: "A Décima Segunda Casa representa o subconsciente, a espiritualidade, o isolamento e a transcendência. Esta casa governa o que está oculto, incluindo medos inconscientes, segredos e padrões kármicos. Ela rege instituições como hospitais e prisões, sacrifício pessoal, compaixão universal e dissolução do ego. A Décima Segunda Casa também está relacionada à nossa conexão com o todo, intuição profunda e capacidade de transcender limitações materiais. É onde enfrentamos nossos demônios internos, encontramos paz espiritual e nos preparamos para um novo ciclo de crescimento.",
  }

  return descriptions[houseNumber as keyof typeof descriptions] || ""
}

// Função para obter a influência planetária na casa
function getPlanetaryInfluence(houseNumber: number): string {
  const influences = {
    1: "Quando planetas estão posicionados na Primeira Casa, eles influenciam fortemente sua personalidade, aparência física e abordagem geral da vida. Por exemplo, Mercúrio na Primeira Casa pode indicar uma pessoa comunicativa e intelectualmente ágil, enquanto Marte pode sugerir uma personalidade assertiva e energética. Planetas nesta casa tendem a se expressar de forma direta e visível, colorindo fortemente a impressão que você causa nos outros e sua maneira de iniciar projetos e enfrentar desafios.",

    2: "Planetas na Segunda Casa influenciam sua relação com dinheiro, posses e valores pessoais. Por exemplo, Vênus nesta casa pode indicar facilidade para atrair recursos materiais e apreciação por bens de qualidade, enquanto Saturno pode sugerir uma abordagem cautelosa e disciplinada em relação às finanças. Planetas aqui também afetam sua autoestima e a forma como você reconhece e utiliza seus talentos naturais para construir segurança material e emocional.",

    3: "Planetas na Terceira Casa influenciam sua comunicação, pensamento e interações cotidianas. Por exemplo, Júpiter nesta casa pode expandir suas habilidades comunicativas e trazer otimismo ao aprendizado, enquanto Saturno pode indicar um pensamento mais estruturado e cauteloso. Planetas aqui também afetam sua relação com irmãos, vizinhos e seu ambiente imediato. Esta posição planetária pode revelar como você processa informações, expressa ideias e navega pelo seu entorno social e educacional.",

    4: "Planetas na Quarta Casa influenciam profundamente sua vida familiar, lar e base emocional. Por exemplo, a Lua nesta casa intensifica as conexões emocionais com a família e aumenta a importância do lar como refúgio, enquanto Urano pode trazer mudanças inesperadas na vida doméstica. Planetas aqui também revelam padrões herdados da infância e influências ancestrais. Esta posição planetária pode mostrar como você cria seu espaço seguro e como lida com questões relacionadas às suas raízes e ao passado.",

    5: "Planetas na Quinta Casa influenciam sua expressão criativa, vida romântica e relação com crianças. Por exemplo, o Sol nesta casa pode indicar uma personalidade naturalmente expressiva e criativa, enquanto Netuno pode sugerir uma abordagem imaginativa e idealista ao romance e às artes. Planetas aqui também afetam como você busca prazer e diversão. Esta posição planetária revela seu estilo de cortejo, sua atitude em relação a riscos criativos e como você expressa sua individualidade de forma autêntica.",

    6: "Planetas na Sexta Casa influenciam sua vida profissional cotidiana, saúde e rotinas. Por exemplo, Marte nesta casa pode indicar uma abordagem energética e assertiva ao trabalho, enquanto Vênus pode sugerir harmonia no ambiente de trabalho e atenção à estética na rotina diária. Planetas aqui também afetam seus hábitos de saúde e como você serve aos outros. Esta posição planetária revela sua ética de trabalho, abordagem ao bem-estar e capacidade de organização e eficiência.",

    7: "Planetas na Sétima Casa influenciam seus relacionamentos, parcerias e a forma como você se compromete. Por exemplo, Vênus nesta casa pode indicar uma forte valorização de harmonia e beleza nas relações, enquanto Plutão pode sugerir parcerias intensas e transformadoras. Planetas aqui também revelam o tipo de pessoas que você atrai como parceiros. Esta posição planetária mostra como você busca equilíbrio nas relações, lida com compromissos e se vê refletido através do outro.",

    8: "Planetas na Oitava Casa influenciam sua relação com transformação, intimidade e recursos compartilhados. Por exemplo, Plutão nesta casa intensifica a capacidade de regeneração após crises, enquanto Júpiter pode expandir oportunidades através de recursos compartilhados ou heranças. Planetas aqui também afetam sua sexualidade e como você lida com poder e controle. Esta posição planetária revela sua capacidade de enfrentar medos profundos, lidar com perdas e renascer após períodos de intensa transformação.",

    9: "Planetas na Nona Casa influenciam sua filosofia de vida, busca por conhecimento superior e exploração de horizontes expandidos. Por exemplo, Júpiter nesta casa amplifica o desejo por crescimento através de estudos avançados ou viagens, enquanto Mercúrio pode indicar uma mente naturalmente filosófica e curiosa. Planetas aqui também afetam sua relação com sistemas de crenças e culturas estrangeiras. Esta posição planetária revela como você busca significado, desenvolve sua visão de mundo e expande seus horizontes mentais e físicos.",

    10: "Planetas na Décima Casa influenciam sua carreira, status social e como você exerce autoridade. Por exemplo, Saturno nesta casa pode indicar uma carreira construída com disciplina e responsabilidade, enquanto o Sol pode sugerir um caminho profissional onde sua individualidade brilha. Planetas aqui também afetam sua relação com figuras de autoridade e estruturas sociais. Esta posição planetária revela suas ambições, como você busca reconhecimento público e o legado que deseja deixar no mundo.",

    11: "Planetas na Décima Primeira Casa influenciam suas amizades, participação em grupos e objetivos futuros. Por exemplo, Urano nesta casa pode indicar um círculo social diversificado e não convencional, enquanto Vênus pode sugerir amizades harmoniosas e prazerosas. Planetas aqui também afetam sua relação com causas humanitárias e inovação. Esta posição planetária revela como você se conecta com a coletividade, contribui para o bem comum e visualiza o futuro que deseja criar.",

    12: "Planetas na Décima Segunda Casa influenciam seu mundo interior, espiritualidade e conexão com o inconsciente. Por exemplo, Netuno nesta casa pode intensificar a intuição e sensibilidade psíquica, enquanto Mercúrio pode indicar uma mente que trabalha muito nos bastidores, processando informações subconscientemente. Planetas aqui também afetam como você lida com isolamento e sacrifício. Esta posição planetária revela padrões kármicos, medos subconscientes e sua capacidade de transcender limitações materiais através da conexão espiritual.",
  }

  return influences[houseNumber as keyof typeof influences] || ""
}

// Função para obter a regência natural da casa
function getNaturalRulership(houseNumber: number): string {
  const rulerships = {
    1: "A Primeira Casa é naturalmente regida por Áries e Marte. Esta associação natural traz à Primeira Casa qualidades de iniciativa, coragem, assertividade e ação direta. Assim como Áries é o primeiro signo do zodíaco, a Primeira Casa marca o início do mapa astral, representando novos começos, autoafirmação e a expressão da individualidade. A energia marciana desta casa nos impulsiona a agir, tomar iniciativa e expressar nossa identidade de forma direta e sem filtros.",

    2: "A Segunda Casa é naturalmente regida por Touro e Vênus. Esta associação natural traz à Segunda Casa qualidades de estabilidade, sensualidade, praticidade e apreciação pela beleza e conforto material. Assim como Touro valoriza segurança e recursos tangíveis, a Segunda Casa representa nossos valores, posses e talentos que nos proporcionam estabilidade. A energia venusiana desta casa nos conecta com o que valorizamos, tanto materialmente quanto em termos de princípios pessoais.",

    3: "A Terceira Casa é naturalmente regida por Gêmeos e Mercúrio. Esta associação natural traz à Terceira Casa qualidades de curiosidade, versatilidade, comunicação e movimento constante. Assim como Gêmeos busca conectar informações e ideias, a Terceira Casa representa nossa mente racional, comunicação cotidiana e ambiente próximo. A energia mercurial desta casa estimula nossa curiosidade intelectual, habilidades comunicativas e capacidade de adaptação às circunstâncias imediatas.",

    4: "A Quarta Casa é naturalmente regida por Câncer e pela Lua. Esta associação natural traz à Quarta Casa qualidades de nutrição, proteção, sensibilidade emocional e conexão com o passado. Assim como Câncer busca segurança emocional e valoriza laços familiares, a Quarta Casa representa nosso lar, família e raízes ancestrais. A energia lunar desta casa nos conecta com nossas necessidades emocionais mais profundas, memórias de infância e senso de pertencimento.",

    5: "A Quinta Casa é naturalmente regida por Leão e pelo Sol. Esta associação natural traz à Quinta Casa qualidades de criatividade, expressão dramática, generosidade e busca por reconhecimento. Assim como Leão busca brilhar e expressar sua individualidade, a Quinta Casa representa nossa expressão criativa, romances e atividades que trazem alegria. A energia solar desta casa alimenta nossa autoexpressão autêntica, confiança criativa e capacidade de irradiar nossa luz única no mundo.",

    6: "A Sexta Casa é naturalmente regida por Virgem e Mercúrio. Esta associação natural traz à Sexta Casa qualidades de análise, discernimento, serviço e atenção aos detalhes. Assim como Virgem busca aperfeiçoamento e utilidade prática, a Sexta Casa representa nosso trabalho cotidiano, saúde e como servimos aos outros. A energia mercurial desta casa, diferente da expressão em Gêmeos, manifesta-se aqui de forma mais analítica, metódica e orientada para o aprimoramento contínuo.",

    7: "A Sétima Casa é naturalmente regida por Libra e Vênus. Esta associação natural traz à Sétima Casa qualidades de equilíbrio, harmonia, diplomacia e busca por justiça nas relações. Assim como Libra busca parceria e cooperação, a Sétima Casa representa nossos relacionamentos significativos e contratos. A energia venusiana desta casa, diferente da expressão em Touro, manifesta-se aqui de forma mais social, refinada e orientada para a harmonia nas interações com os outros.",

    8: "A Oitava Casa é naturalmente regida por Escorpião e Plutão (tradicionalmente Marte). Esta associação natural traz à Oitava Casa qualidades de intensidade, profundidade, transformação e poder regenerativo. Assim como Escorpião penetra além das aparências para descobrir verdades ocultas, a Oitava Casa representa nossos processos de morte e renascimento, intimidade profunda e recursos compartilhados. A energia plutoniana desta casa nos conecta com nosso poder interior e capacidade de transformação através de crises e experiências intensas.",

    9: "A Nona Casa é naturalmente regida por Sagitário e Júpiter. Esta associação natural traz à Nona Casa qualidades de expansão, otimismo, busca por significado e visão ampla. Assim como Sagitário busca verdades maiores e horizontes expandidos, a Nona Casa representa nossa filosofia de vida, educação superior e exploração de culturas e ideias diferentes. A energia jupiteriana desta casa estimula nosso crescimento através da busca por conhecimento, experiências enriquecedoras e compreensão mais ampla da existência.",

    10: "A Décima Casa é naturalmente regida por Capricórnio e Saturno. Esta associação natural traz à Décima Casa qualidades de ambição, disciplina, responsabilidade e estrutura. Assim como Capricórnio busca conquistas duradouras através de trabalho árduo, a Décima Casa representa nossa carreira, status social e contribuição para o mundo. A energia saturniana desta casa nos desafia a construir estruturas sólidas, assumir responsabilidades e trabalhar pacientemente em direção a objetivos de longo prazo.",

    11: "A Décima Primeira Casa é naturalmente regida por Aquário e Urano (tradicionalmente Saturno). Esta associação natural traz à Décima Primeira Casa qualidades de originalidade, visão progressista, independência e preocupação com o coletivo. Assim como Aquário busca inovação e reforma social, a Décima Primeira Casa representa nossas amizades, grupos e objetivos futuros. A energia uraniana desta casa estimula nossa capacidade de pensar fora da caixa, conectar-nos com causas maiores que nós mesmos e visualizar possibilidades futuras inovadoras.",

    12: "A Décima Segunda Casa é naturalmente regida por Peixes e Netuno (tradicionalmente Júpiter). Esta associação natural traz à Décima Segunda Casa qualidades de compaixão universal, intuição, dissolução de fronteiras e transcendência. Assim como Peixes busca conexão com o todo e dissolução do ego, a Décima Segunda Casa representa nosso subconsciente, espiritualidade e sacrifício pessoal. A energia netuniana desta casa nos conecta com dimensões mais sutis da existência, dissolvendo limitações materiais e abrindo portas para experiências místicas e compaixão universal.",
  }

  return rulerships[houseNumber as keyof typeof rulerships] || ""
}

// Função para obter aspectos psicológicos da casa
function getPsychologicalAspects(houseNumber: number): string {
  const aspects = {
    1: "Do ponto de vista psicológico, a Primeira Casa representa o ego consciente, a persona que apresentamos ao mundo e nossa abordagem instintiva da vida. Ela revela como nos definimos e como queremos ser vistos pelos outros. Planetas nesta casa podem indicar aspectos da personalidade que estão na superfície da consciência e facilmente acessíveis. A Primeira Casa também está relacionada à nossa capacidade de autoafirmação, independência e como lidamos com novos começos. Desafios nesta casa podem se manifestar como insegurança sobre a identidade, dificuldade em se afirmar ou uma imagem distorcida de si mesmo.",

    2: "Psicologicamente, a Segunda Casa representa nossa relação com segurança material e emocional, autoestima e valores internos. Ela revela como definimos nosso valor pessoal e o que precisamos para nos sentirmos seguros no mundo. Planetas nesta casa podem indicar complexos relacionados a abundância, escassez e autovalorização. A Segunda Casa também está relacionada à nossa capacidade de reconhecer e utilizar nossos recursos internos e talentos. Desafios nesta casa podem se manifestar como insegurança material, dificuldades com autoestima ou apego excessivo a posses como fonte de identidade.",

    3: "Do ponto de vista psicológico, a Terceira Casa representa nossa mente consciente, padrões de pensamento e como processamos informações do ambiente. Ela revela nosso estilo cognitivo, curiosidade intelectual e necessidade de comunicação. Planetas nesta casa podem indicar como estruturamos pensamentos e expressamos ideias. A Terceira Casa também está relacionada à nossa percepção do ambiente imediato e primeiras experiências de aprendizado. Desafios nesta casa podem se manifestar como dificuldades de comunicação, dispersão mental ou ansiedade relacionada à expressão de ideias.",

    4: "Psicologicamente, a Quarta Casa representa nossas fundações emocionais, senso de segurança interior e conexão com o passado. Ela revela padrões familiares internalizados, especialmente relacionados à figura materna ou cuidador primário. Planetas nesta casa podem indicar complexos emocionais profundos originados na infância. A Quarta Casa também está relacionada à nossa necessidade de pertencimento e como criamos um espaço seguro internamente. Desafios nesta casa podem se manifestar como insegurança emocional, dificuldades em criar raízes ou padrões familiares disfuncionais repetidos inconscientemente.",

    5: "Do ponto de vista psicológico, a Quinta Casa representa nossa expressão criativa, necessidade de reconhecimento e capacidade de experimentar alegria. Ela revela como expressamos nossa individualidade de forma autêntica e como buscamos prazer e satisfação. Planetas nesta casa podem indicar talentos criativos específicos e nossa relação com o princípio do prazer. A Quinta Casa também está relacionada à nossa criança interior e capacidade de brincar e se divertir. Desafios nesta casa podem se manifestar como bloqueios criativos, dificuldade em experimentar alegria ou necessidade excessiva de atenção e validação externa.",

    6: "Psicologicamente, a Sexta Casa representa nossa necessidade de ser útil, capacidade de análise crítica e relação com trabalho e saúde. Ela revela como lidamos com responsabilidades cotidianas, rotinas e cuidados pessoais. Planetas nesta casa podem indicar nossa abordagem ao serviço, perfeccionismo e autocrítica. A Sexta Casa também está relacionada à nossa capacidade de discriminação e estabelecimento de limites saudáveis. Desafios nesta casa podem se manifestar como workaholism, perfeccionismo excessivo, hipocondria ou dificuldade em estabelecer rotinas saudáveis.",

    7: "Do ponto de vista psicológico, a Sétima Casa representa nossa sombra projetada, necessidade de complementação e capacidade de cooperação. Ela revela qualidades que tendemos a projetar nos outros por não reconhecê-las em nós mesmos. Planetas nesta casa podem indicar o tipo de parceiros que atraímos como espelhos para nosso desenvolvimento. A Sétima Casa também está relacionada à nossa capacidade de compromisso e equilíbrio nas relações. Desafios nesta casa podem se manifestar como dependência excessiva dos outros, dificuldade em manter compromissos ou projeções inconscientes que complicam relacionamentos.",

    8: "Psicologicamente, a Oitava Casa representa nosso inconsciente profundo, medos primordiais e capacidade de transformação. Ela revela como lidamos com poder, controle e experiências intensas que nos forçam a enfrentar nossa mortalidade. Planetas nesta casa podem indicar complexos relacionados à intimidade, vulnerabilidade e medo de perda. A Oitava Casa também está relacionada à nossa capacidade de mergulhar nas profundezas psíquicas e emergir transformados. Desafios nesta casa podem se manifestar como medo de intimidade, lutas de poder em relacionamentos ou dificuldade em lidar com perdas e transformações.",

    9: "Do ponto de vista psicológico, a Nona Casa representa nossa busca por significado, visão de mundo e capacidade de expansão mental. Ela revela como construímos nosso sistema de crenças e buscamos compreender o propósito maior da vida. Planetas nesta casa podem indicar nossa abordagem à espiritualidade, filosofia e busca por verdade. A Nona Casa também está relacionada à nossa capacidade de ver além do imediato e conectar experiências em um contexto mais amplo. Desafios nesta casa podem se manifestar como dogmatismo, fanatismo religioso ou dificuldade em encontrar significado e propósito na vida.",

    10: "Psicologicamente, a Décima Casa representa nosso superego, ambições conscientes e relação com autoridade. Ela revela como internalizamos expectativas sociais, especialmente relacionadas à figura paterna ou figuras de autoridade. Planetas nesta casa podem indicar nossa abordagem à realização, sucesso e responsabilidade social. A Décima Casa também está relacionada à nossa necessidade de reconhecimento público e contribuição para a sociedade. Desafios nesta casa podem se manifestar como workaholic, medo de fracasso, problemas com autoridade ou dificuldade em definir metas próprias versus expectativas externas.",

    11: "Do ponto de vista psicológico, a Décima Primeira Casa representa nossa relação com o coletivo, ideais sociais e capacidade de pensar no futuro. Ela revela como nos conectamos com grupos e causas maiores que nós mesmos. Planetas nesta casa podem indicar nossa abordagem à amizade, colaboração e inovação. A Décima Primeira Casa também está relacionada à nossa capacidade de visualizar possibilidades futuras e trabalhar por mudanças progressivas. Desafios nesta casa podem se manifestar como alienação social, conformismo excessivo ou rebeldia sem causa, ou dificuldade em trabalhar colaborativamente para objetivos comuns.",

    12: "Psicologicamente, a Décima Segunda Casa representa nosso inconsciente coletivo, complexos reprimidos e capacidade de transcendência. Ela revela material psíquico que tendemos a negar ou reprimir, incluindo medos, fantasias e desejos que consideramos inaceitáveis. Planetas nesta casa podem indicar talentos ocultos, padrões kármicos e sensibilidade psíquica. A Décima Segunda Casa também está relacionada à nossa capacidade de dissolução do ego e conexão com dimensões transpessoais. Desafios nesta casa podem se manifestar como escapismo, vitimização, confusão de limites ou dificuldade em integrar experiências espirituais com a vida cotidiana.",
  }

  return aspects[houseNumber as keyof typeof aspects] || ""
}

// Função para obter desafios e oportunidades da casa
function getChallengesAndOpportunities(houseNumber: number): string {
  const challenges = {
    1: "Os desafios da Primeira Casa incluem equilibrar a autoafirmação com a consideração pelos outros, desenvolver uma identidade autêntica versus adotar personas para agradar, e lidar com inseguranças sobre aparência ou personalidade. Pessoas com planetas desafiados nesta casa podem lutar com excesso de agressividade ou, ao contrário, falta de assertividade e dificuldade em se posicionar. As oportunidades incluem desenvolver coragem para iniciar novos caminhos, cultivar uma presença pessoal magnética e autêntica, e aprender a liderar pelo exemplo. A Primeira Casa oferece o potencial de se tornar um pioneiro em sua área e desenvolver uma personalidade carismática que inspira outros a seguirem seu próprio caminho.",

    2: "Os desafios da Segunda Casa incluem superar inseguranças materiais, equilibrar o desejo por conforto com o desprendimento saudável, e desenvolver autoestima independente de posses externas. Pessoas com planetas desafiados nesta casa podem enfrentar dificuldades financeiras, apego excessivo a bens materiais ou, ao contrário, negligência com recursos e talentos. As oportunidades incluem desenvolver talentos que geram abundância sustentável, criar segurança material alinhada com valores pessoais, e cultivar uma relação saudável com dinheiro e posses. A Segunda Casa oferece o potencial de manifestar prosperidade através do reconhecimento e utilização eficaz dos próprios recursos e talentos.",

    3: "Os desafios da Terceira Casa incluem superar dispersão mental, equilibrar consumo e expressão de informações, e desenvolver comunicação clara e efetiva. Pessoas com planetas desafiados nesta casa podem enfrentar dificuldades de aprendizado, ansiedade relacionada à comunicação ou relações tensas com irmãos e vizinhos. As oportunidades incluem desenvolver habilidades comunicativas excepcionais, cultivar versatilidade intelectual e criar conexões significativas no ambiente próximo. A Terceira Casa oferece o potencial de se tornar um comunicador influente, mediador eficaz ou educador inspirador que transmite conhecimento de forma acessível e envolvente.",

    4: "Os desafios da Quarta Casa incluem superar padrões familiares limitantes, equilibrar conexão com o passado e abertura para o futuro, e criar segurança emocional sem isolamento. Pessoas com planetas desafiados nesta casa podem enfrentar dificuldades com figuras parentais, instabilidade doméstica ou sentimentos de desenraizamento. As oportunidades incluem criar um lar que nutre corpo e alma, cultivar conexões familiares saudáveis e desenvolver forte segurança emocional interna. A Quarta Casa oferece o potencial de se tornar um pilar de força para família e entes queridos, criando espaços de pertencimento e nutrição emocional para si e para os outros.",

    5: "Os desafios da Quinta Casa incluem equilibrar autoexpressão com humildade, superar bloqueios criativos e desenvolver relacionamentos românticos saudáveis. Pessoas com planetas desafiados nesta casa podem enfrentar dificuldades com filhos, bloqueios de criatividade ou tendência a dramas emocionais e jogos de poder em romances. As oportunidades incluem desenvolver talentos artísticos únicos, cultivar alegria e espontaneidade na vida cotidiana, e criar conexões românticas baseadas em admiração mútua. A Quinta Casa oferece o potencial de se tornar um criador inspirado, um amante apaixonado e um mentor que incentiva outros a expressarem sua autenticidade.",

    6: "Os desafios da Sexta Casa incluem equilibrar perfeccionismo com aceitação, superar tendências workaholic e desenvolver hábitos de saúde sustentáveis. Pessoas com planetas desafiados nesta casa podem enfrentar problemas de saúde recorrentes, insatisfação crônica com trabalho ou tendência à crítica excessiva. As oportunidades incluem desenvolver habilidades práticas excepcionais, cultivar um estilo de vida equilibrado e encontrar propósito através do serviço aos outros. A Sexta Casa oferece o potencial de se tornar um profissional altamente competente, um curador eficaz ou um reformador que implementa melhorias práticas em sistemas e rotinas.",

    7: "Os desafios da Sétima Casa incluem equilibrar independência com interdependência, superar projeções inconscientes em relacionamentos e desenvolver parcerias equitativas. Pessoas com planetas desafiados nesta casa podem enfrentar conflitos recorrentes em relacionamentos, dependência excessiva de parceiros ou dificuldade em manter compromissos. As oportunidades incluem desenvolver habilidades diplomáticas excepcionais, cultivar relacionamentos mutuamente enriquecedores e encontrar complementação através de parcerias. A Sétima Casa oferece o potencial de se tornar um parceiro excepcional, um mediador eficaz ou um conselheiro que ajuda outros a navegarem pelos desafios relacionais.",

    8: "Os desafios da Oitava Casa incluem enfrentar medos de vulnerabilidade e perda, equilibrar controle com entrega e lidar com questões de poder em relacionamentos íntimos. Pessoas com planetas desafiados nesta casa podem enfrentar crises financeiras relacionadas a recursos compartilhados, traumas sexuais ou dificuldade em processar perdas. As oportunidades incluem desenvolver resiliência extraordinária, cultivar intimidade profunda e transformadora, e acessar recursos internos ocultos em momentos de crise. A Oitava Casa oferece o potencial de se tornar um agente de transformação, um curador de traumas ou um guia que ajuda outros a navegarem por períodos de morte e renascimento metafóricos.",

    9: "Os desafios da Nona Casa incluem equilibrar abertura mental com discernimento, superar dogmatismo ou ceticismo extremo, e integrar conhecimento teórico com sabedoria prática. Pessoas com planetas desafiados nesta casa podem enfrentar dificuldades com sistemas educacionais formais, crises de fé ou conflitos relacionados a diferenças culturais. As oportunidades incluem desenvolver uma filosofia de vida inspiradora, cultivar compreensão multicultural e expandir horizontes através de experiências transformadoras. A Nona Casa oferece o potencial de se tornar um professor inspirador, um explorador de fronteiras físicas e mentais, ou um visionário que conecta pessoas a significados e possibilidades maiores.",

    10: "Os desafios da Décima Casa incluem equilibrar ambição com vida pessoal, superar medo de fracasso ou sucesso, e desenvolver autoridade autêntica versus autoritarismo. Pessoas com planetas desafiados nesta casa podem enfrentar obstáculos na carreira, conflitos com figuras de autoridade ou dificuldade em encontrar seu lugar na estrutura social. As oportunidades incluem desenvolver liderança respeitável, cultivar realizações duradouras e criar um legado significativo. A Décima Casa oferece o potencial de se tornar uma figura de autoridade em sua área, um construtor de estruturas sociais benéficas ou um mentor que guia outros em seus caminhos profissionais.",

    11: "Os desafios da Décima Primeira Casa incluem equilibrar individualidade com pertencimento a grupos, superar alienação social ou conformismo excessivo, e alinhar ideais com ações práticas. Pessoas com planetas desafiados nesta casa podem enfrentar dificuldades em amizades, desapontamentos com grupos ou frustração com a lentidão de mudanças sociais. As oportunidades incluem desenvolver redes sociais significativas, cultivar visão inovadora e contribuir para causas humanitárias. A Décima Primeira Casa oferece o potencial de se tornar um reformador social, um inovador tecnológico ou um líder comunitário que une pessoas em torno de objetivos compartilhados para um futuro melhor.",

    12: "Os desafios da Décima Segunda Casa incluem enfrentar medos subconscientes, equilibrar sensibilidade espiritual com funcionamento prático, e integrar material reprimido na consciência. Pessoas com planetas desafiados nesta casa podem enfrentar períodos de isolamento, confusão de limites pessoais ou tendências escapistas. As oportunidades incluem desenvolver profunda intuição e compaixão, cultivar conexão espiritual significativa e encontrar propósito através do serviço compassivo. A Décima Segunda Casa oferece o potencial de se tornar um curador compassivo, um artista inspirado que canaliza o inconsciente coletivo, ou um guia espiritual que ajuda outros a encontrarem paz interior e conexão com dimensões mais sutis da existência.",
  }

  return challenges[houseNumber as keyof typeof challenges] || ""
}
