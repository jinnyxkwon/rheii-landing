/**
 * Why Rheii Section — editorial redesign (community testimonials)
 *
 * Community feedback moves in a continuous strip, followed by editorial
 * speech bubbles that pop in quickly as a group. The fixed bubble layout keeps
 * the motion expressive without shifting surrounding content.
 */

'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, inViewProps } from '@/lib/motion';
import { WEBSITE_ASSETS } from '@/lib/websiteAssets';
import PhotoMarquee from './PhotoMarquee';

const communityFeedback = [
  { src: WEBSITE_ASSETS.testimonials.firstEntry, alt: 'Member feedback after a first Rheii entry' },
  { src: WEBSITE_ASSETS.testimonials.amazing, alt: 'Member describing Rheii as amazing' },
  {
    src: WEBSITE_ASSETS.testimonials.loopedThinking,
    alt: 'Member feedback about working through looped thinking with Rheii',
  },
];

interface Quote {
  text: string;
  source: string;
}

const quotes: Quote[] = [
  {
    text: 'It helped me get through some of my looped thinking around things like career and hobbies. The questions the system asks are really intuitive and guide you through thoughts that are honestly helpful to sit with.',
    source: 'Sam, Singapore',
  },
  {
    text: 'It felt cathartic to have somewhere to dump big feelings in the moment.',
    source: 'Dave, United Kingdom',
  },
  {
    text: "Overall, I think this is amazing. It really helped prompt me to think more deeply and become more aware of things I hadn't thought of. The support cards have made my weekends feel more exciting — I've been pushing myself outside my comfort zone.",
    source: 'Jane, Singapore',
  },
];

export default function WhyRheiiSection() {
  const shouldReduceMotion = useReducedMotion();
  const bubbleVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, scale: 0.96, y: 8 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.24, ease: [0.215, 0.61, 0.355, 1] as const },
        },
      };

  return (
    <section className="relative w-full overflow-hidden bg-parchment py-16 sm:py-20 md:py-28">
      {/* Header */}
      <div className="mx-auto w-full max-w-page px-5 sm:px-8 md:px-[104px]">
        <motion.div {...inViewProps} variants={fadeUp} className="max-w-[640px]">
          <h2 className="font-serif font-medium text-[30px] sm:text-[38px] md:text-[46px] leading-[1.14] tracking-heading text-ink">
            Hear it from the people using it
          </h2>
        </motion.div>
      </div>

      {/* Community photo marquee — edge to edge */}
      <div className="my-12 md:my-16">
        <PhotoMarquee photos={communityFeedback} speed={70} />
      </div>

      {/* Quotes — staggered speech bubbles */}
      <div className="mx-auto w-full max-w-page px-5 sm:px-8 md:px-[104px]">
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
          }}
          {...inViewProps}
          className="grid grid-cols-1 items-start gap-x-7 gap-y-8 md:grid-cols-3 md:pb-10"
        >
          {quotes.map((quote, index) => (
            <motion.figure
              key={quote.source}
              variants={bubbleVariants}
              className={`relative flex flex-col rounded-[24px] border border-stone bg-bone p-6 sm:p-7 ${
                index === 1 ? 'md:mt-10' : index === 2 ? 'md:mt-4' : ''
              }`}
            >
              <blockquote className="mb-6 font-editorial text-[19px] italic leading-[1.5] text-ink sm:text-[20px]">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <figcaption className="mono-tag mt-auto">{quote.source}</figcaption>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[9px] left-8 h-4 w-4 rotate-45 border-b border-r border-stone bg-bone"
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
