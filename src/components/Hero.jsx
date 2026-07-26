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
          <motion.p variants={rise} className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-mute">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-acid" />
            {site.location} · available for work
          </motion.p>

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
