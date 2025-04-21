export function AspectHero() {
  return (
    <div className="relative h-64 overflow-hidden rounded-md">
      <img
        src="/images/aspect-hero.jpg"
        alt="Cosmic background with constellations"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex h-full items-center justify-center p-4 text-center text-white">
        <div>
          <h1 className="mb-4 text-4xl font-bold">Aspectos Astrológicos</h1>
          <p className="text-lg">Descubra como os ângulos entre os planetas revelam a dinâmica da sua vida.</p>
        </div>
      </div>
    </div>
  )
}
