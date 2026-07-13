/**
 * Website imagery imported from the private Supabase `website-assets` bucket.
 *
 * The bucket remains private, so the app serves deployment-safe local copies
 * instead of expiring signed URLs or a privileged server-side key.
 */
export const WEBSITE_ASSETS = {
  product: {
    recurringThemes: '/images/website-assets/product-recurring-themes.jpg',
    lifeInMotion: '/images/website-assets/product-life-in-motion.png',
  },
  testimonials: {
    firstEntry: '/images/website-assets/testimonial-first-entry.jpg',
    amazing: '/images/website-assets/testimonial-amazing.jpg',
    loopedThinking: '/images/website-assets/testimonial-looped-thinking.jpg',
  },
  themeCards: {
    relationships: '/images/website-assets/theme-relationships.png',
    validation: '/images/website-assets/theme-validation.png',
    burnout: '/images/website-assets/theme-burnout.png',
    selfIdentity: '/images/website-assets/theme-self-identity.png',
    work: '/images/website-assets/theme-work.png',
  },
  founderPortrait: '/images/website-assets/founder-portrait.jpg',
} as const;
