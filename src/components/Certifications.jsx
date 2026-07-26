import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import Lightbox from './ui/Lightbox'
import { awards, certifications } from '../data/content'

const tagColor = {
  Dev: 'border-acid/40 bg-acid/10 text-acid',
  AI: 'border-[#c084fc]/40 bg-[#c084fc]/10 text-[#c084fc]',
  Marketing: 'border-[#fbbf24]/40 bg-[#fbbf24]/10 text-[#fbbf24]',
  Business: 'border-[#38bdf8]/40 bg-[#38bdf8]/10 text-[#38bdf8]',
}

// Trophy SVG (no emoji icons — per design checklist).
function TrophyIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9a6 6 0 0 0 12 0V3H6z" />
      <path d="M6 5H3v2a4 4 0 0 0 4 4" />
      <path d="M18 5h3v2a4 4 0 0 1-4 4" />
      <path d="M12 15v3" />
      <path d="M8 21h8" />
      <path d="M10 21a2 2 0 0 1 2-3 2 2 0 0 1 2 3" />
    </svg>
  )
}

// Marquee thumbnail — hides itself if the scan file doesn't exist yet.
function CertThumb({ cert, onOpen }) {
  const [ok, setOk] = useState(true)
  if (!ok) return null
  return (
    <button
      type="button"
      onClick={() => onOpen(cert)}
      className="group relative mx-3 shrink-0 cursor-pointer overflow-hidden rounded-lg border border-line bg-panel transition-all hover:-translate-y-1.5 hover:border-acid/70"
      aria-label={`View certificate: ${cert.title}`}
    >
      <img
        src={cert.image}
        alt={cert.title}
        loading="lazy"
        onError={() => setOk(false)}
        className="h-32 w-auto object-cover md:h-40"
      />
      <span className="absolute inset-x-0 bottom-0 translate-y-full bg-base/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-acid backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
        View ↗
      </span>
    </button>
  )
}

// Uniform card for the moving rows — every card is EXACTLY the same size,
// so the rows stay perfectly aligned while they scroll forever.
function CertCard({ cert, onOpen }) {
  const clickable = Boolean(cert.image)
  return (
    <div
      onClick={() => clickable && onOpen(cert)}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={(e) => clickable && e.key === 'Enter' && onOpen(cert)}
      className={`group mx-2.5 flex h-36 w-80 shrink-0 flex-col justify-between rounded-xl border p-5 transition-colors ${
        clickable ? 'cursor-pointer hover:border-acid/70' : ''
      } ${cert.featured ? 'border-acid/50 bg-acid/[0.06]' : 'border-line bg-panel'}`}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${tagColor[cert.tag]}`}
        >
          {cert.tag}
        </span>
        <span className="font-mono text-[11px] text-mute">
          {cert.ongoing ? (
            <span className="flex items-center gap-1.5">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-acid" />
              in progress
            </span>
          ) : (
            cert.year
          )}
        </span>
      </div>

      <div>
        <h3 className="line-clamp-2 font-display text-[15px] font-bold leading-snug">
          {cert.title}
        </h3>
        <p className="mt-1 line-clamp-1 text-xs text-mute">{cert.org}</p>
      </div>

      <p
        className={`font-mono text-[10px] uppercase tracking-[0.2em] text-acid transition-opacity ${
          clickable ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'
        }`}
      >
        View certificate ↗
      </p>
    </div>
  )
}

// One infinite row — `reverse` flips the direction.
function CertRow({ items, reverse = false, onOpen }) {
  return (
    <div className="overflow-hidden py-2">
      <div className={`marquee-track marquee-slow ${reverse ? 'marquee-reverse' : ''}`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((cert) => (
              <CertCard key={`${copy}-${cert.title}`} cert={cert} onOpen={onOpen} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Certifications() {
  const [selected, setSelected] = useState(null)
  const scanned = certifications.filter((c) => c.image)
  const half = Math.ceil(certifications.length / 2)
  const rowA = certifications.slice(0, half)
  const rowB = certifications.slice(half)

  return (
    <section id="certifications" className="overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader num="06" kicker="Awards & proof" title="Stamped &" accent="certified" />

        {/* awards — moving trophy strip (click to see the certificate) */}
        <Reveal className="mb-14">
          <div className="relative overflow-hidden py-2">
            <div className="marquee-track marquee-slow marquee-reverse">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
                  {[...awards, ...awards, ...awards].map((a, i) => (
                    <div
                      key={`${copy}-${i}`}
                      onClick={() => a.image && setSelected({ title: a.title, org: a.org, image: a.image })}
                      role={a.image ? 'button' : undefined}
                      tabIndex={a.image && copy === 0 ? 0 : undefined}
                      onKeyDown={(e) =>
                        a.image && e.key === 'Enter' && setSelected({ title: a.title, org: a.org, image: a.image })
                      }
                      className={`group mx-2.5 flex h-44 w-[340px] shrink-0 flex-col rounded-2xl border border-acid/40 bg-acid/[0.05] p-6 transition-colors hover:border-acid/80 ${
                        a.image ? 'cursor-pointer' : ''
                      }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        <span className="text-acid">
                          <TrophyIcon />
                        </span>
                        <span className="rounded-full bg-acid px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-base">
                          Award
                        </span>
                      </div>
                      <h3 className="mt-4 line-clamp-1 font-display text-lg font-bold leading-tight">
                        {a.title}
                      </h3>
                      <p className="mt-1 line-clamp-1 font-mono text-xs text-mute">{a.org}</p>
                      <p className="mt-auto font-mono text-[10px] uppercase tracking-[0.2em] text-acid opacity-0 transition-opacity group-hover:opacity-100">
                        {a.image ? 'View proof ↗' : ''}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-base to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-base to-transparent" aria-hidden="true" />
          </div>
        </Reveal>

        {/* moving certificate wall — real scans.
            Few scans → repeat them 4× so the loop never shows an empty gap. */}
        {scanned.length > 0 && (
          <Reveal className="mb-14">
            <div className="relative overflow-hidden rounded-2xl border border-line bg-panel/40 py-6">
              <div className="marquee-track marquee-slow">
                {(scanned.length < 8 ? [0, 1, 2, 3] : [0, 1]).map((copy) => (
                  <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy !== 0}>
                    {scanned.map((cert) => (
                      <CertThumb key={`${copy}-${cert.title}`} cert={cert} onOpen={setSelected} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-base to-transparent" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-base to-transparent" aria-hidden="true" />
            </div>
          </Reveal>
        )}

        <Reveal>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-mute">
            <span className="text-acid">$</span> {certifications.length} certifications — hover to pause · click to view
          </p>
        </Reveal>
      </div>

      {/* two tidy counter-scrolling rows — always in motion, perfectly aligned */}
      <Reveal className="relative">
        <CertRow items={rowA} onOpen={setSelected} />
        <CertRow items={rowB} reverse onOpen={setSelected} />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-base to-transparent md:w-28" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-base to-transparent md:w-28" aria-hidden="true" />
      </Reveal>

      <AnimatePresence>
        {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
