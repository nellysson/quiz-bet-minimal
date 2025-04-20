"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Sun, Moon, Compass, Home, Sparkles, BookOpen, Brain, Lightbulb } from "lucide-react"

export default function MapaNatalClient() {
  // Tópicos relacionados ao mapa natal
  const topics = [
    {
      title: "O que é o Mapa Astral",
      description: "Entenda o significado e a importância do mapa astral na astrologia",
      image: "/celestial-blueprint.png",
      slug: "o-que-e-mapa-astral",
      icon: <Star className="h-5 w-5" />,
    },
    {
      title: "Planetas no Mapa",
      description: "Como os planetas influenciam diferentes aspectos da sua personalidade",
      image: "/astrological-planets-wheel.png",
      slug: "planetas-no-mapa",
      icon: <Sun className="h-5 w-5" />,
    },
    {
      title: "Casas Astrológicas",
      description: "As 12 casas e suas áreas de influência na sua vida",
      image: "/astrological-houses-wheel.png",
      slug: "casas-astrologicas",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Aspectos",
      description: "Como os ângulos entre planetas moldam sua personalidade",
      image: "/astrological-aspects-wheel.png",
      slug: "aspectos-astrologicos",
      icon: <Compass className="h-5 w-5" />,
    },
    {
      title: "Interpretação",
      description: "Como interpretar as diferentes partes do seu mapa astral",
      image: "/natal-chart.png",
      slug: "interpretacao-mapa-astral",
      icon: <Moon className="h-5 w-5" />,
    },
    {
      title: "Calculadora",
      description: "Calcule seu mapa astral completo com nossa ferramenta",
      image: "/celestial-wheel.png",
      slug: "calculadora",
      icon: <Sparkles className="h-5 w-5" />,
    },
  ]

  return (
    <div className="relative">
      {/* Hero Section com background cósmico */}
      <div className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image src="/cosmic-planets-background.jpg" alt="Cosmos" fill className="object-cover opacity-60" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              Descubra o Cosmos Interior
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-white via-primary to-purple-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
              Mapa Astral
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl">
              Uma fotografia do céu no momento do seu nascimento, revelando sua personalidade, potenciais e desafios
              através da linguagem cósmica dos astros.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/calculadora-mapa-astral"
                className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg text-lg inline-block text-center"
              >
                Gerar Meu Mapa Astral
              </Link>
              <a
                href="#saiba-mais"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("saiba-mais")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg text-lg inline-block text-center hover:bg-white/10"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>

        {/* Elementos decorativos estáticos (sem animação) */}
        <div className="absolute top-1/4 left-10 h-20 w-20 rounded-full bg-primary/20 blur-xl"></div>
        <div className="absolute bottom-1/3 right-10 h-32 w-32 rounded-full bg-purple-500/20 blur-xl"></div>
        <div className="absolute top-2/3 left-1/4 h-16 w-16 rounded-full bg-blue-500/20 blur-xl"></div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto px-4 py-16" id="saiba-mais">
          {/* Introdução ao Mapa Astral */}
          <div className="mb-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">O Que é o Mapa Astral?</h2>
              <p className="mb-6 text-lg text-gray-700">
                O mapa astral é muito mais que um simples horóscopo. É um retrato detalhado do céu no momento exato do
                seu nascimento, revelando insights profundos sobre sua personalidade, talentos, desafios e potenciais.
              </p>
              <p className="text-lg text-gray-700">
                Ao contrário do horóscopo popular que considera apenas seu signo solar, o mapa astral analisa as
                posições do Sol, da Lua, dos planetas, das casas astrológicas e os aspectos entre eles, oferecendo uma
                visão completa e personalizada da sua essência.
              </p>
            </div>

            {/* Cards de elementos principais */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-xl border border-primary/20 bg-primary/5 p-6 transition-all hover:border-primary/30 hover:bg-primary/10">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Sun className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Signo Solar</h3>
                  <p className="text-gray-700">
                    Representa sua identidade essencial, seu ego consciente e propósito de vida. É o que popularmente
                    chamamos de "signo".
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-blue-500/20 bg-blue-500/5 p-6 transition-all hover:border-blue-500/30 hover:bg-blue-500/10">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/10"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                    <Moon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Signo Lunar</h3>
                  <p className="text-gray-700">
                    Revela seu mundo emocional, instintos, memórias e necessidades de segurança e pertencimento.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-purple-500/5 p-6 transition-all hover:border-purple-500/30 hover:bg-purple-500/10">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/10"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-purple-500">
                    <Compass className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Ascendente</h3>
                  <p className="text-gray-700">
                    Representa sua "máscara social", como você se apresenta ao mundo e a primeira impressão que causa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefícios de conhecer seu mapa astral */}
          <div className="my-20">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Por Que Conhecer Seu Mapa Astral?</h2>
              <p className="text-lg text-gray-700">
                Descubra como o mapa astral pode transformar sua compreensão de si mesmo e do mundo ao seu redor
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group overflow-hidden border-primary/10 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-0">
                  <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="h-16 w-16 text-primary/70" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold">Autoconhecimento Profundo</h3>
                    <p className="text-gray-700">
                      Descubra aspectos da sua personalidade que talvez você não reconheça conscientemente, mas que
                      influenciam suas decisões e comportamentos diários.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-sm">Compreenda seus talentos naturais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-sm">Identifique padrões inconscientes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-sm">Reconheça suas motivações profundas</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-primary/10 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-0">
                  <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Compass className="h-16 w-16 text-blue-500/70" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold">Orientação para Decisões</h3>
                    <p className="text-gray-700">
                      Entenda seus pontos fortes e desafios, ajudando a tomar decisões mais alinhadas com quem você
                      realmente é e seu propósito de vida.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Escolhas profissionais mais satisfatórias</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Relacionamentos mais harmoniosos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Clareza sobre seu caminho de vida</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-primary/10 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-0">
                  <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lightbulb className="h-16 w-16 text-purple-500/70" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold">Compreensão de Padrões</h3>
                    <p className="text-gray-700">
                      Identifique padrões recorrentes em sua vida, relacionamentos e carreira, permitindo transformar
                      desafios em oportunidades de crescimento.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                        <span className="text-sm">Supere bloqueios emocionais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                        <span className="text-sm">Transforme desafios em forças</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                        <span className="text-sm">Desenvolva maior resiliência</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA central com visual impactante */}
          <div className="my-20 overflow-hidden rounded-2xl">
            <div className="relative">
              <div className="absolute inset-0 z-0">
                <Image src="/cosmic-background.png" alt="Cosmos" fill className="object-cover opacity-20" />
              </div>

              <div className="relative z-10 grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
                <div>
                  <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                    Pronto para Explorar seu Destino Cósmico?
                  </h2>
                  <p className="mb-6 text-lg text-gray-700">
                    Descubra uma análise profunda e personalizada das influências astrais que moldam sua essência,
                    revelando insights transformadores sobre seu caminho de vida.
                  </p>
                  <Link
                    href="/calculadora-mapa-astral"
                    className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg text-lg inline-block text-center"
                  >
                    Revelar Meu Mapa Astral
                  </Link>
                </div>

                <div className="hidden md:block">
                  <div className="relative h-80 w-80 mx-auto">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_fx%20%287%29.jpg-hGsmgeW36xtYKHgrMQnOIzDXjyIrbk.png"
                      alt="Mapa Astral Vintage"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elementos do Mapa Astral com visual moderno */}
          <div className="my-20">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Elementos do Mapa Astral</h2>
              <p className="text-lg text-gray-700">
                Conheça os componentes que formam seu mapa astral e como eles se relacionam para criar sua impressão
                digital cósmica
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Sun className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Planetas</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Cada planeta representa uma energia ou função psicológica específica:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <div>
                      <span className="font-medium">Sol:</span> Identidade, propósito, vitalidade
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <div>
                      <span className="font-medium">Lua:</span> Emoções, instintos, necessidades
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <div>
                      <span className="font-medium">Mercúrio:</span> Comunicação, pensamento, aprendizado
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <div>
                      <span className="font-medium">Vênus:</span> Amor, valores, beleza, prazer
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <div>
                      <span className="font-medium">Marte:</span> Ação, desejo, coragem, energia
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                    <BookOpen className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Signos</h3>
                </div>
                <p className="mb-4 text-gray-700">Os 12 signos do zodíaco representam qualidades e características:</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-2">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span>Áries</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-2">
                    <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                    <span>Touro</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span>Gêmeos</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    <span>Câncer</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-2">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    <span>Leão</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span>Virgem</span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <Button asChild variant="link" className="text-sm text-blue-500">
                    <Link href="/categorias/signos">Ver todos os signos →</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                    <Home className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Casas</h3>
                </div>
                <p className="mb-4 text-gray-700">As 12 casas astrológicas representam diferentes áreas da vida:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                    <div>
                      <span className="font-medium">Casa 1:</span> Identidade, aparência, abordagem da vida
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                    <div>
                      <span className="font-medium">Casa 4:</span> Lar, família, raízes, segurança emocional
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                    <div>
                      <span className="font-medium">Casa 7:</span> Relacionamentos, parcerias, casamento
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                    <div>
                      <span className="font-medium">Casa 10:</span> Carreira, status, reputação, propósito
                    </div>
                  </li>
                </ul>
                <div className="mt-3 text-center">
                  <Button asChild variant="link" className="text-sm text-purple-500">
                    <Link href="/categorias/casas">Ver todas as casas →</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20">
                    <Compass className="h-6 w-6 text-cyan-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Aspectos</h3>
                </div>
                <p className="mb-4 text-gray-700">Os aspectos são ângulos específicos formados entre planetas:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-cyan-500"></div>
                    <div>
                      <span className="font-medium">Conjunção (0°):</span> Fusão de energias, intensificação
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-cyan-500"></div>
                    <div>
                      <span className="font-medium">Trígono (120°):</span> Harmonia, fluxo, talentos naturais
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-cyan-500"></div>
                    <div>
                      <span className="font-medium">Quadratura (90°):</span> Tensão, desafio, crescimento
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-cyan-500"></div>
                    <div>
                      <span className="font-medium">Oposição (180°):</span> Polaridade, equilíbrio, consciência
                    </div>
                  </li>
                </ul>
                <div className="mt-3 text-center">
                  <Button asChild variant="link" className="text-sm text-cyan-500">
                    <Link href="/categorias/aspectos">Ver todos os aspectos →</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Depoimentos ou citações */}
          <div className="my-20 rounded-xl border border-gray-200 bg-gradient-to-r from-primary/10 to-purple-500/10 p-8 md:p-12 shadow-sm">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 text-4xl">✨</div>
              <blockquote className="mb-6 text-xl font-medium italic md:text-2xl">
                "Conhece-te a ti mesmo e conhecerás o universo e os deuses."
              </blockquote>
              <p className="text-gray-700">— Inscrição no Templo de Delfos, Grécia Antiga</p>
            </div>
          </div>

          {/* CTA final com design impactante */}
          <div className="my-20 overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 to-purple-500/20 p-8 text-center md:p-12 shadow-sm">
            <div className="relative">
              {/* Elementos decorativos */}
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10"></div>
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-500/10"></div>

              <div className="relative z-10">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Descubra os Segredos do Seu Céu Natal</h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
                  Cada mapa astral é único como uma impressão digital cósmica. Descubra o seu agora e inicie uma jornada
                  de autoconhecimento profundo.
                </p>
                <Link
                  href="/calculadora-mapa-astral"
                  className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg text-lg inline-block text-center"
                >
                  Revelar Meu Mapa Astral Completo
                </Link>

                {/* Ícones de planetas decorativos */}
                <div className="mt-8 flex justify-center gap-4 text-2xl opacity-70">
                  <span>♈</span>
                  <span>♉</span>
                  <span>♊</span>
                  <span>♋</span>
                  <span>♌</span>
                  <span>♍</span>
                  <span>♎</span>
                  <span>♏</span>
                  <span>♐</span>
                  <span>♑</span>
                  <span>♒</span>
                  <span>♓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
