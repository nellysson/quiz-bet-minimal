import { BUILD_ID } from "@/lib/build-id"
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ buildId: BUILD_ID })
}
