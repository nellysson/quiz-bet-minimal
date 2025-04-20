// Script para forçar o recarregamento em todas as páginas
document.addEventListener("DOMContentLoaded", () => {
  // Captura todos os links internos
  const internalLinks = document.querySelectorAll('a[href^="/"]')

  // Adiciona evento de clique a cada link
  internalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Previne o comportamento padrão do link
      e.preventDefault()

      // Obtém o href do link
      const href = this.getAttribute("href")

      // Força o recarregamento completo da página
      window.location.href = href
    })
  })
})
