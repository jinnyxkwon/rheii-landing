/**
 * Community Section — editorial redesign
 *
 * A centered serif statement followed by an editorial photo story built from
 * real Rheii community moments. The staggered, asymmetric layout gives each
 * image room to breathe without turning the page into a conventional gallery.
 */

'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerParent, inViewProps } from '@/lib/motion';
import { WEBSITE_ASSETS } from '@/lib/websiteAssets';

const galleryColumns = [
  [
    {
      src: WEBSITE_ASSETS.communityGallery.dinner,
      alt: 'Rheii community members sharing dinner together',
      aspect: 'aspect-[3/2]',
      sizes: '(max-width: 639px) 100vw, 50vw',
    },
    {
      src: WEBSITE_ASSETS.communityGallery.circle,
      alt: 'Rheii community members gathered around a table',
      aspect: 'aspect-[3/4]',
      sizes: '(max-width: 639px) 100vw, 50vw',
    },
  ],
  [
    {
      src: WEBSITE_ASSETS.communityGallery.workshop,
      alt: 'Rheii community workshop in a sunlit room',
      aspect: 'aspect-[3/4]',
      sizes: '(max-width: 639px) 100vw, 50vw',
    },
    {
      src: WEBSITE_ASSETS.communityGallery.conversation,
      alt: 'Rheii community members in conversation over dinner',
      aspect: 'aspect-[3/2]',
      sizes: '(max-width: 639px) 100vw, 50vw',
    },
  ],
];

const PHOTO_EASE = [0.22, 1, 0.36, 1] as const;

export default function CommunitySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full bg-parchment overflow-hidden pt-[120px] pb-[120px]">
      {/* Centered statement */}
      <motion.div
        variants={staggerParent(0.12)}
        {...inViewProps}
        className="flex flex-col items-center max-w-[640px] mx-auto px-5 sm:px-8 mb-16 md:mb-20 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="font-serif font-medium text-[36px] sm:text-[46px] leading-[1.1] tracking-heading text-ink"
        >
          A community <span className="italic text-clay">designed</span> by you
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="font-editorial text-[20px] leading-[1.55] text-ash mt-[32px] max-w-[480px]"
        >
          Through our community, growth becomes shared rather than solitary. Connect with
          like-minded people who understand your context, grow alongside you, and challenge you
          constructively.
        </motion.p>
      </motion.div>

      {/* Community photo story */}
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:items-start sm:gap-5 sm:px-8 lg:gap-6">
        {galleryColumns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={`flex flex-col gap-4 sm:gap-5 lg:gap-6 ${columnIndex === 1 ? 'sm:mt-16 lg:mt-24' : ''}`}
          >
            {column.map((photo, photoIndex) => {
              const sequenceIndex = columnIndex * 2 + photoIndex;

              return (
                <motion.figure
                  key={photo.src}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: shouldReduceMotion ? 0 : sequenceIndex * 0.08,
                    ease: PHOTO_EASE,
                  }}
                  className={`community-photo group relative w-full overflow-hidden rounded-[16px] bg-bone ${photo.aspect}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="community-photo-image object-cover will-change-transform"
                    sizes={photo.sizes}
                    loading={photoIndex === 0 ? 'eager' : 'lazy'}
                  />
                  <div
                    aria-hidden="true"
                    className="community-photo-wash pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 opacity-60 transition-opacity duration-300 ease-out motion-reduce:transition-none"
                  />
                </motion.figure>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
