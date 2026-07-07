import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { DM_Sans, DM_Mono } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

// Editorial serif — kept as an accent voice for pull-quotes, testimonials, and
// select italic emphasis (Cursor's EB Garamond role).
const cormorantGaramond = localFont({
  src: [
    {
      path: '../../public/images/Font/Font 2/Cormorant_Garamond/static/CormorantGaramond-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../../public/images/Font/Font 2/Cormorant_Garamond/static/CormorantGaramond-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../../public/images/Font/Font 2/Cormorant_Garamond/static/CormorantGaramond-LightItalic.ttf',
      style: 'italic',
      weight: '300',
    },
    {
      path: '../../public/images/Font/Font 2/Cormorant_Garamond/static/CormorantGaramond-MediumItalic.ttf',
      style: 'italic',
      weight: '500',
    },
  ],
  variable: '--font-cormorant-garamond',
});

// Primary voice — headlines, UI, navigation. Weight-400 with tight tracking is
// the signature (Cursor's CursorGothic role).
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

// Technical voice — eyebrows, metadata tags, section labels (Cursor's
// berkeleyMono role).
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rheii - Growth made Visible',
  description: 'Turn your thoughts into insights that actually serve you',
  icons: {
    icon: '/images/rheii-favicon.png',
    apple: '/images/rheii-favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#f4f3f0',
  viewportFit: 'cover',
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmMono.variable} ${cormorantGaramond.variable} font-sans`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
