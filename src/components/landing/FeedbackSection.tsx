'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FeedbackSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/Community BG.png"
          alt="Community background"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Title */}
      <div className="relative z-10 px-5 sm:px-8 md:px-[7vw]">
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
    </section>
  );
}
