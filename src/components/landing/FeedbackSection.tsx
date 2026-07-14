'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const feedbackImages = [
  '/images/landing/feedback 1.jpg',
  '/images/landing/feedback 2.jpg',
  '/images/landing/feedback 3.jpg',
  '/images/landing/feedback 4.jpg',
  '/images/landing/feedback 5.jpg',
  '/images/landing/feedback 6.jpg',
];

// Duplicate the set so the marquee can loop seamlessly (shift by -50%).
const marquee = [...feedbackImages, ...feedbackImages];

export default function FeedbackSection() {
  return (
    <section className="relative w-full overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/Community BG.png"
          alt="Community background"
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <div className="relative z-10 px-5 sm:px-8 md:px-[7vw] mb-10 md:mb-14">
        <motion.h2
          className="font-heading font-normal text-[32px] sm:text-[40px] md:text-[48px] leading-[40px] sm:leading-[50px] md:leading-[58px] tracking-[-0.8px] text-center text-black"
          style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Hear it from the Community
        </motion.h2>
      </div>

      {/* Banner carousel */}
      <div className="relative z-10 w-full overflow-hidden">
        <div className="flex w-max gap-5 sm:gap-6 animate-[marquee_34s_linear_infinite] hover:[animation-play-state:paused]">
          {marquee.map((src, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={index}
              src={src}
              alt={`Community feedback ${(index % feedbackImages.length) + 1}`}
              className="shrink-0 h-[130px] sm:h-[160px] w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
