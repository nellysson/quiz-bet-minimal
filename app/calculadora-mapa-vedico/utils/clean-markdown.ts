/**
 * Remove marcações de código Markdown do texto
 */
export function cleanMarkdown(text: string): string {
  if (!text) return ""

  // Remover marcações de código no início
  let cleaned = text.replace(/^```(?:html|markdown)?\s*/i, "")

  // Remover marcações de código no final
  cleaned = cleaned.replace(/```\s*$/i, "")

  // Verificar se ainda há marcações de código e removê-las
  if (cleaned.startsWith("```")) {
    const endIndex = cleaned.indexOf("```", 3)
    if (endIndex !== -1) {
      cleaned = cleaned.substring(endIndex + 3)
    } else {
      cleaned = cleaned.substring(3)
    }
  }

  // Remover qualquer marcação de código no final
  cleaned = cleaned.replace(/```\s*$/g, "")

  return cleaned
}
