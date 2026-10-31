import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Equal,
  HeartHandshake,
  Scale,
  ShieldCheck,
} from "lucide-react";

import type { ValueCardIconName } from "@/types/about";
import { whatWeBelieveData } from "@/utils/data";

const iconMap: Record<ValueCardIconName, LucideIcon> = {
  Scale,
  HeartHandshake,
  Equal,
  ShieldCheck,
  Compass,
};

export const WhatWeBelieve = (): ReactNode => {
  return (
    <section
      id={whatWeBelieveData.id}
      className="scroll-mt-24 bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Wireframe outer card container */}
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-5 sm:rounded-[32px] sm:p-8 md:p-10 lg:p-12 shadow-[0_12px_40px_rgba(16,95,91,0.03)]">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
              {whatWeBelieveData.title}
            </h2>
            <div className="mx-auto mt-2.5 h-1 w-16 rounded-full bg-[#22b6b1]" />
          </div>

          {/* Cards Grid: 2 columns on mobile, 5 columns on desktop */}
          <div className="mt-8 grid grid-cols-2 gap-3.5 sm:mt-10 sm:gap-4 md:gap-5 lg:grid-cols-5">
            {whatWeBelieveData.items.map((item) => {
              const Icon = iconMap[item.iconName];

              return (
                <div
                  key={item.title}
                  className="group flex flex-col items-start rounded-[18px] sm:rounded-[22px] border border-[#d6ece9] bg-white p-4 sm:p-5 lg:p-5 shadow-[0_2px_8px_rgba(16,95,91,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#22b6b1]/50 hover:shadow-[0_10px_24px_rgba(34,182,177,0.12)]"
                >
                  {/* Icon circular badge */}
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#b8dedb] bg-[#eef7f6] text-[#184f4b] shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:border-[#22b6b1] group-hover:bg-[#22b6b1] group-hover:text-white">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-3.5 sm:mt-4 font-outfit text-base font-bold text-[#0f2c2a] sm:text-lg">
                    {item.title}
                  </h3>

                  {/* Card Text */}
                  <p className="mt-1.5 sm:mt-2 font-sans text-xs sm:text-sm leading-relaxed text-[#415e5b]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
