import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import SpotlightCard from './ui/SpotlightCard'
import { services } from '../data/content'

// Stroke SVG icons — one per service (no emoji, per design checklist).
const icons = {
  ai: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.9 4.9l2.8 2.8" />
      <path d="M16.3 16.3l2.8 2.8" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.9 19.1l2.8-2.8" />
      <path d="M16.3 7.7l2.8-2.8" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  web: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  growth: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <SectionHeader num="02" kicker="Hire me for" title="What I" accent="do" />

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.1} className="h-full">
            <SpotlightCard
              className={`group h-full rounded-2xl border transition-all hover:-translate-y-1.5 ${
                s.featured
                  ? 'border-acid/50 bg-acid/[0.05] hover:border-acid'
                  : 'border-line bg-panel hover:border-acid/50'
              }`}
            >
              <div className="relative flex h-full flex-col p-7 md:p-8">
                {/* ghost index number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-4 select-none font-display text-7xl font-extrabold text-ink/[0.05] transition-colors group-hover:text-acid/10"
                >
                  {s.num}
                </span>

                {/* icon + featured chip */}
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-colors ${
                      s.featured
                        ? 'border-acid/50 bg-acid/15 text-acid'
                        : 'border-line bg-base text-mute group-hover:border-acid/40 group-hover:text-acid'
                    }`}
                  >
                    {icons[s.icon]}
                  </span>
                  {s.featured && (
                    <span className="relative rounded-full bg-acid px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-base">
                      Most booked
                    </span>
                  )}
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold leading-tight md:text-[1.6rem]">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mute">{s.desc}</p>

                {/* deliverables */}
                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-ink">
                      <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-acid/15 text-acid">
                        <CheckIcon />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                {/* tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-base px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-mute"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA — consistent on every card */}
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-2 pt-7 font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid"
                >
                  Start a project
                  <span className="transition-transform group-hover:translate-x-1.5">→</span>
                </a>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
