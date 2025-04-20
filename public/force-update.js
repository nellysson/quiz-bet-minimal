// Este script força o navegador a verificar se há uma nova versão do site
;(() => {
  // Verificar a cada 5 segundos
  setInterval(() => {
    fetch("/build-id.txt?t=" + Date.now())
      .then((response) => response.text())
      .then((buildId) => {
        // Se o buildId for diferente do atual, recarregar a página
        const currentBuildId = document.querySelector('meta[name="build-id"]')?.getAttribute("content")
        if (currentBuildId && buildId && currentBuildId !== buildId) {
          window.location.reload(true)
        }
      })
      .catch((err) => console.error("Erro ao verificar atualização:", err))
  }, 5000)
})()
