/**
 * Founding Rate Confirmation
 *
 * Visual confirmation that an early member has locked in the founding rate.
 * - Records the opt-in (best effort) when an email is present in the URL
 * - Follows the site's patterns: shared nav/footer, burgundy section labels,
 *   light Cormorant headings over the community page background, founder sign-off
 */

'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/landing/Navigation';
import LandingFooter from '@/components/landing/LandingFooter';

const labelClass = 'font-body text-[13px] uppercase tracking-[2px] text-rheti-primary-500';

const DETAILS = [
  {
    label: 'Public rate',
    value: <span className="line-through decoration-[#9e9c9a] text-[#8c8c8c]">$12.99 / month</span>,
  },
  {
    label: 'Your rate',
    value: '$7.99 / month, locked in indefinitely as long as your subscription stays active',
  },
  {
    label: 'Premium includes',
    value: (
      <ul className="flex flex-col gap-2">
        {['Unlimited Dive Deeper & conversations with Rheii', 'Full access to insights', 'Unlimited support cards'].map(
          (benefit) => (
            <li key={benefit} className="flex items-baseline gap-3">
              <span aria-hidden className="h-[5px] w-[5px] flex-shrink-0 translate-y-[-3px] rounded-full bg-rheti-primary-500" />
              {benefit}
            </li>
          ),
        )}
      </ul>
    ),
  },
  {
    label: 'What’s next',
    value:
      'Pricing goes live in a few weeks. When it does, you can finish setting up inside the Rheii app, and your founding rate will be applied.',
  },
];

type Props = {
  email?: string;
  firstName?: string;
};

export default function FoundingRateConfirmation({ email, firstName }: Props) {
  useEffect(() => {
    if (!email) return;
    fetch('/api/founding-rate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, firstName }),
    }).catch((err) => console.error('Founding rate opt-in failed:', err));
  }, [email, firstName]);

  const name = firstName?.trim();

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero: heading + rate card over the community page background */}
      <section className="relative overflow-hidden px-6 sm:px-10 pt-[140px] md:pt-[168px] pb-10 md:pb-12 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/community/community-bg.jpg"
            alt=""
            fill
            priority
            className="object-fill md:object-cover"
            style={{ filter: 'saturate(1.8) contrast(1.08)' }}
          />
          <div className="absolute inset-x-0 bottom-0 h-[160px] bg-gradient-to-b from-transparent to-[#f4f3f0]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative"
        >
          <p className={labelClass} style={{ fontVariationSettings: "'opsz' 14" }}>
            Premium
          </p>
          <h1
            className="mt-4 mx-auto max-w-[720px] text-balance font-heading font-extralight text-[40px] sm:text-[48px] md:text-[54px] leading-[1.15] tracking-[-0.8px] text-rheti-neutral-600"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            {name ? `${name}, your rate is locked in` : 'Your rate is locked in'}
          </h1>
          <p className="mt-5 mx-auto max-w-[520px] text-[18px] sm:text-[21px] leading-[28px] sm:leading-[32px] font-light text-[#262626] opacity-90">
            Thank you for believing in Rheii from the beginning! Your early-member rate is reserved before we open
            membership to everyone else.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className="relative mx-auto mt-12 md:mt-16 w-full max-w-[420px] aspect-square rounded-[20px] overflow-hidden shadow-[0_20px_80px_rgba(74,30,42,0.10)]"
        >
          <Image
            src="/images/founding-rate/shadow-letter.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 100vw, 420px"
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* Details */}
      <section className="px-6 sm:px-10 pt-8 md:pt-10 pb-16">
        <dl className="mx-auto max-w-[680px] border-t border-[#E7E3DC]">
          {DETAILS.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-1 sm:gap-8 py-5 border-b border-[#E7E3DC]"
            >
              <dt className={`${labelClass} pt-[3px]`}>{row.label}</dt>
              <dd className="font-body text-[18px] sm:text-[20px] leading-[1.45] text-[#262626]">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Sign-off */}
      <section className="px-6 sm:px-10 pb-24 text-center">
        <div
          className="font-body text-[16px] sm:text-[18px] leading-[1.5] text-[#4a1e2a]"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          <p className="italic">With gratitude,</p>
          <p className="font-heading font-light text-[24px] sm:text-[26px] tracking-[-0.4px] mt-1">Hannah &amp; Jinny</p>
        </div>
        <p className="mt-10 mx-auto max-w-[420px] font-body text-[16px] leading-[24px] text-[#5e5a57]">
          If this rate doesn’t feel right for you, or you have any feedback at all, just reply to our email. We’d
          love to hear from you.
        </p>
      </section>

      <LandingFooter />
    </main>
  );
}
