import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";

import { Footer } from "@/components";
import { DoWeCoverYourArea } from "@/components/contacts/DoWeCoverYourArea";
import { FrequentlyAskedQuestions } from "@/components/contacts/FrequentlyAskedQuestions";
import { TalkToUsAboutCare } from "@/components/contacts/TalkToUsAboutCare";
import { images } from "@/utils/images";

export const metadata: Metadata = {
  title: "Contact Us | Lighter House Care",
  description:
    "Talk to us about care. Whether you're ready to arrange care or just want to understand your options, we're happy to help.",
};

const ContactPage = (): ReactNode => {
  return (
    <section className="bg-white">
      {/* Hero Banner */}
      <section className="relative w-full h-[293px] overflow-hidden">
        {/* Background Collage */}
        <div className="absolute inset-0">
          <Image
            src={images.hero_large}
            alt="Contact Us"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark Teal Overlay */}
        <div className="absolute inset-0 bg-[#184f4b]/80" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="relative inline-block">
            <h1 className="font-serif text-white text-5xl md:text-6xl font-bold uppercase tracking-wide">
              Contact Us
            </h1>

            {/* Brush Underline */}
            <div className="absolute -bottom-3 left-1/3 h-4 w-44 -translate-x-1/2">
              <svg viewBox="0 0 300 40" className="h-full w-full" fill="none">
                <path
                  d="M10 20C60 10 120 35 180 20C220 12 260 25 290 15"
                  stroke="#2CC9C0"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <p className="font-sans mt-8 max-w-4xl text-white text-xl md:text-[26px] leading-relaxed font-medium">
            Comprehensive care designed to meet each resident&apos;s personal
            and medical needs.
          </p>
        </div>
      </section>

      {/* Talk to us about care Section */}
      <TalkToUsAboutCare />

      {/* Do we cover your area? Section */}
      <DoWeCoverYourArea />

      {/* Frequently asked questions Section */}
      <FrequentlyAskedQuestions />

      <Footer />
    </section>
  );
};

export default ContactPage;

