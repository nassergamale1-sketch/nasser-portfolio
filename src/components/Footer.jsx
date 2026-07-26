import { site } from '../data/content'

// Editorial footer — giant CTA line, contact links, then legal strip.
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 md:px-10 md:pt-24">
        {/* big CTA line */}
        <a href={`mailto:${site.email}`} className="group block">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
            Got a project in mind?
          </p>
          <p className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Let’s make it{' '}
            <span className="text-stroke-acid transition-colors group-hover:text-acid group-hover:[-webkit-text-stroke:0px]">
              grow
            </span>
            <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-1">
              ↗
            </span>
          </p>
        </a>

        {/* link columns */}
        <div className="mt-14 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="text-ink transition-colors hover:text-acid">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`} className="text-ink transition-colors hover:text-acid">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">Social</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink transition-colors hover:text-acid"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink transition-colors hover:text-acid"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink transition-colors hover:text-acid"
                >
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">Status</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-ink">
              <span className="pulse-dot h-2 w-2 rounded-full bg-acid" />
              Open to work &amp; freelance
            </p>
            <p className="mt-1.5 font-mono text-xs text-mute">{site.location}</p>
          </div>
        </div>

        {/* legal strip */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 font-mono text-[11px] text-mute md:flex-row">
          <p>© {new Date().getFullYear()} {site.fullName}</p>
          <p>designed &amp; built with code — no template</p>
          <a href="#top" className="transition-colors hover:text-acid">
            back to top ↑
          </a>
        </div>
      </div>

      {/* ghost word behind */}
      <div
        aria-hidden="true"
        className="text-stroke-faint pointer-events-none absolute -bottom-10 right-0 select-none font-display text-[20vw] font-extrabold leading-none opacity-60"
      >
        NG
      </div>
    </footer>
  )
}
