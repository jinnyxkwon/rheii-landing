/**
 * Community Section Component
 *
 * Main content section for the Community page featuring:
 * - Background image with custom community-bg.jpg
 * - Community photos positioned around the edges
 * - Centered text content explaining the community vision
 * - "Coming Soon" message
 *
 * Design: Extracted from Figma (node-id: 159-961)
 * Colors: #fffdfa background, #191716 text
 * Typography: Roboto Serif Medium (40px) for title, DM Sans for body text
 */

'use client';

import Image from 'next/image';

export default function CommunitySection() {
  return (
    <div className="relative w-full min-h-[130vh] bg-[#fffdfa] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none opacity-20 md:opacity-100">
        <Image src="/images/community/community-bg.jpg" alt="" fill className="object-cover" />
      </div>

      {/* Mobile Decorative Photos — scattered positions, radial mask fades images
          as they touch the centered text; opacity lightens on smaller screens */}
      <div
        className="md:hidden absolute inset-0 pointer-events-none opacity-10 sm:opacity-20"
        style={{
          maskImage:
            'radial-gradient(ellipse 55% 58% at 50% 44%, transparent 0%, transparent 28%, black 62%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 55% 58% at 50% 44%, transparent 0%, transparent 28%, black 62%)',
        }}
      >
        {/* Top-left, tilted left */}
        <div className="absolute left-[-12px] top-[100px] w-[120px] h-[120px] sm:w-[145px] sm:h-[145px] rotate-[-4deg]">
          <Image src="/images/community/dsc01267.jpg" alt="" fill className="object-cover rounded-lg" />
        </div>
        {/* Right side, slightly lower, tilted right */}
        <div className="absolute right-[-8px] top-[255px] w-[130px] h-[130px] sm:w-[155px] sm:h-[155px] rotate-[6deg]">
          <Image src="/images/community/dsc01494.jpg" alt="" fill className="object-cover rounded-lg" />
        </div>
        {/* Left side, mid-section */}
        <div className="absolute left-[-18px] top-[470px] w-[112px] h-[112px] sm:w-[135px] sm:h-[135px] rotate-[5deg]">
          <Image src="/images/community/dsc01429.jpg" alt="" fill className="object-cover rounded-lg" />
        </div>
        {/* Right side, lower */}
        <div className="absolute right-[-5px] top-[625px] w-[125px] h-[125px] sm:w-[150px] sm:h-[150px] rotate-[-3deg]">
          <Image src="/images/community/dsc01620.jpg" alt="" fill className="object-cover rounded-lg" />
        </div>
        {/* Bottom, slightly inside from left */}
        <div className="absolute left-[12px] top-[820px] w-[115px] h-[115px] sm:w-[138px] sm:h-[138px] rotate-[2deg]">
          <Image src="/images/community/dsc01496.jpg" alt="" fill className="object-cover rounded-lg" />
        </div>
      </div>

      {/* Desktop Decorative Photos — original scattered layout */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {/* Top left photo */}
        <div className="absolute left-[105px] top-[294px]">
          <Image src="/images/community/dsc01267.jpg" alt="" width={190} height={190} className="object-cover rounded-lg w-[190px] h-[190px]" />
        </div>
        {/* Left middle photo */}
        <div className="absolute left-[181px] top-[641px]">
          <Image src="/images/community/dsc01429.jpg" alt="" width={186} height={186} className="object-cover rounded-lg w-[186px] h-[186px]" />
        </div>
        {/* Bottom right photo */}
        <div className="absolute right-[584px] top-[822px]">
          <Image src="/images/community/dsc01496.jpg" alt="" width={160} height={160} className="object-cover rounded-lg w-[160px] h-[160px]" />
        </div>
        {/* Top right photo */}
        <div className="absolute right-[124px] top-[199px]">
          <Image src="/images/community/dsc01494.jpg" alt="" width={190} height={190} className="object-cover rounded-lg w-[190px] h-[190px]" />
        </div>
        {/* Bottom right corner photo */}
        <div className="absolute right-[104px] top-[597px]">
          <Image src="/images/community/dsc01620.jpg" alt="" width={186} height={186} className="object-cover rounded-lg w-[186px] h-[186px]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[130vh] px-5 sm:px-8 md:px-[104px] pt-[140px] md:pt-[120px] pb-[120px]">
        {/* Content Container */}
        <div className="flex flex-col items-center gap-[8px] max-w-[635px]">
          {/* Title */}
          <h1
            className="font-heading font-light text-[40px] leading-[56px] tracking-[-0.8px] text-rheti-neutral-600 text-center"
            style={{
              fontVariationSettings: "'GRAD' 0, 'wdth' 100",
            }}
          >
            A community designed by you
          </h1>
        </div>

        {/* Body Text */}
        <div className="flex flex-col gap-[40px] items-center mt-[80px] max-w-[431px]">
          <p
            className="font-body text-[16px] leading-[24px] text-rheti-neutral-600 text-center"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Through our community, growth becomes shared rather than solitary. Our offline
            gatherings are designed around your needs, connecting you with like-minded people who
            understand your context, grow alongside you, and challenge you constructively.
          </p>
        </div>

      </div>
    </div>
  );
}
