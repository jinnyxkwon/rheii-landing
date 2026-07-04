/**
 * Events Section Component
 *
 * Highlights upcoming Rheii IRL events after the main community hero section.
 * Features a left-aligned event image with description copy on the right.
 *
 * Design: Matches community page aesthetic — warm off-white (#fffdfa) background,
 * Roboto Serif heading, DM Sans body text.
 */

import Image from 'next/image';

export default function EventsSection() {
  return (
    <section className="w-full bg-[#fffdfa] pt-[80px] pb-[24px] md:pt-[120px] md:pb-[40px] px-5 sm:px-8 md:px-[104px]">
      {/* Section label */}
      <p
        className="font-body text-[13px] uppercase tracking-[2px] text-rheti-primary-500 text-center mb-[16px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        Upcoming Events
      </p>

      {/* Heading */}
      <h2
        className="font-heading font-light text-[32px] sm:text-[40px] leading-[44px] sm:leading-[56px] tracking-[-0.8px] text-rheti-neutral-600 text-center mb-[48px] sm:mb-[64px]"
        style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
      >
        Join us IRL this July
      </h2>

      {/* Event image + description */}
      <div className="max-w-[1080px] mx-auto flex flex-col sm:flex-row gap-[32px] sm:gap-[48px] items-start">
        <div className="relative w-full sm:w-[380px] shrink-0 rounded-[16px] overflow-hidden shadow-md aspect-[4/5]">
          <Image
            src="/images/community/grounded-in-motion-july19.jpg"
            alt="Grounded in motion — Rheii event in Singapore, July 19"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 380px"
          />
        </div>

        {/* Event description */}
        <div className="flex flex-col gap-[16px] pt-[8px] max-w-[520px]">
          <h3
            className="font-heading font-medium text-[26px] sm:text-[30px] leading-[34px] sm:leading-[38px] tracking-[-0.4px] text-rheti-neutral-600"
            style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
          >
            Part 2: Grounded in Motion
          </h3>
          <p
            className="font-body text-[16px] sm:text-[17px] leading-[26px] text-rheti-neutral-400"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            We often think of grounding as standing completely still. But life rarely stops moving, and neither do we.
          </p>
          <p
            className="font-body text-[16px] sm:text-[17px] leading-[26px] text-rheti-neutral-400"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Whether you're navigating a change, managing stress, or seeking peace amidst the daily noise of your own expectations, the real challenge isn't finding a static calm - it's learning how to stay anchored while you're in motion.
          </p>
          <p
            className="font-body text-[16px] sm:text-[17px] leading-[26px] text-rheti-neutral-400"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Rheii was built to help you capture this fluidity. Our most important thoughts don't happen in a vacuum; they repeat, evolve, and shape how we move forward.
          </p>
          <a
            href="https://luma.com/jddf8ppm"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[8px] inline-flex items-center gap-[6px] font-body font-semibold text-[16px] text-rheti-primary-500 hover:opacity-70 transition-opacity"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Join Us →
          </a>
        </div>
      </div>
    </section>
  );
}
