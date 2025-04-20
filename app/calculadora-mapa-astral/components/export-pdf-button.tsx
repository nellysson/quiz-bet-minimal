"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"
import { jsPDF } from "jspdf"

interface ExportPDFButtonProps {
  content: string
  userName: string
}

export default function ExportPDFButton({ content, userName }: ExportPDFButtonProps) {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    setIsExporting(true)

    try {
      // Criar um novo documento PDF
      const doc = new jsPDF()

      // Função para remover tags HTML
      const stripHtml = (html: string) => {
        const tmp = document.createElement("DIV")
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ""
      }

      // Processar o conteúdo para remover tags HTML
      const cleanContent = stripHtml(content)

      // Adicionar título
      doc.setFontSize(20)
      doc.text("Mapa Astral", 105, 20, { align: "center" })

      // Adicionar nome do usuário
      doc.setFontSize(16)
      doc.text(`Para: ${userName}`, 105, 30, { align: "center" })

      // Adicionar data de geração
      const today = new Date()
      doc.setFontSize(12)
      doc.text(`Gerado em: ${today.toLocaleDateString()}`, 105, 40, { align: "center" })

      // Adicionar linha separadora
      doc.line(20, 45, 190, 45)

      // Adicionar conteúdo do mapa astral
      doc.setFontSize(12)

      // Dividir o conteúdo em parágrafos
      const paragraphs = cleanContent.split("\n").filter((p) => p.trim() !== "")

      let y = 55
      const maxWidth = 170

      for (const paragraph of paragraphs) {
        // Verificar se é um título (começa com emoji)
        const isTitle = /^\s*[🌞🌙⬆️🪐🏠💫🌠]/u.test(paragraph)

        if (isTitle) {
          // Adicionar mais espaço antes dos títulos (exceto o primeiro)
          if (y > 60) y += 5

          // Configurar fonte para títulos
          doc.setFontSize(14)
          doc.setFont("helvetica", "bold")
        } else {
          // Configurar fonte para texto normal
          doc.setFontSize(12)
          doc.setFont("helvetica", "normal")
        }

        // Quebrar parágrafos longos
        const lines = doc.splitTextToSize(paragraph, maxWidth)

        // Verificar se precisa de uma nova página
        if (y + lines.length * 7 > 280) {
          doc.addPage()
          y = 20
        }

        // Adicionar linhas ao PDF
        doc.text(lines, 20, y)
        y += lines.length * 7 + (isTitle ? 3 : 2)
      }

      // Adicionar rodapé
      const pageCount = doc.getNumberOfPages()
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i)
        doc.setFontSize(10)
        doc.text(`Página ${i} de ${pageCount}`, 105, 290, { align: "center" })
        doc.text("Portal Astral - www.portalastral.com.br", 105, 295, { align: "center" })
      }

      // Salvar o PDF
      doc.save(`Mapa_Astral_${userName.replace(/\s+/g, "_")}.pdf`)
    } catch (error) {
      console.error("Erro ao exportar PDF:", error)
      alert("Ocorreu um erro ao exportar o PDF. Por favor, tente novamente.")
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <Button onClick={handleExport} disabled={isExporting} variant="outline" className="flex items-center gap-2">
      {isExporting ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Exportando...
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          Exportar PDF
        </>
      )}
    </Button>
  )
}
