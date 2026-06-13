/**
 * Hero Section Component
 *
 * Top section of the Rheii landing page featuring:
 * - Background image with color tint overlay
 * - Left and right edge blur (15% width each, gradient to transparent center)
 * - Flexbox-centered "Rheii" branding and subtitle
 *
 * Design: Extracted from Figma (node-id: 46-3)
 * Colors: White text with shadow, brown tint overlay
 * Typography: Roboto Serif (H1 Italic, H4 Regular)
 * Responsive design with modern CSS techniques
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // #region agent log
    if (sectionRef.current && bgRef.current && contentRef.current) {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const bgRect = bgRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const innerRect = innerRef.current?.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const computedSection = window.getComputedStyle(sectionRef.current);
      const computedBg = window.getComputedStyle(bgRef.current);
      fetch('http://127.0.0.1:7243/ingest/8bed6cbb-debd-473a-a110-c7a68df1bf1b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: 'HeroSection.tsx:useEffect',
          message: 'Hero layout snapshot',
          data: {
            scrollY: window.scrollY,
            sectionTop: sectionRect.top,
            sectionHeight: sectionRect.height,
            sectionMinHeight: computedSection.minHeight,
            sectionPaddingTop: computedSection.paddingTop,
            contentTop: contentRect.top,
            contentHeight: contentRect.height,
            innerTop: innerRect?.top,
            innerHeight: innerRect?.height,
            bgTop: bgRect.top,
            bgHeight: bgRect.height,
            bgPosition: computedBg.backgroundPosition,
            viewportHeight,
          },
          timestamp: Date.now(),
          sessionId: 'debug-session',
          runId: 'run2',
          hypothesisId: 'H1',
        }),
      }).catch(() => {});
    }
    // #endregion
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[100dvh] overflow-hidden" style={{ backgroundColor: '#f7f6f4' }}>
      {/* Hero Content */}
      <div
        ref={contentRef}
        className="relative z-10 min-h-[100dvh] flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-0">
          {/* Left Column - Text Content */}
          <div className="px-6 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-28 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="flex flex-col gap-[8px] items-center text-black max-w-[500px]"
            >
              <h1
                className="font-heading font-extralight text-[36px] sm:text-[41px] md:text-[45px] leading-[54px] sm:leading-[63px] md:leading-[68px] text-center"
                style={{
                  transform: 'scaleX(0.985)',
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                Your growth made visible.
              </h1>
              <p className="text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-center max-w-[400px] mt-[16px] font-light opacity-90">
                Join other early members who are learning to navigate life from the inside out.
              </p>
              <a
                href="https://apps.apple.com/app/id6769975352"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[24px] inline-block"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-[44px] w-auto"
                />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <div ref={bgRef} className="relative h-full w-full flex items-center justify-center lg:items-start lg:pr-8 lg:pt-32 pb-12 lg:pb-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Image
                src="/images/home/hero page image.png"
                alt="Rheii app interface"
                width={600}
                height={1100}
                className="object-contain h-auto"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
