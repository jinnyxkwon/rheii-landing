'use client';

import ProblemStatementSection from './ProblemStatementSection';
import ThisIsRheiiSection from './ThisIsRheiiSection';
import FeedbackSection from './FeedbackSection';

export default function ProblemToWithRheiiPinned() {
  return (
    <div className="w-full" style={{ margin: 0, padding: 0 }}>
      <ProblemStatementSection />
      <ThisIsRheiiSection />
      <FeedbackSection />
    </div>
  );
}
