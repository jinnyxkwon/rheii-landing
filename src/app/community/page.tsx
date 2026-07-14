/**
 * Community Page
 *
 * The Community page for Rheii.
 *
 * Features:
 * - Navigation bar (same as landing page)
 * - Community statement and product imagery
 */

import Navigation from '@/components/landing/Navigation';
import CommunitySection from '@/components/community/CommunitySection';
import LandingFooter from '@/components/landing/LandingFooter';

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-parchment">
      {/* Navigation */}
      <Navigation />

      {/* Community Section */}
      <CommunitySection />

      {/* Footer */}
      <LandingFooter />
    </main>
  );
}
