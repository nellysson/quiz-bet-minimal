"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"

interface DebugHtmlViewProps {
  html: string
}

export default function DebugHtmlView({ html }: DebugHtmlViewProps) {
  const [showSource, setShowSource] = useState(false)

  if (!html) return null

  return (
    <div className="mt-4 border-t pt-4">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-muted-foreground">Problemas com a visualização?</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowSource(!showSource)}
          className="flex items-center gap-1 text-xs"
        >
          {showSource ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
          {showSource ? "Ocultar HTML" : "Ver HTML"}
        </Button>
      </div>

      {showSource && (
        <div className="bg-muted/30 p-4 rounded-md overflow-auto max-h-[200px] text-xs font-mono">
          {html.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
        </div>
      )}
    </div>
  )
}
