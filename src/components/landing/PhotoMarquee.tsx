/**
 * Photo Marquee — a horizontally-scrolling strip of community photos.
 *
 * Inspired by the edge-to-edge photo galleries on Les Amis and Vega: a seamless
 * auto-scrolling row of lifestyle images that sells the community feeling. The
 * track is duplicated so the loop is seamless. It pauses while offscreen and
 * under prefers-reduced-motion so it does not spend work when it is not useful.
 */

'use client';

import { useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
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
  const marqueeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(marqueeRef, { margin: '200px 0px', amount: 0.05 });
  const shouldReduceMotion = useReducedMotion();
  // Keep one full loop wider than ultra-wide displays so the duplicate is
  // always waiting offscreen instead of exposing an empty tail.
  const repeatCount = Math.max(1, Math.ceil(8 / Math.max(1, photos.length)));
  const loopPhotos = Array.from({ length: repeatCount }, () => photos).flat();

  return (
    <div ref={marqueeRef} className="relative w-full overflow-hidden">
      <div
        className="marquee-track flex w-max will-change-transform"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
          animationPlayState: isInView && !shouldReduceMotion ? 'running' : 'paused',
        }}
      >
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            aria-hidden={copyIndex === 1 ? true : undefined}
            className="flex shrink-0 gap-4 pr-4 md:gap-5 md:pr-5"
          >
            {loopPhotos.map((photo, photoIndex) => (
              <div
                key={`${copyIndex}-${photo.src}-${photoIndex}`}
                className="relative h-[220px] w-[340px] shrink-0 overflow-hidden rounded-[16px] border border-stone bg-bone sm:h-[260px] sm:w-[440px]"
              >
                <Image
                  src={photo.src}
                  alt={copyIndex === 0 ? (photo.alt ?? '') : ''}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 640px) 340px, 440px"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
