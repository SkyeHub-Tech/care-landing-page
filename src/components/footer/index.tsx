"use client";

import Image from "next/image";
import Link from "next/link";

import { CookieBanner, openCookieBanner } from "./CookieBanner";
import { images } from "@/utils/images";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative z-10 mx-auto max-w-[1020px] px-4 pt-4 pb-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          <div>
            <Link href="/">
              <Image
                src={images.logo}
                alt="Lighter House Home Care"
                className="h-28 w-56 object-contain cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <h3 className="font-outfit mb-5 font-medium text-[#102a28]">Quick Link</h3>
            <ul className="space-y-3 text-sm text-[#334d4a]">
              <li>
                <Link href="/" className="hover:underline hover:text-[#22b6b1] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:underline hover:text-[#22b6b1] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline hover:text-[#22b6b1] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:underline hover:text-[#22b6b1] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline hover:text-[#22b6b1] transition-colors">
                  Privacy & Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-outfit mb-5 font-medium text-[#102a28]">Our Services</h3>
            <ul className="space-y-3 text-sm text-[#334d4a]">
              <li>
                <Link href="/services" className="hover:underline hover:text-[#22b6b1] transition-colors">
                  Personal Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline hover:text-[#22b6b1] transition-colors">
                  Companionship
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline hover:text-[#22b6b1] transition-colors">
                  Comfortable Living
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline hover:text-[#22b6b1] transition-colors">
                  Nutritious Meals
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline hover:text-[#22b6b1] transition-colors">
                  Health Monitoring
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline hover:text-[#22b6b1] transition-colors">
                  24/7 Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-outfit mb-5 font-medium text-[#102a28]">Contact Us</h3>
            <ul className="space-y-3 text-sm text-[#334d4a]">
              <li>
                <Link href="/contact" className="hover:underline hover:text-[#22b6b1] transition-colors">
                  Westlink House 981 Great West Road Suite 140E Brentford TW8 9DN
                </Link>
              </li>
              <li>
                <a href="mailto:enquiries@lighterhouse.co.uk" className="hover:underline hover:text-[#22b6b1] transition-colors">
                  enquiries@lighterhouse.co.uk
                </a>
              </li>
              <li>
                <a href="tel:03300432864" className="hover:underline hover:text-[#22b6b1] transition-colors">
                  0330 043 2864
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="mt-14 border-t border-[#d7e9e7] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8ba19f]">
          <p>© LighterHouse {currentYear}. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <Link
              href="/privacy#privacy"
              className="hover:underline hover:text-[#22b6b1] transition-colors"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-[#c1d5d3]">·</span>
            <Link
              href="/privacy#cookies"
              className="hover:underline hover:text-[#22b6b1] transition-colors"
            >
              Cookie Policy
            </Link>
            <span aria-hidden="true" className="text-[#c1d5d3]">·</span>
            <Link
              href="/privacy#accessibility"
              className="hover:underline hover:text-[#22b6b1] transition-colors"
            >
              Accessibility
            </Link>
            <span aria-hidden="true" className="text-[#c1d5d3]">·</span>
            <button
              type="button"
              onClick={openCookieBanner}
              className="cursor-pointer hover:underline hover:text-[#22b6b1] transition-colors"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </footer>

      {/* Global floating cookie consent banner */}
      <CookieBanner />
    </>
  );
}

