"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";

import { faqsPreviewData } from "@/utils/data";

export const HomeFaqsPreview = (): ReactNode => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id={faqsPreviewData.id}
      className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-6 shadow-[0_12px_40px_rgba(16,95,91,0.04)] sm:rounded-[32px] sm:p-10 md:p-12 lg:p-14">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
              {faqsPreviewData.title}
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#22b6b1]" />
          </div>

          {/* Accordion List */}
          <div className="mx-auto mt-8 max-w-3xl space-y-3.5 sm:mt-10 sm:space-y-4">
            {faqsPreviewData.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-[18px] border transition-all duration-200 ${
                    isOpen
                      ? "border-[#22b6b1] bg-white shadow-[0_6px_20px_rgba(34,182,177,0.08)]"
                      : "border-[#d6ece9] bg-white hover:border-[#22b6b1]/50 shadow-[0_2px_8px_rgba(16,95,91,0.03)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors sm:p-5 cursor-pointer"
                  >
                    <span className="font-outfit text-base font-semibold text-[#0f2c2a] sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-[#22b6b1] text-white"
                          : "border border-[#d6ece9] bg-[#eef7f6] text-[#22b6b1]"
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#e8f4f3] px-4 pb-5 pt-3.5 sm:px-5 sm:pb-6">
                      <p className="font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer Link */}
          <div className="mt-8 flex justify-center text-center sm:mt-10">
            <Link
              href={faqsPreviewData.link.href}
              className="group inline-flex items-center gap-2 font-outfit text-sm font-semibold text-[#22b6b1] transition-colors duration-200 hover:text-[#184f4b] sm:text-base"
            >
              <span>{faqsPreviewData.link.label}</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
