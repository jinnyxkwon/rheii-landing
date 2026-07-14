'use client';

import Image from 'next/image';

const founders = [
  {
    name: 'Jinny',
    role: 'Co-founder',
    image: '/images/team/jinny.jpg',
  },
  {
    name: 'Hannah',
    role: 'Co-founder',
    image: '/images/team/hannah.jpg',
  },
];

export default function FounderSection() {
  return (
    <section className="relative w-full overflow-x-clip bg-white">
      {/* Divider */}
      <div className="relative w-full max-w-[1440px] mx-auto px-[7.2vw]">
        <div className="border-t border-[#E7E3DC]" />
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto px-[7.2vw] pt-[24vh] pb-[14vh]">
        {/* Header - centered */}
        <div className="text-center flex flex-col items-center">
          <h2
            className="font-heading font-light whitespace-nowrap leading-[1.08] tracking-[-0.8px] text-[#4a1e2a] text-[clamp(14px,3.1vw,40px)]"
            style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
          >
            By two women learning how to grow without a clear blueprint
          </h2>

          <div
            className="max-w-[760px] mt-10 font-body font-normal text-[18px] leading-[1.65] text-[#3b3430] space-y-6"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p>
              Born from years of living between cultures, careers, and seasons of change, Rheii grew
              out of our shared experience of learning how to grow without a clear blueprint.
            </p>
            <p>
              We arrived here from different directions, each learning that growth is not about speed,
              but about alignment. What brought us together was a shared belief that growth does not
              have to be solitary, and that becoming is richer when it is witnessed.
            </p>
            <p>
              This is a space for those navigating life individually, but alongside others, a village
              for reflection, movement, and steady momentum. Wherever you are in your journey,
              you&apos;re invited to walk it with us, and with each other.
            </p>
          </div>

          {/* Sign-off */}
          <div
            className="mt-10 font-body text-[18px] leading-[1.5] text-[#4a1e2a]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="italic">With intention,</p>
            <p className="font-heading font-light text-[26px] tracking-[-0.4px] mt-1">
              Jinny &amp; Hannah
            </p>
          </div>
        </div>

        {/* Founder cards */}
        <div className="mt-[10vh] grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 max-w-[600px] mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="flex flex-col rounded-[24px] border border-[#E7E3DC] bg-white p-4 shadow-[0_20px_80px_rgba(0,0,0,0.05)]"
            >
              <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden bg-[#F1EBE7]">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-5 px-1">
                <h3 className="font-heading font-normal text-[24px] tracking-[-0.4px] text-[#2f2a26]">
                  {founder.name}
                </h3>
                <p
                  className="mt-1 font-body text-[15px] text-[#8a7f76]"
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  {founder.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
