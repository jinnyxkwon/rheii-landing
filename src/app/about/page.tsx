/**
 * About Page
 *
 * The About page for The Rheii, explaining the company behind Rheii.
 *
 * Features:
 * - Navigation bar (same as landing page)
 * - Centered founder introduction
 * - Individual founder profile cards
 * - Footer with download and legal links
 */

import Navigation from '@/components/landing/Navigation';
import FounderSection from '@/components/about/FounderSection';
import LandingFooter from '@/components/landing/LandingFooter';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F4]">
      {/* Navigation */}
      <Navigation />

      {/* Founder Section */}
      <FounderSection />

      {/* Footer */}
      <LandingFooter />
    </main>
  );
}
