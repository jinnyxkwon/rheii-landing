/**
 * Events Section Component
 *
 * Highlights upcoming Rheii IRL events after the main community hero section.
 * Features a full-width image banner with the June 2026 event calendar visual.
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

      {/* Event image */}
      <div className="relative w-full max-w-[1080px] mx-auto rounded-[16px] overflow-hidden shadow-md aspect-[16/7]">
        <Image
          src="/images/community/june-2026-events.jpg"
          alt="June 2026 Rheii events — soft launch on June 14 and strategic vision boarding (invite-only) on June 28"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 1080px"
        />
      </div>

      {/* Event cards */}
      <div className="mt-[48px] sm:mt-[64px] grid grid-cols-1 sm:grid-cols-2 gap-[24px] max-w-[1080px] mx-auto">
        {/* Event 1 */}
        <div className="flex flex-col gap-[8px] bg-[#F7F1ED] rounded-[12px] px-[28px] py-[24px]">
          <span className="font-body text-[12px] uppercase tracking-[2px] text-rheti-primary-500"
            style={{ fontVariationSettings: "'opsz' 14" }}>
            June 14
          </span>
          <h3
            className="font-heading font-medium text-[22px] leading-[30px] tracking-[-0.4px] text-rheti-neutral-600"
            style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
          >
            Rheii Soft Launch
          </h3>
          <p
            className="font-body text-[14px] sm:text-[15px] leading-[22px] text-rheti-neutral-400"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Our first IRL gathering. Come meet the community and be among the first to experience Rheii.
          </p>
          <a
            href="https://luma.com/0fbz8pjx"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[8px] inline-flex items-center gap-[6px] font-body font-semibold text-[14px] text-rheti-primary-500 hover:opacity-70 transition-opacity"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            RSVP →
          </a>
        </div>

        {/* Event 2 */}
        <div className="flex flex-col gap-[8px] bg-[#F7F1ED] rounded-[12px] px-[28px] py-[24px]">
          <span className="font-body text-[12px] uppercase tracking-[2px] text-rheti-primary-500"
            style={{ fontVariationSettings: "'opsz' 14" }}>
            June 28 · Invite-only
          </span>
          <h3
            className="font-heading font-medium text-[22px] leading-[30px] tracking-[-0.4px] text-rheti-neutral-600"
            style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
          >
            Strategic Vision Boarding
          </h3>
          <p
            className="font-body text-[14px] sm:text-[15px] leading-[22px] text-rheti-neutral-400"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Invite-only for soft launch attendees — we'll be building off of what we uncover together then.
          </p>
        </div>
      </div>
    </section>
  );
}
