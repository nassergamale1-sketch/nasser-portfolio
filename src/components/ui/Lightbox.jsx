import { useEffect } from 'react'
import { motion } from 'framer-motion'

// Full-screen certificate viewer. Render inside <AnimatePresence>:
//   {item && <Lightbox item={item} onClose={...} />}
// Closes on backdrop click, X button, or Escape.
export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-base/90 p-4 backdrop-blur-md md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <motion.figure
        initial={{ scale: 0.9, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.94, y: 12, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.21, 0.65, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-full max-w-4xl"
      >
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[80svh] w-auto rounded-xl border border-line shadow-[0_25px_80px_-20px_rgba(0,0,0,0.9),0_0_60px_-20px_rgba(163,230,53,0.3)]"
        />
        <figcaption className="mt-4 flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg font-bold text-ink">{item.title}</p>
            <p className="font-mono text-xs text-mute">{item.org}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line bg-panel font-mono text-sm text-ink transition-colors hover:border-acid hover:text-acid"
          >
            ✕
          </button>
        </figcaption>
      </motion.figure>
    </motion.div>
  )
}
