import { useRef, useState } from 'react'

// Card with a cursor-following acid glow (desktop) — degrades gracefully on touch.
export default function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: -400, y: -400 })
  const [hover, setHover] = useState(false)

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: hover ? 1 : 0,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(163,230,53,0.09), transparent 65%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
