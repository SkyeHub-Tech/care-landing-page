import type { ReactNode } from "react";
import Image from "next/image";

import { testimonials, testimonialsSection } from "@/utils/data";
import { images } from "@/utils/images";

import Contact from "../contacts";
import Footer from "../footer";
import { HomeAreasCovered } from "./HomeAreasCovered";
import { HomeCallBack } from "./HomeCallBack";
import { HomeFaqsPreview } from "./HomeFaqsPreview";
import { HomeHero } from "./HomeHero";
import { HomeHowCareStarts } from "./HomeHowCareStarts";
import { HomeIntroduction } from "./HomeIntroduction";
import { HomeServicesOverview } from "./HomeServicesOverview";
import { HomeWhyLighterHouse } from "./HomeWhyLighterHouse";
import TestimonialCarousel from "./TestimonialCarousel";

export const HomeLanding = (): ReactNode => {
  return (
    <main className="overflow-hidden bg-white text-[#082f2d]">
      <HomeHero />
      <HomeIntroduction />
      <HomeServicesOverview />
      <HomeWhyLighterHouse />
      <HomeHowCareStarts />
      <HomeAreasCovered />
      <HomeFaqsPreview />
      <HomeCallBack />

      {testimonials.length > 0 && (
        <section className="relative overflow-hidden bg-[#184e4a] px-5 py-20 text-white md:py-24">
          <Image
            src={images.diagonal_circle}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-8 rotate-[-10deg]"
          />
          <Image
            src={images.joined_circle}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-8"
          />
          <Image
            src={images.pulse_circle}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-1.5 right-0"
          />
          <div className="relative z-10 mx-auto max-w-[1040px]">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-outfit text-3xl font-medium">
                {testimonialsSection.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/90">
                {testimonialsSection.text}
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </section>
      )}

      <Contact />
      <Footer />
    </main>
  );
};

export default HomeLanding;
