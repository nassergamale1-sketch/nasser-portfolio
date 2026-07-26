import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

// Cinematic intro (codemz-style): the name blurs in letter by letter,
// a signature line draws underneath, then the whole curtain lifts away.
// Respects prefers-reduced-motion (skipped entirely).
const NAME = 'NASSER GAMAL'
const CURTAIN_MS = 2350

export default function Intro() {
  const reduce = useReducedMotion()
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (reduce) return
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ''
    }, CURTAIN_MS)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [reduce])

  if (reduce) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base"
          aria-hidden="true"
        >
          {/* name — letters blur in one by one */}
          <div className="flex overflow-hidden px-4">
            {NAME.split('').map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 46, filter: 'blur(26px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  delay: 0.15 + i * 0.055,
                  duration: 0.6,
                  ease: [0.21, 0.65, 0.36, 1],
                }}
                className="font-display text-[clamp(1.4rem,6.5vw,5.5rem)] font-extrabold uppercase leading-none tracking-tight text-ink"
              >
                {ch === ' ' ? ' ' : ch}
              </motion.span>
            ))}
          </div>

          {/* signature acid line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.21, 0.65, 0.36, 1] }}
            className="mt-6 h-[3px] w-40 origin-left bg-acid md:w-56"
          />

          {/* caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25, duration: 0.5 }}
            className="mt-5 px-4 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-mute sm:text-[11px] sm:tracking-[0.4em]"
          >
            AI Builder <span className="text-acid">×</span> Growth Marketer
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
