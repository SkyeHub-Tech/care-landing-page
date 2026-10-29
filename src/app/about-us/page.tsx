import type { ReactNode } from "react";
import Image from "next/image";

import { Checklist, Contact, Footer, ImageCard } from "@/components";
import { aboutHeroData, missionItems, visionItems } from "@/utils/data";
import { images } from "@/utils/images";

const AboutUsPage = (): ReactNode => {
  return (
    <section>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden py-14 sm:py-20 md:py-24 lg:py-28">
        {/* Background Collage */}
        <div className="absolute inset-0">
          <Image
            src={images.hero_large}
            alt="About Lighter House"
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
        <section className="relative bg-white py-20">
          <div className="absolute lg:left-20 lg:top-8 hidden lg:block">
            <Image
              src={images.decore_lines}
              alt=""
              width={90}
              height={182}
              className="w-20 opacity-70"
            />
          </div>
          <div className="absolute lg:right-24 lg:top-[340px] hidden lg:block scale-x-[-1]">
            <Image
              src={images.decore_lines}
              alt=""
              width={90}
              height={182}
              className="w-20 opacity-70"
            />
          </div>

          <div className="container mx-auto max-w-7xl px-6">
            {/* STORY */}
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-8 font-outfit text-[42px] font-medium text-[#44C5C5]">
                  Our Story
                </h2>

                <div className="space-y-6 text-[18px] leading-9 text-[#353535]">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Eget laoreet
                    scelerisque senectus elementum ullamcorper habitant urna
                    elementum. Nec velit netus ultricies id orci risus enim id.
                    Libero facilisis volutpat convallis mi tristique. Neque
                    interdum nulla varius arcu dolor proin. Vitae lacus
                    hendrerit integer eros urna vitae. Arcu vulputate sed
                    suscipit duis lacus posuere. Et pharetra morbi quis
                    lorem ultrices morbi amet sit sit.
                  </p>

                  <p>
                    Iaculis dictumst tortor vestibulum venenatis neque nibh
                    pulvinar mattis. Etiam ultricies nullam vitae fringilla sit
                    vitae odio proin cursus. Tincidunt diam ut risus urna
                    malesuada nisi. Donec consequat. Sollicitudin amet risus
                    pretium dolor. Duis augue eu vestibulum gravida ac in
                    ipsum turpis. Id lorem in id aliquet turpis ipsum justo
                    molestie. Quis venenatis.
                  </p>
                </div>
              </div>

              <ImageCard src={images.whisk_group} />
            </div>
            {/* VISION */}
            <div className="mt-28 grid items-center gap-16 lg:grid-cols-[350px_1fr]">
              <ImageCard src={images.old_couple} />

              <div>
                <h2 className="mb-10 font-outfit text-[42px] font-medium text-[#44C5C5]">
                  Our Vision
                </h2>

                <Checklist items={visionItems} />
              </div>
            </div>
            {/* MISSION */}
            <div className="mt-28 grid items-center gap-16 lg:grid-cols-[1fr_350px]">
              <div>
                <h2 className="mb-10 font-outfit text-[42px] font-medium text-[#44C5C5]">
                  Our Mission
                </h2>

                <Checklist items={missionItems} />
              </div>

              <ImageCard src={images.gran_gran} />
            </div>
          </div>
        </section>
        <Contact />
        <Footer />
      </section>
  );
};

export default AboutUsPage;
