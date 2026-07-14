/**
 * Community Page
 *
 * The Community page for The Rheii, showcasing the vision for offline gatherings.
 *
 * Features:
 * - Navigation bar (same as landing page)
 * - Community section with decorative elements and centered content
 * - "Coming Soon" message for future community features
 */

import Navigation from '@/components/landing/Navigation';
import CommunitySection from '@/components/community/CommunitySection';
import LandingFooter from '@/components/landing/LandingFooter';

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#fffdfa]">
      {/* Navigation */}
      <Navigation />

      {/* Community Section */}
      <CommunitySection />

      {/* Footer */}
      <LandingFooter />
    </main>
  );
}
