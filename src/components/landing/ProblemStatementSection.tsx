/**
 * Problem Statement Section — editorial redesign
 *
 * A compact editorial interlude with statements that fade in as you scroll,
 * alternating left / right / center. The layered CSS gradient adds atmosphere
 * without competing with the copy.
 */

'use client';

import { motion } from 'framer-motion';
import { EASE_EDITORIAL } from '@/lib/motion';

const reveal = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.3, ease: EASE_EDITORIAL },
} as const;

const statementClass =
  'font-serif font-medium text-[22px] sm:text-[26px] md:text-[30px] leading-[1.32] tracking-tight-sm text-ink w-full max-w-[460px]';

export default function ProblemStatementSection() {
  return (
    <section
      className="relative isolate block w-full min-h-[82svh] overflow-hidden bg-[#f6f4ef] md:h-[88svh] md:min-h-[700px]"
      style={{ margin: 0, padding: 0 }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 select-none"
        style={{
          background:
            'radial-gradient(ellipse 58% 72% at 5% 18%, rgba(115, 56, 62, 0.16) 0%, rgba(115, 56, 62, 0.05) 48%, transparent 72%), radial-gradient(ellipse 55% 68% at 92% 78%, rgba(109, 134, 124, 0.18) 0%, rgba(109, 134, 124, 0.05) 48%, transparent 72%), radial-gradient(ellipse 42% 52% at 58% 24%, rgba(173, 116, 65, 0.11) 0%, transparent 70%), linear-gradient(135deg, #faf9f6 0%, #efede7 48%, #f8f7f3 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[10%] top-0 h-px select-none bg-gradient-to-r from-transparent via-ink/10 to-transparent"
      />

      {/* Statements */}
      <div className="relative z-10 flex min-h-[82svh] flex-col gap-10 px-5 py-14 sm:px-8 md:h-full md:min-h-0 md:justify-between md:gap-0 md:px-[104px] md:py-[9vh]">
        <motion.p
          {...reveal}
          className={`${statementClass} self-center md:self-start text-center md:text-left`}
        >
          We all hold a vision of who we want to become — in our work, our relationships, and our
          sense of self.
        </motion.p>

        <motion.p
          {...reveal}
          className={`${statementClass} self-center md:self-end text-center md:text-right`}
        >
          But it&apos;s hard to grow when you can&apos;t see your own patterns.
        </motion.p>

        <motion.p {...reveal} className={`${statementClass} self-center text-center`}>
          <span className="font-editorial italic font-medium text-clay">Rheii</span> is a mirror for
          what&apos;s shaping you over time — so the person you&apos;re becoming isn&apos;t just a
          feeling. It&apos;s something you can actually see.
        </motion.p>
      </div>
    </section>
  );
}
