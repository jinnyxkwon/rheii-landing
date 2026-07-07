/**
 * Problem Statement Section — editorial redesign
 *
 * Kept cinematic: a full-bleed scenic asset with statements that fade in as you
 * scroll, alternating left / right / center. Recolored to a warm ink wash for
 * legibility, set in DM Sans with tight tracking, and the word "Rheii" carries
 * the serif-italic clay accent used across the site.
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { EASE_EDITORIAL } from '@/lib/motion';

const reveal = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.3, ease: EASE_EDITORIAL },
} as const;

const statementClass =
  'font-serif font-medium text-[22px] sm:text-[26px] md:text-[30px] leading-[1.32] tracking-tight-sm text-parchment w-full max-w-[460px]';

export default function ProblemStatementSection() {
  return (
    <section
      className="relative w-full min-h-[110vh] md:h-[130vh] overflow-hidden block"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Scenic background */}
      <div className="absolute inset-0">
        <Image
          src="/images/landing/home-about-fastmoving.jpg"
          alt="Scenic view"
          fill
          className="object-cover"
          priority
        />
        {/* Warm ink wash for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(36,32,25,0.42) 0%, rgba(36,32,25,0.20) 40%, rgba(36,32,25,0.42) 100%)',
          }}
        />
      </div>

      {/* Statements */}
      <div className="relative z-10 h-full flex flex-col gap-12 md:gap-0 md:justify-between py-16 md:py-[12vh] px-5 sm:px-8 md:px-[104px]">
        <motion.p {...reveal} className={`${statementClass} self-center md:self-start text-center md:text-left`}>
          We all hold a vision of who we want to become — in our work, our relationships,
          and our sense of self.
        </motion.p>

        <motion.p {...reveal} className={`${statementClass} self-center md:self-end text-center md:text-right`}>
          But it&apos;s hard to grow when you can&apos;t see your own patterns.
        </motion.p>

        <motion.p {...reveal} className={`${statementClass} self-center text-center`}>
          <span className="font-editorial italic font-medium text-clay">Rheii</span> is a
          mirror for what&apos;s shaping you over time — so the person you&apos;re becoming
          isn&apos;t just a feeling. It&apos;s something you can actually see.
        </motion.p>
      </div>
    </section>
  );
}
