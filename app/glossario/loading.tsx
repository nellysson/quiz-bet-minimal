export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 h-12 w-48 animate-pulse rounded-md bg-muted mx-auto"></div>
      <div className="mx-auto mb-8 max-w-3xl">
        <div className="h-6 w-full animate-pulse rounded-md bg-muted"></div>
      </div>
      <div className="mb-8 w-full max-w-2xl mx-auto">
        <div className="h-10 w-full animate-pulse rounded-md bg-muted"></div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-32 animate-pulse rounded-md bg-muted"></div>
        ))}
      </div>
    </div>
  )
}
