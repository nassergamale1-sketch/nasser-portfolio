import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import SpotlightCard from './ui/SpotlightCard'
import { flagship, showcase, workIndex } from '../data/content'

const kindLabel = {
  dev: { text: 'Dev', cls: 'border-acid/40 bg-acid/10 text-acid' },
  growth: { text: 'Growth', cls: 'border-[#fbbf24]/40 bg-[#fbbf24]/10 text-[#fbbf24]' },
}

// Small check-mark for flagship highlights (SVG, no emoji).
function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="work" className="border-y border-line bg-panel/40 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader num="07" kicker="Shipped & grown" title="Selected" accent="work" />

        {/* ── flagship case study — full-width hero card ───────────── */}
        <Reveal>
          <SpotlightCard className="rounded-2xl border border-acid/40 bg-panel">
            <article className="grid overflow-hidden rounded-2xl lg:grid-cols-2">
              <div className="group relative overflow-hidden">
                <img
                  src={flagship.image}
                  alt={flagship.alt}
                  loading="lazy"
                  className="h-full min-h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] lg:absolute lg:inset-0"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent"
                />
                <span className="absolute left-4 top-4 rounded-full bg-acid px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-base">
                  {flagship.label}
                </span>
              </div>

              <div className="flex flex-col p-7 md:p-10">
                <h3 className="font-display text-2xl font-bold leading-tight md:text-4xl">
                  {flagship.title}
                </h3>
                <p className="mt-4 leading-relaxed text-mute">{flagship.desc}</p>

                <ul className="mt-6 space-y-2.5">
                  {flagship.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm text-ink">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-acid/15 text-acid">
                        <CheckIcon />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {flagship.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line bg-base px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-mute"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </SpotlightCard>
        </Reveal>

        {/* ── showcase cards with real screenshots + CTA card ──────── */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {showcase.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1} className="h-full">
              <SpotlightCard className="h-full rounded-2xl border border-line bg-panel transition-colors hover:border-acid/60">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl">
                  <div className="group relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${kindLabel[project.kind].cls}`}
                    >
                      {kindLabel[project.kind].text}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{project.desc}</p>
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

          {/* CTA card — fills the grid, sells the next project */}
          <Reveal delay={0.15} className="h-full">
            <a
              href="#contact"
              className="group flex h-full min-h-64 flex-col items-start justify-between rounded-2xl border border-dashed border-line bg-panel/50 p-7 transition-colors hover:border-acid/70 md:p-8"
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-mute">
                Next slot open
              </span>
              <div>
                <p className="font-display text-2xl font-bold leading-snug md:text-3xl">
                  Your project could be{' '}
                  <span className="text-acid">the next case study</span>.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  Website, AI tool, or a growth push — let’s talk about it.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid">
                Start a project
                <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </span>
            </a>
          </Reveal>
        </div>

        {/* ── compact work index — no images, pure editorial rows ──── */}
        <Reveal delay={0.1} className="mt-14">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-mute">
            <span className="text-acid">$</span> more work
          </p>
          <ul className="divide-y divide-line border-y border-line">
            {workIndex.map((item, i) => (
              <li key={item.title}>
                <div className="group grid items-center gap-2 py-5 transition-colors hover:bg-panel/60 sm:grid-cols-12 sm:gap-4 sm:px-4">
                  <span className="font-mono text-xs text-mute sm:col-span-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-lg font-bold transition-colors group-hover:text-acid sm:col-span-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-mute sm:col-span-4">{item.desc}</p>
                  <div className="flex items-center gap-3 sm:col-span-3 sm:justify-end">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${kindLabel[item.kind].cls}`}
                    >
                      {kindLabel[item.kind].text}
                    </span>
                    <span className="font-mono text-xs font-bold text-acid">↗ {item.result}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center font-mono text-xs uppercase tracking-[0.25em] text-mute">
            More case studies on request — full numbers shared privately
          </p>
        </Reveal>
      </div>
    </section>
  )
}
