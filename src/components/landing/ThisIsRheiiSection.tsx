/**
 * This Is Rheii Section — editorial redesign
 *
 * The three-pillar feature block. Flat bone cards with hairline borders, mono
 * index tags (01 / 02 / 03), and paper-elevated product images. Motion is a
 * single quick reveal per Geist's guidance — no per-character animation.
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, staggerParent, inViewProps } from '@/lib/motion';
import { WEBSITE_ASSETS } from '@/lib/websiteAssets';

const cards = [
  {
    image: WEBSITE_ASSETS.product.recurringThemes,
    imageClassName: 'object-cover object-top',
    title: 'Recurring Themes',
    description: "See the themes you keep returning to, and what they're telling you.",
  },
  {
    image: WEBSITE_ASSETS.product.lifeInMotion,
    imageClassName: '',
    title: 'Your Life in Motion',
    description:
      'As you navigate through life, see where things are growing, easing, or demanding your attention.',
    moving: true,
  },
  {
    image: WEBSITE_ASSETS.themeCards.selfIdentity,
    imageClassName: 'object-contain p-3',
    title: 'Support System',
    description:
      'Receive personalized suggestions and set intentions that resonate. Start building the habits that actually stick.',
  },
];

function LifeInMotionVisual() {
  return (
    <div
      role="img"
      aria-label="Rheii Life in Motion cards moving continuously across the frame"
      className="relative h-full w-full overflow-hidden"
    >
      <div className="life-motion-track flex h-full w-max will-change-transform">
        {[0, 1].map((copyIndex) => (
          <Image
            key={copyIndex}
            src={WEBSITE_ASSETS.product.lifeInMotion}
            alt=""
            aria-hidden="true"
            width={3253}
            height={1762}
            className="h-full w-auto max-w-none shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default function ThisIsRheiiSection() {
  return (
    <section className="relative w-full overflow-hidden bg-parchment">
      <div className="relative z-10 mx-auto w-full max-w-page px-5 py-16 sm:px-8 sm:py-20 md:px-[104px] md:py-28">
        {/* Header */}
        <div className="max-w-[640px] mb-14 md:mb-20">
          <motion.h2
            {...inViewProps}
            variants={fadeUp}
            className="font-serif font-medium text-[30px] sm:text-[38px] md:text-[46px] leading-[1.14] tracking-heading text-ink"
          >
            Dump your thoughts and let <span className="italic text-clay">Rheii</span> handle the
            rest.
          </motion.h2>
        </div>

        {/* Features — set directly on the page, no cards */}
        <motion.div
          variants={staggerParent(0.08)}
          {...inViewProps}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={{
                hidden: { opacity: 0, scale: 0.97, y: 8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.24, ease: [0.215, 0.61, 0.355, 1] },
                },
              }}
              className="flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] mb-6 rounded-[12px] overflow-hidden bg-bone">
                {card.moving ? (
                  <LifeInMotionVisual />
                ) : (
                  <Image src={card.image} alt={card.title} fill className={card.imageClassName} />
                )}
              </div>

              <p className="mono-tag mb-[10px]">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="font-serif font-medium text-[25px] leading-[1.2] tracking-tight-sm text-ink mb-[8px]">
                {card.title}
              </h3>
              <p className="font-editorial text-[17px] leading-[1.5] text-ash max-w-[340px]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
