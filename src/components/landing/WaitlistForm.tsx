/**
 * Waitlist Form Component
 *
 * Standalone form for collecting waitlist signups featuring:
 * - Form fields: First Name, Last Name, Email
 * - Text area for growth journey preferences
 * - Dropdown for referral source
 * - Submit button
 * - Success message after submission
 *
 * Design: Extracted from Figma (node-id: 475-5338, 563-4946)
 * Colors: White background, #191716 text, #73383E primary
 * Typography: Roboto Serif Medium (30px) for heading, DM Sans for form
 */

'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import CustomDropdown from './CustomDropdown';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    growthJourney: '',
    lifeSeasons: [] as string[],
    referralSource: '',
    referralSourceOther: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lifeSeasonOptions = [
    { value: 'building', label: 'Building something new in career or relationships' },
    { value: 'exploring', label: 'Exploring or figuring out what I want' },
    { value: 'recovering', label: 'Recovering from burnout, loss, or a hard chapter' },
    { value: 'transition', label: 'In transition' },
    { value: 'grounded', label: 'Grounded — things are stable right now / Other' },
  ];

  const toggleLifeSeason = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      lifeSeasons: prev.lifeSeasons.includes(value)
        ? prev.lifeSeasons.filter((s) => s !== value)
        : [...prev.lifeSeasons, value],
    }));
  };

  const referralOptions = [
    { value: 'instagram', label: 'Instagram' },
    { value: 'linkedin', label: 'Linkedin' },
    { value: 'word-of-mouth', label: 'Word of Mouth' },
    { value: 'event', label: 'Event' },
    { value: 'others', label: 'Others' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        // If not JSON, get text to see what we got
        const text = await response.text();
        console.error('Non-JSON response:', text);
        throw new Error('Server returned an invalid response. Please try again.');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      // Show success message
      setIsSubmitted(true);
    } catch (err) {
      console.error('Waitlist signup error:', err);
      setError(err instanceof Error ? err.message : 'Failed to join waitlist. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-[560px] mx-auto">
        <div className="flex flex-col items-center text-center gap-[24px]">
          {/* Success Icon */}
          <div className="flex items-center justify-center w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-[16px] bg-linen">
            <Check size={32} className="text-clay" strokeWidth={2} />
          </div>

          {/* Success Message */}
          <div className="flex flex-col gap-[10px]">
            <h2 className="font-serif font-medium text-[26px] sm:text-[32px] leading-[1.15] tracking-heading text-ink">
              You&apos;re on the{' '}
              <span className="font-editorial italic font-medium text-clay">list.</span>
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.55] text-ash">
              Thank you for joining the waitlist. We&apos;ll send you an email when Rheii launches.
            </p>
          </div>

          {/* Return to Home Button */}
          <button
            onClick={() => (window.location.href = '/')}
            className="mt-[16px] h-[46px] px-[24px] bg-clay rounded font-sans text-[15px] sm:text-[16px] text-parchment hover:bg-[#5f2d33] transition-colors duration-150 ease-editorial"
          >
            Return home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[560px] mx-auto">
      {/* Heading */}
      <div className="flex flex-col gap-[10px] items-center text-center mb-[28px] sm:mb-[36px]">
        <h1 className="font-serif font-medium text-[26px] sm:text-[32px] leading-[1.15] tracking-heading text-ink">
          Join the <span className="font-editorial italic font-medium text-clay">waitlist</span>
        </h1>
        <p className="font-sans text-[15px] sm:text-[16px] leading-[1.55] text-ash max-w-[440px]">
          Join other members who are navigating life from the inside out. We&apos;ll be hosting more{' '}
          <a href="https://www.rheii.com/community" className="link-accent">
            IRL events
          </a>
          . RSVP to get access to our beta and beat the waitlist.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] sm:gap-[24px]">
        {/* Error Message */}
        {error && (
          <div className="px-[16px] py-[12px] bg-[#f6ece9] border border-[#e0c3bb] rounded">
            <p className="font-sans text-[14px] leading-[20px] text-clay">{error}</p>
          </div>
        )}

        {/* First Name and Last Name */}
        <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[24px]">
          <div className="flex-1 flex flex-col gap-[8px]">
            <label
              htmlFor="firstName"
              className="font-sans font-medium text-[14px] sm:text-[15px] leading-[1.4] text-ink"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
              className="h-[46px] px-[14px] border border-stone rounded bg-parchment font-sans text-[15px] sm:text-[16px] text-ink placeholder:text-mist focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay/40 transition-colors"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            />
          </div>
          <div className="flex-1 flex flex-col gap-[8px]">
            <label
              htmlFor="lastName"
              className="font-sans font-medium text-[14px] sm:text-[15px] leading-[1.4] text-ink"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
              className="h-[46px] px-[14px] border border-stone rounded bg-parchment font-sans text-[15px] sm:text-[16px] text-ink placeholder:text-mist focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay/40 transition-colors"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="email"
            className="font-sans font-medium text-[14px] sm:text-[15px] leading-[1.4] text-ink"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="h-[46px] px-[14px] border border-stone rounded bg-parchment font-sans text-[15px] sm:text-[16px] text-ink placeholder:text-mist focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay/40 transition-colors"
          />
        </div>

        {/* Growth Journey Text Area */}
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="growthJourney"
            className="font-sans font-medium text-[14px] sm:text-[15px] leading-[1.4] text-ink"
          >
            What matters most to you on in your growth journey?
            <br />
            <span className="font-serif font-medium text-ash">
              (e.g. self reflection, tracking progress, supportive network, etc.)
            </span>
          </label>
          <textarea
            id="growthJourney"
            value={formData.growthJourney}
            onChange={(e) => setFormData({ ...formData, growthJourney: e.target.value })}
            rows={2}
            className="px-[14px] py-[10px] border border-stone rounded bg-parchment font-sans text-[15px] sm:text-[16px] leading-[1.5] text-ink placeholder:text-mist focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay/40 resize-none transition-colors"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          />
        </div>

        {/* Life Season Checkboxes */}
        <div className="flex flex-col gap-[8px]">
          <label
            className="font-sans font-medium text-[14px] sm:text-[15px] leading-[1.4] text-ink"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            What season of life are you in right now?
          </label>
          <div className="flex flex-col gap-[12px] mt-[4px]">
            {lifeSeasonOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-[12px] cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.lifeSeasons.includes(option.value)}
                  onChange={() => toggleLifeSeason(option.value)}
                  className="w-[18px] h-[18px] rounded border border-stone accent-clay cursor-pointer flex-shrink-0"
                />
                <span className="font-sans text-[14px] sm:text-[15px] leading-[1.4] text-ink/90">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Referral Source Dropdown */}
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="referralSource"
            className="font-sans font-medium text-[14px] sm:text-[15px] leading-[1.4] text-ink"
          >
            Where did you hear about us?
          </label>
          <CustomDropdown
            id="referralSource"
            value={formData.referralSource}
            onChange={(value) => setFormData({ ...formData, referralSource: value })}
            options={referralOptions}
            placeholder="Select"
          />
        </div>

        {/* Others Text Input (conditional) */}
        {formData.referralSource === 'others' && (
          <div className="flex flex-col gap-[8px]">
            <label
              htmlFor="referralSourceOther"
              className="font-sans font-medium text-[14px] sm:text-[15px] leading-[1.4] text-ink"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            >
              Please specify
            </label>
            <input
              id="referralSourceOther"
              type="text"
              value={formData.referralSourceOther}
              onChange={(e) => setFormData({ ...formData, referralSourceOther: e.target.value })}
              placeholder="Where did you hear about us?"
              className="h-[46px] px-[14px] border border-stone rounded bg-parchment font-sans text-[15px] sm:text-[16px] text-ink placeholder:text-mist focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay/40 transition-colors"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-[8px]">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-[48px] px-[24px] bg-clay rounded font-sans text-[15px] sm:text-[16px] text-parchment hover:bg-[#5f2d33] transition-colors duration-150 ease-editorial disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Joining…' : 'Join waitlist'}
          </button>
        </div>
      </form>
    </div>
  );
}
