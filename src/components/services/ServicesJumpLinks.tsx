import type { ReactNode } from "react";

import { servicesJumpLinksData } from "@/utils/data";

export const ServicesJumpLinks = (): ReactNode => {
  return (
    <section className="sticky top-0 z-30 border-y border-[#d6ece9] bg-[#f9fdfc]/95 backdrop-blur-md py-3 sm:py-4 shadow-xs">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* On mobile: row scrolls sideways; on desktop: centered wrapped pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap sm:justify-center sm:gap-3 scrollbar-none">
          {servicesJumpLinksData.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white px-4 py-2 font-outfit text-xs font-semibold text-[#184f4b] shadow-2xs transition-all duration-200 hover:border-[#22b6b1] hover:bg-[#eef7f6] hover:text-[#0f2c2a] active:scale-[0.98] sm:text-sm whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
