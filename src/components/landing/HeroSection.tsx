/**
 * Hero Section — editorial redesign
 *
 * Left-aligned display headline (DM Sans, weight 400, tight tracking) with a
 * serif-italic clay accent word — the one place the editorial serif and
 * the accent color meet. The App Store badge is the primary CTA, and the
 * product render is presented on a flat "paper stage" with a hairline border
 * and warm elevation.
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, staggerParent, EASE_EDITORIAL } from '@/lib/motion';
import { WEBSITE_ASSETS } from '@/lib/websiteAssets';

const APP_STORE_URL = 'https://apps.apple.com/app/id6769975352';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-parchment">
      <div className="relative z-10 min-h-[100dvh] flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] items-center gap-10 lg:gap-8 px-5 sm:px-8 md:px-[104px] pt-[96px] pb-[48px] lg:py-[96px]">
          {/* Left — copy */}
          <motion.div
            variants={staggerParent(0.12, 0.05)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start max-w-[560px]"
          >
            <motion.h1
              variants={fadeUp}
              className="font-serif font-medium text-[52px] sm:text-[68px] md:text-[80px] leading-[1.0] tracking-display text-ink"
            >
              Your growth,
              <br />
              made <span className="italic text-clay">visible.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-[24px] font-editorial text-[20px] sm:text-[22px] leading-[1.5] text-ash max-w-[460px]"
            >
              Join early members learning to navigate life from the inside out — with a journal that
              reflects your patterns back to you over time.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-[32px] flex flex-wrap items-center gap-x-[24px] gap-y-[16px]"
            >
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-200 ease-editorial hover:-translate-y-[1px]"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-[46px] w-auto"
                />
              </a>
              <a href="/community" className="link-accent font-sans text-[15px] leading-[20px]">
                See the community →
              </a>
            </motion.div>
          </motion.div>

          {/* Right — product render on a paper stage */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_EDITORIAL, delay: 0.05 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <Image
              src={WEBSITE_ASSETS.product.recurringThemes}
              alt="Recurring themes in the Rheii app"
              width={1206}
              height={1745}
              className="relative object-contain h-auto w-full max-w-[520px] max-h-[680px]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
