import type { ReactNode } from "react";

import { howCareStartsData } from "@/utils/data";

export const HomeHowCareStarts = (): ReactNode => {
  return (
    <section
      id={howCareStartsData.id}
      className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-6 shadow-[0_12px_40px_rgba(16,95,91,0.04)] sm:rounded-[32px] sm:p-10 md:p-12 lg:p-14">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
              {howCareStartsData.title}
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#22b6b1]" />
            <p className="mt-4 font-sans text-base leading-relaxed text-[#415e5b] sm:text-lg">
              {howCareStartsData.body}
            </p>
          </div>

          {/* Desktop Timeline (2 rows x 3 columns connected with lines) */}
          <div className="mt-12 hidden lg:block">
            {/* Row 1: Steps 1, 2, 3 */}
            <div className="relative grid grid-cols-3 gap-8">
              {/* Connecting line running through the centers of steps 1 to 3 */}
              <div className="absolute top-6 left-[16.6%] right-[16.6%] h-0.5 bg-[#22b6b1] z-0" />

              {howCareStartsData.steps.slice(0, 3).map((item) => (
                <div key={item.step} className="relative z-10 flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#184f4b] font-outfit text-lg font-bold text-white shadow-sm ring-4 ring-[#f9fdfc]">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-center font-outfit text-lg font-bold text-[#0f2c2a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-center font-sans text-sm leading-relaxed text-[#415e5b]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2: Steps 4, 5, 6 */}
            <div className="relative mt-12 grid grid-cols-3 gap-8">
              {/* Connecting line running through the centers of steps 4 to 6 */}
              <div className="absolute top-6 left-[16.6%] right-[16.6%] h-0.5 bg-[#22b6b1] z-0" />

              {howCareStartsData.steps.slice(3, 6).map((item) => (
                <div key={item.step} className="relative z-10 flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#184f4b] font-outfit text-lg font-bold text-white shadow-sm ring-4 ring-[#f9fdfc]">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-center font-outfit text-lg font-bold text-[#0f2c2a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-center font-sans text-sm leading-relaxed text-[#415e5b]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="relative mt-8 block lg:hidden">
            <div className="relative">
              {/* Vertical connecting line directly centered behind the 40px (w-10) circles */}
              <div className="absolute left-5 top-5 bottom-5 w-0.5 -translate-x-1/2 bg-[#22b6b1] z-0" />

              <div className="flex flex-col gap-6 sm:gap-7">
                {howCareStartsData.steps.map((item) => (
                  <div key={item.step} className="relative z-10 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#184f4b] font-outfit text-base font-bold text-white shadow-sm ring-4 ring-[#f9fdfc]">
                      {item.step}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-outfit text-base font-bold text-[#0f2c2a] sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-sans text-sm leading-relaxed text-[#415e5b]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
