import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { introductionSection } from "@/utils/data";

export const HomeIntroduction = (): ReactNode => {
  return (
    <section
      id={introductionSection.id}
      className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[1040px] rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-6 text-center shadow-[0_12px_40px_rgba(16,95,91,0.04)] sm:rounded-[32px] sm:p-12 md:p-16">
          <h2 className="mx-auto max-w-2xl font-outfit text-2xl font-bold leading-[1.25] tracking-tight text-[#0f2c2a] sm:text-3xl md:text-[38px]">
            {introductionSection.title}
          </h2>

          <div className="mx-auto mt-6 max-w-2xl space-y-4 font-sans text-base leading-relaxed text-[#3a5451] sm:mt-8 sm:text-lg">
            {introductionSection.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === introductionSection.paragraphs.length - 1
                    ? "font-medium text-[#184f4b]"
                    : ""
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <Link
              href={introductionSection.cta.href}
              className="group inline-flex items-center gap-2 font-outfit text-base font-semibold text-[#184f4b] transition-colors hover:text-[#123e3b]"
            >
              <span>{introductionSection.cta.label}</span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
