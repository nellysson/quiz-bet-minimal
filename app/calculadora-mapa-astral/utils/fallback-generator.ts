import { zodiacSigns } from "@/data/zodiac-signs"

interface MapaAstralParams {
  nome: string
  dataNascimento: string
  horaNascimento: string
  cidade: string
  pais: string
}

// Função para determinar o signo solar com base na data de nascimento
function determinarSignoSolar(dataNascimento: string): string {
  try {
    const data = new Date(dataNascimento)
    const dia = data.getDate()
    const mes = data.getMonth() + 1 // getMonth() retorna 0-11

    for (const signo of zodiacSigns) {
      const [startMonth, startDay, endMonth, endDay] = signo.dateRanges

      if ((mes === startMonth && dia >= startDay) || (mes === endMonth && dia <= endDay)) {
        return signo.name
      }
    }

    return "Áries" // Fallback padrão
  } catch (error) {
    console.error("Erro ao determinar signo solar:", error)
    return "Áries" // Fallback padrão em caso de erro
  }
}

// Função para determinar o signo lunar (simplificada para fins de demonstração)
function determinarSignoLunar(dataNascimento: string): string {
  try {
    const data = new Date(dataNascimento)
    // Usar um algoritmo simplificado baseado no dia do mês
    const dia = data.getDate()
    const index = Math.floor((dia - 1) / 2.5) % 12
    return zodiacSigns[index].name
  } catch (error) {
    console.error("Erro ao determinar signo lunar:", error)
    return "Câncer" // Fallback padrão em caso de erro
  }
}

// Função para determinar o ascendente (simplificada para fins de demonstração)
function determinarAscendente(dataNascimento: string, horaNascimento: string): string {
  try {
    // Extrair a hora do formato HH:MM
    const [horas, minutos] = horaNascimento.split(":").map(Number)

    // Algoritmo simplificado baseado na hora do dia
    const horaDecimal = horas + minutos / 60
    const index = Math.floor(horaDecimal / 2) % 12
    return zodiacSigns[index].name
  } catch (error) {
    console.error("Erro ao determinar ascendente:", error)
    return "Libra" // Fallback padrão em caso de erro
  }
}

// Função para gerar um mapa astral de fallback
export function generateFallbackMapaAstral(params: MapaAstralParams): string {
  const { nome, dataNascimento, horaNascimento } = params

  const signoSolar = determinarSignoSolar(dataNascimento)
  const signoLunar = determinarSignoLunar(dataNascimento)
  const ascendente = determinarAscendente(dataNascimento, horaNascimento)

  // Encontrar os objetos de signo correspondentes
  const signoSolarObj = zodiacSigns.find((s) => s.name === signoSolar)
  const signoLunarObj = zodiacSigns.find((s) => s.name === signoLunar)
  const ascendenteObj = zodiacSigns.find((s) => s.name === ascendente)

  // Extrair características relevantes
  const tracosSolares = signoSolarObj?.traits.slice(0, 3).join(", ") || ""
  const tracosLunares = signoLunarObj?.traits.slice(0, 3).join(", ") || ""
  const tracosAscendente = ascendenteObj?.traits.slice(0, 3).join(", ") || ""

  // Gerar o mapa astral com formatação HTML simples
  return `
    <div class="mapa-astral-content">
      <h1>Mapa Astral para ${nome}</h1>
      
      <div>
        <h2>🌞 Signo Solar</h2>
        <p><strong>${signoSolar}</strong></p>
        <p>Características principais: ${tracosSolares}</p>
        <p>Energia e personalidade dominante: Como ${signoSolar}, sua essência expressa ${
          signoSolarObj?.element === "Fogo"
            ? "entusiasmo e iniciativa"
            : signoSolarObj?.element === "Terra"
              ? "praticidade e estabilidade"
              : signoSolarObj?.element === "Ar"
                ? "sociabilidade e comunicação"
                : "sensibilidade e intuição"
        }.</p>
        <p>Pontos fortes e desafios: Seus pontos fortes incluem ${signoSolarObj?.traits
          .slice(0, 2)
          .join(" e ")}. Seus desafios podem envolver tendências a ${
          signoSolarObj?.element === "Fogo"
            ? "impaciência"
            : signoSolarObj?.element === "Terra"
              ? "rigidez"
              : signoSolarObj?.element === "Ar"
                ? "dispersão"
                : "hipersensibilidade"
        }.</p>
      </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold text-primary mb-4">🌙 Signo Lunar</h2>
    
    <p class="text-xl font-semibold mb-3">${signoLunar}</p>
    
    <p class="mb-4">Como você lida com as emoções: Sua lua em ${signoLunar} sugere que você processa emoções de forma ${
      signoLunarObj?.element === "Fogo"
        ? "expressiva e apaixonada"
        : signoLunarObj?.element === "Terra"
          ? "prática e contida"
          : signoLunarObj?.element === "Ar"
            ? "racional e comunicativa"
            : "profunda e intuitiva"
    }.</p>
    
    <p class="mb-4">Segurança emocional e afetividade: Você se sente seguro emocionalmente quando ${
      signoLunarObj?.element === "Fogo"
        ? "pode expressar livremente seu entusiasmo"
        : signoLunarObj?.element === "Terra"
          ? "tem estabilidade e rotina"
          : signoLunarObj?.element === "Ar"
            ? "pode trocar ideias e socializar"
            : "há conexão emocional profunda"
    }.</p>
    
    <p class="mb-4">Relações familiares e da infância: Suas memórias de infância e padrões familiares provavelmente envolvem temas de ${
      signoLunarObj?.element === "Fogo"
        ? "estímulo e independência"
        : signoLunarObj?.element === "Terra"
          ? "estrutura e tradição"
          : signoLunarObj?.element === "Ar"
            ? "comunicação e curiosidade"
            : "sensibilidade e proteção"
    }.</p>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold text-primary mb-4">⬆️ Ascendente</h2>
    
    <p class="text-xl font-semibold mb-3">${ascendente}</p>
    
    <p class="mb-4">Primeira impressão que transmite: Com ascendente em ${ascendente}, você tende a ser visto inicialmente como ${tracosAscendente}.</p>
    
    <p class="mb-4">Estilo pessoal e comportamento social: Sua abordagem social é caracterizada por ${
      ascendenteObj?.element === "Fogo"
        ? "confiança e entusiasmo"
        : ascendenteObj?.element === "Terra"
          ? "praticidade e confiabilidade"
          : ascendenteObj?.element === "Ar"
            ? "sociabilidade e adaptabilidade"
            : "receptividade e empatia"
    }.</p>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold text-primary mb-4">🪐 Planetas Pessoais (resumo)</h2>
    
    <p class="mb-3"><strong>Sol em ${signoSolar}</strong>: Representa sua identidade consciente e propósito de vida.</p>
    
    <p class="mb-3"><strong>Lua em ${signoLunar}</strong>: Governa suas emoções, instintos e necessidades de segurança.</p>
    
    <p class="mb-3"><strong>Mercúrio</strong>: Influencia sua comunicação e pensamento, provavelmente próximo ao seu Sol.</p>
    
    <p class="mb-3"><strong>Vênus</strong>: Afeta seus valores e relacionamentos, trazendo qualidades de harmonia e apreciação.</p>
    
    <p class="mb-3"><strong>Marte</strong>: Determina como você age e se afirma, dando energia e impulso.</p>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold text-primary mb-4">🏠 Casas Astrológicas (resumo)</h2>
    
    <p class="mb-4">Baseado na combinação de seus signos, estas áreas da vida provavelmente são significativas para você:</p>
    
    <p class="mb-3"><strong>Relacionamentos</strong>: A interação entre seu Sol em ${signoSolar} e Lua em ${signoLunar} sugere que ${
      signoSolarObj?.element === signoLunarObj?.element ? "há harmonia" : "pode haver tensão criativa"
    } na forma como você se relaciona com os outros.</p>
    
    <p class="mb-3"><strong>Carreira</strong>: Seu ascendente em ${ascendente} indica que você pode se destacar em carreiras que valorizem ${ascendenteObj?.traits
      .slice(0, 2)
      .join(" e ")}.</p>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold text-primary mb-4">💫 Tendências Cármicas e Espirituais</h2>
    
    <p class="mb-4">A combinação de ${signoSolar}, ${signoLunar} e ${ascendente} sugere que suas lições de vida envolvem o equilíbrio entre ${
      signoSolarObj?.element || "fogo"
    }, ${signoLunarObj?.element || "água"} e ${ascendenteObj?.element || "terra"}.</p>
    
    <p class="mb-4">Seus desafios espirituais podem incluir aprender a integrar sua necessidade de ${
      signoSolarObj?.element === "Fogo"
        ? "expressão e liberdade"
        : signoSolarObj?.element === "Terra"
          ? "estabilidade e segurança"
          : signoSolarObj?.element === "Ar"
            ? "comunicação e conexão social"
            : "profundidade emocional e intuição"
    } com sua natureza emocional ${
      signoLunarObj?.element === "Fogo"
        ? "apaixonada"
        : signoLunarObj?.element === "Terra"
          ? "prática"
          : signoLunarObj?.element === "Ar"
            ? "racional"
            : "sensível"
    }.</p>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold text-primary mb-4">🌠 Mensagem Final</h2>
    
    <p class="mb-4">Como ${signoSolar} com Lua em ${signoLunar} e Ascendente em ${ascendente}, você carrega uma combinação única de energias cósmicas que moldam sua jornada nesta vida. Esta configuração celestial não é por acaso - ela representa um mapa para seu desenvolvimento pessoal e espiritual.</p>
    
    <p class="mb-4">Sua essência solar em ${signoSolar} revela seu propósito central nesta encarnação: desenvolver e expressar as qualidades de ${tracosSolares}. Este é o coração de quem você é, a chama que ilumina seu caminho. Quando você honra esta energia, sente-se vivo, autêntico e alinhado com seu verdadeiro eu.</p>
    
    <p class="mb-4">Sua lua em ${signoLunar} representa suas necessidades emocionais mais profundas e os padrões subconscientes que você traz de outras vidas. Esta energia lunar influencia como você busca conforto, segurança e nutrição emocional. Ao compreender e honrar estas necessidades, você cria harmonia interna e desenvolve maior resiliência emocional.</p>
    
    <p class="mb-4">Seu ascendente em ${ascendente} é a lente através da qual você experimenta o mundo e como o mundo o experimenta. É a máscara que você usa, não como disfarce, mas como uma interface necessária entre seu mundo interior e o exterior. Ao reconhecer a influência do seu ascendente, você pode navegar com mais consciência nas interações sociais e na forma como se apresenta aos outros.</p>
    
    <p class="mb-4">A jornada de integração destas três energias principais - junto com as influências dos outros planetas - representa seu caminho de evolução nesta vida. Os desafios que você enfrenta não são obstáculos, mas oportunidades para crescimento e transformação. Cada experiência, seja harmoniosa ou desafiadora, serve ao propósito maior de sua evolução espiritual.</p>
    
    <p class="mb-4">Lembre-se sempre: você não está limitado pelo seu mapa astral, mas é iluminado por ele. As estrelas inclinam, mas não obrigam. Você possui o livre-arbítrio para trabalhar conscientemente com estas energias, transformando potenciais desafios em forças e expandindo suas qualidades positivas.</p>
    
    <p class="mb-4">Confie na sabedoria do universo que se manifesta através de você. Sua configuração astrológica única é um presente - um conjunto de ferramentas especialmente selecionadas para sua jornada nesta vida. Ao honrar quem você é, com todas as suas complexidades e aparentes contradições, você não apenas realiza seu potencial pessoal, mas também contribui de forma única para a tapeçaria maior da existência.</p>
    
    <p class="mb-4">Que as estrelas iluminem seu caminho enquanto você dança com os ritmos cósmicos que ressoam em seu ser mais profundo.</p>
  </div>
</div>`
}
