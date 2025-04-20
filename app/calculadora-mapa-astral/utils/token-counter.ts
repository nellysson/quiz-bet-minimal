// Função simples para estimar o número de tokens em um texto
export function estimateTokens(text: string): number {
  // GPT geralmente usa ~4 caracteres por token em média
  return Math.ceil(text.length / 4)
}

// Classe para rastrear o uso de tokens
export class TokenTracker {
  private static instance: TokenTracker
  private tokenCount = 0
  private requestCount = 0

  private constructor() {}

  public static getInstance(): TokenTracker {
    if (!TokenTracker.instance) {
      TokenTracker.instance = new TokenTracker()
    }
    return TokenTracker.instance
  }

  public addTokens(promptTokens: number, responseTokens: number): void {
    this.tokenCount += promptTokens + responseTokens
    this.requestCount++

    // Registrar no console para monitoramento
    console.log(`Request #${this.requestCount}: ${promptTokens} prompt tokens, ${responseTokens} response tokens`)
    console.log(`Total tokens used: ${this.tokenCount}`)
  }

  public getStats(): { totalTokens: number; requestCount: number } {
    return {
      totalTokens: this.tokenCount,
      requestCount: this.requestCount,
    }
  }
}
