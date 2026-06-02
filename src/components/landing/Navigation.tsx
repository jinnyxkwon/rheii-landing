/**
 * Navigation Component
 *
 * Main navigation bar for the landing page featuring:
 * - Star logo on the left
 * - Navigation links in center (Home, About, Community)
 * - Join Waitlist button on the right
 * - Glass morphism effect with backdrop blur
 *
 * Design: Extracted from Figma (node-id: 159-781)
 * Colors: Glass effect with rgba(255,255,255,0.4) and border
 * Typography: Inter Medium (16px) for nav links, DM Sans Semibold for button
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-auto md:h-[80px] flex items-center justify-between px-4 sm:px-6 md:px-[60px] lg:px-[104px] py-2 md:py-0 border-b border-rheti-secondary-100"
      style={{
        backdropFilter: 'blur(82.5px)',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
      }}
    >
      {/* Layout Container */}
      <div className="flex flex-row items-center justify-between w-full gap-2">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center justify-start w-auto gap-[8px] cursor-pointer min-h-[36px] flex-shrink-0"
        >
          <div className="relative h-[28px] sm:h-[32px] w-[80px] sm:w-[92px]">
            <Image
              src="/images/landing/rheii-logo.png"
              alt="Rheii"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Navigation Items + Waitlist */}
        <div className="hidden md:flex flex-nowrap items-center justify-end gap-2 sm:gap-3 md:gap-[24px] w-full">
          <a
            href="/"
            className="flex items-center gap-1 h-auto md:h-[80px] min-h-[32px] px-1 sm:px-2 cursor-pointer"
          >
            <p className="font-inter font-medium text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-rheti-neutral-600">
              Home
            </p>
          </a>

          <a
            href="/about"
            className="flex items-center gap-1 h-auto md:h-[80px] min-h-[32px] px-1 sm:px-2 cursor-pointer"
          >
            <p className="font-inter font-medium text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-rheti-neutral-600">
              About
            </p>
          </a>

          <a
            href="/community"
            className="flex items-center gap-1 h-auto md:h-[80px] min-h-[32px] px-1 sm:px-2 cursor-pointer"
          >
            <p className="font-inter font-medium text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-rheti-neutral-600">
              Community
            </p>
          </a>
        </div>

        <div className="relative md:hidden flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex items-center justify-center w-[36px] h-[36px] rounded-full border border-rheti-secondary-100 bg-white/80"
          >
            <span className="block w-[16px] h-[2px] bg-[#3a312b] relative">
              <span className="absolute -top-[5px] left-0 w-[16px] h-[2px] bg-[#3a312b]" />
              <span className="absolute top-[5px] left-0 w-[16px] h-[2px] bg-[#3a312b]" />
            </span>
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 top-[44px] w-[180px] rounded-[12px] border border-rheti-secondary-100 bg-white/95 backdrop-blur-md shadow-[0_12px_24px_rgba(0,0,0,0.12)] overflow-hidden">
              <a
                href="/"
                className="block px-4 py-3 text-[14px] leading-[20px] text-rheti-neutral-600 hover:bg-white"
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-4 py-3 text-[14px] leading-[20px] text-rheti-neutral-600 hover:bg-white"
              >
                About
              </a>
              <a
                href="/community"
                className="block px-4 py-3 text-[14px] leading-[20px] text-rheti-neutral-600 hover:bg-white"
              >
                Community
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
