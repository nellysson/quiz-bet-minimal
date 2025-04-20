"use client"

import { useEffect } from "react"

export default function ForceReload() {
  useEffect(() => {
    // Função para converter todos os links em links que forçam recarregamento
    const convertLinks = () => {
      // Seleciona todos os links no documento
      const links = document.querySelectorAll('a[href^="/"]')

      // Para cada link, adiciona um evento de clique que força o recarregamento
      links.forEach((link) => {
        if (!link.hasAttribute("data-force-reload")) {
          link.setAttribute("data-force-reload", "true")

          link.addEventListener("click", (e) => {
            const href = link.getAttribute("href")
            if (href) {
              e.preventDefault()
              window.location.href = href
            }
          })
        }
      })
    }

    // Executa a conversão quando a página carrega
    convertLinks()

    // Também executa a conversão quando o DOM muda (para links adicionados dinamicamente)
    const observer = new MutationObserver(convertLinks)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
