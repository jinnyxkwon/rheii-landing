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
    referralSource: '',
    referralSourceOther: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      <div className="w-full max-w-[604px] mx-auto bg-[#F7F1ED] rounded-[16px] p-6 sm:p-[48px] shadow-lg">
        <div className="flex flex-col items-center text-center gap-[24px]">
          {/* Success Icon */}
          <div className="flex items-center justify-center w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-full bg-rheti-primary-100">
            <Check size={32} className="text-rheti-primary-500" strokeWidth={2.5} />
          </div>

          {/* Success Message */}
          <div className="flex flex-col gap-[8px]">
            <h2
              className="font-heading font-medium text-[24px] sm:text-[30px] leading-[32px] sm:leading-[40px] tracking-[-0.9px] text-rheti-neutral-600"
              style={{
                fontVariationSettings: "'GRAD' 0, 'wdth' 100",
              }}
            >
              You're on the list!
            </h2>
            <p
              className="font-body text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-[#262626]"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            >
              Thank you for joining the waitlist. We'll send you an email when Rheii launches.
            </p>
          </div>

          {/* Return to Home Button */}
          <button
            onClick={() => (window.location.href = '/')}
            className="mt-[16px] h-[48px] px-[28px] py-[12px] bg-rheti-primary-500 rounded-[100px] font-body font-semibold text-[15px] sm:text-[16px] leading-[24px] text-white hover:bg-rheti-primary-600 transition-colors"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[604px] mx-auto bg-[#F7F1ED] rounded-[16px] p-6 sm:p-[48px] shadow-lg">
      {/* Heading */}
      <div className="flex flex-col gap-[8px] items-center text-center mb-[24px] sm:mb-[32px]">
        <h1
          className="font-heading font-medium text-[24px] sm:text-[30px] leading-[32px] sm:leading-[40px] tracking-[-0.9px] text-rheti-neutral-600"
          style={{
            fontVariationSettings: "'GRAD' 0, 'wdth' 100",
          }}
        >
          Join the Waitlist for our Beta intake
        </h1>
        <p
          className="font-body text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-[#262626]"
          style={{
            fontVariationSettings: "'opsz' 14",
          }}
        >
          Rheii is invite-only.
          <br />
          Beta users will have first access and define the next wave of members.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] sm:gap-[24px]">
        {/* Error Message */}
        {error && (
          <div className="px-[16px] py-[12px] bg-red-50 border border-red-200 rounded-[4px]">
            <p className="font-body text-[14px] leading-[20px] text-red-600">{error}</p>
          </div>
        )}

        {/* First Name and Last Name */}
        <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[24px]">
          <div className="flex-1 flex flex-col gap-[8px]">
            <label
              htmlFor="firstName"
              className="font-body font-semibold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-rheti-neutral-600"
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
              className="h-[44px] px-[16px] py-[8px] border border-[#d9d9d9] rounded-[4px] font-body text-[15px] sm:text-[16px] leading-[24px] text-rheti-neutral-600 focus:outline-none focus:border-rheti-primary-500"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            />
          </div>
          <div className="flex-1 flex flex-col gap-[8px]">
            <label
              htmlFor="lastName"
              className="font-body font-semibold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-rheti-neutral-600"
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
              className="h-[44px] px-[16px] py-[8px] border border-[#d9d9d9] rounded-[4px] font-body text-[15px] sm:text-[16px] leading-[24px] text-rheti-neutral-600 focus:outline-none focus:border-rheti-primary-500"
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
            className="font-body font-semibold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-rheti-neutral-600"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="h-[44px] px-[16px] py-[8px] border border-[#d9d9d9] rounded-[4px] font-body text-[15px] sm:text-[16px] leading-[24px] text-rheti-neutral-600 focus:outline-none focus:border-rheti-primary-500"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          />
        </div>

        {/* Growth Journey Text Area */}
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="growthJourney"
            className="font-body font-semibold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-rheti-neutral-600"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            What matters most to you on in your growth journey?
            <br />
            <span
              className="font-body font-normal text-[#5e5a57]"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            >
              (e.g. self reflection, tracking progress, supportive network, etc.)
            </span>
          </label>
          <textarea
            id="growthJourney"
            value={formData.growthJourney}
            onChange={(e) => setFormData({ ...formData, growthJourney: e.target.value })}
            rows={4}
            className="px-[16px] py-[8px] border border-[#d9d9d9] rounded-[4px] font-body text-[15px] sm:text-[16px] leading-[24px] text-rheti-neutral-600 focus:outline-none focus:border-rheti-primary-500 resize-none"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          />
        </div>

        {/* Referral Source Dropdown */}
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="referralSource"
            className="font-body font-semibold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-rheti-neutral-600"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
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
              className="font-body font-semibold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-rheti-neutral-600"
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
              className="h-[44px] px-[16px] py-[8px] border border-[#d9d9d9] rounded-[4px] font-body text-[15px] sm:text-[16px] leading-[24px] text-rheti-neutral-600 focus:outline-none focus:border-rheti-primary-500"
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
            className="w-full h-[48px] px-[24px] py-[12px] bg-white border border-black rounded-[100px] font-body font-semibold text-[15px] sm:text-[16px] leading-[24px] text-black hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            {isLoading ? 'Joining...' : 'Join Waitlist'}
          </button>
        </div>
      </form>
    </div>
  );
}
