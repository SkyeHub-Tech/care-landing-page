import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import type { ServiceDetailSectionData } from "@/types/services";
import { serviceDetailSectionsData } from "@/utils/data";

interface ServiceDetailSectionProps {
  section: ServiceDetailSectionData;
  index: number;
}

export const ServiceDetailSection = ({
  section,
  index,
}: ServiceDetailSectionProps): ReactNode => {
  const isImageLeft = index % 2 === 0;
  const isEvenBackground = index % 2 === 0;

  return (
    <section
      id={section.id}
      className={`scroll-mt-24 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors ${
        isEvenBackground ? "bg-white" : "bg-[#eef7f6]"
      }`}
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Photo Column */}
          <div
            className={`w-full lg:col-span-5 ${
              isImageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"
            }`}
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-square w-full overflow-hidden rounded-[24px] border border-[#d6ece9] bg-[#dbece9] shadow-sm">
              <Image
                src={section.image}
                alt={section.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`flex flex-col items-start lg:col-span-7 ${
              isImageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"
            }`}
          >
            {/* H2 Title */}
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl lg:text-[34px] leading-tight">
              {section.title}
            </h2>
            <div className="mt-2.5 h-1 w-16 rounded-full bg-[#22b6b1]" />

            {/* Body */}
            <p className="mt-4 font-sans text-base leading-relaxed text-[#415e5b] sm:text-lg">
              {section.body}
            </p>

            {/* What's included */}
            <div className="mt-6 w-full">
              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a] sm:text-xl">
                {section.includedTitle}
              </h3>

              <div className="mt-3.5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {section.includedItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22b6b1] text-white shadow-2xs"
                      aria-hidden="true"
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="font-sans text-sm font-medium leading-snug text-[#2d4946] sm:text-[15px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-section (e.g. Your routine, your way) */}
            <div className="mt-6 w-full">
              <h3 className="font-outfit text-lg font-bold text-[#0f2c2a] sm:text-xl">
                {section.subSectionTitle}
              </h3>
              <p className="mt-2.5 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base">
                {section.subSectionText}
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-7 w-full sm:w-auto">
              <Link
                href={section.cta.href}
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#184f4b] bg-white px-7 py-3 text-center font-outfit text-sm font-semibold text-[#184f4b] shadow-2xs transition-all duration-200 hover:bg-[#184f4b] hover:text-white active:scale-[0.99] sm:w-auto sm:text-base"
              >
                {section.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServicesSectionsList = (): ReactNode => {
  return (
    <div>
      {serviceDetailSectionsData.map((section, index) => (
        <ServiceDetailSection
          key={section.id}
          section={section}
          index={index}
        />
      ))}
    </div>
  );
};
