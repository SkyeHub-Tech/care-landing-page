import type { ReactNode } from "react";

import { companyInformationData } from "@/utils/data";

export const CompanyInformation = (): ReactNode => {
  return (
    <section className="border-t border-[#d6ece9]/60 bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <p className="text-center font-sans text-xs leading-relaxed text-[#75918e] sm:text-[13px]">
          {companyInformationData.text}
        </p>
      </div>
    </section>
  );
};
