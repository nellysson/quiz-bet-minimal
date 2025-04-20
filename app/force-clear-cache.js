// Este arquivo será carregado em todas as páginas e forçará a limpeza do cache
export function forceClearCache() {
  if (typeof window !== "undefined") {
    // Adicionar um parâmetro de consulta único a cada carregamento de página
    window.addEventListener("load", () => {
      const links = document.querySelectorAll("a[href]")
      links.forEach((link) => {
        if (link.href.includes(window.location.origin) && !link.href.includes("?")) {
          link.href = `${link.href}${link.href.includes("?") ? "&" : "?"}v=${Date.now()}`
        }
      })
    })
  }
}
