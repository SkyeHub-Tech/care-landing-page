import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Cookie, Eye } from "lucide-react";

import { Footer } from "@/components";
import { ManageCookiesButton } from "@/components/privacy/ManageCookiesButton";

export const metadata: Metadata = {
  title: "Privacy, Cookies & Accessibility | Lighter House Care",
  description:
    "How Lighter House Care Limited handles your personal information, uses cookies, and makes this website accessible to everyone.",
};

const PrivacyPage = (): ReactNode => {
  return (
    <div className="min-h-screen bg-white">
      {/* Plain White Text Column Container */}
      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16 md:py-20">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
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
            How Lighter House Care Limited handles your personal information, uses
            cookies, and makes this website accessible to everyone.
          </p>

          {/* Quick Jump Links */}
          <nav aria-label="Page contents" className="mt-6 flex flex-wrap gap-2.5">
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

        {/* Article Body */}
        <article className="mt-12 space-y-16">
          {/* Section 1: Privacy policy */}
          <section id="privacy" className="scroll-mt-28">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl">
              Privacy policy
            </h2>
            <div className="mt-2.5 h-0.5 w-12 rounded-full bg-[#22b6b1]" />

            <div className="mt-4 rounded-xl border border-amber-200/90 bg-amber-50/70 p-4 font-sans text-xs sm:text-sm font-medium text-amber-900">
              [PRIVACY POLICY TEXT TO BE SUPPLIED BY LIGHTER HOUSE]
            </div>

            <div className="mt-6 space-y-5 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base sm:leading-relaxed">
              <p>
                Lighter House Care Limited (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
                protecting your privacy and respecting the personal data of our clients, their
                families, visitors, and job applicants in accordance with the Data Protection Act 2018
                and the UK General Data Protection Regulation (UK GDPR).
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                1. Information We Collect
              </h3>
              <p>
                When you contact us, complete an enquiry or call-back form, or arrange care, we may collect:
              </p>
              <ul className="list-disc space-y-1.5 pl-6 text-[#415e5b]">
                <li>Contact details: your name, telephone number, email address, and home postcode.</li>
                <li>Care information: details regarding the person needing care, support requirements, routines, and preferences.</li>
                <li>Health & medical details: with explicit consent, health conditions, medications, and mobility needs necessary to provide safe personal care.</li>
                <li>Job applicant data: CVs, employment history, qualifications, and DBS check information for care candidates.</li>
              </ul>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                2. How We Use Your Data
              </h3>
              <p>
                We process your personal information to assess care needs, coordinate visits, deliver safe and compassionate home care, respond to enquiries, and comply with Care Quality Commission (CQC) regulatory standards.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                3. Lawful Basis for Processing
              </h3>
              <p>
                We process personal information under contractual necessity, legitimate interests (such as responding to your service requests), and legal obligation. Special category health data is processed under explicit consent and for the provision of health or social care.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                4. Data Sharing & Security
              </h3>
              <p>
                We do not sell your personal data. We only share information with healthcare professionals (e.g., GPs, district nurses, hospital discharge coordinators) where necessary for care delivery or with regulatory bodies (e.g., CQC) as required by law.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                5. Your Rights
              </h3>
              <p>
                Under UK data protection law, you have the right to access, rectify, or request erasure of your data, or restrict its processing. To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:enquiries@lighterhouse.co.uk"
                  className="font-semibold text-[#184f4b] underline hover:text-[#22b6b1]"
                >
                  enquiries@lighterhouse.co.uk
                </a>
                .
              </p>
            </div>
          </section>

          {/* Section 2: Cookie policy */}
          <section id="cookies" className="scroll-mt-28 border-t border-[#d6ece9] pt-12">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl">
              Cookie policy
            </h2>
            <div className="mt-2.5 h-0.5 w-12 rounded-full bg-[#22b6b1]" />

            <div className="mt-4 rounded-xl border border-amber-200/90 bg-amber-50/70 p-4 font-sans text-xs sm:text-sm font-medium text-amber-900">
              [COOKIE POLICY TEXT TO BE SUPPLIED BY LIGHTER HOUSE]
            </div>

            <div className="mt-6 space-y-5 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base sm:leading-relaxed">
              <p>
                We use cookies to understand how people use our site and to improve it.
                You can accept or reject non-essential cookies. Analytics must not load
                until the visitor clicks Accept.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                1. What are cookies?
              </h3>
              <p>
                Cookies are small text files stored on your computer or mobile device when you visit a website. They help websites function efficiently and provide usage information to the site owners.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                2. Types of cookies we use
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
                      <td className="px-4 py-3 font-mono text-xs">lighter_house_cookie_consent</td>
                      <td className="px-4 py-3">Remembers your choice to accept or reject non-essential cookies.</td>
                      <td className="px-4 py-3">Essential</td>
                      <td className="px-4 py-3">12 months</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">_ga, _gid (Analytics)</td>
                      <td className="px-4 py-3">Helps us measure visitor traffic and website engagement. Loaded only upon explicit consent.</td>
                      <td className="px-4 py-3">Analytics / Non-essential</td>
                      <td className="px-4 py-3">Up to 2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                3. Managing your preferences
              </h3>
              <p>
                You can change or withdraw your cookie preferences at any time. When you reject non-essential cookies, no analytics or tracking scripts will run.
              </p>

              <div className="pt-2">
                <ManageCookiesButton />
              </div>
            </div>
          </section>

          {/* Section 3: Accessibility statement */}
          <section id="accessibility" className="scroll-mt-28 border-t border-[#d6ece9] pt-12">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl">
              Accessibility statement
            </h2>
            <div className="mt-2.5 h-0.5 w-12 rounded-full bg-[#22b6b1]" />

            <div className="mt-4 rounded-xl border border-amber-200/90 bg-amber-50/70 p-4 font-sans text-xs sm:text-sm font-medium text-amber-900">
              [ACCESSIBILITY STATEMENT TO BE SUPPLIED BY LIGHTER HOUSE]
            </div>

            <div className="mt-6 space-y-5 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base sm:leading-relaxed">
              <p>
                Lighter House Care Limited is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We actively work to increase the accessibility and usability of our website, adhering to the Web Content Accessibility Guidelines (WCAG 2.1) Level AA standards.
              </p>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                Measures to Support Accessibility
              </h3>
              <ul className="list-disc space-y-1.5 pl-6 text-[#415e5b]">
                <li>Clear heading structure with proper HTML5 semantic landmarks.</li>
                <li>High color contrast ratios between text and background colors for optimal legibility.</li>
                <li>Full keyboard navigation accessibility across all interactive components, accordions, and forms.</li>
                <li>Descriptive alt text for all meaningful imagery and icons.</li>
                <li>Flexible, responsive layouts that support text zooming up to 200% without loss of content.</li>
              </ul>

              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                Feedback & Contact Information
              </h3>
              <p>
                If you encounter any accessibility barriers on our site or need assistance accessing any information, please reach out to us:
              </p>
              <ul className="list-disc space-y-1.5 pl-6 text-[#415e5b]">
                <li>
                  Phone:{" "}
                  <a href="tel:03300432864" className="font-semibold text-[#184f4b] underline hover:text-[#22b6b1]">
                    0330 043 2864
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:enquiries@lighterhouse.co.uk"
                    className="font-semibold text-[#184f4b] underline hover:text-[#22b6b1]"
                  >
                    enquiries@lighterhouse.co.uk
                  </a>
                </li>
                <li>Address: Westlink House, 981 Great West Road, Suite 140E, Brentford, TW8 9DN</li>
              </ul>
              <p>We aim to respond to accessibility feedback within 2 working days.</p>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPage;
