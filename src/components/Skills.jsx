import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import { skills } from '../data/content'

// Two-mode toggle: builder.exe ↔ growth.exe.
// Skill "chips" animate in per mode — not a boring list.
export default function Skills() {
  const [mode, setMode] = useState('tech')
  const active = skills[mode]

  return (
    <section id="skills" className="relative border-y border-line bg-panel/40 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader num="03" kicker="Dual arsenal" title="Two stacks," accent="one head" />

        {/* mode switch — styled as running processes */}
        <Reveal className="mb-12 flex flex-wrap items-center gap-3">
          {Object.entries(skills).map(([key, s]) => (
            <button
              key={key}
              type="button"
              onClick={() => setMode(key)}
              aria-pressed={mode === key}
              className={`group flex items-center gap-3 rounded-lg border px-5 py-3 font-mono text-sm transition-all ${
                mode === key
                  ? 'border-acid bg-acid/10 text-acid'
                  : 'border-line bg-panel text-mute hover:border-mute hover:text-ink'
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  mode === key ? 'pulse-dot bg-acid' : 'bg-line'
                }`}
              />
              ./{s.code}
            </button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <p className="mb-8 font-mono text-sm text-mute">
              <span className="text-acid">$</span> {active.intro}
            </p>

            {/* asymmetric skill grid — first item spans 2 cols on desktop */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {active.items.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className={`group relative overflow-hidden rounded-xl border border-line bg-panel2 p-5 transition-colors hover:border-acid/60 ${
                    i === 0 ? 'col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-bold leading-tight md:text-xl">
                      {skill.name}
                    </h3>
                    <span className="shrink-0 rounded-full border border-acid/40 bg-acid/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-acid">
                      {skill.level}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-4 -right-2 select-none font-display text-6xl font-extrabold text-ink/[0.04] transition-colors group-hover:text-acid/10"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
