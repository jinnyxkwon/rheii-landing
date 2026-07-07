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

const cards = [
  {
    image: '/images/home/Recurring themes.png',
    title: 'Recurring Themes',
    description: "See the themes you keep returning to, and what they're telling you.",
  },
  {
    image: '/images/home/Life in Motion.png',
    title: 'Your Life in Motion',
    description:
      'As you navigate through life, see where things are growing, easing, or demanding your attention.',
  },
  {
    image: '/images/home/Support Cards.png',
    title: 'Support System',
    description:
      'Receive personalized suggestions and set intentions that resonate. Start building the habits that actually stick.',
  },
];

export default function ThisIsRheiiSection() {
  return (
    <section className="relative w-full overflow-hidden bg-parchment">
      <div className="relative z-10 px-5 sm:px-8 md:px-[104px] py-16 sm:py-20 md:py-28">
        {/* Header */}
        <div className="max-w-[640px] mb-14 md:mb-20">
          <p className="eyebrow mb-[20px]">How it works</p>
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
            <motion.div key={card.title} variants={fadeUp} className="flex flex-col">
              <div className="relative w-full aspect-square mb-6 rounded-[12px] overflow-hidden">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
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
