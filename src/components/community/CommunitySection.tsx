/**
 * Community Section — editorial redesign
 *
 * Reworked toward the Les Amis / Vega references: a centered serif statement,
 * then edge-to-edge auto-scrolling photo marquees (forward + reverse) that let
 * the community's own moments carry the section — calmer and more modern than
 * the previous scattered collage.
 */

'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerParent, inViewProps } from '@/lib/motion';
import { WEBSITE_ASSETS } from '@/lib/websiteAssets';
import PhotoMarquee from '@/components/landing/PhotoMarquee';

const rowA = [
  { src: WEBSITE_ASSETS.themeCards.relationships, alt: 'Rheii relationships insight' },
  { src: WEBSITE_ASSETS.themeCards.validation, alt: 'Rheii self and identity insight' },
  { src: WEBSITE_ASSETS.themeCards.burnout, alt: 'Rheii burnout trend insight' },
  { src: WEBSITE_ASSETS.themeCards.selfIdentity, alt: 'Rheii self and identity reflection' },
  { src: WEBSITE_ASSETS.themeCards.work, alt: 'Rheii work reflection' },
];

const rowB = [...rowA].reverse();

export default function CommunitySection() {
  return (
    <div className="relative w-full bg-parchment overflow-hidden pt-[120px] pb-[120px]">
      {/* Centered statement */}
      <motion.div
        variants={staggerParent(0.12)}
        {...inViewProps}
        className="flex flex-col items-center max-w-[640px] mx-auto px-5 sm:px-8 mb-16 md:mb-20 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="font-serif font-medium text-[36px] sm:text-[46px] leading-[1.1] tracking-heading text-ink"
        >
          A community <span className="italic text-clay">designed</span> by you
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="font-editorial text-[20px] leading-[1.55] text-ash mt-[32px] max-w-[480px]"
        >
          Through our community, growth becomes shared rather than solitary. Connect with
          like-minded people who understand your context, grow alongside you, and challenge you
          constructively.
        </motion.p>
      </motion.div>

      {/* Photo marquees */}
      <div className="flex flex-col gap-4 md:gap-5">
        <PhotoMarquee photos={rowA} speed={75} />
        <PhotoMarquee photos={rowB} speed={90} reverse />
      </div>
    </div>
  );
}
