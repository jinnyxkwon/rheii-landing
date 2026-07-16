import Navigation from '@/components/landing/Navigation';
import PartnershipsPage from '@/components/partnerships/PartnershipsPage';
import LandingFooter from '@/components/landing/LandingFooter';

export default function Partnerships() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <PartnershipsPage />
      <LandingFooter />
    </main>
  );
}
