import Reveal from './Reveal'

// Numbered section header — "01 / ABOUT" style, editorial + terminal vibe.
// `title` can contain a <span className="text-stroke"> etc. via `accent`.
export default function SectionHeader({ num, kicker, title, accent, align = 'left' }) {
  return (
    <Reveal className={`mb-12 md:mb-16 ${align === 'right' ? 'text-right' : ''}`}>
      <div
        className={`flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-acid uppercase ${
          align === 'right' ? 'justify-end' : ''
        }`}
      >
        <span className="text-mute">{num}</span>
        <span className="h-px w-10 bg-acid/60" aria-hidden="true" />
        <span>{kicker}</span>
      </div>
      <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
        {title} {accent && <span className="text-stroke-acid">{accent}</span>}
      </h2>
    </Reveal>
  )
}
