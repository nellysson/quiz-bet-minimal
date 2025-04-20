import type { Metadata } from "next"
import MapaAstralClient from "./MapaAstralClient"

export const metadata: Metadata = {
  title: "Mapa Astral | Portal Astral",
  description:
    "Entenda o que é o mapa astral, como interpretá-lo e sua importância na astrologia. Descubra seu mapa astral personalizado.",
}

export default function MapaNatalPage() {
  return <MapaAstralClient />
}
