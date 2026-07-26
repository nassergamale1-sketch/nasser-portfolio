import { motion, useReducedMotion } from 'framer-motion'

// Scroll-triggered reveal with a cinematic blur-focus (codemz-style):
// content rises, fades in, and sharpens from a soft blur.
export default function Reveal({ children, delay = 0, y = 28, className = '', ...rest }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.65, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
