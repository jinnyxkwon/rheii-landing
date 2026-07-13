'use client';

import React, { useRef, RefObject } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WEBSITE_ASSETS } from '@/lib/websiteAssets';

type OrderName = 'leaf' | 'ocean' | 'woman';

type Props = {
  targetRef?: RefObject<HTMLElement | null>;
  order?: OrderName[];
};

export default function ScrollHero({ targetRef, order = ['leaf', 'ocean', 'woman'] }: Props) {
  const localRef = useRef<HTMLElement | null>(null);
  const scrollTarget = (targetRef ?? localRef) as RefObject<HTMLElement | null>;

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start start', 'end end'],
  });

  const leaf = useTransform(scrollYProgress, [0, 0.18, 0.33], [1, 1, 0]);
  const ocean = useTransform(scrollYProgress, [0.25, 0.42, 0.58], [0, 1, 0]);
  const woman = useTransform(scrollYProgress, [0.55, 0.75, 1], [0, 1, 1]);

  const mapSrc: Record<OrderName, string> = {
    leaf: WEBSITE_ASSETS.themeCards.relationships,
    ocean: WEBSITE_ASSETS.themeCards.work,
    woman: WEBSITE_ASSETS.founderPortrait,
  };

  const opMap: Record<OrderName, any> = {
    leaf,
    ocean,
    woman,
  };

  return (
    <div
      ref={localRef as any}
      className="absolute inset-0 w-full h-screen z-0 overflow-hidden pointer-events-none"
    >
      {order.map((name) => (
        <motion.img
          key={name}
          src={mapSrc[name]}
          alt={name}
          className="scroll-hero-img absolute inset-0 w-full h-full object-cover"
          style={{ opacity: opMap[name] }}
        />
      ))}
    </div>
  );
}
