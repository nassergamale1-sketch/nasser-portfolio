import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import ThemeToggle from './ui/ThemeToggle'
import { nav, site } from '../data/content'

// Floating pill nav — appears docked top-center, highlights active section.
export default function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: reduce ? 0.1 : 2.2, ease: 'easeOut' }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        aria-label="Main navigation"
        className="flex w-full max-w-4xl items-center justify-between gap-3 rounded-full border border-line bg-base/80 py-2 pl-5 pr-2 backdrop-blur-md"
      >
        {/* logo */}
        <a
          href="#top"
          className="shrink-0 font-mono text-sm font-bold tracking-tight text-ink"
          aria-label="Back to top"
        >
          <span className="text-acid">ng</span>.dev
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block whitespace-nowrap rounded-full px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors xl:px-3 xl:tracking-widest ${
                  active === item.id
                    ? 'bg-acid text-base'
                    : 'text-mute hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* theme + CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`mailto:${site.email}`}
            className="hidden shrink-0 whitespace-nowrap rounded-full bg-ink px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-base transition-colors hover:bg-acid md:block"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            <span className="font-mono text-xs">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {/* mobile dropdown */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 w-[calc(100%-2rem)] max-w-3xl rounded-2xl border border-line bg-base/95 p-3 backdrop-blur-md md:hidden"
        >
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-widest text-mute hover:bg-panel hover:text-ink"
              >
                {item.label}
                <span className="text-[10px] text-acid">{item.num}</span>
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  )
}
