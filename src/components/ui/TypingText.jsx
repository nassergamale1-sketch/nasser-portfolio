import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Terminal-style typing rotation: types a phrase, holds, deletes, next.
// Reduced-motion users get a static first phrase.
export default function TypingText({ phrases, className = '' }) {
  const reduce = useReducedMotion()
  const [text, setText] = useState('')
  const [phase, setPhase] = useState({ i: 0, deleting: false })

  useEffect(() => {
    if (reduce) return
    const current = phrases[phase.i % phrases.length]
    let delay = phase.deleting ? 32 : 62

    const t = setTimeout(() => {
      if (!phase.deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) {
          setTimeout(() => setPhase((p) => ({ ...p, deleting: true })), 1600)
        }
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setPhase((p) => ({ i: (p.i + 1) % phrases.length, deleting: false }))
        }
      }
    }, delay)
    return () => clearTimeout(t)
  }, [text, phase, phrases, reduce])

  if (reduce) {
    return <span className={className}>{phrases[0]}</span>
  }

  return (
    <span className={className} aria-label={phrases[0]}>
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  )
}
