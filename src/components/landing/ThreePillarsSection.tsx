/**
 * Three Pillars Section Component
 *
 * "Why Rhei" section showcasing three core features:
 * 1. Personalized
 * 2. Social
 * 3. Community
 *
 * Design specs (from Figma node-id: 53:26):
 * - Section at y: 2736px, 1440px × 928px
 * - Three cards: 395px × 425px each
 * - Positions: x: 104px, 523px, 942px (y: 349px)
 *
 * Typography: Roboto Serif H2, DM Sans B1
 * Colors: Rheii design system
 */

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { WEBSITE_ASSETS } from '@/lib/websiteAssets';

interface PillarCardProps {
  number: string;
  title: string;
  imageSrc?: string;
  delay: number;
}

function PillarCard({ number, title, imageSrc, delay }: PillarCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const gradients = {
    '1': 'from-rheti-primary-300 to-rheti-primary-500',
    '2': 'from-rheti-secondary-500 to-rheti-secondary-700',
    '3': 'from-rheti-tertiary-500 to-rheti-secondary-500',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="relative w-full h-[425px] rounded-2xl overflow-hidden shadow-rheti-md hover:shadow-xl transition-shadow cursor-pointer group"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${title} illustration`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            unoptimized
          />
        ) : (
          // Placeholder gradient
          <div
            className={`w-full h-full bg-gradient-to-br ${gradients[number as keyof typeof gradients]} opacity-50`}
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="space-y-2"
        >
          <span className="text-white/70 font-body text-base font-light">{number}.</span>
          <h3 className="text-white font-heading font-normal tracking-wide text-[28px] opacity-90">
            {title}
          </h3>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ThreePillarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-24 px-8 md:px-16 lg:px-24 bg-rheti-neutral-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-rheti-secondary-500 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-rheti-tertiary-500 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16 max-w-2xl"
        >
          <h2
            className="font-heading font-extralight text-rheti-neutral-600 mb-6"
            style={{
              fontFamily: 'var(--font-cormorant-garamond)',
              fontWeight: 300,
              fontSize: '13px',
              lineHeight: '12px',
              letterSpacing: '-2px',
              fontVariationSettings: "'opsz' 14",
            }}
          >
            And growth doesn't happen in isolation.
          </h2>
          <p
            className="font-body text-rheti-neutral-400"
            style={{
              fontSize: '18px',
              lineHeight: '27px',
            }}
          >
            Understand how you and your circles influence, shape, and grow with one another, while
            discovering new communities aligned with the stage you're stepping into.
          </p>
        </motion.div>

        {/* Three Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PillarCard
            number="1"
            title="Personalized"
            imageSrc={WEBSITE_ASSETS.product.recurringThemes}
            delay={0.2}
          />
          <PillarCard
            number="2"
            title="Social"
            imageSrc={WEBSITE_ASSETS.themeCards.validation}
            delay={0.4}
          />
          <PillarCard
            number="3"
            title="Community"
            imageSrc={WEBSITE_ASSETS.themeCards.relationships}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
