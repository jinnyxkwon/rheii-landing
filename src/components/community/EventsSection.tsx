/**
 * Events Section — editorial redesign
 *
 * Upcoming IRL events. A DM Sans headline leads into a two-column editorial
 * block: a hairline-framed event image beside serif prose and a clay accent
 * link out to the ticket page.
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, staggerParent, inViewProps } from '@/lib/motion';
import { WEBSITE_ASSETS } from '@/lib/websiteAssets';

export default function EventsSection() {
  return (
    <section className="w-full bg-parchment pt-[128px] pb-[40px] md:pt-[160px] px-5 sm:px-8 md:px-[104px]">
      <motion.div variants={staggerParent(0.1)} {...inViewProps} className="max-w-page mx-auto">
        <motion.h2
          variants={fadeUp}
          className="font-serif font-medium text-[32px] sm:text-[42px] leading-[1.12] tracking-heading text-ink mb-[48px] sm:mb-[64px] max-w-[560px]"
        >
          Join us <span className="font-editorial italic font-medium text-clay">IRL</span> this July
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start"
        >
          <div className="relative w-full sm:w-[420px] shrink-0 rounded-[16px] overflow-hidden border border-stone bg-bone aspect-[7/4]">
            <Image
              src={WEBSITE_ASSETS.themeCards.relationships}
              alt="Rheii insight about relationships and community"
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>

          <div className="flex flex-col gap-4 pt-1 max-w-[540px]">
            <p className="mono-tag">Singapore · July 19</p>
            <h3 className="font-serif font-medium text-[26px] sm:text-[30px] leading-[1.2] tracking-tight-sm text-ink">
              Part 2: Grounded in Motion
            </h3>
            <div className="font-editorial text-[19px] leading-[1.55] text-ink/85 space-y-4">
              <p>
                We often think of grounding as standing completely still. But life rarely stops
                moving, and neither do we.
              </p>
              <p>
                Whether you&apos;re navigating a change, managing stress, or seeking peace amidst
                the daily noise of your own expectations, the real challenge isn&apos;t finding a
                static calm — it&apos;s learning how to stay anchored while you&apos;re in motion.
              </p>
              <p>
                Rheii was built to help you capture this fluidity. Our most important thoughts
                don&apos;t happen in a vacuum; they repeat, evolve, and shape how we move forward.
              </p>
            </div>
            <a
              href="https://luma.com/jddf8ppm"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent mt-2 inline-flex items-center gap-1.5 font-sans text-[15px]"
            >
              Join us →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
