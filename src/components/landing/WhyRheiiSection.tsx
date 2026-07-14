/**
 * Why Rheii Section Component - Community Testimonials
 *
 * Section featuring community quotes with background image
 * - Heading "Hear it from the Community"
 * - Three testimonial cards overlaid on background image
 *
 * Design: Updated to showcase community quotes
 * Colors: Dark overlay with white text
 * Typography: Roboto Serif (H2), DM Sans (Body)
 * Fully responsive
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface Quote {
  text: string;
  source: string;
}

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

const quotes: Quote[] = [
  {
    text: "It helped me get through some of my looped thinking around things like career and hobbies. The questions the system asks are really intuitive and guide you through thoughts that are honestly helpful to sit with.",
    source: "Sam, Singapore"
  },
  {
    text: "It felt cathartic to have somewhere to dump big feelings in the moment.",
    source: "Dave, United Kingdom"
  },
  {
    text: "Overall, I think this is amazing. It really helped prompt me to think more deeply and become more aware of things I hadn't really thought of. The support cards have made my weekends feel more exciting. I've been pushing myself outside my comfort zone.",
    source: "Jane, Singapore"
  }
];

export default function WhyRheiiSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSparkle = (x: number, y: number, size: number, delay: number) => {
      const sparkleEl = document.createElement('div');
      sparkleEl.style.position = 'absolute';
      sparkleEl.style.left = `${x}px`;
      sparkleEl.style.top = `${y}px`;
      sparkleEl.style.pointerEvents = 'none';
      sparkleEl.style.width = `${size}px`;
      sparkleEl.style.height = `${size}px`;
      sparkleEl.style.transform = 'translate(-50%, -50%)';
      sparkleEl.style.background = 'radial-gradient(circle, rgba(64, 14, 26, 1) 0%, rgba(92, 20, 33, 0.95) 30%, rgba(92, 20, 33, 0.65) 55%, transparent 100%)';
      sparkleEl.style.borderRadius = '50%';
      sparkleEl.style.boxShadow = '0 0 18px rgba(92, 20, 33, 0.95), 0 0 40px rgba(64, 14, 26, 0.9)';
      sparkleEl.style.opacity = '0';
      sparkleEl.style.zIndex = '30';
      sparkleEl.style.mixBlendMode = 'screen';

      container.appendChild(sparkleEl);

      const startTime = Date.now();
      const duration = 600;
      const driftX = Math.random() * 24 - 12;
      const driftY = Math.random() * 28 + 10;
      const rotation = Math.random() * 180 - 90;

      const animate = () => {
        const elapsed = Date.now() - startTime - delay;
        if (elapsed < 0) {
          requestAnimationFrame(animate);
          return;
        }

        const progress = Math.min(elapsed / duration, 1);
        sparkleEl.style.opacity = `${Math.max(1 - progress * 1.4, 0)}`;
        sparkleEl.style.transform = `translate(calc(-50% + ${driftX * progress}px), calc(-50% + ${driftY * progress}px)) rotate(${rotation * progress}deg) scale(${1 - progress * 0.45})`;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          sparkleEl.remove();
        }
      };

      setTimeout(() => animate(), delay);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const baseX = e.clientX - rect.left;
      const baseY = e.clientY - rect.top;

      for (let i = 0; i < 6; i += 1) {
        const offsetX = Math.random() * 16 - 8;
        const offsetY = Math.random() * 16 - 8;
        const size = Math.random() < 0.7 ? 6 : 10;
        const delay = Math.random() * 120;
        createSparkle(baseX + offsetX, baseY + offsetY, size, delay);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/Community BG.png"
          alt="Community background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-5 sm:px-8 md:px-[7vw] py-12 sm:py-16 md:py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2
            className="font-heading font-light text-[32px] sm:text-[40px] md:text-[48px] leading-[42px] sm:leading-[52px] md:leading-[60px] tracking-[-0.8px] text-black"
            style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
          >
            Hear it from the Community
          </h2>
        </motion.div>

        {/* Floating Sticker Images */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] mb-16 md:mb-24">
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

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col justify-start p-8 bg-white/70 backdrop-blur-lg rounded-lg border border-white/60"
            >
              {/* Quote Text */}
              <p
                className="font-body font-normal text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-black italic mb-6"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                "{quote.text}"
              </p>

              {/* Quote Source */}
              <p className="font-body font-normal text-[14px] leading-[20px] text-black/80">
                — {quote.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
