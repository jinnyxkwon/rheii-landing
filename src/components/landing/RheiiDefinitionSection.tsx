/**
 * Rheii Definition Section
 *
 * Dictionary-style section (inspired by editorial "definition" layouts) sitting
 * directly below the hero. Light beige→maroon gradient background with the Rheii
 * etymology copy and a simple woven-thread "tapestry" mark in place of an icon.
 */

'use client';

export default function RheiiDefinitionSection() {
  return (
    <section className="relative w-full bg-transparent">
      <div className="max-w-[820px] mx-auto px-6 sm:px-8 pt-[2vh] md:pt-[3vh] pb-[14vh] md:pb-[18vh]">
        {/* Word */}
        <h2
          className="font-heading font-light text-[56px] sm:text-[72px] leading-[1.02] tracking-[-1px] text-[#4a1e2a]"
          style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
        >
          Rheii
        </h2>
        <p className="mt-3 font-body italic text-[18px] sm:text-[20px] text-[#8a7268]">
          Ray-ee • proper noun
        </p>

        {/* Definition body */}
        <div
          className="mt-10 font-body font-normal text-[18px] sm:text-[20px] leading-[1.7] text-[#42352f] space-y-6"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          <p>
            We treat our lives like patches of disconnected moments. We rush, we experience, we move
            on — forgetting that human existence isn&apos;t a series of isolated snapshots, but a rich,
            unfolding tapestry.
          </p>
          <p>
            Derived from <em>rheo</em>, the ancient Greek word &ldquo;to flow.&rdquo; Because nothing
            happens in isolation. Our thoughts, emotions, and habits are interconnected strands
            repeating across time. You can&apos;t craft the life in front of you if you only look at a
            single stitch.
          </p>
          <p className="font-semibold text-[#2f2a26]">
            The magic is finding the thread.
          </p>
        </div>
      </div>
    </section>
  );
}
