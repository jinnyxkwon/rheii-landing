'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import RheiiDefinitionSection from './RheiiDefinitionSection';
import ThisIsRheiiSection from './ThisIsRheiiSection';
import FeedbackSection from './FeedbackSection';
import WhyRheiiSection from './WhyRheiiSection';

const CTASection = dynamic(() => import('./CTASection'), { ssr: true });
const LandingFooter = dynamic(() => import('./LandingFooter'), { ssr: true });

export default function LandingPage() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // #region agent log
    const bodyBg = window.getComputedStyle(document.body).backgroundColor;
    const htmlBg = window.getComputedStyle(document.documentElement).backgroundColor;
    const bodyMarginTop = window.getComputedStyle(document.body).marginTop;
    const htmlMarginTop = window.getComputedStyle(document.documentElement).marginTop;
    const mainRect = mainRef.current?.getBoundingClientRect();
    const nextRoot = document.getElementById('__next');
    const appRoot = document.body.firstElementChild;
    const appRootStyles = appRoot ? window.getComputedStyle(appRoot) : null;
    fetch('http://127.0.0.1:7243/ingest/8bed6cbb-debd-473a-a110-c7a68df1bf1b', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        location: 'LandingPage.tsx:useEffect',
        message: 'Root backgrounds + root nodes',
        data: {
          scrollY: window.scrollY,
          bodyBackgroundColor: bodyBg,
          htmlBackgroundColor: htmlBg,
          bodyMarginTop,
          htmlMarginTop,
          has__next: !!nextRoot,
          bodyFirstTag: appRoot?.tagName,
          bodyFirstId: (appRoot as any)?.id,
          bodyFirstClass: (appRoot as any)?.className,
          bodyFirstBackground: appRootStyles?.backgroundColor,
          bodyFirstMinHeight: appRootStyles?.minHeight,
          mainTop: mainRect?.top,
          mainHeight: mainRect?.height,
        },
        timestamp: Date.now(),
        sessionId: 'debug-session',
        runId: 'run2',
        hypothesisId: 'H2',
      }),
    }).catch(() => {});

    const logTopPixel = () => {
      // Only log once when we're at the top
      if (window.scrollY !== 0) return;
      const el = document.elementFromPoint(2, 2) as HTMLElement | null;
      const elStyles = el ? window.getComputedStyle(el) : null;
      fetch('http://127.0.0.1:7243/ingest/8bed6cbb-debd-473a-a110-c7a68df1bf1b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: 'LandingPage.tsx:logTopPixel',
          message: 'Element occupying top-left pixel',
          data: {
            scrollY: window.scrollY,
            tag: el?.tagName,
            id: el?.id,
            className: el?.className,
            backgroundColor: elStyles?.backgroundColor,
            marginTop: elStyles?.marginTop,
            paddingTop: elStyles?.paddingTop,
            position: elStyles?.position,
            top: el ? el.getBoundingClientRect().top : null,
          },
          timestamp: Date.now(),
          sessionId: 'debug-session',
          runId: 'run2',
          hypothesisId: 'H3',
        }),
      }).catch(() => {});
      window.removeEventListener('scroll', logTopPixel);
    };

    // Try immediately and also on scroll to top
    logTopPixel();
    window.addEventListener('scroll', logTopPixel, { passive: true });
    // #endregion
  }, []);

  return (
    <main ref={mainRef} className="overflow-x-hidden" style={{ margin: 0, padding: 0 }}>
      <Navigation />
      <div
        style={{
          background:
            'linear-gradient(180deg, #f7f6f4 0%, #f3f1ec 55%, #eeebe4 100%)',
        }}
      >
        <HeroSection />
        <RheiiDefinitionSection />
      </div>
      <ThisIsRheiiSection />
      <FeedbackSection />
      <CTASection />
      <LandingFooter />
    </main>
  );
}
