/**
 * CTA Section — editorial redesign
 *
 * Final conversion moment. Two columns on a bone surface: the Rheii product
 * photo framed on the left, closing headline + App Store CTA on the right.
 * The accent word "think." carries the serif-italic clay treatment.
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, staggerParent, inViewProps, EASE_EDITORIAL } from '@/lib/motion';

const APP_STORE_URL = 'https://apps.apple.com/app/id6769975352';

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-parchment border-t border-stone">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* Copy */}
        <motion.div
          variants={staggerParent(0.12)}
          {...inViewProps}
          className="order-1 lg:order-2 flex flex-col items-start justify-center px-5 sm:px-8 md:px-16 lg:px-20 py-16 md:py-24"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-[20px]">
            Get started
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif font-medium text-[38px] sm:text-[46px] md:text-[54px] leading-[1.08] tracking-heading text-ink max-w-[540px]"
          >
            You already know more than you{' '}
            <span className="italic text-clay">think.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-[24px] font-editorial text-[20px] leading-[1.5] text-ash max-w-[460px]"
          >
            Join a community of people ready to close the gap between where they are and where
            they want to be.
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

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
          className="order-2 lg:order-1 relative h-[340px] lg:h-auto lg:min-h-[560px] border-t lg:border-t-0 lg:border-r border-stone"
        >
          <Image
            src="/images/home/Rheii.png"
            alt="Rheii tote bag"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
