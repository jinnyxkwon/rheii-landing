/**
 * Founding Rate Page
 *
 * Landing page for the "Lock in my $7.99/month rate" email CTA.
 * Confirms the member's founding rate is reserved; checkout happens in-app.
 *
 * Route: /founding-rate?email={{email}}&name={{first_name}}
 */

import type { Metadata } from 'next';
import FoundingRateConfirmation from '@/components/founding-rate/FoundingRateConfirmation';

export const metadata: Metadata = {
  title: 'Your Founding Rate is Locked In | Rheii',
  description: 'Your Rheii founding member rate of $7.99/month is reserved.',
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: { email?: string; name?: string };
};

export default function FoundingRatePage({ searchParams }: Props) {
  return <FoundingRateConfirmation email={searchParams.email} firstName={searchParams.name} />;
}
