import Image from "next/image";

import { images } from "@/utils/images";
import { testimonialsSection } from "@/utils/data";
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

export default function HomeLanding() {
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

      <section className="relative bg-[#184e4a] px-5 py-20 text-white md:py-24 overflow-hidden">
        <Image
          src={images.diagonal_circle}
          alt="diagonal-circle"
          className="pointer-events-none absolute left-8 -top-24 rotate-[-10deg]"
        />
        <Image
          src={images.joined_circle}
          alt="joined-circle"
          className="pointer-events-none absolute left-8 bottom-0"
        />
        <Image
          src={images.pulse_circle}
          alt="pulse-circle"
          className="pointer-events-none absolute top-1.5 right-0"
        />
        {/* <DecorativeCircles /> */}
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
      <Contact />
      <Footer />
    </main>
  );
}
