/**
 * Why Rheii Section — editorial redesign (community testimonials)
 *
 * Quotes are set as editorial serif pull-quotes (Cormorant italic) — the ideal
 * home for the serif voice — with sources in mono. Cards flattened to
 * hairline-bordered paper over the softened community photo.
 */

'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerParent, inViewProps } from '@/lib/motion';
import PhotoMarquee from './PhotoMarquee';

const communityPhotos = [
  { src: '/images/community/dsc01267.jpg', alt: 'Rheii community gathering' },
  { src: '/images/community/dsc01494.jpg', alt: 'Rheii community gathering' },
  { src: '/images/community/dsc01429.jpg', alt: 'Rheii community gathering' },
  { src: '/images/community/dsc01620.jpg', alt: 'Rheii community gathering' },
  { src: '/images/community/dsc01496.jpg', alt: 'Rheii community gathering' },
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
  return (
    <section className="relative w-full overflow-hidden bg-parchment py-16 sm:py-20 md:py-28">
      {/* Header */}
      <div className="px-5 sm:px-8 md:px-[104px]">
        <motion.div {...inViewProps} variants={fadeUp} className="max-w-[640px]">
          <p className="eyebrow mb-[20px]">From the community</p>
          <h2 className="font-serif font-medium text-[30px] sm:text-[38px] md:text-[46px] leading-[1.14] tracking-heading text-ink">
            Hear it from the people using it
          </h2>
        </motion.div>
      </div>

      {/* Community photo marquee — edge to edge */}
      <div className="my-12 md:my-16">
        <PhotoMarquee photos={communityPhotos} speed={70} />
      </div>

      {/* Quotes — set directly on the page, divided by a hairline rule */}
      <div className="px-5 sm:px-8 md:px-[104px]">
        <motion.div
          variants={staggerParent(0.1)}
          {...inViewProps}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10"
        >
          {quotes.map((quote) => (
            <motion.figure
              key={quote.source}
              variants={fadeUp}
              className="flex flex-col border-t border-stone pt-6"
            >
              <blockquote className="font-editorial italic text-[21px] leading-[1.5] text-ink mb-6">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <figcaption className="mono-tag mt-auto">{quote.source}</figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
