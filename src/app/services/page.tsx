import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

import { Contact, Footer } from "@/components";
import { PayingForCare } from "@/components/services/PayingForCare";
import { ServicesSectionsList } from "@/components/services/ServiceDetailSection";
import { ServicesJumpLinks } from "@/components/services/ServicesJumpLinks";
import { servicesHeroData } from "@/utils/data";
import { images } from "@/utils/images";

const ServicesPage = (): ReactNode => {
  return (
    <section>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden py-14 sm:py-20 md:py-24 lg:py-28">
        {/* Background Collage */}
        <div className="absolute inset-0">
          <Image
            src={images.hero_large}
            alt="Home care services"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Dark Teal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2927]/95 via-[#11433f]/90 to-[#184f4b]/80" />

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl text-left">
            <h1 className="font-outfit text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[50px] leading-[1.18]">
              {servicesHeroData.title}
            </h1>

            <div className="mt-3.5 h-1 w-20 rounded-full bg-[#22b6b1]" />

            <p className="mt-5 font-sans text-base leading-relaxed text-white/95 sm:text-lg max-w-2xl">
              {servicesHeroData.body}
            </p>

            {/* Action Buttons: Desktop inline, Mobile stacked */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <Link
                href={servicesHeroData.primaryCta.href}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#22b6b1] px-8 py-3.5 text-center font-outfit text-base font-semibold text-white shadow-md shadow-[#22b6b1]/20 transition-all duration-200 hover:bg-[#1db0ab] hover:shadow-lg active:scale-[0.99] sm:w-auto"
              >
                {servicesHeroData.primaryCta.label}
              </Link>

              <a
                href={servicesHeroData.secondaryCta.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/90 bg-white/10 px-8 py-3.5 text-center font-outfit text-base font-semibold text-white backdrop-blur-xs transition-all duration-200 hover:bg-white hover:text-[#184f4b] active:scale-[0.99] sm:w-auto"
              >
                <PhoneCall size={18} className="shrink-0" />
                {servicesHeroData.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Jump Links Navigation */}
      <ServicesJumpLinks />

      {/* Service Sections 3 to 9 */}
      <ServicesSectionsList />

      {/* Section 10: Paying for care */}
      <PayingForCare />

      <Contact />
      <Footer />
    </section>
  );
};

export default ServicesPage;
