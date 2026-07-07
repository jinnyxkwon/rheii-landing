/**
 * Tailwind CSS Configuration
 *
 * Rheii editorial design system — "warm parchment, printed in ink."
 * Adapted from the Cursor style reference, remapped to the Rheii palette.
 *
 * Surfaces (light → dark): parchment (canvas) → bone (card) → linen (elevated)
 * Text: ink (primary) → ash (secondary) → mist (tertiary)
 * Accent: terracotta (links/emphasis, text-only) with clay + sage as supports.
 *
 * Type: DM Sans (headlines + UI, weight 400 with tight tracking),
 *       Cormorant Garamond (editorial serif accent), DM Mono (metadata).
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Editorial system — surfaces ──────────────────────────────
        parchment: '#fafaf8', // page canvas — light warm-white
        bone: '#f3f2ef', // faint secondary tint
        linen: '#edece7', // elevated surface, secondary buttons
        stone: '#e6e4de', // hairline borders, rules

        // ── Editorial system — text ──────────────────────────────────
        mist: '#a3a099', // tertiary / captions
        ash: '#6f6b62', // secondary body text
        ink: '#242424', // primary text, primary filled button

        // ── Editorial system — accents (text-only punctuation) ───────
        terracotta: {
          DEFAULT: '#AD7441', // primary accent — links & emphasis
          600: '#8f5d31', // darker, for hairline/hover
        },
        clay: '#73383E', // burgundy support accent
        sage: '#6D867C', // green support accent

        // ── Legacy aliases (kept so un-migrated components still build) ─
        'primary-bg': '#f4f3f0',
        'secondary-bg': '#eeece6',
        'text-primary': '#242424',
        'text-secondary': '#6f6b62',
        'tag-bg': '#e6e3db',
        'border': '#d6d3cb',
        'rheti-primary': {
          300: '#c08a56',
          500: '#AD7441',
          600: '#8f5d31',
        },
        'rheti-secondary': {
          50: '#f4f3f0',
          100: '#e6e3db',
          500: '#DFB086',
          700: '#AD7441',
        },
        'rheti-tertiary': {
          500: '#6D867C',
        },
        'rheti-neutral': {
          50: '#f4f3f0',
          400: '#6f6b62',
          500: '#3a3833',
          600: '#242424',
        },
      },
      fontFamily: {
        // Primary voice
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        // Editorial serif accent
        serif: ['var(--font-cormorant-garamond)', 'Georgia', 'serif'],
        heading: ['var(--font-cormorant-garamond)', 'Georgia', 'serif'],
        // Metadata / labels
        mono: ['var(--font-dm-mono)', 'ui-monospace', 'monospace'],
        // Legacy aliases
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        // Cursor's progressively-tighter display tracking
        eyebrow: '0.14em',
        'tight-sm': '-0.011em', // ~22px
        tight: '-0.02em', // ~36px
        'tight-lg': '-0.03em', // ~72px
      },
      borderRadius: {
        // 4px is the workhorse across the whole system
        DEFAULT: '4px',
        sm: '2px',
        md: '4px',
        lg: '4px',
        xl: '8px',
        '2xl': '8px',
      },
      boxShadow: {
        // The design is flat — depth comes from hairline borders and tonal
        // surfaces, never drop shadows.
        none: 'none',
      },
      maxWidth: {
        page: '1300px',
      },
      transitionTimingFunction: {
        // Geist's physical easing — short, with a small settle at the end.
        editorial: 'cubic-bezier(0.175, 0.885, 0.32, 1.1)',
      },
    },
  },
  plugins: [],
}
export default config
