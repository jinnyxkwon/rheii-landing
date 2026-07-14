'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const feedbackImages = [
  {
    src: '/images/landing/feedback 1.jpg',
    alt: 'Feedback 1',
    width: 400,
    height: 500,
  },
  {
    src: '/images/landing/feedback 2.jpg',
    alt: 'Feedback 2',
    width: 400,
    height: 500,
  },
  {
    src: '/images/landing/feedback 3.jpg',
    alt: 'Feedback 3',
    width: 400,
    height: 500,
  },
];

export default function FeedbackSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-32"
      style={{ backgroundColor: '#EFEFEE' }}
    >
      {/* Title */}
      <div className="px-5 sm:px-8 md:px-[7vw] mb-16 md:mb-24">
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

      {/* Floating Image Cards */}
      <div className="relative w-full max-w-[1200px] mx-auto h-[400px] sm:h-[500px] md:h-[600px] px-5 sm:px-8 md:px-[7vw]">
        {feedbackImages.map((img, index) => {
          const positions = [
            { left: '5%', top: '10%', rotate: -6 },
            { left: '35%', top: '5%', rotate: 3 },
            { left: '65%', top: '15%', rotate: -2 },
          ];
          const pos = positions[index];

          return (
            <motion.div
              key={index}
              className="absolute w-[160px] sm:w-[200px] md:w-[240px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              style={{
                left: pos.left,
                top: pos.top,
              }}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              animate={{
                y: [0, -14, 0, 10, 0],
                rotate: [pos.rotate, pos.rotate - 1.5, pos.rotate, pos.rotate + 1.5, pos.rotate],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto"
                />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
