import { useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import { about } from '../data/content'

// Asymmetric editorial layout: pull-quote + ceremony photo left, copy + fact chips right.
export default function About() {
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <SectionHeader num="01" kicker="Who is this guy" title="Builder ×" accent="Marketer" />

      <div className="grid gap-12 md:grid-cols-12">
        {/* left column — pull quote + award photo */}
        <div className="md:col-span-5">
          <Reveal>
            <p className="border-l-2 border-acid pl-6 font-display text-2xl font-bold leading-snug md:text-[2rem]">
              {about.lead}
            </p>
            <p className="mt-6 pl-6 font-mono text-xs uppercase tracking-[0.25em] text-mute">
              — the short version
            </p>
          </Reveal>

          {photoOk && (
            <Reveal delay={0.15} className="mt-10">
              <figure className="group relative overflow-hidden rounded-2xl border border-line bg-panel">
                <img
                  src={about.photo.src}
                  alt={about.photo.alt}
                  loading="lazy"
                  onError={() => setPhotoOk(false)}
                  className="aspect-[4/3] w-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full border border-acid/40 bg-base/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-acid backdrop-blur-sm">
                  ✦ Recognized
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-base via-base/70 to-transparent px-5 pb-4 pt-14 font-mono text-xs uppercase tracking-[0.2em] text-mute">
                  {about.photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>

        {/* body copy */}
        <div className="space-y-6 md:col-span-7 md:pl-8">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-lg leading-relaxed text-mute md:text-xl">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
