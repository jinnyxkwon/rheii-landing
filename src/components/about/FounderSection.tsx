/**
 * Founder Section — editorial redesign
 *
 * The founder letter. Set as an editorial spread: a DM Sans headline on the
 * left over a hairline-framed portrait, with the letter itself in Cormorant
 * serif on the right — the warmest, most personal use of the serif voice on the
 * whole site.
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, staggerParent, inViewProps } from '@/lib/motion';
import { WEBSITE_ASSETS } from '@/lib/websiteAssets';

export default function FounderSection() {
  return (
    <section className="relative w-full overflow-x-clip bg-parchment">
      <div className="relative w-full max-w-page mx-auto px-5 sm:px-8 md:px-[104px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 pt-[140px] lg:pt-[180px] pb-[100px]">
          {/* Left — headline + portrait */}
          <motion.div
            variants={staggerParent(0.12)}
            {...inViewProps}
            className="flex flex-col gap-10"
          >
            <div>
              <motion.h1
                variants={fadeUp}
                className="font-serif font-medium text-[40px] sm:text-[48px] leading-[1.05] tracking-heading text-ink"
              >
                Why we <span className="font-editorial italic font-medium text-clay">built</span>{' '}
                this
              </motion.h1>
            </div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[16px] border border-stone">
                <Image
                  src={WEBSITE_ASSETS.founderPortrait}
                  alt="Rheii founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                role="img"
                aria-label="Placeholder for Hannah's portrait"
                className="relative flex aspect-[3/4] select-none flex-col items-center justify-center overflow-hidden rounded-[16px] border border-stone bg-[#eeeae2] text-center"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(139,69,73,0.14),transparent_62%)]"
                />
                <span className="relative font-editorial text-[64px] italic leading-none text-clay/55 sm:text-[80px]">
                  H
                </span>
                <span className="relative mt-4 font-serif text-[18px] font-medium text-ink">
                  Hannah
                </span>
                <span className="relative mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-ash">
                  Photo coming soon
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — the letter, in editorial serif */}
          <motion.div {...inViewProps} variants={fadeUp} className="flex items-start lg:pt-[60px]">
            <div className="font-editorial text-[20px] sm:text-[21px] leading-[1.6] text-ink/90 space-y-7 max-w-[560px]">
              <p>
                Born from years of living between cultures, careers, and seasons of change, Rheii
                grew out of our shared experience of learning how to grow without a clear blueprint.
              </p>
              <p>
                We arrived here from different directions, each learning that growth is not about
                speed, but about alignment. What brought us together was a shared belief that growth
                does not have to be solitary, and that becoming is richer when it is witnessed.
              </p>
              <p>
                This is a space for those navigating life individually, but alongside others — a
                village for reflection, movement, and steady momentum. Wherever you are in your
                journey, you&apos;re invited to walk it with us, and with each other.
              </p>
              <p className="italic text-clay">With intention,</p>
              <p className="font-editorial italic text-[24px] text-ink">Jinny &amp; Hannah</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
