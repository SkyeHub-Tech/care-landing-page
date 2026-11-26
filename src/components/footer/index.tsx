"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import {
  COMPANY_LEGAL_NAME,
  COMPANY_NAME,
  COMPANY_REGISTRATION_LINE,
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  COPYRIGHT_LINE,
  COVERAGE_LINE,
  CQC_REGISTRATION_TEXT,
  MAIN_PHONE_DISPLAY,
  MAIN_PHONE_HREF,
  OFFICE_HOURS_TEXT,
  OFFICE_VISITS_NOTE,
  OUT_OF_HOURS_PHONE_DISPLAY,
  OUT_OF_HOURS_PHONE_HREF,
  REGISTERED_OFFICE_ADDRESS,
  ROUTES,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { images } from "@/utils/images";

import { openCookieBanner } from "./CookieBanner";

const FOOTER_SERVICES = [
  { label: "Personal care", href: "/services#personal-care" },
  { label: "Medication support", href: "/services#medication-support" },
  { label: "Companionship", href: "/services#companionship-care" },
  { label: "Dementia care", href: "/services#dementia-care" },
  { label: "Respite care", href: "/services#respite-care" },
  { label: "Hospital to home", href: "/services#hospital-to-home" },
  { label: "Meals and home help", href: "/services#meals-and-home-help" },
  { label: "Live-in care", href: "/services#live-in-care" },
] as const;

export const Footer = (): ReactNode => {
  return (
    <footer className="relative z-10 mx-auto max-w-[1120px] px-4 pt-8 pb-14 sm:px-6">
      <div className="grid gap-10 md:grid-cols-[1.25fr_0.8fr_1fr_1.15fr]">
        {/* Brand, coverage & social links */}
        <div>
          <Link href={ROUTES.HOME} aria-label={`${COMPANY_NAME} home`}>
            <Image
              src={images.logo}
              alt={COMPANY_NAME}
              className="h-24 w-48 cursor-pointer object-contain"
            />
          </Link>
          <p className="mt-3 font-sans text-xs leading-relaxed text-[#415e5b]">
            {COVERAGE_LINE}
          </p>

          {/* Social media links */}
          <div className="mt-4 flex flex-col gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${COMPANY_NAME} on ${social.name} (${social.handle})`}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#184f4b] transition-colors hover:text-[#22b6b1]"
              >
                {social.name === "Facebook" ? (
                  <FaFacebook size={16} className="shrink-0 text-[#184f4b]" />
                ) : (
                  <FaInstagram size={16} className="shrink-0 text-[#184f4b]" />
                )}
                <span>
                  {social.name}: {social.handle}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 font-outfit font-medium text-[#102a28]">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-[#334d4a]">
            <li>
              <Link
                href={ROUTES.HOME}
                className="transition-colors hover:text-[#22b6b1] hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.ABOUT_US}
                className="transition-colors hover:text-[#22b6b1] hover:underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.SERVICES}
                className="transition-colors hover:text-[#22b6b1] hover:underline"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.CONTACT}
                className="transition-colors hover:text-[#22b6b1] hover:underline"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.CONTACT_FAQS}
                className="transition-colors hover:text-[#22b6b1] hover:underline"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.PRIVACY}
                className="transition-colors hover:text-[#22b6b1] hover:underline"
              >
                Privacy &amp; Cookies
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services (8 section links) */}
        <div>
          <h3 className="mb-5 font-outfit font-medium text-[#102a28]">
            Our Services
          </h3>
          <ul className="space-y-2.5 text-sm text-[#334d4a]">
            {FOOTER_SERVICES.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="transition-colors hover:text-[#22b6b1] hover:underline"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us, Office Hours & Out-of-Hours */}
        <div>
          <h3 className="mb-5 font-outfit font-medium text-[#102a28]">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-[#334d4a]">
            <li>
              <Link
                href={ROUTES.CONTACT}
                className="transition-colors hover:text-[#22b6b1] hover:underline"
              >
                {REGISTERED_OFFICE_ADDRESS}
              </Link>
            </li>
            <li>
              <a
                href={CONTACT_EMAIL_HREF}
                className="transition-colors hover:text-[#22b6b1] hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={MAIN_PHONE_HREF}
                className="font-semibold text-[#184f4b] transition-colors hover:text-[#22b6b1] hover:underline"
              >
                {MAIN_PHONE_DISPLAY}
              </a>
            </li>
            <li className="text-xs leading-relaxed text-[#415e5b]">
              {OFFICE_HOURS_TEXT}. {OFFICE_VISITS_NOTE}
            </li>
            <li className="text-xs leading-relaxed text-[#415e5b]">
              Out-of-hours support for existing clients and their families on{" "}
              <a
                href={OUT_OF_HOURS_PHONE_HREF}
                className="font-semibold text-[#184f4b] hover:text-[#22b6b1] hover:underline"
              >
                {OUT_OF_HOURS_PHONE_DISPLAY}
              </a>
              .
            </li>
          </ul>
        </div>
      </div>

      {/* Company registration & CQC regulatory line */}
      <div className="mt-10 border-t border-[#d7e9e7] pt-5 text-center text-xs leading-relaxed text-[#5a7673]">
        <p>
          {COMPANY_LEGAL_NAME}. {COMPANY_REGISTRATION_LINE}{" "}
          {CQC_REGISTRATION_TEXT}
        </p>
      </div>

      {/* Bottom copyright and legal links */}
      <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-[#e8f4f3] pt-5 text-xs text-[#6f8a87] sm:flex-row">
        <p>{COPYRIGHT_LINE}</p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <Link
            href={ROUTES.PRIVACY_POLICY}
            className="transition-colors hover:text-[#22b6b1] hover:underline"
          >
            Privacy Policy
          </Link>
          <span aria-hidden="true" className="text-[#c1d5d3]">
            ·
          </span>
          <Link
            href={ROUTES.COOKIE_POLICY}
            className="transition-colors hover:text-[#22b6b1] hover:underline"
          >
            Cookie Policy
          </Link>
          <span aria-hidden="true" className="text-[#c1d5d3]">
            ·
          </span>
          <Link
            href={ROUTES.ACCESSIBILITY}
            className="transition-colors hover:text-[#22b6b1] hover:underline"
          >
            Accessibility
          </Link>
          <span aria-hidden="true" className="text-[#c1d5d3]">
            ·
          </span>
          <button
            type="button"
            onClick={openCookieBanner}
            className="cursor-pointer transition-colors hover:text-[#22b6b1] hover:underline"
          >
            Cookie Settings
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
