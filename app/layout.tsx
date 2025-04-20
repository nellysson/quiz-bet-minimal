import type React from "react"
import { Inter } from "next/font/google"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AdsenseHelper from "@/components/adsense-helper"
import ForceReload from "./force-reload"
import ConsentBanner from "@/components/consent-banner"
import { BUILD_ID } from "@/lib/build-id"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// Adicione o BUILD_ID como parte do título para forçar atualização
export const metadata = {
  title: `Portal Astral - Seu guia completo de astrologia (${BUILD_ID})`,
  description: "Glossário completo de astrologia com termos, signos, planetas, casas astrológicas e muito mais.",
  keywords: "astrologia, glossário, signos, zodíaco, planetas, casas astrológicas, mapa natal",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Meta tags para desativar cache */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        {/* Adicione uma meta tag com o BUILD_ID para forçar atualização */}
        <meta name="build-id" content={BUILD_ID} />

        {/* Adicionar o link para o favicon no head */}
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-e69ktUdfOcrqDjK3ItvBFenrTXcgdm.png"
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6503684672960142"
          crossOrigin="anonymous"
        ></script>

        {/* Script para forçar recarregamento em todos os links */}
        <script src="/force-reload.js"></script>
      </head>
      <body className={`${inter.className} min-h-screen bg-background`}>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BBFJ11N9CY" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BBFJ11N9CY');
          `}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <AdsenseHelper />
            <ForceReload />
            <ConsentBanner />
            {/* Adicione um comentário invisível com o BUILD_ID */}
            {`<!-- Build: ${BUILD_ID} -->`}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
