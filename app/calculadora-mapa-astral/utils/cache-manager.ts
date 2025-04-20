// Sistema de cache simples para mapas astrais
export class MapaAstralCache {
  private static instance: MapaAstralCache
  private cache: Map<string, { text: string; timestamp: number }> = new Map()
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 horas em milissegundos

  private constructor() {}

  public static getInstance(): MapaAstralCache {
    if (!MapaAstralCache.instance) {
      MapaAstralCache.instance = new MapaAstralCache()
    }
    return MapaAstralCache.instance
  }

  // Gerar uma chave única baseada nos parâmetros do mapa astral
  private generateKey(params: any): string {
    return JSON.stringify(params)
  }

  // Verificar se existe um mapa astral em cache para os parâmetros dados
  public get(params: any): string | null {
    const key = this.generateKey(params)
    const cached = this.cache.get(key)

    if (!cached) return null

    // Verificar se o cache expirou
    if (Date.now() - cached.timestamp > this.CACHE_DURATION) {
      this.cache.delete(key)
      return null
    }

    console.log("Cache hit! Returning cached mapa astral.")
    return cached.text
  }

  // Armazenar um mapa astral no cache
  public set(params: any, text: string): void {
    const key = this.generateKey(params)
    this.cache.set(key, {
      text,
      timestamp: Date.now(),
    })
    console.log("Mapa astral cached successfully.")
  }

  // Limpar entradas expiradas do cache
  public cleanExpired(): void {
    const now = Date.now()
    for (const [key, value] of this.cache.entries()) {
      if (now - value.timestamp > this.CACHE_DURATION) {
        this.cache.delete(key)
      }
    }
  }
}
