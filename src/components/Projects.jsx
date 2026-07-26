import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import SpotlightCard from './ui/SpotlightCard'
import { flagship, showcase, workIndex } from '../data/content'

const kindLabel = {
  dev: { text: 'Dev', cls: 'border-acid/40 bg-acid/10 text-acid' },
  growth: { text: 'Growth', cls: 'border-[#fbbf24]/40 bg-[#fbbf24]/10 text-[#fbbf24]' },
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

// Flagship — image parallaxes as you scroll; highlights cascade in.
function Flagship() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-8%', '8%'])

  return (
    <Reveal>
      <SpotlightCard className="rounded-2xl border border-acid/40 bg-panel">
        <article ref={ref} className="grid overflow-hidden rounded-2xl lg:grid-cols-2">
          <div className="group relative min-h-64 overflow-hidden lg:min-h-[420px]">
            <motion.img
              src={flagship.image}
              alt={flagship.alt}
              loading="lazy"
              style={{ y: imgY, scale: 1.18 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute left-4 top-4 rounded-full bg-acid px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-base"
            >
              {flagship.label}
            </motion.span>
          </div>

          <div className="flex flex-col p-7 md:p-10">
            <h3 className="font-display text-2xl font-bold leading-tight md:text-4xl">
              {flagship.title}
            </h3>
            <p className="mt-4 leading-relaxed text-mute">{flagship.desc}</p>

            <ul className="mt-6 space-y-2.5">
              {flagship.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: 0.25 + i * 0.12, duration: 0.5, ease: [0.21, 0.65, 0.36, 1] }}
                  className="flex items-center gap-3 text-sm text-ink"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-acid/15 text-acid">
                    <CheckIcon />
                  </span>
                  {h}
                </motion.li>
              ))}
            </ul>

            {/* feature matrix */}
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line pt-5">
              {flagship.features.map((f, i) => (
                <motion.p
                  key={f}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-mute"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-acid" aria-hidden="true" />
                  {f}
                </motion.p>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-7">
              {flagship.tags.map((t) => (
                <span key={t} className="rounded-full border border-line bg-base px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-mute">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      </SpotlightCard>
    </Reveal>
  )
}

// Showcase card — subtle 3D tilt toward the cursor.
function TiltCard({ children }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const onMove = (e) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const rx = -((e.clientY - r.top) / r.height - 0.5) * 6
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 8
    ref.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="h-full transition-transform duration-300 ease-out will-change-transform"
    >
      {children}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="overflow-hidden border-y border-line bg-panel/40 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader num="07" kicker="Shipped & grown" title="Selected" accent="work" />

        <Flagship />

        {/* ── showcase + CTA — tilt cards ─────────────────────────── */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {showcase.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1} className="h-full">
              <TiltCard>
                <SpotlightCard className="h-full rounded-2xl border border-line bg-panel transition-colors hover:border-acid/60">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl">
                    <div className="group relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.alt}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-base/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <span className={`absolute left-4 top-4 rounded-full border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${kindLabel[project.kind].cls}`}>
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
              </TiltCard>
            </Reveal>
          ))}

          {/* CTA card */}
          <Reveal delay={0.15} className="h-full">
            <TiltCard>
              <a
                href="#contact"
                className="group flex h-full min-h-64 flex-col items-start justify-between rounded-2xl border border-dashed border-line bg-panel/50 p-7 transition-colors hover:border-acid/70 md:p-8"
              >
                <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-mute">
                  <span className="pulse-dot h-2 w-2 rounded-full bg-acid" />
                  Next slot open
                </span>
                <div>
                  <p className="font-display text-2xl font-bold leading-snug md:text-3xl">
                    Your project could be <span className="text-acid">the next case study</span>.
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
            </TiltCard>
          </Reveal>
        </div>

        {/* ── work index — rows slide in one after another ────────── */}
        <div className="mt-14">
          <Reveal>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-mute">
              <span className="text-acid">$</span> more work
            </p>
          </Reveal>
          <ul className="divide-y divide-line border-y border-line">
            {workIndex.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.21, 0.65, 0.36, 1] }}
              >
                <div className="group grid items-center gap-2 py-5 transition-all hover:bg-panel/60 sm:grid-cols-12 sm:gap-4 sm:px-4 sm:hover:px-6">
                  <span className="font-mono text-xs text-mute transition-colors group-hover:text-acid sm:col-span-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-lg font-bold transition-colors group-hover:text-acid sm:col-span-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-mute sm:col-span-4">{item.desc}</p>
                  <div className="flex items-center gap-3 sm:col-span-3 sm:justify-end">
                    <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${kindLabel[item.kind].cls}`}>
                      {kindLabel[item.kind].text}
                    </span>
                    <span className="font-mono text-xs font-bold text-acid">↗ {item.result}</span>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center font-mono text-xs uppercase tracking-[0.25em] text-mute">
            More case studies on request — full numbers shared privately
          </p>
        </Reveal>
      </div>
    </section>
  )
}
