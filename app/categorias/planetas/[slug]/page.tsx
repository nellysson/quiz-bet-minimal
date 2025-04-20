import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { planets } from "@/data/planets"
import { zodiacSigns } from "@/data/zodiac-signs"
// Importar o componente de anúncio específico
import PortalAstralAd from "@/components/portal-astral-ad"

interface PlanetPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PlanetPageProps): Promise<Metadata> {
  const planet = planets.find((p) => p.slug === params.slug)

  if (!planet) {
    return {
      title: "Planeta não encontrado | Portal Astral",
      description: "O planeta que você está procurando não foi encontrado.",
    }
  }

  return {
    title: `${planet.name} | Planetas na Astrologia`,
    description: planet.description.substring(0, 160),
  }
}

export async function generateStaticParams() {
  return planets.map((planet) => ({
    slug: planet.slug,
  }))
}

export default function PlanetPage({ params }: PlanetPageProps) {
  const planet = planets.find((p) => p.slug === params.slug)

  if (!planet) {
    notFound()
  }

  // Verificar qual planeta é
  const isSun = planet.slug === "sol"
  const isMoon = planet.slug === "lua"
  const isMercury = planet.slug === "mercurio"
  const isVenus = planet.slug === "venus"
  const isMars = planet.slug === "marte"
  const isJupiter = planet.slug === "jupiter"
  const isSaturn = planet.slug === "saturno"
  const isUranus = planet.slug === "urano"
  const isNeptune = planet.slug === "netuno"
  const isPluto = planet.slug === "plutao"

  // Encontrar signos regidos por este planeta
  const ruledSigns = zodiacSigns.filter((sign) =>
    planet.rulesOver.some((rule) => sign.name === rule || sign.slug === rule),
  )

  // Definir cores de destaque com base no planeta
  const getPlanetColor = () => {
    if (isSun) return "text-yellow-600"
    if (isMoon) return "text-blue-600"
    if (isMercury) return "text-amber-600"
    if (isVenus) return "text-pink-600"
    if (isMars) return "text-red-600"
    if (isJupiter) return "text-orange-600"
    if (isSaturn) return "text-slate-600"
    if (isUranus) return "text-cyan-600"
    if (isNeptune) return "text-indigo-600"
    if (isPluto) return "text-purple-600"
    return "text-primary"
  }

  const getPlanetBgColor = () => {
    if (isSun) return "bg-yellow-50"
    if (isMoon) return "bg-blue-50"
    if (isMercury) return "bg-amber-50"
    if (isVenus) return "bg-pink-50"
    if (isMars) return "bg-red-50"
    if (isJupiter) return "bg-orange-50"
    if (isSaturn) return "bg-slate-50"
    if (isUranus) return "bg-cyan-50"
    if (isNeptune) return "bg-indigo-50"
    if (isPluto) return "bg-purple-50"
    return "bg-primary-50"
  }

  const getPlanetBorderColor = () => {
    if (isSun) return "border-yellow-200"
    if (isMoon) return "border-blue-200"
    if (isMercury) return "border-amber-200"
    if (isVenus) return "border-pink-200"
    if (isMars) return "border-red-200"
    if (isJupiter) return "border-orange-200"
    if (isSaturn) return "border-slate-200"
    if (isUranus) return "border-cyan-200"
    if (isNeptune) return "border-indigo-200"
    if (isPluto) return "border-purple-200"
    return "border-primary-200"
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/categorias/planetas" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar aos Planetas
        </Link>
      </Button>

      <div className="mb-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-4">
            <h1 className={`text-3xl font-bold md:text-4xl ${getPlanetColor()}`}>{planet.name}</h1>
            <span className={`text-4xl ${getPlanetColor()}`}>{planet.symbol}</span>
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            <div className={`rounded-md ${getPlanetBgColor()} px-3 py-1`}>
              <span className="font-medium">Tipo:</span> {planet.type}
            </div>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>{planet.description}</p>

            <h2>Rege sobre:</h2>
            <ul>
              {planet.rulesOver.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            {isSun && (
              <div className="my-8">
                <h2>Importância do Sol na Astrologia</h2>
                <p>
                  O Sol é o centro do nosso sistema solar e, na astrologia, ocupa uma posição igualmente central. Ele
                  representa nossa essência mais profunda, nosso ego consciente e nosso propósito de vida. O signo em
                  que o Sol se encontra no momento do nascimento (o que chamamos popularmente de "signo") revela
                  aspectos fundamentais da nossa personalidade e do nosso caminho de vida.
                </p>
                <p>
                  Diferente dos planetas, que representam aspectos específicos da nossa psique, o Sol simboliza a
                  totalidade do ser, a força vital que nos anima e nossa expressão mais autêntica. Ele é o princípio da
                  individualidade, da autoexpressão e da criatividade.
                </p>
              </div>
            )}

            {isMoon && (
              <div className="my-8">
                <h2>Importância da Lua na Astrologia</h2>
                <p>
                  A Lua é o satélite natural da Terra e, na astrologia, representa nosso mundo emocional e
                  subconsciente. Enquanto o Sol simboliza quem somos conscientemente, a Lua revela quem somos
                  emocionalmente e por instinto. O signo em que a Lua se encontra no momento do nascimento indica como
                  processamos emoções, o que nos traz segurança emocional e nossos padrões instintivos de comportamento.
                </p>
                <p>
                  A Lua também está associada à figura materna, às memórias da infância, aos hábitos e rotinas, e à
                  forma como nutrimos a nós mesmos e aos outros. Suas fases representam ciclos de crescimento emocional
                  e desenvolvimento interior.
                </p>
              </div>
            )}

            {isMercury && (
              <div className="my-8">
                <h2>Mercúrio na Astrologia</h2>
                <p>
                  Mercúrio é o planeta mais próximo do Sol e o mais rápido do sistema solar, completando sua órbita em
                  apenas 88 dias terrestres. Na astrologia, essa velocidade se reflete em sua associação com a mente
                  ágil, comunicação rápida e capacidade de adaptação. Mercúrio governa como pensamos, nos comunicamos,
                  processamos informações e nos expressamos verbalmente.
                </p>
                <p>
                  Como regente de Gêmeos e Virgem, Mercúrio expressa duas facetas distintas: em Gêmeos, representa a
                  comunicação, curiosidade e versatilidade; em Virgem, manifesta-se como análise, discernimento e
                  pensamento crítico.
                </p>
                <h3>Mercúrio Retrógrado</h3>
                <p>
                  Mercúrio é conhecido por seus períodos retrógrados, que ocorrem cerca de três vezes por ano e duram
                  aproximadamente três semanas cada. Durante esses períodos, Mercúrio parece se mover para trás no céu,
                  visto da Terra. Astrologicamente, esses momentos são associados a mal-entendidos, atrasos em
                  comunicações e problemas tecnológicos.
                </p>
              </div>
            )}

            {isVenus && (
              <div className="my-8">
                <h2>Vênus na Astrologia</h2>
                <p>
                  Vênus é o segundo planeta a partir do Sol e o mais brilhante no céu noturno, muitas vezes chamado de
                  "Estrela da Manhã" ou "Estrela da Tarde". Na astrologia, Vênus representa o princípio do amor, da
                  beleza, da harmonia e do prazer. Este planeta governa nossas afinidades, o que valorizamos, como nos
                  relacionamos romanticamente e nossa apreciação estética.
                </p>
                <p>
                  Como regente de Touro e Libra, Vênus expressa duas facetas distintas de sua energia: em Touro,
                  manifesta-se através dos prazeres sensoriais, conforto material e valores tangíveis; em Libra,
                  expressa-se através do relacionamento com os outros, diplomacia e equilíbrio.
                </p>
              </div>
            )}

            {isMars && (
              <div className="my-8">
                <h2>Marte na Astrologia</h2>
                <p>
                  Marte é o quarto planeta a partir do Sol, conhecido como o "planeta vermelho" devido à sua coloração
                  característica. Na astrologia, Marte representa o princípio da ação, energia, desejo e assertividade.
                  Este planeta governa como nos afirmamos, como perseguimos nossos objetivos, nossa coragem e nossa
                  expressão de raiva e sexualidade.
                </p>
                <p>
                  Como regente de Áries e tradicionalmente de Escorpião (antes da descoberta de Plutão), Marte expressa
                  duas facetas de sua energia: em Áries, manifesta-se através da iniciativa direta, coragem e
                  pioneirismo; em Escorpião, expressa-se através da intensidade emocional e poder transformador.
                </p>
              </div>
            )}

            {isJupiter && (
              <div className="my-8">
                <h2>Júpiter na Astrologia</h2>
                <p>
                  Júpiter é o maior planeta do nosso sistema solar, e na astrologia, sua grandeza se reflete em seu
                  significado expansivo e abundante. Conhecido como o "Grande Benéfico", Júpiter representa o princípio
                  da expansão, crescimento, prosperidade, sabedoria e otimismo. Este planeta governa nossa busca por
                  significado, nossa filosofia de vida e crenças.
                </p>
                <p>
                  Como regente de Sagitário e tradicionalmente de Peixes (antes da descoberta de Netuno), Júpiter
                  expressa duas facetas de sua energia: em Sagitário, manifesta-se através da busca por conhecimento,
                  aventura e exploração; em Peixes, expressa-se através da fé, compaixão e espiritualidade.
                </p>
              </div>
            )}

            {isSaturn && (
              <div className="my-8">
                <h2>Saturno na Astrologia</h2>
                <p>
                  Saturno é o sexto planeta a partir do Sol e é facilmente reconhecível por seus magníficos anéis. Na
                  astrologia, Saturno representa estrutura, limites, responsabilidade, disciplina, tempo, autoridade e
                  as lições que aprendemos através de desafios e restrições.
                </p>
                <p>
                  Como regente de Capricórnio e tradicionalmente de Aquário (antes da descoberta de Urano), Saturno
                  expressa duas facetas de sua energia: em Capricórnio, manifesta-se através da ambição, perseverança e
                  construção de estruturas duradouras; em Aquário, expressa-se através da ordem social, sistemas e
                  tradições.
                </p>
                <h3>O Retorno de Saturno</h3>
                <p>
                  Saturno leva aproximadamente 29,5 anos para completar uma órbita ao redor do Sol. Quando Saturno
                  retorna à mesma posição que ocupava no momento do nascimento, ocorre o famoso "Retorno de Saturno" -
                  um período de profunda reavaliação da vida que geralmente ocorre entre os 28-30 anos.
                </p>
              </div>
            )}

            {isUranus && (
              <div className="my-8">
                <h2>Urano na Astrologia</h2>
                <p>
                  Urano é o sétimo planeta a partir do Sol e foi o primeiro planeta descoberto com o auxílio de um
                  telescópio, em 1781. Na astrologia, Urano representa o princípio da mudança repentina, originalidade,
                  revolução e liberdade. Este planeta governa nossa capacidade de inovação, nossa busca por
                  independência e como rompemos com tradições e padrões estabelecidos.
                </p>
                <p>
                  Como regente moderno de Aquário, Urano expressa sua energia através da visão de futuro, pensamento
                  progressista, originalidade e preocupação com o coletivo.
                </p>
              </div>
            )}

            {isNeptune && (
              <div className="my-8">
                <h2>Netuno na Astrologia</h2>
                <p>
                  Netuno é o oitavo planeta a partir do Sol e foi descoberto em 1846. Na astrologia, Netuno representa o
                  princípio da dissolução, transcendência, imaginação e conexão espiritual. Este planeta governa nossa
                  intuição, compaixão, idealismo e como nos conectamos com dimensões além do mundo material.
                </p>
                <p>
                  Como regente moderno de Peixes, Netuno expressa sua energia através da sensibilidade, compaixão
                  universal, espiritualidade e dissolução de fronteiras.
                </p>
              </div>
            )}

            {isPluto && (
              <div className="my-8">
                <h2>Plutão na Astrologia</h2>
                <p>
                  Plutão foi descoberto em 1930 e, embora tenha sido reclassificado como planeta anão pela astronomia
                  moderna, mantém seu status de planeta na astrologia. Plutão representa o princípio da transformação
                  profunda, poder, morte e renascimento. Este planeta governa nossos processos de eliminação e
                  regeneração, nossos desejos mais profundos e como lidamos com poder e controle.
                </p>
                <p>
                  Como regente moderno de Escorpião, Plutão expressa sua energia através da intensidade emocional,
                  profundidade psicológica e capacidade de transformação radical.
                </p>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="sticky top-24 space-y-6">
            <div
              className={`relative aspect-square w-full overflow-hidden rounded-lg shadow-lg border-4 ${getPlanetBorderColor()}`}
            >
              <Image
                src={planet.image || "/placeholder.svg?height=400&width=400&query=planet"}
                alt={planet.name}
                fill
                className="object-cover"
              />
            </div>

            {ruledSigns.length > 0 && (
              <Card className="border">
                <CardContent className="p-4">
                  <h3 className="mb-3 text-xl font-semibold">Signos Regidos</h3>
                  <div className="space-y-2">
                    {ruledSigns.map((sign) => (
                      <Link
                        key={sign.slug}
                        href={`/categorias/signos/${sign.slug}`}
                        className={`block rounded-md ${getPlanetBgColor()} p-3 hover:opacity-80 transition-opacity`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{sign.name}</span>
                          <span>{sign.symbol}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="border">
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-semibold">Você sabia?</h3>
                <p className="text-sm text-muted-foreground">
                  {isSun
                    ? "O Sol não é tecnicamente um planeta, mas uma estrela. Na astrologia, o Sol e a Lua são chamados de 'luminares'."
                    : isMoon
                      ? "A Lua completa uma volta ao redor do zodíaco em aproximadamente 28 dias, influenciando nossas emoções e ritmos internos em ciclos mensais."
                      : isMercury
                        ? "Mercúrio é o planeta mais rápido do sistema solar, completando sua órbita em apenas 88 dias. Na mitologia, Mercúrio (Hermes para os gregos) era o mensageiro dos deuses."
                        : isVenus
                          ? "Vênus é o único planeta do sistema solar que gira no sentido horário (rotação retrógrada). O símbolo de Vênus (♀) também é usado para representar o feminino."
                          : isMars
                            ? "Marte recebeu seu nome do deus romano da guerra devido à sua cor vermelha. O símbolo de Marte (♂) representa um escudo e uma lança, e também é usado como símbolo do masculino."
                            : isJupiter
                              ? "Júpiter é o maior planeta do sistema solar, com massa 318 vezes maior que a Terra. O ciclo orbital de Júpiter dura aproximadamente 12 anos."
                              : isSaturn
                                ? "Saturno é o único planeta visível a olho nu que possui anéis proeminentes. O ciclo orbital de Saturno dura aproximadamente 29,5 anos."
                                : isUranus
                                  ? "Urano é o único planeta que gira 'deitado', com seu eixo de rotação quase paralelo ao plano de sua órbita, como se estivesse rolando em sua trajetória ao redor do Sol."
                                  : isNeptune
                                    ? "Netuno foi descoberto através de cálculos matemáticos antes de ser observado por telescópio, quando astrônomos notaram perturbações na órbita de Urano."
                                    : "Plutão leva 248 anos para completar uma órbita ao redor do Sol. Apesar de sua reclassificação como planeta anão em 2006, mantém sua importância na astrologia."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Anúncio antes da seção de signos */}
      <PortalAstralAd />

      <div className={`mt-12 rounded-lg ${getPlanetBgColor()} p-6 border ${getPlanetBorderColor()}`}>
        <h2 className="mb-4 text-2xl font-bold">{planet.name} nos Signos</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {isMercury && (
            <>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Mercúrio em Gêmeos</h3>
                <p className="text-sm text-muted-foreground">
                  Em seu domicílio, Mercúrio expressa seu potencial máximo: comunicação fluida, mente ágil, curiosidade
                  intelectual e grande versatilidade. Pessoas com esta posição tendem a ser excelentes comunicadoras e
                  aprendem rapidamente.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Mercúrio em Virgem</h3>
                <p className="text-sm text-muted-foreground">
                  Em seu segundo domicílio, Mercúrio manifesta precisão analítica, pensamento metódico e atenção aos
                  detalhes. Pessoas com esta posição tendem a ter mentes organizadas e habilidades críticas refinadas.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Mercúrio Retrógrado</h3>
                <p className="text-sm text-muted-foreground">
                  Quando Mercúrio está retrógrado, é um período para revisar, refletir e reconsiderar. Embora possa
                  trazer desafios na comunicação, também oferece oportunidades para aprofundar o entendimento e corrigir
                  erros passados.
                </p>
              </div>
            </>
          )}

          {isVenus && (
            <>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Vênus em Touro</h3>
                <p className="text-sm text-muted-foreground">
                  Em seu domicílio, Vênus expressa seu lado sensorial e material: apreciação por conforto, beleza
                  tangível, prazeres sensoriais e estabilidade nos relacionamentos. Pessoas com esta posição valorizam a
                  lealdade e tendem a ter um forte senso estético.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Vênus em Libra</h3>
                <p className="text-sm text-muted-foreground">
                  Em seu segundo domicílio, Vênus manifesta seu lado social e relacional: diplomacia, charme, busca por
                  equilíbrio e harmonia nas parcerias. Pessoas com esta posição valorizam a justiça e a beleza nas
                  interações.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Vênus Retrógrado</h3>
                <p className="text-sm text-muted-foreground">
                  Quando Vênus está retrógrado, somos convidados a reavaliar nossos valores, relacionamentos e o que
                  realmente nos traz prazer. É um período para reconciliação, cura de feridas emocionais e redescoberta
                  do amor-próprio.
                </p>
              </div>
            </>
          )}

          {isMars && (
            <>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Marte em Áries</h3>
                <p className="text-sm text-muted-foreground">
                  Em seu domicílio, Marte expressa seu potencial máximo: ação direta, iniciativa, coragem e energia
                  pioneira. Pessoas com esta posição tendem a ser assertivas, competitivas e possuem uma abordagem
                  corajosa e direta.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Marte em Escorpião</h3>
                <p className="text-sm text-muted-foreground">
                  Em seu domicílio tradicional, Marte manifesta intensidade emocional, determinação profunda e poder
                  transformador. Pessoas com esta posição tendem a ter uma vontade inabalável e capacidade de
                  regeneração após crises.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">O Ciclo de Marte</h3>
                <p className="text-sm text-muted-foreground">
                  Marte completa sua órbita ao redor do Sol em aproximadamente 687 dias terrestres, passando cerca de
                  6-7 semanas em cada signo. Este ciclo marca períodos de ativação e energia em diferentes áreas da
                  vida.
                </p>
              </div>
            </>
          )}

          {isJupiter && (
            <>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Júpiter em Sagitário</h3>
                <p className="text-sm text-muted-foreground">
                  Em seu domicílio, Júpiter expressa seu potencial máximo: expansão, otimismo, busca por conhecimento e
                  aventura. Pessoas com esta posição tendem a ser filosóficas, entusiastas e possuem uma visão ampla da
                  vida.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Júpiter em Peixes</h3>
                <p className="text-sm text-muted-foreground">
                  Em seu domicílio tradicional, Júpiter manifesta seu lado espiritual e compassivo: fé, intuição,
                  compaixão e conexão com o todo. Pessoas com esta posição tendem a ser idealistas e empáticas.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">O Ciclo de Júpiter</h3>
                <p className="text-sm text-muted-foreground">
                  Júpiter leva aproximadamente 12 anos para completar sua órbita ao redor do Sol, passando cerca de um
                  ano em cada signo. Este ciclo marca períodos de expansão e crescimento em diferentes áreas da vida.
                </p>
              </div>
            </>
          )}

          {isSaturn && (
            <>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Saturno em Capricórnio</h3>
                <p className="text-sm text-muted-foreground">
                  Em seu domicílio, Saturno expressa seu potencial máximo: disciplina, responsabilidade, ambição e
                  capacidade de construir estruturas duradouras. Pessoas com esta posição tendem a ser pragmáticas e
                  perseverantes.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Saturno em Aquário</h3>
                <p className="text-sm text-muted-foreground">
                  Em seu domicílio tradicional, Saturno manifesta seu lado social e estrutural: ordem coletiva,
                  sistemas, tradições e responsabilidade social. Pessoas com esta posição tendem a valorizar estruturas
                  que beneficiem o coletivo.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">O Retorno de Saturno</h3>
                <p className="text-sm text-muted-foreground">
                  O Retorno de Saturno ocorre aproximadamente aos 29,5 anos, quando Saturno completa uma órbita completa
                  e retorna à sua posição natal. Este é um período crucial de maturação e responsabilidade.
                </p>
              </div>
            </>
          )}

          {(isSun || isMoon) && (
            <>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">{isSun ? "Sol" : "Lua"} e os Elementos</h3>
                <p className="text-sm text-muted-foreground">
                  {isSun
                    ? "O Sol em signos de Fogo (Áries, Leão, Sagitário) expressa vitalidade, entusiasmo e autoexpressão criativa. Em signos de Terra (Touro, Virgem, Capricórnio), manifesta-se através da praticidade e estabilidade."
                    : "A Lua em signos de Água (Câncer, Escorpião, Peixes) expressa profundidade emocional, intuição e sensibilidade. Em signos de Terra (Touro, Virgem, Capricórnio), manifesta-se através da necessidade de segurança material e estabilidade emocional."}
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Ciclos {isSun ? "Solares" : "Lunares"}</h3>
                <p className="text-sm text-muted-foreground">
                  {isSun
                    ? "O ciclo solar anual, marcado pelo retorno do Sol à sua posição natal (aniversário), é um momento de renovação da vitalidade e propósito. Trânsitos solares são menos enfatizados na astrologia por sua brevidade."
                    : "O ciclo lunar de 28 dias, com suas fases de Lua Nova, Crescente, Cheia e Minguante, reflete nossos ritmos emocionais internos. A Lua também forma um ciclo mensal através dos 12 signos."}
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Importância no Mapa Natal</h3>
                <p className="text-sm text-muted-foreground">
                  {isSun
                    ? "O Sol representa nosso propósito de vida e identidade consciente. Sua posição por signo e casa no mapa natal indica onde e como buscamos brilhar e expressar nossa individualidade."
                    : "A Lua representa nossas necessidades emocionais e padrões subconscientes. Sua posição por signo e casa no mapa natal indica onde e como buscamos conforto e segurança emocional."}
                </p>
              </div>
            </>
          )}

          {isUranus && (
            <>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Urano em Aquário</h3>
                <p className="text-sm text-muted-foreground">
                  Em seu domicílio, Urano expressa seu potencial máximo: originalidade, inovação, visão progressista e
                  pensamento revolucionário. Pessoas com esta posição tendem a ser visionárias e independentes.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Urano em Trânsito</h3>
                <p className="text-sm text-muted-foreground">
                  Urano leva aproximadamente 84 anos para completar sua órbita ao redor do Sol, passando cerca de 7 anos
                  em cada signo. Quando Urano transita por uma área do mapa natal, traz mudanças inesperadas e
                  oportunidades para libertação.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">A Influência Geracional</h3>
                <p className="text-sm text-muted-foreground">
                  Por permanecer tanto tempo em cada signo, Urano tem uma influência geracional. Pessoas nascidas com
                  Urano no mesmo signo compartilham uma visão coletiva de liberdade e revolução.
                </p>
              </div>
            </>
          )}

          {isNeptune && (
            <>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Netuno em Peixes</h3>
                <p className="text-sm text-muted-foreground">
                  Em seu domicílio, Netuno expressa seu potencial máximo: intuição profunda, compaixão universal,
                  espiritualidade e dissolução de fronteiras. Pessoas com esta posição tendem a ser altamente intuitivas
                  e empáticas.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Netuno em Trânsito</h3>
                <p className="text-sm text-muted-foreground">
                  Netuno leva aproximadamente 165 anos para completar sua órbita ao redor do Sol, passando cerca de 14
                  anos em cada signo. Quando Netuno transita por uma área do mapa natal, traz dissolução de estruturas
                  antigas e inspiração criativa.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">A Névoa Neptuniana</h3>
                <p className="text-sm text-muted-foreground">
                  Netuno pode criar uma "névoa" que dificulta ver as coisas claramente. Esta qualidade pode
                  manifestar-se como inspiração artística e espiritual, mas também como confusão ou ilusão.
                </p>
              </div>
            </>
          )}

          {isPluto && (
            <>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Plutão em Escorpião</h3>
                <p className="text-sm text-muted-foreground">
                  Em seu domicílio, Plutão expressa seu potencial máximo: transformação profunda, poder regenerativo,
                  intensidade emocional e capacidade de enfrentar o lado sombrio da vida. Pessoas com esta posição
                  tendem a ser profundas e intensas.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">Plutão em Trânsito</h3>
                <p className="text-sm text-muted-foreground">
                  Plutão leva aproximadamente 248 anos para completar sua órbita ao redor do Sol, passando entre 12 e 31
                  anos em cada signo. Quando Plutão transita por uma área do mapa natal, traz transformações profundas.
                </p>
              </div>
              <div className="rounded-md bg-white border p-4">
                <h3 className="mb-2 font-semibold">O Processo Plutoniano</h3>
                <p className="text-sm text-muted-foreground">
                  O processo de transformação de Plutão frequentemente segue um padrão: primeiro vem a destruição ou
                  crise, seguida por um período de vazio, e finalmente a regeneração ou renascimento.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Anúncio no final da página */}
      <PortalAstralAd />
    </div>
  )
}
