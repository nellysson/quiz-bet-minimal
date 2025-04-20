import Image from "next/image"
import TraditionalLink from "./traditional-link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <TraditionalLink href="/" className="mb-4 inline-block">
              <Image src="/logo.png" alt="Portal Astral" width={200} height={67} className="h-auto" />
            </TraditionalLink>
            <p className="text-sm text-muted-foreground">
              Seu guia completo para o mundo da astrologia, com termos, signos, planetas e muito mais.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <TraditionalLink href="/categorias/signos" className="text-muted-foreground hover:text-primary">
                  Signos do Zodíaco
                </TraditionalLink>
              </li>
              <li>
                <TraditionalLink href="/categorias/planetas" className="text-muted-foreground hover:text-primary">
                  Planetas
                </TraditionalLink>
              </li>
              <li>
                <TraditionalLink href="/categorias/casas" className="text-muted-foreground hover:text-primary">
                  Casas Astrológicas
                </TraditionalLink>
              </li>
              <li>
                <TraditionalLink href="/categorias/aspectos" className="text-muted-foreground hover:text-primary">
                  Aspectos Astrológicos
                </TraditionalLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <TraditionalLink href="/glossario" className="text-muted-foreground hover:text-primary">
                  Glossário Completo
                </TraditionalLink>
              </li>
              <li>
                <TraditionalLink href="/horoscopo" className="text-muted-foreground hover:text-primary">
                  Horóscopo Diário
                </TraditionalLink>
              </li>
              <li>
                <TraditionalLink href="/calculadora" className="text-muted-foreground hover:text-primary">
                  Calculadora de Signo
                </TraditionalLink>
              </li>
              <li>
                <TraditionalLink href="/faq" className="text-muted-foreground hover:text-primary">
                  Perguntas Frequentes
                </TraditionalLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <TraditionalLink href="/politica-de-privacidade" className="text-muted-foreground hover:text-primary">
                  Política de Privacidade
                </TraditionalLink>
              </li>
              <li>
                <TraditionalLink href="/termos-de-uso" className="text-muted-foreground hover:text-primary">
                  Termos de Uso
                </TraditionalLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Portal Astral. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
