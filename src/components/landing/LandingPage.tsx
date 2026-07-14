'use client';

import dynamic from 'next/dynamic';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ProblemToWithRheiiPinned from './ProblemToWithRheiiPinned';
import WhyRheiiSection from './WhyRheiiSection';

const CTASection = dynamic(() => import('./CTASection'), { ssr: true });
const LandingFooter = dynamic(() => import('./LandingFooter'), { ssr: true });

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden bg-parchment" style={{ margin: 0, padding: 0 }}>
      <Navigation />
      <HeroSection />
      <ProblemToWithRheiiPinned />
      <WhyRheiiSection />
      <CTASection />
      <LandingFooter />
    </main>
  );
}
