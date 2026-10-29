import type { ReactNode } from "react";
import Image from "next/image";

import { ourStoryMissionData } from "@/utils/data";
import { images } from "@/utils/images";

export const OurStoryMission = (): ReactNode => {
  return (
    <section
      id={ourStoryMissionData.id}
      className="relative scroll-mt-24 bg-white py-14 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Existing Background Decorative Lines */}
      <div className="pointer-events-none absolute left-6 top-8 hidden lg:block opacity-70 select-none">
        <Image
          src={images.decore_lines}
          alt=""
          width={90}
          height={182}
          className="w-20"
        />
      </div>
      <div className="pointer-events-none absolute right-8 top-[320px] hidden lg:block scale-x-[-1] opacity-70 select-none">
        <Image
          src={images.decore_lines}
          alt=""
          width={90}
          height={182}
          className="w-20"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Photo Column (on mobile: top, on desktop: right) */}
          <div className="order-1 w-full lg:order-2 lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-square w-full overflow-hidden rounded-[24px] border border-[#d6ece9] bg-[#dbece9] shadow-sm">
              <Image
                src={ourStoryMissionData.image}
                alt={ourStoryMissionData.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Content Column (on mobile: bottom, on desktop: left) */}
          <div className="order-2 flex flex-col items-start lg:order-1 lg:col-span-7">
            {/* H2: Our story */}
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl lg:text-[34px] leading-tight">
              {ourStoryMissionData.storyTitle}
            </h2>
            <div className="mt-2.5 h-1 w-16 rounded-full bg-[#22b6b1]" />

            <p className="mt-4 font-sans text-base leading-relaxed text-[#415e5b] sm:text-lg">
              {ourStoryMissionData.storyBody}
            </p>

            {/* H3: Our mission */}
            <div className="mt-8">
              <h3 className="font-outfit text-xl font-bold text-[#184f4b] sm:text-2xl">
                {ourStoryMissionData.missionTitle}
              </h3>
              <div className="mt-2 h-0.5 w-12 rounded-full bg-[#22b6b1]" />

              <p className="mt-3 font-sans text-base leading-relaxed text-[#415e5b] sm:text-lg">
                {ourStoryMissionData.missionBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
