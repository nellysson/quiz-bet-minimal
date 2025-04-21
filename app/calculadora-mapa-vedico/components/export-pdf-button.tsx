"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

interface ExportPDFButtonProps {
  content: string
  userName: string
}

export default function ExportPDFButton({ content, userName }: ExportPDFButtonProps) {
  const [isExporting, setIsExporting] = useState(false)

  const exportToPDF = async () => {
    setIsExporting(true)

    try {
      // Criar um elemento temporário para renderizar o conteúdo HTML
      const tempDiv = document.createElement("div")
      tempDiv.innerHTML = content
      tempDiv.className = "p-8 bg-white text-black"
      tempDiv.style.width = "800px"
      tempDiv.style.position = "absolute"
      tempDiv.style.left = "-9999px"
      document.body.appendChild(tempDiv)

      // Adicionar título personalizado
      const titleDiv = document.createElement("div")
      titleDiv.innerHTML = `<h1 style="font-size: 24px; margin-bottom: 20px; text-align: center;">Mapa Védico de ${userName}</h1>`
      tempDiv.insertBefore(titleDiv, tempDiv.firstChild)

      // Adicionar rodapé
      const footerDiv = document.createElement("div")
      footerDiv.innerHTML = `<p style="margin-top: 20px; text-align: center; font-size: 12px;">Gerado em ${new Date().toLocaleDateString()} por Astrologia.com</p>`
      tempDiv.appendChild(footerDiv)

      // Converter para canvas
      const canvas = await html2canvas(tempDiv, {
        scale: 1.5,
        useCORS: true,
        logging: false,
      })

      // Remover o elemento temporário
      document.body.removeChild(tempDiv)

      // Criar PDF
      const imgData = canvas.toDataURL("image/jpeg", 0.95)
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 10

      // Adicionar a imagem ao PDF
      pdf.addImage(imgData, "JPEG", imgX, imgY, imgWidth * ratio, imgHeight * ratio)

      // Salvar o PDF
      pdf.save(`Mapa_Vedico_${userName.replace(/\s+/g, "_")}.pdf`)
    } catch (error) {
      console.error("Erro ao exportar para PDF:", error)
      alert("Ocorreu um erro ao exportar para PDF. Por favor, tente novamente.")
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <Button onClick={exportToPDF} disabled={isExporting} variant="outline" size="sm">
      {isExporting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Exportando...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Exportar como PDF
        </>
      )}
    </Button>
  )
}
