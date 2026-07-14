/**
 * CTA Section — editorial redesign
 *
 * Final conversion moment. The centered closing headline and App Store CTA sit
 * on a quiet bone surface. The accent word "think." carries the serif-italic
 * clay treatment.
 */

'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerParent, inViewProps } from '@/lib/motion';

const APP_STORE_URL = 'https://apps.apple.com/app/id6769975352';

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-parchment border-t border-stone">
      <motion.div
        variants={staggerParent(0.12)}
        {...inViewProps}
        className="mx-auto flex max-w-[760px] flex-col items-center px-5 py-20 text-center sm:px-8 md:py-28"
      >
        <motion.h2
          variants={fadeUp}
          className="max-w-[680px] text-balance font-serif text-[38px] font-medium leading-[1.08] tracking-heading text-ink sm:text-[46px] md:text-[58px]"
        >
          You already know more than you <span className="italic text-clay">think.</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-[24px] max-w-[520px] font-editorial text-[20px] leading-[1.5] text-ash"
        >
          Join a community of people ready to close the gap between where they are and where they
          want to be.
        </motion.p>
        <motion.a
          variants={fadeUp}
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[32px] inline-block transition-transform duration-200 ease-editorial hover:-translate-y-[1px]"
        >
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="h-[50px] w-auto"
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
