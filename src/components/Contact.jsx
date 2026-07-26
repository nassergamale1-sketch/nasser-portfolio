import { useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import { site } from '../data/content'

// Contact form with NO backend: submit opens the user's mail app
// with the message pre-filled (mailto). Simple and static-host friendly.
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact — ${form.name || 'New message'}`)
    const body = encodeURIComponent(
      `Hi Nasser,\n\n${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  const inputCls =
    'w-full rounded-xl border border-line bg-panel px-4 py-3.5 text-ink placeholder:text-mute/60 outline-none transition-colors focus:border-acid'

  return (
    <section id="contact" className="relative mx-auto max-w-7xl overflow-hidden px-5 py-24 md:px-10 md:py-36">
      {/* ghost heading */}
      <div
        aria-hidden="true"
        className="text-stroke-faint pointer-events-none absolute -bottom-6 left-0 select-none font-display text-[22vw] font-extrabold leading-none"
      >
        TALK
      </div>

      <SectionHeader num="08" kicker="Final CTA" title="Let’s build" accent="something" />

      <div className="relative grid gap-14 md:grid-cols-2">
        {/* direct channels */}
        <Reveal>
          <p className="max-w-md text-lg leading-relaxed text-mute">
            Need someone who can <span className="text-ink">ship the product</span> and{' '}
            <span className="text-ink">grow the audience</span>? That’s the whole point of me.
            Reach out — I answer fast.
          </p>

          <ul className="mt-10 space-y-4">
            {[
              { label: 'Email', value: site.email, href: `mailto:${site.email}` },
              { label: 'WhatsApp / Phone', value: site.phone, href: `https://wa.me/${site.phoneHref.replace('+', '')}`, external: true },
              { label: 'GitHub', value: site.githubHandle, href: site.github, external: true },
              { label: 'LinkedIn', value: site.linkedinHandle, href: site.linkedin, external: true },
              { label: 'Instagram', value: site.instagramHandle, href: site.instagram, external: true },
            ].map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center justify-between rounded-xl border border-line bg-panel px-5 py-4 transition-colors hover:border-acid/60"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-mute">
                      {c.label}
                    </p>
                    <p className="mt-1 font-semibold text-ink">{c.value}</p>
                  </div>
                  <span className="font-mono text-acid transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* form */}
        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your name"
                aria-label="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputCls}
              />
              <input
                type="email"
                placeholder="Your email"
                aria-label="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputCls}
              />
            </div>
            <textarea
              required
              rows={6}
              placeholder="Tell me about the project…"
              aria-label="Your message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputCls} resize-none`}
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-acid px-7 py-4 font-mono text-sm font-bold uppercase tracking-widest text-base transition-transform hover:-translate-y-0.5"
            >
              Send message →
            </button>
            <p className="text-center font-mono text-[11px] text-mute">
              Opens your email app — no data stored anywhere.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
