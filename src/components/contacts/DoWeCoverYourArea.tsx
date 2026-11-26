import type { ReactNode } from "react";
import { MapPin, PhoneCall } from "lucide-react";

import { doWeCoverYourAreaData } from "@/utils/data";

export const DoWeCoverYourArea = (): ReactNode => {
  return (
    <section
      id={doWeCoverYourAreaData.id}
      className="scroll-mt-24 bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-6 text-center shadow-[0_12px_40px_rgba(16,95,91,0.03)] sm:rounded-[32px] sm:p-10 lg:p-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#b8dedb] bg-[#eef7f6] text-[#184f4b]">
            <MapPin size={22} />
          </div>

          <h2 className="mt-4 font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
            {doWeCoverYourAreaData.title}
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#22b6b1]" />

          <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed font-medium text-[#0f2c2a] sm:text-lg">
            {doWeCoverYourAreaData.coverageText}
          </p>

          <p className="mx-auto mt-2 max-w-xl font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base">
            {doWeCoverYourAreaData.callPrompt}
          </p>

          <div className="mt-7 flex justify-center">
            <a
              href={doWeCoverYourAreaData.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#184f4b] px-8 py-3.5 font-outfit text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#22b6b1] active:scale-[0.99] sm:text-base"
            >
              <PhoneCall size={17} className="shrink-0" />
              <span>Call {doWeCoverYourAreaData.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
