/**
 * Hero Section Component
 *
 * Top section of the Rheii landing page featuring:
 * - Centered headline, subtitle, and App Store badge
 * - Full-width showcase: a tall "phone screen" crop of the hero photo with
 *   theme insight cards that pop in one at a time and stay, laid out around it
 *
 * Typography: Cormorant Garamond (heading), Inter-style body
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Theme cards overlaid on the photo. `delay` encodes a fixed shuffled pop-in
 * order (2 → 5 → 3 → 1) so cards appear one at a time and remain on screen.
 * Positions are percentages of the showcase stage so the whole composition
 * scales down proportionally on smaller screens.
 */
const themeCards = [
  {
    src: '/images/home/theme-card-2.png',
    alt: 'Self & identity insight: Validation shapes your confidence',
    width: 893,
    height: 381,
    left: '3%',
    top: '71%',
    w: '41%',
    delay: 0.6,
  },
  {
    src: '/images/home/theme-card-5.png',
    alt: 'Work reflection: What does your current level of ambition reveal?',
    width: 1012,
    height: 554,
    left: '51%',
    top: '68%',
    w: '44%',
    delay: 1.05,
  },
  {
    src: '/images/home/theme-card-3.png',
    alt: 'Work burnout appearing less often',
    width: 706,
    height: 375,
    left: '6%',
    top: '6%',
    w: '37%',
    delay: 1.5,
  },
  {
    src: '/images/home/theme-card-1.png',
    alt: 'Relationships insight: Connections extend beyond immediate circle',
    width: 962,
    height: 409,
    left: '54%',
    top: '11%',
    w: '41%',
    delay: 1.95,
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#f7f6f4' }}
    >
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24 px-6 sm:px-10 md:px-16 pt-28 md:pt-32 pb-16 md:pb-24 lg:min-h-screen">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex flex-col gap-[8px] items-center lg:items-start text-black max-w-[540px] mx-auto lg:mx-0 lg:pl-8 xl:pl-16 text-center lg:text-left -mt-16 md:-mt-20"
        >
          <h1
            className="font-heading font-extralight text-[42px] sm:text-[48px] md:text-[54px] leading-[52px] sm:leading-[60px] md:leading-[66px]"
            style={{
              transform: 'scaleX(0.985)',
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Your growth made visible.
          </h1>
          <p className="text-[18px] sm:text-[21px] leading-[28px] sm:leading-[32px] max-w-[460px] mt-[16px] font-light opacity-90">
            Join other early members navigating life from the inside out.
          </p>
          <a
            href="https://apps.apple.com/app/id6769975352"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[24px] inline-block"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-[52px] w-auto"
            />
          </a>
        </motion.div>

        {/* Showcase: photo + floating theme cards */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[560px] aspect-[27/32]">
          {/* Phone-shaped photo crop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="absolute rounded-[20px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.18)]"
            style={{ left: '21%', top: '16%', width: '58%', aspectRatio: '4220 / 5789' }}
          >
            <Image
              src="/images/home/hero-image.jpg"
              alt="Rheii app interface"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Theme cards */}
          {themeCards.map((card) => (
            <motion.div
              key={card.src}
              initial={{ opacity: 0, scale: 0.8, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: card.delay,
                duration: 0.5,
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className="absolute drop-shadow-[0_12px_45px_rgba(0,0,0,0.14)]"
              style={{ left: card.left, top: card.top, width: card.w }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={card.width}
                height={card.height}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
