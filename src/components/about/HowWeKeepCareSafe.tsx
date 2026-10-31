"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpen,
  ClipboardCheck,
  ClipboardList,
  Minus,
  Pill,
  Plus,
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

export const HowWeKeepCareSafe = (): ReactNode => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const renderCardText = (item: SafetyCardItem) => {
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

  return (
    <section
      id={qualitySafetyData.id}
      className="scroll-mt-24 bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Wireframe outer card container */}
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-5 sm:rounded-[32px] sm:p-8 md:p-10 lg:p-12 shadow-[0_12px_40px_rgba(16,95,91,0.03)]">
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

          {/* Desktop & Tablet: 4 columns x 2 rows Grid */}
          <div className="mt-10 hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {qualitySafetyData.items.map((item) => {
              const Icon = iconMap[item.iconName];

              return (
                <div
                  key={item.title}
                  className="group flex flex-col items-start rounded-[20px] border border-[#d6ece9] bg-white p-5 shadow-[0_2px_8px_rgba(16,95,91,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#22b6b1]/50 hover:shadow-[0_10px_24px_rgba(34,182,177,0.12)]"
                >
                  {/* Icon circular badge */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b8dedb] bg-[#eef7f6] text-[#184f4b] shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:border-[#22b6b1] group-hover:bg-[#22b6b1] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-4 font-outfit text-base font-bold text-[#0f2c2a] lg:text-[17px]">
                    {item.title}
                  </h3>

                  {/* Card Text */}
                  <p className="mt-2 font-sans text-xs sm:text-sm leading-relaxed text-[#415e5b]">
                    {renderCardText(item)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile: Accordion List matching the wireframe */}
          <div className="mt-8 space-y-3 md:hidden">
            {qualitySafetyData.items.map((item, index) => {
              const Icon = iconMap[item.iconName];
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.title}
                  className={`overflow-hidden rounded-[16px] border transition-all duration-200 ${
                    isOpen
                      ? "border-[#22b6b1] bg-white shadow-[0_4px_16px_rgba(34,182,177,0.08)]"
                      : "border-[#d6ece9] bg-white hover:border-[#22b6b1]/50"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? "bg-[#22b6b1] text-white"
                            : "border border-[#b8dedb] bg-[#eef7f6] text-[#184f4b]"
                        }`}
                      >
                        <Icon className="h-4 w-4" strokeWidth={2.2} />
                      </div>
                      <span className="font-outfit text-sm font-semibold text-[#0f2c2a]">
                        {item.title}
                      </span>
                    </div>

                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-[#22b6b1]/15 text-[#184f4b]"
                          : "text-[#22b6b1]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={2.5} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#d6ece9]/60 px-4 pt-2.5 pb-4">
                      <p className="font-sans text-xs leading-relaxed text-[#415e5b]">
                        {renderCardText(item)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
