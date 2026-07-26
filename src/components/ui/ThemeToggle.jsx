import { useEffect, useState } from 'react'

// Dark / light switch — choice saved in localStorage, applied before paint
// (see the inline script in index.html that prevents a flash).
export default function ThemeToggle() {
  const [light, setLight] = useState(() =>
    typeof document !== 'undefined' ? document.documentElement.classList.contains('light') : false
  )

  useEffect(() => {
    document.documentElement.classList.toggle('light', light)
    try {
      localStorage.setItem('theme', light ? 'light' : 'dark')
    } catch {
      /* private mode — ignore */
    }
  }, [light])

  return (
    <button
      type="button"
      onClick={() => setLight(!light)}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line text-mute transition-colors hover:border-acid hover:text-acid"
    >
      {light ? (
        // moon
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      ) : (
        // sun
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.9 4.9 1.4 1.4" />
          <path d="m17.7 17.7 1.4 1.4" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.3 17.7-1.4 1.4" />
          <path d="m19.1 4.9-1.4 1.4" />
        </svg>
      )}
    </button>
  )
}
