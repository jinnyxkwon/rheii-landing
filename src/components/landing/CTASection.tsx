/**
 * CTA (Call-to-Action) Section Component
 *
 * Final section with:
 * - Left side: Image of Rheii tote bag
 * - Right side: Heading, description, referral code question, and Join button
 *
 * Design: Two-column layout with image and text
 * Colors: Light background with dark text
 * Fully responsive
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Right Column - Text Content (order-1 on mobile so it appears above image) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2 flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-12 md:py-20 gap-8"
        >
          {/* Heading */}
          <div className="max-w-[500px]">
            <h2
              className="font-heading font-normal text-[32px] sm:text-[40px] md:text-[48px] leading-[42px] sm:leading-[52px] md:leading-[60px] tracking-[-0.8px] text-black text-center"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              You already know more than you{' '}
              <span className="italic">think.</span>
            </h2>
          </div>

          {/* Description */}
          <p
            className="font-body font-normal text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-center text-gray-700 max-w-[450px]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Join a community of people who are ready to close that gap between where they are and where they want to be.
          </p>

          {/* App Store Button */}
          <a
            href="https://apps.apple.com/app/id6769975352"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-[50px] w-auto"
            />
          </a>
        </motion.div>

        {/* Left Column - Image (order-2 on mobile so it appears below text) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 flex items-center justify-center bg-gray-50 h-[340px] lg:h-screen"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/home/Rheii.png"
              alt="Rheii tote bag"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
