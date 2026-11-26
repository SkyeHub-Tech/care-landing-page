import type { ReactNode } from "react";
import Link from "next/link";
import { MapPin, PhoneCall } from "lucide-react";

import { areasCoveredData } from "@/utils/data";

export const HomeAreasCovered = (): ReactNode => {
  return (
    <section
      id={areasCoveredData.id}
      className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-6 text-center shadow-[0_12px_40px_rgba(16,95,91,0.04)] sm:rounded-[32px] sm:p-10 md:p-12 lg:p-14">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#b8dedb] bg-[#eef7f6] text-[#184f4b]">
            <MapPin size={22} />
          </div>

          <h2 className="mt-4 font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
            {areasCoveredData.title}
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#22b6b1]" />

          <p className="mx-auto mt-5 max-w-2xl font-sans text-base font-medium leading-relaxed text-[#0f2c2a] sm:text-lg">
            {areasCoveredData.coverageText}
          </p>

          <p className="mx-auto mt-2 max-w-xl font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base">
            {areasCoveredData.callPrompt}
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={areasCoveredData.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#184f4b] px-7 py-3.5 text-center font-outfit text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#123e3b] active:scale-[0.99] sm:w-auto sm:text-base"
            >
              <PhoneCall size={17} className="shrink-0" />
              <span>Call {areasCoveredData.phone}</span>
            </a>

            <Link
              href={areasCoveredData.cta.href}
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#184f4b] bg-white px-7 py-3 text-center font-outfit text-sm font-semibold text-[#184f4b] shadow-sm transition-all duration-200 hover:bg-[#184f4b] hover:text-white active:scale-[0.99] sm:w-auto sm:text-base"
            >
              {areasCoveredData.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
