import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Cookie, Eye, Shield } from "lucide-react";

import { Footer } from "@/components";
import { ManageCookiesButton } from "@/components/privacy/ManageCookiesButton";
import {
  COMPANY_LEGAL_NAME,
  COMPANY_NAME,
  COMPANY_NUMBER,
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  COOKIE_CONSENT_KEY,
  MAIN_PHONE_DISPLAY,
  MAIN_PHONE_HREF,
  OUT_OF_HOURS_PHONE_DISPLAY,
  OUT_OF_HOURS_PHONE_HREF,
  POLICY_LAST_UPDATED_DATE,
  REGISTERED_OFFICE_ADDRESS,
  ROUTES,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy, Cookies & Accessibility | ${COMPANY_NAME}`,
  description: `Privacy policy, cookie policy and accessibility statement for ${COMPANY_LEGAL_NAME}.`,
};

const PrivacyPage = (): ReactNode => {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16 md:py-20">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href={ROUTES.HOME}
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#184f4b] transition-colors hover:text-[#22b6b1]"
          >
            <ArrowLeft size={16} />
            <span>Back to home</span>
          </Link>
        </div>

        {/* H1: Privacy, cookies and accessibility */}
        <header className="border-b border-[#d6ece9] pb-8">
          <h1 className="font-outfit text-3xl font-bold tracking-tight text-[#0f2c2a] sm:text-4xl md:text-5xl">
            Privacy, cookies and accessibility
          </h1>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#22b6b1]" />
          <p className="mt-4 font-sans text-base leading-relaxed text-[#415e5b] sm:text-lg">
            How {COMPANY_LEGAL_NAME} handles your personal information, uses
            cookies, and makes this website accessible to everyone.
          </p>

          {/* Quick Jump Links */}
          <nav
            aria-label="Page contents"
            className="mt-6 flex flex-wrap gap-2.5"
          >
            <a
              href="#privacy"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d6ece9] bg-[#f9fdfc] px-4 py-1.5 font-outfit text-xs font-semibold text-[#184f4b] transition-colors hover:border-[#22b6b1] hover:bg-[#eef7f6]"
            >
              <Shield size={14} className="text-[#22b6b1]" />
              <span>Privacy policy</span>
            </a>
            <a
              href="#cookies"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d6ece9] bg-[#f9fdfc] px-4 py-1.5 font-outfit text-xs font-semibold text-[#184f4b] transition-colors hover:border-[#22b6b1] hover:bg-[#eef7f6]"
            >
              <Cookie size={14} className="text-[#22b6b1]" />
              <span>Cookie policy</span>
            </a>
            <a
              href="#accessibility"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d6ece9] bg-[#f9fdfc] px-4 py-1.5 font-outfit text-xs font-semibold text-[#184f4b] transition-colors hover:border-[#22b6b1] hover:bg-[#eef7f6]"
            >
              <Eye size={14} className="text-[#22b6b1]" />
              <span>Accessibility statement</span>
            </a>
          </nav>
        </header>

        <article className="mt-12 space-y-16">
          {/* Section 1: Privacy policy */}
          <section id="privacy" className="scroll-mt-28">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl">
              Privacy policy
            </h2>
            <p className="mt-1.5 font-sans text-xs font-medium text-[#5a7673]">
              Last updated: {POLICY_LAST_UPDATED_DATE}
            </p>
            <div className="mt-2.5 h-0.5 w-12 rounded-full bg-[#22b6b1]" />

            <div className="mt-6 space-y-5 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base sm:leading-relaxed">
              <p>
                This notice explains how {COMPANY_LEGAL_NAME} (company number{" "}
                {COMPANY_NUMBER}), {REGISTERED_OFFICE_ADDRESS}, collects and uses
                personal information. We are the data controller for the
                information we hold about you.
              </p>

              <p>
                We are committed to protecting your privacy and respecting the
                personal data of our clients, their families, website visitors
                and job applicants in accordance with the Data Protection Act
                2018 and the UK General Data Protection Regulation (UK GDPR).
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                1. Information We Collect
              </h3>
              <p>
                When you contact us, complete an enquiry or call-back form, or
                arrange care, we may collect:
              </p>
              <ul className="list-disc space-y-1.5 pl-6 text-[#415e5b]">
                <li>
                  Contact details: your name, telephone number, email address
                  and home postcode.
                </li>
                <li>
                  Care information: details regarding the person needing care,
                  support requirements, routines and preferences.
                </li>
                <li>
                  Health and medical details: with explicit consent, health
                  conditions, medications and mobility needs necessary to
                  provide safe personal care.
                </li>
                <li>
                  Job applicant data: CVs, employment history, qualifications,
                  references and DBS check information for care candidates.
                </li>
              </ul>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                2. How We Use Your Data
              </h3>
              <p>
                We process your personal information to assess care needs,
                coordinate visits, deliver safe and person-centred home care,
                respond to enquiries and job applications, and meet regulatory
                and legal obligations.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                3. Lawful Basis for Processing
              </h3>
              <p>
                We process personal information under contractual necessity,
                legitimate interests (such as responding to your enquiries) and
                legal obligation. Special category health data is processed
                under explicit consent and for the provision of health or social
                care.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                4. Data Sharing
              </h3>
              <p>
                We do not sell your personal data. We only share information
                with healthcare professionals (such as GPs, pharmacists,
                district nurses and hospital discharge teams) where necessary
                for safe care delivery, or with regulatory and safeguarding
                bodies where required by law.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                5. Security Measures
              </h3>
              <p>
                Records are kept on secure, password-protected systems, and only
                management involved in the care process can access them when
                needed.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                6. Data Retention
              </h3>
              <p>
                Website enquiries, general correspondence and unsuccessful job
                application records are kept for <strong>24 months</strong> and
                then securely deleted, unless care commences or a longer
                retention period is required by law or regulatory standards for
                care records.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                7. Your Rights and Data Protection Contact
              </h3>
              <p>
                Under UK data protection law, you have the right to access,
                rectify or request erasure of your personal data, or restrict
                its processing. To exercise any of these rights or ask a
                question about how we handle data, contact our{" "}
                <strong>Data Protection Lead</strong> at{" "}
                <a
                  href={CONTACT_EMAIL_HREF}
                  className="font-semibold text-[#184f4b] underline hover:text-[#22b6b1]"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
              <p>
                You can also complain to the Information Commissioner&apos;s
                Office at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#184f4b] underline hover:text-[#22b6b1]"
                >
                  ico.org.uk
                </a>
                .
              </p>
            </div>
          </section>

          {/* Section 2: Cookie policy */}
          <section
            id="cookies"
            className="scroll-mt-28 border-t border-[#d6ece9] pt-12"
          >
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl">
              Cookie policy
            </h2>
            <p className="mt-1.5 font-sans text-xs font-medium text-[#5a7673]">
              Last updated: {POLICY_LAST_UPDATED_DATE}
            </p>
            <div className="mt-2.5 h-0.5 w-12 rounded-full bg-[#22b6b1]" />

            <div className="mt-6 space-y-5 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base sm:leading-relaxed">
              <p>
                This website uses a small number of cookies. Essential cookies
                keep the site working. Analytics cookies only load if you agree
                to them.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                1. What are cookies?
              </h3>
              <p>
                Cookies are small text files stored on your computer or mobile
                device when you visit a website. They help the site remember
                your preferences and understand how visitors use our pages.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                2. Cookies used on this site
              </h3>
              <div className="overflow-x-auto rounded-xl border border-[#d6ece9]">
                <table className="w-full text-left font-sans text-xs sm:text-sm">
                  <thead className="bg-[#f4faf9] text-[#0f2c2a]">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Cookie Name</th>
                      <th className="px-4 py-3 font-semibold">Purpose</th>
                      <th className="px-4 py-3 font-semibold">Category</th>
                      <th className="px-4 py-3 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#d6ece9] text-[#415e5b]">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">
                        {COOKIE_CONSENT_KEY}
                      </td>
                      <td className="px-4 py-3">
                        Remembers your choice to accept or reject non-essential
                        cookies.
                      </td>
                      <td className="px-4 py-3">Essential</td>
                      <td className="px-4 py-3">12 months</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">_ga</td>
                      <td className="px-4 py-3">
                        Used to distinguish visitors for aggregate website
                        analytics if you accept analytics cookies.
                      </td>
                      <td className="px-4 py-3">Analytics (Optional)</td>
                      <td className="px-4 py-3">Up to 2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">_gid</td>
                      <td className="px-4 py-3">
                        Used to measure page views during a visit if you accept
                        analytics cookies.
                      </td>
                      <td className="px-4 py-3">Analytics (Optional)</td>
                      <td className="px-4 py-3">24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#5a7673] sm:text-sm">
                We do not use advertising or behavioural tracking tools (such as
                Facebook Pixel or Hotjar) on this website.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                3. Managing your preferences
              </h3>
              <p>
                You can change or withdraw your cookie preferences at any time
                using the button below or via &quot;Cookie Settings&quot; in the
                website footer.
              </p>

              <div className="pt-2">
                <ManageCookiesButton />
              </div>
            </div>
          </section>

          {/* Section 3: Accessibility statement */}
          <section
            id="accessibility"
            className="scroll-mt-28 border-t border-[#d6ece9] pt-12"
          >
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl">
              Accessibility statement
            </h2>
            <p className="mt-1.5 font-sans text-xs font-medium text-[#5a7673]">
              Last updated: {POLICY_LAST_UPDATED_DATE}
            </p>
            <div className="mt-2.5 h-0.5 w-12 rounded-full bg-[#22b6b1]" />

            <div className="mt-6 space-y-5 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base sm:leading-relaxed">
              <p>
                We want everyone to be able to use this website. We aim to meet
                WCAG 2.1 Level AA. If you have difficulty using any part of the
                site, email{" "}
                <a
                  href={CONTACT_EMAIL_HREF}
                  className="font-semibold text-[#184f4b] underline hover:text-[#22b6b1]"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                or call{" "}
                <a
                  href={OUT_OF_HOURS_PHONE_HREF}
                  className="font-semibold text-[#184f4b] underline hover:text-[#22b6b1]"
                >
                  {OUT_OF_HOURS_PHONE_DISPLAY}
                </a>
                .
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                Measures to Support Accessibility
              </h3>
              <ul className="list-disc space-y-1.5 pl-6 text-[#415e5b]">
                <li>
                  Clear heading structure with proper HTML5 semantic landmarks.
                </li>
                <li>
                  High colour contrast ratios between text and background
                  colours for legibility.
                </li>
                <li>
                  Full keyboard navigation across interactive menus, accordions
                  and forms.
                </li>
                <li>
                  Descriptive alt text for meaningful imagery and empty alt
                  attributes on decorative graphics.
                </li>
                <li>
                  Responsive layouts that support browser text zooming up to
                  200% without loss of content.
                </li>
              </ul>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                Accessibility Review
              </h3>
              <p>
                This website was last reviewed for accessibility compliance on{" "}
                {POLICY_LAST_UPDATED_DATE}. There are currently no known
                accessibility issues obstructing access to content or forms. We
                continue to review new pages and updates as they are published.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                Feedback and Contact Information
              </h3>
              <p>
                If you encounter any accessibility barriers or need information
                in an alternative format, please contact us:
              </p>
              <ul className="list-disc space-y-1.5 pl-6 text-[#415e5b]">
                <li>
                  Email:{" "}
                  <a
                    href={CONTACT_EMAIL_HREF}
                    className="font-semibold text-[#184f4b] underline hover:text-[#22b6b1]"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  Main telephone:{" "}
                  <a
                    href={MAIN_PHONE_HREF}
                    className="font-semibold text-[#184f4b] underline hover:text-[#22b6b1]"
                  >
                    {MAIN_PHONE_DISPLAY}
                  </a>{" "}
                  (or{" "}
                  <a
                    href={OUT_OF_HOURS_PHONE_HREF}
                    className="font-semibold text-[#184f4b] underline hover:text-[#22b6b1]"
                  >
                    {OUT_OF_HOURS_PHONE_DISPLAY}
                  </a>
                  )
                </li>
                <li>Address: {REGISTERED_OFFICE_ADDRESS}</li>
              </ul>
              <p>We will be in touch during office hours.</p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
