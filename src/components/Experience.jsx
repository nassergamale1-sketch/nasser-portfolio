import { motion } from 'framer-motion'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import { experience, journey } from '../data/content'

// Git-log style timeline: commits on a branch line, hover glow.
export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <SectionHeader num="04" kicker="git log --oneline" title="Track" accent="record" />

      {/* journey strip — year milestones connected by an animated line */}
      <Reveal className="mb-16">
        <div className="relative">
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, ease: [0.21, 0.65, 0.36, 1] }}
            className="absolute left-0 right-0 top-[9px] hidden h-px origin-left bg-gradient-to-r from-acid via-acid/50 to-line md:block"
          />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
            {journey.map((j, i) => (
              <motion.div
                key={j.year}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative"
              >
                <span
                  aria-hidden="true"
                  className={`mb-3 hidden h-[18px] w-[18px] items-center justify-center rounded-full border-2 md:flex ${
                    i === journey.length - 1 ? 'border-acid bg-acid/20' : 'border-line bg-base'
                  }`}
                >
                  {i === journey.length - 1 && (
                    <span className="pulse-dot h-[7px] w-[7px] rounded-full bg-acid" />
                  )}
                </span>
                <p className="font-display text-xl font-extrabold text-acid">{j.year}</p>
                <p className="mt-1 text-sm leading-snug text-mute">{j.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="relative ml-2 border-l border-line pl-8 md:ml-6 md:pl-14">
        {experience.map((job, i) => (
          <Reveal key={job.role} delay={i * 0.15} className="relative pb-14 last:pb-0">
            {/* commit node */}
            <span
              aria-hidden="true"
              className={`absolute -left-[41px] top-1.5 flex h-[17px] w-[17px] items-center justify-center rounded-full border-2 md:-left-[65px] ${
                job.current
                  ? 'border-acid bg-base'
                  : 'border-line bg-panel'
              }`}
            >
              {job.current && <span className="pulse-dot h-[7px] w-[7px] rounded-full bg-acid" />}
            </span>

            <div className="group rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-acid/50 md:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-acid">
                  {job.period}
                </span>
                {job.current && (
                  <span className="rounded-full bg-acid px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-base">
                    HEAD → now
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl font-bold md:text-3xl">{job.role}</h3>
              <p className="mt-1 font-mono text-sm text-mute">@ {job.org}</p>

              <ul className="mt-5 space-y-2.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-mute">
                    <span className="mt-1 shrink-0 font-mono text-xs text-acid">▸</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
