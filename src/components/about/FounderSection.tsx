/**
 * Founder Section
 *
 * A close adaptation of the supplied reference: centered introduction followed
 * by two large, widely spaced portrait cards. Hannah's card intentionally keeps
 * a fixed-aspect placeholder until her final portrait is available.
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, staggerParent } from '@/lib/motion';
import { WEBSITE_ASSETS } from '@/lib/websiteAssets';

const founders = [
  {
    name: 'Jinny',
    role: 'Co-Founder',
    image: WEBSITE_ASSETS.founderPortrait,
  },
  {
    name: 'Hannah',
    role: 'Co-Founder',
    image: null,
  },
] as const;

export default function FounderSection() {
  return (
    <section className="relative w-full overflow-x-clip bg-[#F5F5F4] px-5 pb-16 pt-[112px] sm:px-8 sm:pb-20 sm:pt-[124px] md:px-[7vw] md:pb-12 md:pt-[88px]">
      <motion.div
        variants={staggerParent(0.1)}
        initial={false}
        animate="visible"
        className="mx-auto w-full max-w-[800px]"
      >
        <motion.h1
          variants={fadeUp}
          className="mx-auto max-w-[700px] text-center font-serif text-[28px] font-medium leading-[1.08] tracking-heading text-ink sm:text-[30px]"
        >
          Made by two women learning how to grow without a clear blueprint.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-8 max-w-[720px] text-center font-editorial text-[16px] leading-[1.35] text-ash sm:text-[17px] md:text-[16px]"
        >
          Born from years of living between cultures, careers, and seasons of change, Rheii grew
          out of our shared experience. We arrived here from different directions, but came
          together around a shared belief: growth does not have to be solitary, and becoming is
          richer when it is witnessed.
        </motion.p>

        <div className="mt-8 flex flex-col gap-10 sm:mt-10 md:mt-8 md:flex-row md:items-start md:justify-between md:gap-12">
          {founders.map((founder) => (
            <motion.figure
              key={founder.name}
              variants={fadeUp}
              className="w-full rounded-[16px] bg-white p-3 shadow-[0_0_0_1px_rgba(36,36,36,0.12)] md:w-[min(38vw,40vh,290px)] md:flex-none"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[13px] bg-[#ECE9E3]">
                {founder.image ? (
                  <Image
                    src={founder.image}
                    alt={`${founder.name}, Co-Founder of Rheii`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 767px) calc(100vw - 64px), 290px"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label="Placeholder for Hannah's portrait"
                    className="relative flex h-full w-full select-none flex-col items-center justify-center overflow-hidden text-center"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(115,56,62,0.13),transparent_62%)]"
                    />
                    <span className="relative font-editorial text-[72px] italic leading-none text-clay/45 md:text-[clamp(64px,12vh,90px)]">
                      H
                    </span>
                    <span className="relative mt-3 font-mono text-[8px] uppercase tracking-[0.18em] text-ash">
                      Photo coming soon
                    </span>
                  </div>
                )}
              </div>

              <figcaption className="min-h-[64px] px-1 pb-1 pt-3">
                <p className="font-serif text-[20px] font-medium leading-[1.1] tracking-tight-sm text-ink">
                  {founder.name}
                </p>
                <p className="mono-tag mt-1 uppercase tracking-[0.08em]">
                  {founder.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
