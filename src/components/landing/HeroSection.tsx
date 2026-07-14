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

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, staggerParent, EASE_EDITORIAL } from '@/lib/motion';
import { WEBSITE_ASSETS } from '@/lib/websiteAssets';

const APP_STORE_URL = 'https://apps.apple.com/app/id6769975352';

const snapshots = [
  {
    src: WEBSITE_ASSETS.themeCards.relationships,
    alt: 'Rheii relationship insight',
    className: 'left-0 top-[13%] w-[52.8%] origin-left',
    entranceOffset: { x: -18, y: 12 },
    sourceSize: { width: 962, height: 409 },
    crop: { x: 36, y: 22, width: 884, height: 368 },
  },
  {
    src: WEBSITE_ASSETS.themeCards.work,
    alt: 'Rheii work insight',
    className: 'right-0 top-[35.5%] w-[55.2%] origin-right',
    entranceOffset: { x: 18, y: 12 },
    sourceSize: { width: 1012, height: 554 },
    crop: { x: 84, y: 48, width: 892, height: 480 },
  },
  {
    src: WEBSITE_ASSETS.themeCards.selfIdentity,
    alt: 'Rheii self and identity insight',
    className: 'left-[2%] bottom-[16%] w-[50.4%] origin-left',
    entranceOffset: { x: -18, y: 12 },
    sourceSize: { width: 812, height: 423 },
    crop: { x: 20, y: 10, width: 696, height: 376 },
  },
] as const;

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-parchment">
      <div className="relative z-10 min-h-[100dvh] flex items-center">
        <div className="mx-auto grid w-full max-w-page grid-cols-1 items-center gap-10 px-5 pb-[48px] pt-[96px] sm:px-8 md:px-[104px] lg:grid-cols-[1fr_0.9fr] lg:gap-8 lg:py-[96px]">
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
              Join early members learning to navigate life from the inside out.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-[32px]">
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
            </motion.div>
          </motion.div>

          {/* Right — product render with soft, sequential insight reveals */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_EDITORIAL, delay: 0.05 }}
            className="relative isolate mx-auto flex w-full max-w-[620px] items-center justify-center lg:justify-end"
          >
            <Image
              src={WEBSITE_ASSETS.product.hero}
              alt="A quiet moment of reflection with Rheii"
              width={4419}
              height={6250}
              className="relative object-contain h-auto w-full max-w-[520px] max-h-[680px]"
              priority
            />

            {snapshots.map((snapshot, index) => (
              <motion.div
                key={snapshot.src}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.965,
                        x: snapshot.entranceOffset.x,
                        y: snapshot.entranceOffset.y,
                      }
                }
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.48,
                  delay: shouldReduceMotion ? 0 : 0.2 + index * 0.11,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
                className={`pointer-events-none absolute hidden select-none overflow-hidden rounded-[10px] sm:block ${snapshot.className}`}
                style={{ aspectRatio: `${snapshot.crop.width} / ${snapshot.crop.height}` }}
              >
                <Image
                  src={snapshot.src}
                  alt={snapshot.alt}
                  width={snapshot.sourceSize.width}
                  height={snapshot.sourceSize.height}
                  className="absolute max-w-none"
                  style={{
                    width: `${(snapshot.sourceSize.width / snapshot.crop.width) * 100}%`,
                    height: `${(snapshot.sourceSize.height / snapshot.crop.height) * 100}%`,
                    left: `${(-snapshot.crop.x / snapshot.crop.width) * 100}%`,
                    top: `${(-snapshot.crop.y / snapshot.crop.height) * 100}%`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
