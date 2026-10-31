"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";

import type { ContactFaqItem, ContactFaqGroup } from "@/types/contact";
import { contactFaqsData } from "@/utils/data";

export const FrequentlyAskedQuestions = (): ReactNode => {
  // First item open by default as indicated in the design wireframe
  const [openItemIds, setOpenItemIds] = useState<Set<string>>(
    new Set(["what-is-home-care"]),
  );

  const toggleItem = (id: string) => {
    setOpenItemIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section
      id={contactFaqsData.id}
      className="scroll-mt-24 bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Wireframe outer card container */}
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-6 shadow-[0_12px_40px_rgba(16,95,91,0.03)] sm:rounded-[32px] sm:p-10 lg:p-12">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
              {contactFaqsData.title}
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#22b6b1]" />
          </div>

          {/* Groups & Accordion Items */}
          <div className="mx-auto mt-8 max-w-3xl sm:mt-10">
            {contactFaqsData.groups.map(
              (group: ContactFaqGroup, groupIndex: number) => (
                <div
                  key={group.id}
                  className={groupIndex === 0 ? "" : "mt-8 sm:mt-10"}
                >
                  {/* Group Title (H3) */}
                  <h3 className="font-outfit text-lg font-bold text-[#184f4b] sm:text-xl">
                    {group.title}
                  </h3>

                  {/* Group Questions List */}
                  <div className="mt-4 space-y-3">
                    {group.items.map((item: ContactFaqItem) => {
                      const isOpen = openItemIds.has(item.id);

                      return (
                        <div
                          key={item.id}
                          className={`overflow-hidden rounded-[16px] border bg-white shadow-2xs transition-all duration-200 ${
                            isOpen
                              ? "border-[#22b6b1]/50 ring-1 ring-[#22b6b1]/20"
                              : "border-[#d6ece9] hover:border-[#b8dedb]"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => toggleItem(item.id)}
                            aria-expanded={isOpen}
                            className="flex w-full cursor-pointer select-none items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-4.5"
                          >
                            <span
                              className={`font-outfit text-base font-semibold transition-colors sm:text-[17px] ${
                                isOpen ? "text-[#184f4b]" : "text-[#0f2c2a]"
                              }`}
                            >
                              {item.question}
                            </span>
                            <span
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors sm:h-8 sm:w-8 ${
                                isOpen
                                  ? "bg-[#eef7f6] text-[#22b6b1]"
                                  : "bg-[#f4faf9] text-[#184f4b]"
                              }`}
                            >
                              {isOpen ? (
                                <Minus size={18} strokeWidth={2.5} />
                              ) : (
                                <Plus size={18} strokeWidth={2.5} />
                              )}
                            </span>
                          </button>

                          {isOpen && (
                            <div className="border-t border-[#f0f7f6] px-5 pt-3 pb-5 font-sans text-sm leading-relaxed text-[#415e5b] sm:px-6 sm:pt-3.5 sm:pb-6 sm:text-base">
                              <p>
                                {item.answer}
                                {item.link && (
                                  <>
                                    {" "}
                                    <Link
                                      href={item.link.href}
                                      className="font-semibold text-[#22b6b1] underline hover:text-[#184f4b]"
                                    >
                                      {item.link.text}
                                    </Link>
                                    .
                                  </>
                                )}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
