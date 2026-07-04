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
    <section className="w-full bg-[#fffdfa] py-[80px] md:py-[120px] px-5 sm:px-8 md:px-[104px]">
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
        <div className="flex flex-col gap-[8px] pt-[8px]">
          {/* TODO: add event description copy here */}
        </div>
      </div>
    </section>
  );
}
