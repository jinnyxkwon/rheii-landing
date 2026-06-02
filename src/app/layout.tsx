import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const cormorantGaramond = localFont({
  src: [
    {
      path: '../../public/images/Font/Font 2/Cormorant_Garamond/static/CormorantGaramond-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../../public/images/Font/Font 2/Cormorant_Garamond/static/CormorantGaramond-LightItalic.ttf',
      style: 'italic',
      weight: '300',
    },
  ],
  variable: '--font-cormorant-garamond',
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
  themeColor: '#0b0b0b',
  viewportFit: 'cover',
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} font-body`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
