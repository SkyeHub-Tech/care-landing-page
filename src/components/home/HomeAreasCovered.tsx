import type { ReactNode } from "react";
import Link from "next/link";

import { areasCoveredData } from "@/utils/data";

export const HomeAreasCovered = (): ReactNode => {
  return (
    <section
      id={areasCoveredData.id}
      className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-6 shadow-[0_12px_40px_rgba(16,95,91,0.04)] sm:rounded-[32px] sm:p-10 md:p-12 lg:p-14">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
              {areasCoveredData.title}
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#22b6b1]" />
            <p className="mt-4 font-sans text-base leading-relaxed text-[#415e5b] sm:text-lg">
              {areasCoveredData.body}
            </p>
          </div>

          {/* 3 Area Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {areasCoveredData.areas.map((area, index) => (
              <div
                key={index}
                className="flex flex-col justify-start rounded-[20px] border border-[#d6ece9] bg-[#eef7f6] p-6 shadow-[0_4px_20px_rgba(16,95,91,0.04)] transition-shadow duration-200 hover:shadow-md sm:p-7"
              >
                <h3 className="font-outfit text-lg font-bold text-[#0f2c2a] sm:text-xl">
                  {area.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#415e5b]">
                  {area.text}
                </p>
              </div>
            ))}
          </div>

          {/* Also Covering Tags & CTA */}
          <div className="mt-8 flex flex-col items-center text-center sm:mt-10 sm:items-start sm:text-left">
            <span className="font-outfit text-sm font-semibold text-[#0f2c2a]">
              {areasCoveredData.alsoCoveringLabel}
            </span>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-2.5 sm:justify-start">
              {areasCoveredData.alsoCoveringTags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-[#22b6b1] bg-white px-4 py-1.5 font-sans text-xs font-medium text-[#184f4b] shadow-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-3.5 font-sans text-xs text-[#415e5b] sm:text-sm">
              {areasCoveredData.helpNote}
            </p>

            <div className="mt-5 flex w-full justify-center sm:w-auto sm:justify-start">
              <Link
                href={areasCoveredData.cta.href}
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#184f4b] bg-white px-7 py-3 text-center font-outfit text-sm font-semibold text-[#184f4b] shadow-sm transition-all duration-200 hover:bg-[#184f4b] hover:text-white active:scale-[0.99] sm:w-auto sm:text-base"
              >
                {areasCoveredData.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
