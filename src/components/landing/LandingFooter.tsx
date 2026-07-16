/**
 * Landing Footer Component
 *
 * Footer section featuring:
 * - "Connect with us" with social media icons (Instagram, LinkedIn)
 * - Copyright notice and legal links (Privacy Policy, Terms of Use)
 *
 * Design: Extracted from Figma (node-id: 159-1267)
 * Colors: Neutral/50 background (#F6F6F6), Neutral/500 text (#242424), Primary/500 icons (#73383E)
 * Typography: DM Sans (B2 Medium 16px/24px, B3 Regular 14px/21px)
 * Layout: Flexbox with left-aligned social and right-aligned legal links
 */

'use client';

import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function LandingFooter() {
  return (
    <footer className="relative w-full bg-[#F6F6F6]">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 px-5 sm:px-8 md:px-[7vw] py-8 md:pt-[48px] md:pb-[40px]">
        {/* Left Section - Connect with us */}
        <div className="flex flex-col gap-2">
          <p
            className="font-body font-medium text-[16px] leading-[24px] text-[#242424]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Connect with us
          </p>
          <a
            href="mailto:hello@rheii.com"
            className="font-body font-normal text-[14px] leading-[21px] text-[#242424] hover:opacity-70 transition-opacity"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            hello@rheii.com
          </a>
          <div className="flex gap-2 items-center">
            <Link
              href="https://www.instagram.com/withrheii/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#73383E] hover:opacity-70 transition-opacity p-2 rounded-full"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        {/* Right Section - Copyright and Legal Links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-start sm:items-center">
          <p
            className="font-body font-normal text-[14px] leading-[21px] text-[#242424]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            © 2026 Rheii.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-10 items-center">
            <Link
              href="/privacy"
              className="font-body font-normal text-[14px] leading-[21px] text-[#242424] hover:opacity-70 transition-opacity py-2 px-1"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-body font-normal text-[14px] leading-[21px] text-[#242424] hover:opacity-70 transition-opacity py-2 px-1"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Terms of Use
            </Link>
            <Link
              href="/login"
              className="font-body font-normal text-[14px] leading-[21px] text-transparent select-none cursor-default hover:text-transparent py-2 px-1"
              style={{ fontVariationSettings: "'opsz' 14" }}
              aria-label="Login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
