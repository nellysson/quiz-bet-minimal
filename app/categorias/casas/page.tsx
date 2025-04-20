import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { houses } from "@/data/houses"

export const metadata: Metadata = {
  title: "Casas Astrológicas | Portal Astral",
  description: "Conheça as 12 casas astrológicas, suas áreas de influência e significados no mapa natal.",
}

export default function CasasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-4xl font-bold">Casas Astrológicas</h1>

      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="text-lg text-muted-foreground">
          As Casas Astrológicas são doze setores ou compartimentos que dividem o mapa natal, cada um representando uma
          área específica da vida. Enquanto os signos descrevem 'como' as energias se manifestam, as casas mostram
          'onde' elas atuam em nossa experiência.
        </p>
      </div>

      <div className="mb-10 p-6 bg-gradient-to-r from-purple-900/30 to-primary/20 rounded-xl backdrop-blur-sm border border-white/10">
        <h2 className="text-2xl font-bold mb-4">Entendendo as Casas Astrológicas</h2>
        <p className="mb-4">
          As casas astrológicas representam diferentes áreas da vida e experiência humana. Elas são calculadas com base
          na hora e local exatos de nascimento, o que as torna altamente personalizadas para cada indivíduo. Enquanto os
          signos representam qualidades e características, as casas mostram onde essas energias se manifestam em nossa
          vida cotidiana.
        </p>
        <p>
          Cada casa é regida naturalmente por um signo e um planeta, criando uma teia de significados e influências que
          moldam nossa jornada. Ao compreender as casas em seu mapa natal, você obtém insights valiosos sobre seus
          talentos, desafios e áreas de desenvolvimento ao longo da vida.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {houses.map((house) => (
          <Card
            key={house.slug}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardContent className="p-0">
              <Link href={`/categorias/casas/${house.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={getHouseImageSrc(house.number) || "/placeholder.svg"}
                    alt={house.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{house.name}</h2>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      {house.number}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{house.governs}</p>
                  <p className="text-xs text-muted-foreground italic">{getHouseKeywords(house.number)}</p>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Casas Angulares (1, 4, 7, 10)</h2>
          <p className="mb-2">
            As casas angulares são consideradas as mais poderosas e dinâmicas. Elas iniciam cada quadrante do mapa e
            representam áreas de ação direta e manifestação visível em nossa vida.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Casa 1:</strong> Identidade e aparência física
            </li>
            <li>
              <strong>Casa 4:</strong> Lar, família e raízes
            </li>
            <li>
              <strong>Casa 7:</strong> Relacionamentos e parcerias
            </li>
            <li>
              <strong>Casa 10:</strong> Carreira, status e reputação pública
            </li>
          </ul>
        </div>

        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Casas Sucedentes (2, 5, 8, 11)</h2>
          <p className="mb-2">
            As casas sucedentes seguem as casas angulares e representam áreas de estabilidade, segurança e recursos.
            Elas mostram como consolidamos e mantemos o que iniciamos nas casas angulares.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Casa 2:</strong> Recursos, valores e posses
            </li>
            <li>
              <strong>Casa 5:</strong> Criatividade, romance e filhos
            </li>
            <li>
              <strong>Casa 8:</strong> Transformação, sexualidade e recursos compartilhados
            </li>
            <li>
              <strong>Casa 11:</strong> Amizades, grupos e objetivos futuros
            </li>
          </ul>
        </div>

        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Casas Cadentes (3, 6, 9, 12)</h2>
          <p className="mb-2">
            As casas cadentes precedem as casas angulares e representam áreas de transição, adaptação e preparação. Elas
            mostram como processamos experiências e nos preparamos para novos ciclos.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Casa 3:</strong> Comunicação, aprendizado e ambiente próximo
            </li>
            <li>
              <strong>Casa 6:</strong> Trabalho, saúde e rotina
            </li>
            <li>
              <strong>Casa 9:</strong> Filosofia, viagens longas e educação superior
            </li>
            <li>
              <strong>Casa 12:</strong> Subconsciente, espiritualidade e isolamento
            </li>
          </ul>
        </div>

        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Sistemas de Casas</h2>
          <p className="mb-2">
            Existem diversos sistemas para calcular as casas astrológicas, cada um com suas particularidades e
            aplicações:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Placidus:</strong> O mais popular no Ocidente, baseado em divisões de tempo
            </li>
            <li>
              <strong>Whole Sign:</strong> Cada signo completo constitui uma casa, começando pelo Ascendente
            </li>
            <li>
              <strong>Koch:</strong> Baseado no nascimento simbólico do indivíduo ao longo do dia
            </li>
            <li>
              <strong>Equal House:</strong> Casas de tamanho igual, começando pelo Ascendente
            </li>
            <li>
              <strong>Porphyry:</strong> Divide o espaço entre ângulos em três partes iguais
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// Função para obter a imagem da casa com base no número
function getHouseImageSrc(houseNumber: number): string {
  // Mapeamento para as imagens específicas de todas as casas usando URLs externos
  if (houseNumber === 1) return "/houses/house-1.png"
  if (houseNumber === 2) return "/houses/house-2.png"
  if (houseNumber === 3) return "/houses/house-3.png"
  if (houseNumber === 4) return "/houses/house-4.png"
  if (houseNumber === 5) return "/houses/house-5.png"
  if (houseNumber === 6) return "/houses/house-6.png"
  if (houseNumber === 7)
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-3Y6A3CVeV3AAteMIX8gt2A0CTyzpJa.png"
  if (houseNumber === 8)
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-IrfmqR1oak7ny1pcIOLXDwSejVbBaQ.png"
  if (houseNumber === 9)
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-f6FPPH1wgRnuUFZeFvC3TNaCd0xve3.png"
  if (houseNumber === 10)
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-8lReoy9mXxOB8NdYyqOfxZqDOlEWNZ.png"
  if (houseNumber === 11)
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-9N4pRm3ufLLbRldwGoyYrqSPil6d4B.png"
  if (houseNumber === 12)
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-mMelJBXf7A39cnw73uuJmVDecNwtVH.png"

  // Fallback (não deve ser necessário agora que temos todas as imagens)
  return `/placeholder.svg?height=200&width=200&query=astrological house ${houseNumber}`
}

// Função para obter palavras-chave para cada casa
function getHouseKeywords(houseNumber: number): string {
  const keywords = {
    1: "Identidade, personalidade, aparência, abordagem da vida",
    2: "Valores, finanças, posses, talentos, autoestima",
    3: "Comunicação, aprendizado, irmãos, vizinhança, deslocamentos curtos",
    4: "Lar, família, raízes, segurança emocional, ancestralidade",
    5: "Criatividade, romance, filhos, prazer, autoexpressão",
    6: "Trabalho, saúde, rotina, serviço, habilidades práticas",
    7: "Relacionamentos, parcerias, casamento, contratos, o outro",
    8: "Transformação, sexualidade, recursos compartilhados, renascimento",
    9: "Filosofia, viagens longas, educação superior, espiritualidade",
    10: "Carreira, status social, reputação, autoridade, propósito público",
    11: "Amizades, grupos, causas sociais, esperanças, objetivos futuros",
    12: "Subconsciente, espiritualidade, isolamento, sacrifício, transcendência",
  }

  return keywords[houseNumber as keyof typeof keywords] || ""
}
