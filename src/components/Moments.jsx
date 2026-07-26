import { useEffect, useState } from 'react'
import Reveal from './ui/Reveal'
import { moments } from '../data/content'

// "Moments" — candid event photos. Preloads each file and only renders
// the ones that actually exist, so missing photos never break the layout.
// The whole strip disappears if no photos are available yet.
export default function Moments() {
  const [loaded, setLoaded] = useState([])

  useEffect(() => {
    let alive = true
    moments.forEach((m) => {
      const img = new Image()
      img.onload = () => alive && setLoaded((prev) => (prev.some((p) => p.src === m.src) ? prev : [...prev, m]))
      img.src = m.src
    })
    return () => {
      alive = false
    }
  }, [])

  if (loaded.length === 0) return null

  return (
    <section aria-label="Moments" className="border-y border-line bg-panel/40 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-mute">
            <span className="text-acid">✦</span> off the screen — on the ground
          </p>
        </Reveal>

        <div className={`grid gap-5 ${loaded.length === 1 ? '' : loaded.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {loaded.map((m, i) => (
            <Reveal key={m.src} delay={i * 0.12}>
              <figure className="group relative overflow-hidden rounded-2xl border border-line bg-panel">
                <img
                  src={m.src}
                  alt={m.caption}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-base via-base/70 to-transparent px-5 pb-4 pt-14 font-mono text-xs uppercase tracking-[0.2em] text-zinc-300">
                  {m.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
