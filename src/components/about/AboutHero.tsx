import type { ReactNode } from "react";
import Image from "next/image";

import { aboutHeroData } from "@/utils/data";
import { images } from "@/utils/images";

export const AboutHero = (): ReactNode => {
  return (
    <section className="relative w-full overflow-hidden py-14 sm:py-20 md:py-24 lg:py-28">
      {/* Background Collage */}
      <div className="absolute inset-0">
        <Image
          src={images.hero_large}
          alt={aboutHeroData.title}
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
            {aboutHeroData.title}
          </h1>

          <div className="mt-3.5 h-1 w-20 rounded-full bg-[#22b6b1]" />

          <p className="mt-5 font-sans text-base leading-relaxed text-white/95 sm:text-lg max-w-2xl">
            {aboutHeroData.body}
          </p>
        </div>
      </div>
    </section>
  );
};
