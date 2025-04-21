/**
 * Formata o conteúdo do mapa védico para exibição adequada
 */
export function formatVedicContent(content: string): string {
  if (!content) return ""

  // Remover marcações de código Markdown
  let formatted = content.replace(/^```(?:html|markdown)?\s*/i, "").replace(/```\s*$/i, "")

  // Corrigir quebras de linha em palavras com negrito
  formatted = formatted.replace(/(\w+)\n(\w+)/g, "$1 $2")

  // Garantir que palavras em negrito não sejam quebradas
  formatted = formatted.replace(/<strong>([^<]+)<\/strong>/g, (match, p1) => {
    // Remover quebras de linha dentro do texto em negrito
    const cleanText = p1.replace(/\n/g, " ")
    return `<strong>${cleanText}</strong>`
  })

  // Converter emojis e títulos em elementos HTML formatados
  formatted = formatted.replace(
    /(📘|🌟|⏫|🪐|🏛️|🧘|🌈|✨)\s+([^\n]+)/g,
    '<h2 class="text-2xl font-bold mt-8 mb-4 text-amber-800 flex items-center">$1 <span class="ml-2">$2</span></h2>',
  )

  // Adicionar classes para parágrafos
  formatted = formatted.replace(/<p>/g, '<p class="mb-4 text-base leading-relaxed">')

  // Adicionar classes para listas
  formatted = formatted.replace(/<ul>/g, '<ul class="list-disc pl-6 mb-4">')
  formatted = formatted.replace(/<ol>/g, '<ol class="list-decimal pl-6 mb-4">')
  formatted = formatted.replace(/<li>/g, '<li class="mb-2">')

  // Adicionar classes para elementos strong e em
  formatted = formatted.replace(/<strong>/g, '<strong class="font-bold text-amber-700 whitespace-nowrap">')
  formatted = formatted.replace(/<em>/g, '<em class="italic text-amber-600">')

  // Garantir que haja quebras de linha adequadas
  formatted = formatted.replace(/\n\n/g, '</p><p class="mb-4 text-base leading-relaxed">')

  // Converter linhas simples em parágrafos se não estiverem dentro de tags
  const lines = formatted.split("\n")
  let inTag = false
  let result = ""

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Verificar se estamos entrando ou saindo de uma tag
    const openTags = (line.match(/<[^/][^>]*>/g) || []).length
    const closeTags = (line.match(/<\/[^>]*>/g) || []).length

    if (openTags > closeTags) {
      inTag = true
    } else if (closeTags > openTags) {
      inTag = false
    }

    // Se não estiver dentro de uma tag e a linha não estiver vazia
    if (!inTag && line && !line.startsWith("<") && !line.endsWith(">")) {
      result += `<p class="mb-4 text-base leading-relaxed">${line}</p>`
    } else {
      result += line + "\n"
    }
  }

  // Garantir que não haja parágrafos vazios
  result = result.replace(/<p class="[^"]*">\s*<\/p>/g, "")

  // Adicionar espaçamento para subtítulos
  result = result.replace(
    /<strong class="[^"]*">([^<]+)<\/strong>:/g,
    '<h3 class="text-xl font-semibold mt-5 mb-3 text-amber-700">$1:</h3>',
  )

  // Envolver o conteúdo em uma div com estilos
  result = `<div class="mapa-vedico-content">${result}</div>`

  return result
}
