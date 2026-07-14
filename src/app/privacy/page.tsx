/**
 * Privacy Policy Page
 *
 * Privacy policy page for The Rheii / Rheii
 *
 * Features:
 * - Navigation bar
 * - Privacy policy content with multiple sections
 * - Footer
 *
 * Design: Extracted from Figma (node-id: 477-5420)
 */

import Navigation from '@/components/landing/Navigation';
import LandingFooter from '@/components/landing/LandingFooter';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-parchment">
      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="max-w-[640px] mx-auto px-5 sm:px-4 pt-[160px] pb-[80px]">
        {/* Header */}
        <div className="flex flex-col gap-[10px] mb-[48px] pb-[32px] border-b border-stone">
          <h1 className="font-serif font-medium text-[36px] leading-[1.1] tracking-heading text-ink">
            Privacy Policy
          </h1>
          <p className="mono-tag mt-[8px]">Rheii Pte. Ltd. · Last updated December 2025</p>
        </div>

        {/* We honor your privacy */}
        <section className="flex flex-col gap-[20px] mb-[48px]">
          <h2
            className="font-serif font-medium text-[23px] leading-[30px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            We honor your privacy.
          </h2>
          <div
            className="font-body text-[16px] leading-[24px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            <p className="mb-4">Your privacy matters deeply to us.</p>
            <p className="mb-4">
              We know Rheii will be a place where you may choose to share personal reflections, and
              we treat that responsibility with care. All data is securely encrypted, and we follow
              strict practices to safeguard your information.
            </p>
            <p className="mb-4">
              If you've chosen to share your journal insights with us, any text you share is cleaned
              of personal identifiers and used only to help improve Rheii's guidance and
              understanding, so the experience gets better for you and for others on similar
              journeys.
            </p>
            <p className="mb-4">
              As we continue to grow, some of these terms may evolve. The most current version will
              always be available here. What won't change is our commitment to protecting your
              privacy.
            </p>
            <p>Our detailed privacy policy is available below.</p>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="flex flex-col gap-[20px] mb-[48px]">
          <h2
            className="font-serif font-medium text-[23px] leading-[30px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Privacy Policy
          </h2>
          <div
            className="font-body text-[16px] leading-[24px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            <p className="mb-4">
              Rheii ("we," "our,", "us", "Platform") provides access to certain websites, mobile
              applications, and related digital products and services for users ("you") who choose
              to use it. This Privacy Policy outlines the types of information we collect through
              Rheii, how that information may be used or shared, and the purposes behind those
              practices. It also describes how we safeguard your personal information, as well as
              the choices you have regarding your data.
            </p>
            <p>
              By accessing or using Rheii, you acknowledge and agree that this Privacy Policy
              applies to you. We encourage you to read it carefully.
            </p>
          </div>
        </section>

        {/* Information we collect */}
        <section className="flex flex-col gap-[20px] mb-[48px]">
          <h2
            className="font-serif font-medium text-[23px] leading-[30px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Information we collect
          </h2>
          <p
            className="font-body text-[16px] leading-[24px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            We may gather both information that can identify you ("Personal Information") and
            information that cannot be linked back to you or any individual ("Non-Personal
            Information").
          </p>

          <div className="flex flex-col gap-[16px]">
            {/* a) Account & Contact Information */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex gap-[8px]">
                <span className="font-inter text-[16px] leading-[28px] text-[#242424] w-[17px] text-right">
                  a)
                </span>
                <p
                  className="flex-1 font-body text-[16px] leading-[24px] text-[#322d29]"
                  style={{
                    fontVariationSettings: "'opsz' 14",
                  }}
                >
                  Account & Contact Information
                </p>
              </div>
              <p
                className="font-body text-[16px] leading-[24px] text-[#322d29] pl-[35px]"
                style={{
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                When you use the Platform, we may collect details such as the user's name and email
                address. This typically occurs when the user creates an account or contacts us with
                a question or request.
              </p>
            </div>

            {/* b) Technical information */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex gap-[8px]">
                <span className="font-inter text-[16px] leading-[28px] text-[#242424] w-[17px] text-right">
                  b)
                </span>
                <p
                  className="flex-1 font-body text-[16px] leading-[24px] text-[#322d29]"
                  style={{
                    fontVariationSettings: "'opsz' 14",
                  }}
                >
                  Technical information and other Online Identifiers
                </p>
              </div>
              <p
                className="font-body text-[16px] leading-[24px] text-[#322d29] pl-[35px]"
                style={{
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                We may collect users' IP address, browser or device type, approximate location, and
                any other system-generated identifiers
              </p>
            </div>

            {/* c) Interaction Data */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex gap-[8px]">
                <span className="font-inter text-[16px] leading-[28px] text-[#242424] w-[17px] text-right">
                  c)
                </span>
                <p
                  className="flex-1 font-body text-[16px] leading-[24px] text-[#322d29]"
                  style={{
                    fontVariationSettings: "'opsz' 14",
                  }}
                >
                  Interaction Data
                </p>
              </div>
              <p
                className="font-body text-[16px] leading-[24px] text-[#322d29] pl-[35px]"
                style={{
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                We may collect information about how you interact with Rheiii. For example, which
                screens or features you view, how long you spend in different parts of the app,
                actions you take within the Platform, and the timing of your sessions. This usage
                data helps us understand how Rheii is being used and supports ongoing improvement.
              </p>
            </div>

            {/* d) Conversation Data */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex gap-[8px]">
                <span className="font-inter text-[16px] leading-[28px] text-[#242424] w-[17px] text-right">
                  d)
                </span>
                <p
                  className="flex-1 font-body text-[16px] leading-[24px] text-[#322d29]"
                  style={{
                    fontVariationSettings: "'opsz' 14",
                  }}
                >
                  Conversation Data
                </p>
              </div>
              <p
                className="font-body text-[16px] leading-[24px] text-[#322d29] pl-[35px]"
                style={{
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                To deliver the features and guidance offered on Rheii, we may collect the content
                you enter during your reflections or journaling sessions on the Platform ("Journal
                Data"). Within your app settings, you can choose whether this Journal Data,
                including any personal details you include, is shared with our team to help improve
                Rheii's models and overall experience.
              </p>
            </div>
          </div>
        </section>

        {/* How we use and disclose information */}
        <section className="flex flex-col gap-[20px] mb-[48px]">
          <h2
            className="font-serif font-medium text-[23px] leading-[30px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            How we use and disclose information
          </h2>
          <div
            className="font-body text-[16px] leading-[24px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            <ul className="list-disc pl-6 space-y-4">
              <li>
                We may use the name and contact information you provide to operate and deliver
                Rheii's services. For example, helping you create or manage your account, enabling
                specific Platform features, or responding to messages from you. These details may
                also be used to send you updates or communications about Rheii, as described in the
                "Marketing Communications" section.
              </li>
              <li>
                We may share your name and contact information with trusted service providers and
                affiliated partners who assist us with core operational needs, such as hosting,
                customer support, or sending permitted communications.
              </li>
              <li>
                Information such as device identifiers or session tokens may be used to remember
                your preferences, support account functionality, and ensure the Platform runs
                smoothly. We may share these identifiers with third-party service providers who help
                us operate or maintain the Platform.
              </li>
              <li>
                Content you create within the platform, such as journaling entries, insights, or any
                other interactions, may be processed to improve the functionality, quality, and
                personalization of the Platform. This may include training underlying models or
                enhancing features for Users who have opted in to allow their data to support
                product improvement.
                <br />
                <br />
                We may also collaborate with academic or research partners to better understand user
                behavior and enhance Rheii's insights, but only for Users who have chosen to share
                their data for these purposes. Journal Data may be shared with service providers who
                support these improvement efforts. Additional information is described in the "Data
                Security" section.
              </li>
              <li>
                We may use or disclose any category of Personal Information described in this policy
                when required to comply with applicable laws, regulatory obligations, legal
                proceedings, subpoenas, or governmental requests. Such disclosures will only be made
                to authorized entities (e.g., courts, law enforcement, or government agencies).
              </li>
              <li>
                We may use information about how you use Rheii- such as your activity within the
                app, approximate location from your IP address, and device type- to operate,
                maintain, and improve the Platform. This helps us troubleshoot issues, remember your
                preferences, and personalize your experience. We may share this information with
                service providers who support these functions or when required by law.
              </li>
            </ul>
          </div>
        </section>

        {/* Data Security */}
        <section className="flex flex-col gap-[20px] mb-[48px]">
          <h2
            className="font-serif font-medium text-[23px] leading-[30px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Data Security
          </h2>
          <div
            className="font-body text-[16px] leading-[24px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            <p className="mb-4">
              We use a range of security measures to protect the Personal Information we collect.
              These measures may include encryption, secure password practices, multi-factor
              authentication, and limiting access to authorized team members based on their roles.
            </p>
            <p className="mb-4">
              To further protect your privacy, information that could directly identify you (such as
              your name) is separated from your data and replaced with a unique internal ID. The
              link between this ID and your identity is stored securely and accessible only to
              designated personnel.
            </p>
            <p>
              We routinely review and update our security practices. However, no method of
              transmitting or storing information online is completely risk-free, and we cannot
              guarantee absolute protection against unauthorized access.
            </p>
          </div>
        </section>

        {/* Underage & Minor Users */}
        <section className="flex flex-col gap-[20px] mb-[48px]">
          <h2
            className="font-serif font-medium text-[23px] leading-[30px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Underage & Minor Users
          </h2>
          <p
            className="font-body text-[16px] leading-[24px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Rheii is not designed for children under 13, and we do not knowingly collect personal
            information from anyone in that age group. If you believe a child under 13 has provided
            us with personal information, please contact us at{' '}
            <a href="mailto:hello@rheii.com" className="underline hover:opacity-70">
              hello@rheii.com
            </a>
            , and we will take steps to remove that data.
          </p>
        </section>

        {/* Direct Marketing */}
        <section className="flex flex-col gap-[20px] mb-[48px]">
          <h2
            className="font-serif font-medium text-[23px] leading-[30px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Direct Marketing
          </h2>
          <p
            className="font-body text-[16px] leading-[24px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Depending on your preferences, you may receive marketing messages from us. We may use
            your name and contact details to share updates about Rheii, new features, or other
            content we believe may be relevant to you. Email communications will always include an
            option to unsubscribe. If you have enabled push notifications, you can turn them off at
            any time through your device or app settings.
          </p>
        </section>

        {/* Retention of Personal Information */}
        <section className="flex flex-col gap-[20px] mb-[48px]">
          <h2
            className="font-serif font-medium text-[23px] leading-[30px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Retention of Personal Information
          </h2>
          <p
            className="font-body text-[16px] leading-[24px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            We retain and store Personal Information only for as long as necessary to carry out the
            purposes described in this Privacy Policy and as allowed by applicable law. For example,
            your Journal Data may be stored while your account remains active. You may request
            deletion of your Personal Information at any time.
          </p>
        </section>

        {/* Questions */}
        <section className="flex flex-col gap-[20px] mb-[48px]">
          <h2
            className="font-serif font-medium text-[23px] leading-[30px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Questions
          </h2>
          <p
            className="font-body text-[16px] leading-[24px] text-[#322d29]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Do reach out to{' '}
            <a href="mailto:hello@rheii.com" className="underline hover:opacity-70">
              hello@rheii.com
            </a>{' '}
            with any questions about our Privacy Policy.
          </p>
        </section>
      </div>

      {/* Footer */}
      <LandingFooter />
    </main>
  );
}
