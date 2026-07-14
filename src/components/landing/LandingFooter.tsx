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
      <div className="flex flex-col items-start justify-between gap-3 px-5 py-4 sm:px-8 md:flex-row md:items-end md:px-[7vw] md:py-[13px]">
        {/* Left Section - Connect with us */}
        <div className="flex flex-col gap-0.5">
          <p
            className="font-body text-[12px] font-medium leading-[18px] text-[#242424]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Connect with us
          </p>
          <div className="flex items-center gap-1">
            <Link
              href="https://www.instagram.com/withrheii/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-11 items-center justify-center rounded-full text-[#73383E] transition-opacity hover:opacity-70"
              aria-label="Instagram"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        {/* Right Section - Copyright and Legal Links */}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
          <p
            className="flex min-h-11 items-center font-body text-[11px] font-normal leading-[16px] text-[#242424]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            © 2026 Rheii.
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-6">
            <Link
              href="/privacy"
              className="inline-flex min-h-11 items-center px-0.5 font-body text-[11px] font-normal leading-[16px] text-[#242424] transition-opacity hover:opacity-70"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="inline-flex min-h-11 items-center px-0.5 font-body text-[11px] font-normal leading-[16px] text-[#242424] transition-opacity hover:opacity-70"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Terms of Use
            </Link>
            <Link
              href="/login"
              className="inline-flex min-h-11 cursor-default select-none items-center px-0.5 font-body text-[11px] font-normal leading-[16px] text-transparent hover:text-transparent"
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
