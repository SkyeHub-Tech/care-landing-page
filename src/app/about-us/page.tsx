"use client";
import { Checklist, Contact, Footer, ImageCard } from "@/components";
import { missionItems, visionItems } from "@/utils/data";
import { images } from "@/utils/images";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <section>
        <section className="relative w-full h-[293px] overflow-hidden">
          {/* Background Collage */}
          <div className="absolute inset-0">
            <Image
              src={images.hero_large}
              alt="What We Offer"
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
              <h2 className="font-serif text-white text-5xl md:text-6xl font-bold uppercase tracking-wide">
                Who we are
              </h2>

              {/* Brush Underline */}
              <div className="absolute -bottom-3 left-10/12 h-4 w-44 -translate-x-1/2">
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

            <p className="mt-8 max-w-4xl text-white text-xl md:text-[26px] leading-relaxed font-medium">
              Comprehensive care designed to meet each resident&apos;s personal
              and medical needs.
            </p>
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
                <h2 className="mb-8 font-serif text-[42px] text-[#44C5C5]">
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
                <h2 className="mb-10 font-serif text-[42px] text-[#44C5C5]">
                  Our Vision
                </h2>

                <Checklist items={visionItems} />
              </div>
            </div>
            {/* MISSION */}
            <div className="mt-28 grid items-center gap-16 lg:grid-cols-[1fr_350px]">
              <div>
                <h2 className="mb-10 font-serif text-[42px] text-[#44C5C5]">
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
    </>
  );
}
