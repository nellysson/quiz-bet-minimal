/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com", "v0.blob.com"],
    unoptimized: true,
  },
  // Gerando um ID de build único para cada deploy
  generateBuildId: async () => {
    return `build_${Date.now()}`
  },
  // Configuração para desativar cache
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
    ]
  },
  // Adicionar redirecionamentos para os sitemaps
  async redirects() {
    return [
      {
        source: "/artigossitemap.xml",
        destination: "/api/artigossitemap",
        permanent: true,
      },
      {
        source: "/glossariositemap.xml",
        destination: "/api/glossariositemap",
        permanent: true,
      },
      {
        source: "/signossitemap.xml",
        destination: "/api/signossitemap",
        permanent: true,
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
