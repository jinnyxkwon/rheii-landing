/**
 * Photo Marquee — a horizontally-scrolling strip of community photos.
 *
 * Inspired by the edge-to-edge photo galleries on Les Amis and Vega: a seamless
 * auto-scrolling row of lifestyle images that sells the community feeling. The
 * track is duplicated so the loop is seamless; it pauses on hover, and under
 * prefers-reduced-motion the animation stops but the strip stays scrollable.
 */

'use client';

import Image from 'next/image';

interface MarqueePhoto {
  src: string;
  alt?: string;
}

export default function PhotoMarquee({
  photos,
  reverse = false,
  speed = 60,
}: {
  photos: MarqueePhoto[];
  reverse?: boolean;
  speed?: number;
}) {
  // Duplicate the set so the -50% translate loops seamlessly.
  const track = [...photos, ...photos];

  return (
    <div className="group relative w-full overflow-x-auto scrollbar-hide">
      <div
        className="flex w-max marquee-track group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {track.map((photo, i) => (
          <div
            key={i}
            className="relative h-[220px] w-[280px] sm:h-[260px] sm:w-[330px] shrink-0 overflow-hidden rounded-[16px] border border-stone mr-4 md:mr-5"
          >
            <Image
              src={photo.src}
              alt={photo.alt ?? ''}
              fill
              className="object-cover"
              sizes="330px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
