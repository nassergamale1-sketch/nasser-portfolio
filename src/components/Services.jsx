import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import SpotlightCard from './ui/SpotlightCard'
import { services } from '../data/content'

// Services — three offer cards with cursor spotlight; middle card featured.
export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <SectionHeader num="02" kicker="Hire me for" title="What I" accent="do" />

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.1} className="h-full">
            <SpotlightCard
              className={`h-full rounded-2xl border transition-colors ${
                s.featured
                  ? 'border-acid/50 bg-acid/[0.05]'
                  : 'border-line bg-panel hover:border-acid/40'
              }`}
            >
              <div className="flex h-full flex-col p-7 md:p-8">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.3em] text-mute">{s.num}</span>
                  {s.featured && (
                    <span className="rounded-full bg-acid px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-base">
                      Most booked
                    </span>
                  )}
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold leading-tight md:text-[1.7rem]">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-mute">{s.desc}</p>

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

                {s.featured && (
                  <a
                    href="#contact"
                    className="group mt-7 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid"
                  >
                    Start a project
                    <span className="transition-transform group-hover:translate-x-1.5">→</span>
                  </a>
                )}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
