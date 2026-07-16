'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PartnershipsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative w-full pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-[900px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <h1
            className="font-heading font-normal text-[36px] sm:text-[44px] md:text-[52px] leading-[44px] sm:leading-[54px] md:leading-[64px] tracking-[-0.8px] text-black"
            style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
          >
            Partner with us
          </h1>
        </motion.div>

        {/* Two Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20 md:mb-28">
          {/* Brands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2
              className="font-heading font-normal text-[24px] sm:text-[28px] leading-[32px] sm:leading-[36px] text-[#4a1e2a] mb-4"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              For Brands
            </h2>
            <p className="font-body font-normal text-[16px] sm:text-[17px] leading-[26px] sm:leading-[28px] text-gray-700">
              We collaborate with growth-minded brands that believe in intentional living. If your mission centers on self-development, mental wellness, and mindful alignment, Rheii offers a unique space to connect with a deeply engaged community.
            </p>
          </motion.div>

          {/* Practitioners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2
              className="font-heading font-normal text-[24px] sm:text-[28px] leading-[32px] sm:leading-[36px] text-[#4a1e2a] mb-4"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              For Practitioners
            </h2>
            <p className="font-body font-normal text-[16px] sm:text-[17px] leading-[26px] sm:leading-[28px] text-gray-700 mb-4">
              Integrate Rheii into your sessions as a supportive, reflective space where your clients can process their thoughts in real-time.
            </p>
            <p className="font-body font-normal text-[16px] sm:text-[17px] leading-[26px] sm:leading-[28px] text-gray-700">
              By bringing your practice onto Rheii, we help you drive more intentional, targeted conversations with your clients, while giving them the agency to drive their own growth.
            </p>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {submitted ? (
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
              <p className="font-body font-medium text-[18px] sm:text-[20px] leading-[28px] text-[#4a1e2a]">
                Thank you for your interest! If there&apos;s a fit, we&apos;ll contact you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h3
                className="font-heading font-normal text-[24px] sm:text-[28px] leading-[32px] sm:leading-[36px] text-black mb-8"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                Partner with us
              </h3>

              <div className="flex flex-col gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-body font-medium text-[14px] leading-[20px] text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-body text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#73383E] focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-body font-medium text-[14px] leading-[20px] text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-body text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#73383E] focus:border-transparent"
                  />
                </div>

                {/* Partnership Type */}
                <div>
                  <label htmlFor="type" className="block font-body font-medium text-[14px] leading-[20px] text-gray-700 mb-2">
                    Partnership
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-body text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#73383E] focus:border-transparent appearance-none"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="brand">Brand</option>
                    <option value="therapist">Therapist</option>
                    <option value="coach">Coach</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-body font-medium text-[14px] leading-[20px] text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-body text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#73383E] focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="self-start px-8 py-3 rounded-full bg-[#73383E] text-white font-inter font-medium text-[14px] leading-[20px] hover:bg-[#5c2d31] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
