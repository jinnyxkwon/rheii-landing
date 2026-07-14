'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stickerImages = [
  { src: '/images/landing/feedback 1.jpg', alt: 'Feedback 1', w: 260, h: 320 },
  { src: '/images/landing/community 1.png', alt: 'Community 1', w: 280, h: 280 },
  { src: '/images/landing/feedback 2.jpg', alt: 'Feedback 2', w: 240, h: 300 },
  { src: '/images/landing/feedback 3.jpg', alt: 'Feedback 3', w: 250, h: 310 },
];

const stickerPositions = [
  { left: '2%',  top: '5%',  rotate: 0 },
  { left: '25%', top: '45%', rotate: 5 },
  { left: '48%', top: '8%',  rotate: 0 },
  { left: '72%', top: '15%', rotate: 0 },
];

export default function FeedbackSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-12 md:py-16"
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
      <div className="relative z-10 px-5 sm:px-8 md:px-[7vw] mb-8 md:mb-12">
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

      {/* Floating Sticker Images */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto h-[350px] sm:h-[400px] md:h-[450px] px-5 sm:px-8 md:px-[7vw]">
        {stickerImages.map((img, index) => {
          const pos = stickerPositions[index];
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: pos.left,
                top: pos.top,
                width: `${img.w}px`,
              }}
              animate={{
                y: [0, -8 - (index % 3) * 4, 0, 6 + (index % 2) * 3, 0],
                ...(img.src.includes('community') ? { rotate: [pos.rotate, pos.rotate - 1.5, pos.rotate, pos.rotate + 1.5, pos.rotate] } : {}),
              }}
              transition={{
                duration: 4 + index * 0.7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                className={`w-full h-auto ${img.src.includes('community') ? '' : 'rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.18)]'}`}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
