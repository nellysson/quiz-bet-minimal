import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import ForceReloadLink from "@/components/force-reload-link"

const categories = [
  {
    title: "Signos do Zodíaco",
    description: "Os 12 signos e suas características",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_fx%20%2824%29.jpg-vjLmnHW7NfPrTGawBe4nZP6GXF2jJi.png",
    href: "/categorias/signos",
  },
  {
    title: "Planetas",
    description: "Os corpos celestes e suas influências",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_fx%20%2821%29.jpg-hSbqHbiDxEaOUNrTNP5mglnQeQtn7K.png",
    href: "/categorias/planetas",
  },
  {
    title: "Casas Astrológicas",
    description: "As 12 casas e suas áreas de influência",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_fx%20%2817%29.jpg-RM7jzr2fyDyC2DPUxtpDC16pt5uov6.png",
    href: "/categorias/casas",
  },
  {
    title: "Aspectos Astrológicos",
    description: "As relações entre os planetas",
    image: "/astrological-aspects-wheel.png",
    href: "/categorias/aspectos",
  },
  {
    title: "Mapa Astral",
    description: "Como interpretar seu mapa astrológico",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_fx%20%2814%29.jpg-bAhtxEnKjZ55mk8RZ9RZcWwrZjlf4m.png",
    href: "/categorias/mapa-astral",
  },
  {
    title: "Astrologia Védica",
    description: "O sistema astrológico indiano",
    image: "/vedic-astrology-colorful.jpg",
    href: "/categorias/astrologia-vedica",
  },
]

export default function FeaturedCategories() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Card
          key={category.title}
          className="overflow-hidden border border-white/10 bg-black/5 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 card-hover-effect"
        >
          <CardContent className="p-0">
            <ForceReloadLink href={category.href} className="block">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{category.description}</p>
                </div>
              </div>
            </ForceReloadLink>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
