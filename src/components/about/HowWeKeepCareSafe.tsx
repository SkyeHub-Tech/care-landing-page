import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpen,
  ClipboardCheck,
  ClipboardList,
  Pill,
  Shield,
  Sparkles,
  UserCheck,
} from "lucide-react";

import type { SafetyCardIconName, SafetyCardItem } from "@/types/about";
import { qualitySafetyData } from "@/utils/data";

const iconMap: Record<SafetyCardIconName, LucideIcon> = {
  BadgeCheck,
  UserCheck,
  ClipboardCheck,
  Pill,
  Shield,
  Sparkles,
  ClipboardList,
  BookOpen,
};

const renderCardText = (item: SafetyCardItem): ReactNode => {
  if (item.emailLink && item.text.includes(item.emailLink)) {
    const parts = item.text.split(item.emailLink);
    return (
      <>
        {parts[0]}
        <a
          href={`mailto:${item.emailLink}`}
          className="font-medium text-[#22b6b1] underline transition-colors hover:text-[#184f4b]"
        >
          {item.emailLink}
        </a>
        {parts[1]}
      </>
    );
  }
  return item.text;
};

export const HowWeKeepCareSafe = (): ReactNode => {
  return (
    <section
      id={qualitySafetyData.id}
      className="scroll-mt-24 bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-5 shadow-[0_12px_40px_rgba(16,95,91,0.03)] sm:rounded-[32px] sm:p-8 md:p-10 lg:p-12">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
              {qualitySafetyData.title}
            </h2>
            <div className="mx-auto mt-2.5 h-1 w-16 rounded-full bg-[#22b6b1]" />

            <p className="mt-4 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base sm:leading-relaxed">
              {qualitySafetyData.body}
            </p>
          </div>

          {/* Single responsive grid: no repeated summary list */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {qualitySafetyData.items.map((item) => {
              const Icon = iconMap[item.iconName];

              return (
                <div
                  key={item.title}
                  className="group flex flex-col items-start rounded-[20px] border border-[#d6ece9] bg-white p-5 shadow-[0_2px_8px_rgba(16,95,91,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#22b6b1]/50 hover:shadow-[0_10px_24px_rgba(34,182,177,0.12)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b8dedb] bg-[#eef7f6] text-[#184f4b] shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:border-[#22b6b1] group-hover:bg-[#22b6b1] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-4 font-outfit text-base font-bold text-[#0f2c2a] lg:text-[17px]">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-sans text-xs leading-relaxed text-[#415e5b] sm:text-sm">
                    {renderCardText(item)}
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
