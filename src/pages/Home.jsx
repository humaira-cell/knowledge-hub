import { useAsync } from '../hooks/useAsync'
import { getPhilosophers } from '../lib/sanity'
import HeroSection from '../components/sections/HeroSection'
import PhilosopherCard from '../components/ui/PhilosopherCard'

export default function Home() {
  const { data: philosophers, loading } = useAsync(getPhilosophers, [])

  return (
    <>
      <HeroSection />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-aegean text-2xl sm:text-3xl tracking-wide">
            The Philosophers
          </h2>
          <p className="font-body text-ink/60 text-sm mt-2 max-w-xl mx-auto">
            Three giants of metaphysical thought, spanning two millennia of wisdom
          </p>
        </div>
        {loading ? (
          <div className="text-center py-12">
            <p className="font-body text-ink/40 text-sm">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {(philosophers || []).map(p => (
              <PhilosopherCard key={p.id || p._id} philosopher={p} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
