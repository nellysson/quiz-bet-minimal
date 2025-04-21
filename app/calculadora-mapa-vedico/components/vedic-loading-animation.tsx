export default function VedicLoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] text-center">
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-purple-500 rounded-full animate-spin border-t-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-3xl">🕉️</div>
        </div>
      </div>
      <p className="text-lg font-medium">Gerando seu mapa védico...</p>
      <p className="text-sm mt-2 text-muted-foreground">
        Estamos consultando as estrelas e analisando as posições planetárias no zodíaco sideral.
      </p>
    </div>
  )
}
