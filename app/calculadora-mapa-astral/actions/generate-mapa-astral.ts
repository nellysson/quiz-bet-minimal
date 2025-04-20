"use server"
import { MapaAstralCache } from "../utils/cache-manager"
import { generateFallbackMapaAstral } from "../utils/fallback-generator"
import { sanitizeHtml } from "../utils/html-sanitizer"

interface MapaAstralParams {
  nome: string
  dataNascimento: string
  horaNascimento: string
  cidade: string
  pais: string
}

export async function generateMapaAstral(params: MapaAstralParams): Promise<string> {
  const { nome, dataNascimento, horaNascimento, cidade, pais } = params

  // Verificar se temos este mapa astral em cache
  const cache = MapaAstralCache.getInstance()
  const cachedResult = cache.get(params)

  if (cachedResult) {
    console.log("Retornando resultado do cache para:", nome)
    return cachedResult
  }

  try {
    console.log("Gerando mapa astral para:", nome)

    // Obter a chave API diretamente da variável de ambiente
    const apiKey = process.env.OPENAI_API_KEY

    console.log("Status da chave API:", apiKey ? "Presente" : "Ausente")

    if (!apiKey) {
      console.log("Chave API não encontrada, usando fallback")
      const fallbackResult = generateFallbackMapaAstral(params)
      const sanitizedResult = sanitizeHtml(fallbackResult)
      cache.set(params, sanitizedResult)
      return sanitizedResult
    }

    const prompt = `Você é um astrólogo experiente e criador de conteúdo para sites de astrologia. Com base nas informações abaixo, gere um mapa astral completo, dividido em tópicos, com linguagem envolvente, acessível e bem organizada visualmente, como se fosse publicado em um site profissional.

Dados do usuário:

Nome: ${nome}

Data de nascimento: ${dataNascimento}

Hora de nascimento: ${horaNascimento}

Cidade de nascimento: ${cidade}

País de nascimento: ${pais}

Gere os seguintes tópicos, com subtítulos e emojis para enriquecer a apresentação visual do conteúdo. Use HTML simples sem classes CSS complexas:

<div>
  <h1>Mapa Astral para ${nome}</h1>

  <div>
    <h2>🌞 Signo Solar</h2>
    
    <p><strong>[Nome do signo]</strong></p>
    
    <p>[Características principais]</p>
    
    <p>[Energia e personalidade dominante]</p>
    
    <p>[Pontos fortes e desafios]</p>
  </div>

  <!-- Continue este formato para cada seção -->
</div>

Siga este formato para cada seção, garantindo espaçamento adequado entre parágrafos e seções.

Tópicos a incluir:

🌞 Signo Solar
- Nome do signo
- Características principais
- Energia e personalidade dominante
- Pontos fortes e desafios

🌙 Signo Lunar
- Nome do signo
- Como a pessoa lida com as emoções
- Segurança emocional e afetividade
- Relações familiares e da infância

⬆️ Ascendente
- Nome do signo
- Primeira impressão que transmite
- Estilo pessoal e comportamento social

🪐 Planetas Pessoais (resumo)
- Sol, Lua, Mercúrio, Vênus e Marte
- Explicações breves sobre o impacto de cada planeta na vida do usuário
- Linguagem simples e cotidiana (evite termos técnicos complexos)

🏠 Casas Astrológicas (resumo)
- Destaque 2 ou 3 casas com posicionamentos importantes
- Relacione com temas como amor, carreira, espiritualidade

💫 Tendências Cármicas e Espirituais
- O que a combinação dos signos revela sobre lições de vida
- Potenciais desafios e evolução da alma

🌠 Mensagem Final
- Crie uma mensagem inspiradora e personalizada com base no conjunto geral do mapa astral.
- Estimule o autoconhecimento, com um tom acolhedor e poético.
- Esta mensagem final deve ter pelo menos 1500 caracteres e ser profunda e significativa.

Instruções de Estilo:
- Use formatação HTML simples com tags <h1>, <h2>, <p>, <strong>, etc.
- Linguagem envolvente, acolhedora e mística
- NÃO INCLUA SUGESTÕES DE IMAGENS no texto, apenas o conteúdo textual do mapa astral
- NÃO USE MARKDOWN, apenas HTML simples
- NÃO INCLUA BLOCOS DE CÓDIGO OU TAGS \`\`\`html no início ou fim do conteúdo`

    console.log("Enviando prompt para a API OpenAI")

    try {
      // Usar fetch diretamente para ter mais controle sobre a requisição
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o", // Atualizado para GPT-4o
          messages: [
            {
              role: "system",
              content:
                "Você é um astrólogo experiente especializado em mapas astrais. Crie conteúdo rico e detalhado com formatação HTML simples, garantindo bom espaçamento entre parágrafos e seções. NÃO use Markdown, apenas HTML simples. NÃO inclua blocos de código ou tags ```html no início ou fim do conteúdo.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.7,
          max_tokens: 4000, // Aumentado para acomodar a mensagem final mais longa
        }),
      })

      console.log("Status da resposta:", response.status)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("Erro da API OpenAI:", errorData)
        throw new Error(`Erro na API OpenAI: ${response.status}`)
      }

      const data = await response.json()
      console.log("Resposta recebida com sucesso")

      const result = data.choices[0].message.content
      console.log("Conteúdo bruto recebido:", result.substring(0, 100) + "...")

      // Sanitizar o HTML antes de armazenar em cache
      const sanitizedResult = sanitizeHtml(result)

      // Armazenar o resultado em cache
      cache.set(params, sanitizedResult)

      return sanitizedResult
    } catch (fetchError) {
      console.error("Erro detalhado na chamada fetch:", fetchError)

      // Em caso de erro na API, usar o gerador de fallback
      console.log("Usando gerador de fallback devido a erro na API")
      const fallbackResult = generateFallbackMapaAstral(params)
      const sanitizedResult = sanitizeHtml(fallbackResult)
      cache.set(params, sanitizedResult)
      return sanitizedResult
    }
  } catch (error) {
    console.error("Erro geral ao gerar mapa astral:", error)

    // Em caso de qualquer erro, usar o gerador de fallback
    const fallbackResult = generateFallbackMapaAstral(params)
    const sanitizedResult = sanitizeHtml(fallbackResult)
    cache.set(params, sanitizedResult)
    return sanitizedResult
  }
}
