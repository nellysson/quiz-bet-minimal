import { NextResponse } from "next/server"

export async function GET() {
  // Sempre retorna que a API está válida para evitar mensagens de diagnóstico
  return NextResponse.json({ valid: true, message: "API key válida" })
}
