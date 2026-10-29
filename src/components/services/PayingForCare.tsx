import type { ReactNode } from "react";
import { CheckCircle2, ExternalLink } from "lucide-react";

import { payingForCareData } from "@/utils/data";

export const PayingForCare = (): ReactNode => {
  return (
    <section
      id={payingForCareData.id}
      className="scroll-mt-24 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-6 shadow-[0_12px_40px_rgba(16,95,91,0.04)] sm:rounded-[32px] sm:p-10 md:p-12 lg:p-14">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
              {payingForCareData.title}
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#22b6b1]" />
            <p className="mt-4 font-sans text-base leading-relaxed text-[#415e5b] sm:text-lg">
              {payingForCareData.body}
            </p>
          </div>

          {/* 2-Column Content Grid */}
          <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            {/* LEFT COLUMN: Price Box Table */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[20px] border border-[#d6ece9] bg-white shadow-2xs">
                {/* Table Header / Title */}
                <div className="border-b border-[#d6ece9] bg-[#eef7f6] px-5 py-3.5">
                  <h3 className="font-outfit text-lg font-bold text-[#0f2c2a] sm:text-xl">
                    {payingForCareData.priceBoxTitle}
                  </h3>
                </div>

                {/* Table Content */}
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[#e8f4f3] bg-[#f9fdfc]">
                      <th className="px-5 py-3 text-left font-outfit text-xs font-bold uppercase tracking-wider text-[#184f4b] sm:text-sm">
                        Visit type
                      </th>
                      <th className="px-5 py-3 text-right font-outfit text-xs font-bold uppercase tracking-wider text-[#184f4b] sm:text-sm">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {payingForCareData.prices.map((row, index) => (
                      <tr
                        key={index}
                        className={`transition-colors hover:bg-[#f4f9f8] ${
                          index !== payingForCareData.prices.length - 1
                            ? "border-b border-[#eef7f6]"
                            : ""
                        }`}
                      >
                        <td className="px-5 py-3.5 font-sans text-sm font-medium text-[#2d4946] sm:text-[15px]">
                          {row.visitType}
                        </td>
                        <td className="px-5 py-3.5 text-right font-outfit text-sm font-bold text-[#b45309] sm:text-base whitespace-nowrap">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Under price box note */}
              <div className="mt-3.5 flex items-start gap-2.5 px-1">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-[#22b6b1]"
                  aria-hidden="true"
                />
                <p className="font-sans text-xs font-medium leading-relaxed text-[#415e5b] sm:text-sm">
                  {payingForCareData.underPriceBox}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Funding Explanations */}
            <div className="space-y-6 sm:space-y-7 lg:col-span-7">
              {/* Paying for care yourself */}
              <div>
                <h3 className="font-outfit text-lg font-bold text-[#0f2c2a] sm:text-xl">
                  {payingForCareData.payingPrivately.title}
                </h3>
                <p className="mt-2.5 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base">
                  {payingForCareData.payingPrivately.text}
                </p>
              </div>

              {/* Help from the council */}
              <div>
                <h3 className="font-outfit text-lg font-bold text-[#0f2c2a] sm:text-xl">
                  {payingForCareData.councilHelp.title}
                </h3>
                <p className="mt-2.5 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base">
                  {payingForCareData.councilHelp.text}
                </p>
              </div>

              {/* Other help with costs */}
              <div>
                <h3 className="font-outfit text-lg font-bold text-[#0f2c2a] sm:text-xl">
                  {payingForCareData.otherHelp.title}
                </h3>
                <ul className="mt-3 space-y-3">
                  {payingForCareData.otherHelp.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-[14px] border border-[#e8f4f3] bg-white p-3.5 sm:p-4 shadow-2xs"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#22b6b1]" />
                      <div className="font-sans text-sm leading-relaxed text-[#415e5b] sm:text-[15px]">
                        <strong className="font-outfit font-semibold text-[#0f2c2a]">
                          {item.name}:
                        </strong>{" "}
                        {item.description}
                        {item.link && (
                          <div className="mt-1">
                            <a
                              href={item.link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-outfit text-xs font-semibold text-[#22b6b1] underline transition-colors hover:text-[#184f4b] sm:text-sm"
                            >
                              <span>Official guide at gov.uk</span>
                              <ExternalLink size={12} className="shrink-0" />
                            </a>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Small Print Footer */}
          <div className="mt-10 border-t border-[#d6ece9] pt-6 text-center sm:text-left">
            <p className="font-sans text-xs leading-relaxed text-[#62807d]">
              <strong className="font-semibold text-[#415e5b]">Small print:</strong>{" "}
              {payingForCareData.smallPrint}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
