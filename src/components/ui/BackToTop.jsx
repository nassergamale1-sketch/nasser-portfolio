import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Floating back-to-top button — appears after scrolling past the hero.
export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel/90 font-mono text-sm text-acid backdrop-blur-md transition-colors hover:border-acid"
        >
          ↑
        </motion.a>
      )}
    </AnimatePresence>
  )
}
