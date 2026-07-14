/**
 * Problem Statement Section Component
 *
 * Scrolling section featuring:
 * - Full-width scenic background image (2.8x viewport height)
 * - Four text statements that fade in as user scrolls
 * - Alternating left/right/center alignment pattern
 * - Subtle golden tint overlay
 *
 * Design: Extracted from Figma (node-id: 64-169)
 * Colors: White text with dual shadows, golden tint
 * Typography: DM Sans Medium (20px)
 * Fully responsive with flexbox and viewport units
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProblemStatementSection() {
  return (
    <section
      className="relative w-full min-h-[110vh] md:h-[130vh] overflow-hidden block"
      style={{ margin: 0, padding: 0, marginBottom: 0 }}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {/* Scenic Background Image */}
        <Image
          src="/images/landing/DSC01425 (1).jpg"
          alt="Scenic view"
          fill
          className="object-cover"
          priority
        />

        {/* Tint Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(105, 79, 11, 0.15)',
          }}
        />
      </div>

      {/* Text Content - Four statements with responsive flexbox layout */}
      <div className="relative z-10 h-full flex flex-col gap-10 md:gap-0 md:justify-between pt-16 sm:pt-20 md:pt-[14vh] pb-12 sm:pb-16 md:pb-[10vh] px-5 sm:px-8 md:px-[7vw]">
        {/* Statement 1 - Top Left */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-extralight text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[34px] text-white w-full max-w-[396px] self-center md:self-start md:ml-[5%] text-center md:text-left"
          style={{
            fontVariationSettings: "'opsz' 14",
          }}
        >
          We all hold a vision of who we want to become-  in our work, our relationships, and our
          sense of self.
        </motion.p>

        {/* Statement 2 - Middle Right */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-extralight text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[34px] text-white w-full max-w-[396px] self-center md:self-end md:mr-[5%] text-center md:text-right"
          style={{
            fontVariationSettings: "'opsz' 14",
          }}
        >
          But it&apos;s hard to grow when you can&apos;t see your own patterns.
        </motion.p>

        {/* Statement 3 - Center */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-extralight text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[34px] text-center text-white w-full max-w-[394px] self-center"
          style={{
            fontVariationSettings: "'opsz' 14",
          }}
        >
          Rheii is a mirror for what&apos;s shaping you over time, so the person you&apos;re
          becoming isn&apos;t just a feeling. It&apos;s something you can actually see.
        </motion.p>

        {/* Statement 4 - Bottom Center */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-extralight text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[34px] text-center text-white w-full max-w-[447px] self-center"
          style={{
            fontVariationSettings: "'opsz' 14",
          }}
        ></motion.p>
      </div>
    </section>
  );
}
