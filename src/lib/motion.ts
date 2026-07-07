/**
 * Shared Framer Motion primitives.
 *
 * Motion follows Geist's guidance: short and physical, used only to clarify a
 * change — never decoration. One easing curve, one set of reveal variants, so
 * every section moves with the same restrained rhythm.
 */

import type { Variants, Transition } from 'framer-motion'

// Geist's physical easing — a small overshoot that reads as motion settling.
export const EASE_EDITORIAL = [0.175, 0.885, 0.32, 1.1] as const

// ~300ms: Geist's ceiling for revealing/moving an element.
export const revealTransition: Transition = {
  duration: 0.3,
  ease: EASE_EDITORIAL,
}

/** Fade + small rise. Use with `whileInView` and `viewport={{ once: true }}`. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
}

/** Container that staggers its children's reveals (kept tight). */
export const staggerParent = (stagger = 0.06, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})

/** Standard once-in-view props for a self-contained reveal. */
export const inViewProps = {
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: { once: true, amount: 0.3 },
}
