/**
 * Why Rheii Section — community testimonials
 *
 * A close adaptation of the original website: one softly washed community
 * photo, a centered serif heading, and three aligned testimonial cards.
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, inViewProps } from '@/lib/motion';
import { WEBSITE_ASSETS } from '@/lib/websiteAssets';

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
    <section className="relative isolate min-h-[640px] w-full overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-[104px] md:py-20">
      <Image
        src={WEBSITE_ASSETS.communityBackground}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 select-none object-cover object-center"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-white/75" />

      <div className="relative z-10 mx-auto w-full max-w-page">
        <motion.h2
          {...inViewProps}
          variants={fadeUp}
          className="text-center font-serif text-[38px] font-medium leading-[1.08] tracking-heading text-ink sm:text-[48px] md:text-[56px]"
        >
          Hear it from the Community
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 sm:mt-16 md:grid-cols-3 md:gap-8">
          {quotes.map((quote) => (
            <figure
              key={quote.source}
              className="flex min-h-[300px] flex-col rounded-[12px] bg-white/90 px-7 py-8 shadow-[0_0_0_1px_rgba(36,36,36,0.04)] backdrop-blur-[1px] sm:min-h-[320px] sm:p-9"
            >
              <blockquote className="font-editorial text-[18px] italic leading-[1.65] text-ink sm:text-[19px]">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-auto pt-8 font-editorial text-[15px] leading-[1.4] text-ink/70">
                — {quote.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
