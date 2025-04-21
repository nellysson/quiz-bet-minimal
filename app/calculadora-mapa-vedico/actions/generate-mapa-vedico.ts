"use server"

interface MapaVedicoParams {
  nome: string
  dataNascimento: string
  horaNascimento: string
  cidade: string
  pais: string
}

export async function generateMapaVedico(params: MapaVedicoParams): Promise<string> {
  const { nome, dataNascimento, horaNascimento, cidade, pais } = params

  try {
    console.log("Gerando mapa védico para:", nome)

    // Obter a chave API diretamente da variável de ambiente
    const apiKey = process.env.OPENAI_API_KEY

    console.log("Status da chave API:", apiKey ? "Presente" : "Ausente")

    if (!apiKey) {
      throw new Error("Chave API não encontrada")
    }

    const prompt = `Você é um astrólogo védico tradicional, com experiência em astrologia Jyotish e habilidade em explicar mapas de forma acessível e envolvente.

Com base nas seguintes informações de nascimento:

Nome: ${nome}

Data de nascimento: ${dataNascimento}

Hora de nascimento: ${horaNascimento}

Cidade de nascimento: ${cidade}

País: ${pais}

Gere um Mapa Védico completo, dividido em tópicos, com linguagem clara, espiritual e bem organizada. 

IMPORTANTE: O conteúdo será exibido em um site, então use HTML bem formatado com tags como <h2>, <p>, <strong>, <em>, <ul>, <li>, etc. Mantenha uma estrutura consistente e use espaçamento adequado entre os elementos. NÃO use marcações de código como \`\`\`html ou \`\`\` no início ou fim do seu texto.

Tópicos obrigatórios (use os emojis exatamente como mostrados):

📘 Introdução ao Mapa Védico
Explique brevemente o que é a astrologia védica e como ela se diferencia da astrologia ocidental. Fale do uso do zodíaco sideral e da importância do ascendente (Lagna) e das nakshatras.

🌟 Nakshatra de Nascimento (Lua)

Nome da Nakshatra onde a Lua está posicionada

Características principais

Regente planetário e símbolo

Influência na personalidade

⏫ Lagna (Ascendente Védico)

Signo do ascendente (pelo zodíaco sideral)

Efeitos sobre aparência, personalidade e destino

🪐 Posicionamento dos Planetas

Explique a posição e o impacto dos seguintes planetas no mapa: Sol, Lua, Marte, Mercúrio, Júpiter, Vênus, Saturno, Rahu e Ketu

Relacione-os com temas práticos como emoções, comunicação, amor, espiritualidade etc.

Use linguagem simbólica e acessível

🏛️ Casas de Destaque (Bhavas)

Escolha 2 ou 3 casas com maior influência ou planetas importantes

Relacione com temas como missão de vida, carreira, relacionamentos e desafios kármicos

🧘 Tendências Kármicas e Espirituais

Com base nos nodos (Rahu e Ketu), explique quais aprendizados e desafios espirituais a pessoa pode encontrar nesta encarnação

Aborde temas como karma, dharma e evolução pessoal

🌈 Recomendações Védicas Personalizadas

Sugira práticas como mantras, cores, pedras ou hábitos que podem equilibrar o mapa

Dê conselhos de autoconhecimento e equilíbrio energético

✨ Mensagem Final

Crie uma mensagem final de pelo menos 1500 caracteres, personalizada e inspiradora com base nos principais pontos do mapa

Estimule a busca interior e a expansão espiritual da pessoa`

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
                "Você é um astrólogo védico tradicional com experiência em astrologia Jyotish. Crie conteúdo rico e detalhado com formatação HTML bem estruturada. Use tags como <h2>, <p>, <strong>, <em>, <ul>, <li>, etc. Mantenha uma estrutura consistente e use espaçamento adequado entre os elementos. NÃO use marcações de código como ```html ou ``` no início ou fim do seu texto. Forneça o conteúdo diretamente como HTML puro.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.7,
          max_tokens: 4000,
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

      let result = data.choices[0].message.content
      console.log("Conteúdo bruto recebido:", result.substring(0, 100) + "...")

      // Remover marcações de código Markdown
      result = result.replace(/^```html\s*/i, "").replace(/```\s*$/i, "")

      // Verificar se ainda há marcações de código e removê-las
      if (result.startsWith("```")) {
        const endIndex = result.indexOf("```", 3)
        if (endIndex !== -1) {
          result = result.substring(endIndex + 3)
        } else {
          result = result.substring(3)
        }
      }

      // Remover qualquer marcação de código no final
      result = result.replace(/```\s*$/g, "")

      // Estruturar o conteúdo em seções
      result = `<div class="mapa-vedico-content">${result}</div>`

      return result
    } catch (fetchError) {
      console.error("Erro detalhado na chamada fetch:", fetchError)
      throw fetchError
    }
  } catch (error) {
    console.error("Erro geral ao gerar mapa védico:", error)
    throw error
  }
}
