/**
 * About Page
 *
 * The About page for The Rheii, explaining the company behind Rheii.
 *
 * Features:
 * - Navigation bar (same as landing page)
 * - Hero section with background image and title
 * - Our Mission section with sticky title and scrolling text
 * - Team section with member profiles
 * - Footer with download and legal links
 */

import Navigation from '@/components/landing/Navigation';
import FounderSection from '@/components/about/FounderSection';
import LandingFooter from '@/components/landing/LandingFooter';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-parchment">
      {/* Navigation */}
      <Navigation />

      {/* Founder Section */}
      <FounderSection />

      {/* Footer */}
      <LandingFooter />
    </main>
  );
}
