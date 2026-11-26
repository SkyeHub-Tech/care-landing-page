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

          {/* Single DOM copy: vertical timeline on mobile, 2x3 connected grid on desktop */}
          <div className="relative mt-8 lg:mt-12">
            {/* Mobile vertical connecting line */}
            <div
              aria-hidden="true"
              className="absolute top-5 bottom-5 left-5 z-0 w-0.5 -translate-x-1/2 bg-[#22b6b1] lg:hidden"
            />

            {/* Desktop row 1 horizontal connecting line */}
            <div
              aria-hidden="true"
              className=" absolute top-6 right-[16.6%] left-[16.6%] z-0 hidden h-0.5 bg-[#22b6b1] lg:block"
            />

            <ol className="relative z-10 flex flex-col gap-6 sm:gap-7 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
              {howCareStartsData.steps.map((item) => (
                <li
                  key={item.step}
                  className="relative flex items-start gap-4 lg:flex-col lg:items-center lg:gap-0"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#184f4b] font-outfit text-base font-bold text-white shadow-sm ring-4 ring-[#f9fdfc] lg:h-12 lg:w-12 lg:text-lg">
                    {item.step}
                    <span className="sr-only">. </span>
                  </div>
                  <div className="pt-1 lg:pt-0 lg:text-center">
                    <h3 className="font-outfit text-base font-bold text-[#0f2c2a] sm:text-lg lg:mt-4">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-[#415e5b] lg:mt-2">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
