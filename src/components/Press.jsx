import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import { press, pressPhoto } from '../data/content'

// Press section — big stage photo + broadcast lower-third cards.
export default function Press() {
  return (
    <section id="press" className="border-y border-line bg-panel/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader num="05" kicker="As seen on" title="On" accent="air" />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* feature photo — on stage, TV mics visible */}
          <Reveal className="lg:col-span-5">
            <figure className="group relative overflow-hidden rounded-2xl border border-line bg-panel lg:h-full">
              <img
                src={pressPhoto.src}
                alt={pressPhoto.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-[1.03] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              />
              {/* LIVE badge */}
              <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-line bg-base/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
                <span className="pulse-dot h-2 w-2 rounded-full bg-red-500" />
                LIVE
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-base via-base/70 to-transparent px-5 pb-4 pt-14 font-mono text-xs uppercase tracking-[0.2em] text-mute">
                {pressPhoto.caption}
              </figcaption>
            </figure>
          </Reveal>

          {/* press cards stacked beside the photo */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            {press.map((item, i) => (
              <Reveal key={item.outlet} delay={0.1 + i * 0.12} className="flex-1">
                <article className="group relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-line bg-panel p-7 transition-colors hover:border-acid/50 md:p-9">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex items-center gap-2 rounded-full border border-line bg-base px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                      <span className="pulse-dot h-2 w-2 rounded-full bg-red-500" />
                      REC · {item.type}
                    </span>
                    <span className="font-mono text-xs text-mute">{item.date}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">
                    {item.outlet}
                  </h3>
                  <p className="mt-3 leading-relaxed text-mute">{item.detail}</p>

                  {/* lower-third accent bar */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-1 w-0 bg-acid transition-all duration-500 group-hover:w-full"
                  />
                </article>
              </Reveal>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
