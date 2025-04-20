/**
 * Função para garantir que o HTML do mapa astral seja válido e seguro
 */
export function sanitizeHtml(html: string): string {
  // Se o HTML estiver vazio ou não for uma string, retornar um HTML básico
  if (!html || typeof html !== "string" || html.trim() === "") {
    return '<div class="mapa-astral-content"><p>Não foi possível gerar o mapa astral. Por favor, tente novamente.</p></div>'
  }

  // Se o HTML não contiver tags básicas, envolver em uma div
  if (!html.includes("<div") && !html.includes("<p") && !html.includes("<h")) {
    return `<div class="mapa-astral-content">${html}</div>`
  }

  // Se o HTML contiver ```html ou ``` no início ou fim, remover
  let cleanHtml = html
  if (cleanHtml.startsWith("```html")) {
    cleanHtml = cleanHtml.substring(7)
  }
  if (cleanHtml.startsWith("```")) {
    cleanHtml = cleanHtml.substring(3)
  }
  if (cleanHtml.endsWith("```")) {
    cleanHtml = cleanHtml.substring(0, cleanHtml.length - 3)
  }

  // Garantir que o HTML esteja dentro de uma div com a classe correta
  if (!cleanHtml.includes('class="mapa-astral-content"')) {
    cleanHtml = `<div class="mapa-astral-content">${cleanHtml}</div>`
  }

  return cleanHtml.trim()
}
