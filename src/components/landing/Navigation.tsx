/**
 * Navigation — full-width bar
 *
 * Flat, full-width header: transparent at the top of the page, settling to a
 * translucent parchment surface with a single hairline bottom rule once
 * scrolled. Wordmark left, links centered, burgundy Download button right.
 */

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const APP_STORE_URL = 'https://apps.apple.com/app/id6769975352';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/community', label: 'Community' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center border-b transition-colors duration-150 ${
        scrolled
          ? 'border-stone bg-parchment/85 backdrop-blur-md'
          : 'border-transparent bg-parchment/0'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.1)' }}
    >
      <div className="relative mx-auto flex w-full max-w-page items-center justify-between px-5 sm:px-8 md:px-[104px]">
        {/* Wordmark */}
        <a href="/" className="flex items-center flex-shrink-0" aria-label="Rheii home">
          <div className="relative h-[26px] w-[80px] sm:h-[28px] sm:w-[88px]">
            <Image
              src="/images/landing/rheii-logo.png"
              alt="Rheii"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Links — centered */}
        <div className="hidden md:flex items-center gap-[32px] absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[14px] leading-[20px] text-ink/70 hover:text-ink transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center font-sans text-[14px] leading-[20px] text-parchment bg-clay rounded-full px-[18px] py-[9px] hover:bg-[#5f2d33] transition-colors duration-150"
        >
          Download
        </a>

        {/* Mobile menu button */}
        <div className="relative md:hidden flex items-center">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-stone bg-bone"
          >
            <span className="block w-[16px] h-[1.5px] bg-ink relative">
              <span className="absolute -top-[5px] left-0 w-[16px] h-[1.5px] bg-ink" />
              <span className="absolute top-[5px] left-0 w-[16px] h-[1.5px] bg-ink" />
            </span>
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 top-[50px] w-[190px] rounded-[12px] border border-stone bg-parchment overflow-hidden">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 font-sans text-[14px] leading-[20px] text-ink/80 hover:bg-bone transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 font-sans text-[14px] leading-[20px] text-clay hover:bg-bone transition-colors border-t border-stone"
              >
                Download the app →
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
