import { useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import SpotlightCard from './ui/SpotlightCard'
import { projects } from '../data/content'

const kindLabel = {
  dev: { text: 'Dev Project', cls: 'bg-acid text-base' },
  growth: { text: 'Growth Case', cls: 'bg-[#fbbf24] text-base' },
}

// ---------------------------------------------------------------
// HOW TO SWAP IN REAL WORK:
//   1. Drop screenshots into /public/projects/  (project-1.jpg …)
//   2. Update title / desc / result in src/data/content.js
// If the image file is missing, the card automatically shows a
// styled placeholder — so the site never looks broken.
// ---------------------------------------------------------------
function ProjectImage({ src, alt, index }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 bg-panel2"
      >
        <span className="font-display text-5xl font-extrabold text-ink/10">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
          screenshot coming soon
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
    />
  )
}

export default function Projects() {
  return (
    <section id="work" className="border-y border-line bg-panel/40 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader num="07" kicker="Shipped & grown" title="Selected" accent="work" />

        {/* aligned gallery: equal-height cards on every screen size */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.1} className="h-full">
              <SpotlightCard className="h-full rounded-2xl border border-line bg-panel transition-colors hover:border-acid/60">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="group relative overflow-hidden">
                  <ProjectImage src={project.image} alt={project.alt} index={i} />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider ${kindLabel[project.kind].cls}`}
                  >
                    {kindLabel[project.kind].text}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{project.desc}</p>

                  {/* result badge — pinned to the bottom so all cards line up */}
                  <p className="mt-auto self-start pt-4">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-acid/30 bg-acid/[0.07] px-3 py-1.5 font-mono text-xs font-bold text-acid">
                      ↗ {project.result}
                    </span>
                  </p>
                </div>
              </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 text-center font-mono text-xs uppercase tracking-[0.25em] text-mute">
            More case studies on request — full numbers shared privately
          </p>
        </Reveal>
      </div>
    </section>
  )
}
