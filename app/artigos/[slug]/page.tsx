import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft } from "lucide-react"
import { getArticleBySlug, getRelatedArticles } from "@/utils/article-utils"
// Importar o componente de anúncio específico
import PortalAstralAd from "@/components/portal-astral-ad"

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Artigo não encontrado | Portal Astral",
      description: "O artigo que você está procurando não foi encontrado.",
    }
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: article.seoKeywords,
  }
}

export function generateStaticParams() {
  return [
    { slug: "signos-do-zodiaco-datas-caracteristicas-personalidade" },
    { slug: "ascendente-o-que-e-e-como-influencia-sua-personalidade" },
    { slug: "compatibilidade-amorosa-entre-signos" },
    { slug: "mapa-astral-completo-como-fazer-interpretar" },
    { slug: "mercurio-retrogrado-significado-e-como-sobreviver" },
  ]
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  // Pegar artigos relacionados
  const relatedArticles = getRelatedArticles(article)

  // Verificar se é o artigo específico sobre signos do zodíaco
  const isZodiacArticle = params.slug === "signos-do-zodiaco-datas-caracteristicas-personalidade"
  // Verificar se é o artigo sobre ascendente
  const isAscendentArticle = params.slug === "ascendente-o-que-e-e-como-influencia-sua-personalidade"

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/artigos" className="text-primary hover:underline flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" />
          Voltar para Artigos
        </Link>
      </div>

      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <Badge key={index} className="bg-primary/10 text-primary hover:bg-primary/20">
                {typeof tag === "string" ? tag : tag.name}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-6">{article.title}</h1>

          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.featuredImage || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {article.pages.map((page, index) => (
            <div key={index} className="mb-12">
              {page.subtitle && (
                <>
                  <h2 className="text-2xl font-bold mb-4">{page.subtitle}</h2>
                  {/* Anúncio logo após o subtítulo */}
                  {index === 0 && <PortalAstralAd />}
                </>
              )}

              {/* Renderizar o conteúdo com um anúncio após o terceiro parágrafo */}
              {page.content && (
                <>
                  {/* Dividir o conteúdo em parágrafos */}
                  {(() => {
                    const paragraphs = page.content.split("\n\n")

                    return (
                      <>
                        {/* Primeiros três parágrafos */}
                        <div className="whitespace-pre-line">{paragraphs.slice(0, 3).join("\n\n")}</div>

                        {/* Anúncio após o terceiro parágrafo - apenas se houver pelo menos 3 parágrafos */}
                        {paragraphs.length >= 3 && (
                          <div className="my-6">
                            <PortalAstralAd />
                          </div>
                        )}

                        {/* Parágrafos restantes */}
                        {paragraphs.length > 3 && (
                          <div className="whitespace-pre-line">{paragraphs.slice(3).join("\n\n")}</div>
                        )}
                      </>
                    )
                  })()}
                </>
              )}

              {/* Adicionar a imagem da roda do zodíaco após a primeira seção do artigo sobre signos */}
              {isZodiacArticle && index === 0 && (
                <div className="my-8 flex justify-center">
                  <figure>
                    <div className="relative w-full max-w-2xl h-[500px] mx-auto">
                      <Image
                        src="/images/articles/zodiac-wheel-colorful.jpg"
                        alt="Roda do Zodíaco com os 12 signos"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="text-center text-sm text-muted-foreground mt-2">
                      A roda do zodíaco com os 12 signos e suas representações simbólicas
                    </figcaption>
                  </figure>
                </div>
              )}

              {/* Adicionar uma explicação visual para o artigo sobre ascendente após a segunda seção */}
              {isAscendentArticle && index === 1 && (
                <div className="my-8 flex justify-center">
                  <figure>
                    <div className="relative w-full max-w-2xl h-[400px] mx-auto">
                      <Image
                        src="/images/articles/ascendente-novo.jpg"
                        alt="Representação visual do ascendente astrológico"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="text-center text-sm text-muted-foreground mt-2">
                      O ascendente representa como nos apresentamos ao mundo, assim como as plantas emergem do solo sob
                      a influência das constelações
                    </figcaption>
                  </figure>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Anúncio antes do CTA */}
        <PortalAstralAd />

        {/* CTA para Calculadora de Signos */}
        <div className="my-16 rounded-xl bg-gradient-to-r from-purple-900/30 to-primary/20 p-8 backdrop-blur-sm border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="mb-2 text-2xl font-bold tracking-wide uppercase">SAIBA MAIS SOBRE VOCÊ</h3>
              <p className="text-muted-foreground">
                Conheça seu signo solar, ascendente e lunar com nossa calculadora astrológica gratuita.
              </p>
            </div>
            <Link
              href="/calculadora"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 py-7 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <span>CALCULAR</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m16 12-4 4-4-4" />
                <path d="M12 8v8" />
              </svg>
            </Link>
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.slug} href={`/artigos/${relatedArticle.slug}`} className="block group">
                  <div className="relative h-40 w-full mb-3 rounded-lg overflow-hidden">
                    <Image
                      src={relatedArticle.featuredImage || "/placeholder.svg"}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-bold group-hover:text-primary transition-colors">{relatedArticle.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
