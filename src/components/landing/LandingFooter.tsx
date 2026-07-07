/**
 * Landing Footer — editorial redesign
 *
 * A deep burgundy footer band (inspired by Les Amis) that closes the warm
 * parchment page with the brand accent at full strength. Serif wordmark +
 * italic tagline on the left; connect + legal columns on the right; mono
 * metadata below a hairline.
 */

'use client';

import Link from 'next/link';
import { Instagram } from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/app/id6769975352';

const linkClass =
  'font-sans text-[14px] leading-[20px] text-parchment/70 hover:text-parchment transition-colors duration-150 ease-editorial';
const labelClass =
  'font-mono text-[12px] uppercase tracking-[0.14em] text-parchment/50 mb-[6px]';

export default function LandingFooter() {
  return (
    <footer className="relative w-full bg-clay text-parchment">
      <div className="px-5 sm:px-8 md:px-[104px] pt-[64px] pb-[40px]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[40px]">
          {/* Left — wordmark + tagline */}
          <div className="flex flex-col gap-[12px] max-w-[360px]">
            <p className="font-serif font-medium text-[28px] leading-[1.1] text-parchment">Rheii</p>
            <p className="font-editorial italic text-[20px] leading-[26px] text-parchment/75">
              Your growth, made visible.
            </p>
          </div>

          {/* Right — link columns */}
          <div className="flex flex-wrap gap-x-[64px] gap-y-[32px]">
            <div className="flex flex-col gap-[10px]">
              <p className={labelClass}>Connect</p>
              <Link
                href="https://www.instagram.com/withrheii/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-[8px] ${linkClass}`}
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.5} />
                Instagram
              </Link>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                App Store
              </a>
            </div>

            <div className="flex flex-col gap-[10px]">
              <p className={labelClass}>Legal</p>
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={linkClass}>
                Terms of Use
              </Link>
              <Link
                href="/login"
                className="font-sans text-[14px] leading-[20px] text-transparent select-none cursor-default py-[1px]"
                aria-label="Login"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Hairline + mono metadata */}
        <div className="mt-[48px] pt-[20px] border-t border-parchment/15">
          <p className="font-mono text-[12px] tracking-[0.02em] text-parchment/45">
            © 2026 Rheii — built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
