/**
 * Founder Section — editorial redesign
 *
 * The founder letter. Set as an editorial spread: a mono eyebrow + DM Sans
 * headline on the left over a hairline-framed portrait, with the letter itself
 * in Cormorant serif on the right — the warmest, most personal use of the serif
 * voice on the whole site.
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, staggerParent, inViewProps } from '@/lib/motion';

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
              <motion.p variants={fadeUp} className="eyebrow mb-[20px]">
                About Rheii
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-serif font-medium text-[40px] sm:text-[48px] leading-[1.05] tracking-heading text-ink"
              >
                Why we{' '}
                <span className="font-editorial italic font-medium text-clay">built</span>{' '}
                this
              </motion.h1>
            </div>
            <motion.div
              variants={fadeUp}
              className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden border border-stone"
            >
              <Image src="/images/team/founder.png" alt="Founders" fill className="object-cover" />
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
              <div className="-ml-2">
                <Image
                  src="/images/team/signature-cropped.png"
                  alt="Jinny & Hannah signature"
                  width={180}
                  height={82}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
