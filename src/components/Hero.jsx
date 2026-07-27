import { motion, useReducedMotion } from 'framer-motion'
import TypingText from './ui/TypingText'
import { site, marquee } from '../data/content'

// Hero entrance starts as the intro curtain lifts (delay passed via `custom`).
const stagger = {
  hidden: {},
  show: (d = 0) => ({ transition: { staggerChildren: 0.12, delayChildren: d } }),
}
const rise = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.21, 0.65, 0.36, 1] },
  },
}

// Per-letter reveal for the big display name.
const letterWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
}
const letter = {
  hidden: { opacity: 0, y: '0.6em', rotate: 4 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.55, ease: [0.21, 0.65, 0.36, 1] } },
}

function AnimatedWord({ text, className = '' }) {
  return (
    <motion.span variants={letterWrap} className={`block ${className}`} aria-hidden="true">
      {text.split('').map((ch, i) => (
        <motion.span key={i} variants={letter} className="inline-block">
          {ch}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Compact fake config file card.
function ConfigCard() {
  return (
    <div className="rounded-xl border border-line bg-panel font-mono text-[11px] leading-relaxed shadow-[0_18px_50px_-12px_rgba(0,0,0,0.8),0_0_50px_-18px_rgba(163,230,53,0.35)]">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[10px] text-mute">nasser.config.js</span>
      </div>
      <div className="overflow-x-auto p-3.5 text-mute">
        <pre className="whitespace-pre">
          <code>
            <span className="text-[#c084fc]">const</span>{' '}
            <span className="text-ink">nasser</span> = {'{'}
            {'\n'}  role: <span className="text-acid">"AI builder × marketer"</span>,
            {'\n'}  stack: [<span className="text-acid">"Python"</span>, <span className="text-acid">"YOLO"</span>, <span className="text-acid">"Web"</span>],
            {'\n'}  award: <span className="text-acid">"3rd — TechFront"</span>,
            {'\n'}  patent: <span className="text-acid">"Mwasalaty Express"</span>,
            {'\n'}  status: <span className="text-acid">"open_to_work"</span>,
            {'\n'}{'}'}
            {'\n'}<span className="text-[#c084fc]">export default</span>{' '}
            <span className="text-ink caret">nasser</span>
          </code>
        </pre>
      </div>
    </div>
  )
}

// Portrait + config card as one clean stacked composition —
// a soft acid glow sits behind instead of hard offset lines.
function HeroVisual() {
  return (
    <motion.div variants={rise} className="relative mx-auto w-64 sm:w-72 lg:ml-auto lg:w-[280px]">
      {/* soft glow behind the composition */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full bg-acid/[0.13] blur-3xl"
      />
      <div className="relative space-y-3">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-panel">
          <img
            src={site.photo}
            alt={`${site.fullName} — portrait`}
            className="aspect-[4/5] w-full object-cover object-top"
          />
          {/* soft fade into the dark canvas at the bottom */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-base/60 to-transparent"
          />
          <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-base/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-acid backdrop-blur-sm">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-acid" />
            online
          </span>
        </div>

        {/* terminal card — tucked neatly under the photo, same width */}
        <div className="mt-3 hidden lg:block">
          <ConfigCard />
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  // No intro curtain for reduced-motion users — start right away.
  const introDelay = reduce ? 0 : 2.1

  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-between overflow-hidden pt-24">
      {/* blueprint grid backdrop */}
      <div className="bg-grid grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      {/* giant ghost letter */}
      <div
        aria-hidden="true"
        className="text-stroke-faint pointer-events-none absolute -right-10 top-16 select-none font-display text-[38vw] font-extrabold leading-none md:-right-16"
      >
        N
      </div>

      <motion.div
        variants={stagger}
        custom={introDelay}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-5 md:grid-cols-12 md:px-10"
      >
        {/* left — type stack */}
        <div className="md:col-span-7">
          <motion.div variants={rise} className="mb-5 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-2 rounded-full border border-acid/40 bg-acid/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-acid">
              <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-acid" />
              Open to work
            </span>
            <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
              Internships
            </span>
            <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
              Collaboration
            </span>
            <span className="ml-1 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
              · {site.location}
            </span>
          </motion.div>

          <motion.h1
            variants={rise}
            className="font-display font-extrabold uppercase leading-[0.9] tracking-tight"
          >
            <span className="sr-only">Nasser Gamal</span>
            <AnimatedWord text="Nasser" className="text-5xl sm:text-7xl lg:text-8xl" />
            <AnimatedWord text="Gamal" className="text-stroke text-5xl sm:text-7xl lg:text-8xl" />
          </motion.h1>

          {/* typing rotation — terminal style */}
          <motion.p variants={rise} className="mt-5 h-6 font-mono text-sm text-acid md:text-base">
            <span className="text-mute">&gt; </span>
            <TypingText
              phrases={[
                'Building intelligent systems.',
                'AI & Machine Learning student.',
                'Computer vision with YOLO.',
                'Growing brands with data.',
              ]}
            />
          </motion.p>

          <motion.p variants={rise} className="mt-4 max-w-xl text-lg text-mute md:text-xl">
            <span className="text-ink">{site.tagline}</span>
            <br />
            AI &amp; ML student, hackathon winner and patent filer — with 3+ years
            growing brands, celebrities and influencers online.
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-acid px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-widest text-base transition-transform hover:-translate-y-0.5"
            >
              View work →
            </a>
            <a
              href="./Nasser_Gamal_CV.pdf"
              download="Nasser_Gamal_CV.pdf"
              className="rounded-full border border-acid/50 px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-widest text-acid transition-all hover:-translate-y-0.5 hover:bg-acid/10"
            >
              Download CV ↓
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3.5 font-mono text-sm uppercase tracking-widest text-ink transition-colors hover:border-acid hover:text-acid"
            >
              Contact me
            </a>

            {/* social icon buttons */}
            <div className="flex items-center gap-2">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-mute transition-all hover:-translate-y-0.5 hover:border-acid hover:text-acid"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-mute transition-all hover:-translate-y-0.5 hover:border-acid hover:text-acid"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* right — portrait composition */}
        <div className="md:col-span-5">
          <HeroVisual />
        </div>
      </motion.div>

      {/* marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: introDelay + 0.5, duration: 0.8 }}
        className="relative mt-10 border-y border-line bg-panel/60 py-4"
      >
        {/* items doubled inside each half so the loop never shows a gap */}
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {[...marquee, ...marquee].map((item, i) => (
                <span
                  key={`${copy}-${i}`}
                  className="mx-6 flex items-center gap-6 font-mono text-xs uppercase tracking-[0.25em] text-mute"
                >
                  {item} <span className="text-acid">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
