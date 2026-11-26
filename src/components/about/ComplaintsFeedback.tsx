import type { ReactNode } from "react";

import type { ComplaintStep } from "@/types/about";
import { complaintsFeedbackData } from "@/utils/data";

const renderStepText = (step: ComplaintStep): ReactNode => {
  if (step.step === 1 && step.phone && step.email) {
    return (
      <>
        Call{" "}
        <a
          href={`tel:${step.phone.replace(/\s+/g, "")}`}
          className="font-medium text-[#22b6b1] underline transition-colors hover:text-[#184f4b]"
        >
          {step.phone}
        </a>
        , email{" "}
        <a
          href={`mailto:${step.email}`}
          className="font-medium text-[#22b6b1] underline transition-colors hover:text-[#184f4b]"
        >
          {step.email}
        </a>{" "}
        or write to our office. Most concerns can be put right quickly.
      </>
    );
  }
  return step.text;
};

export const ComplaintsFeedback = (): ReactNode => {
  return (
    <section
      id={complaintsFeedbackData.id}
      className="scroll-mt-24 bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-6 shadow-[0_12px_40px_rgba(16,95,91,0.03)] sm:rounded-[32px] sm:p-10 lg:p-12">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
              {complaintsFeedbackData.title}
            </h2>
            <div className="mx-auto mt-2.5 h-1 w-16 rounded-full bg-[#22b6b1]" />
            <p className="mt-4 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base sm:leading-relaxed">
              {complaintsFeedbackData.body}
            </p>
          </div>

          {/* Single DOM copy: vertical stepper on mobile, 4-column horizontal stepper on desktop */}
          <div className="relative mt-10 md:mt-12">
            {/* Mobile vertical line */}
            <div
              aria-hidden="true"
              className="absolute top-4 bottom-4 left-[18px] w-0.5 bg-[#b8dedb] md:hidden"
            />
            {/* Desktop horizontal line */}
            <div
              aria-hidden="true"
              className="absolute top-5 right-[12%] left-[12%] hidden h-0.5 bg-[#b8dedb] md:block"
            />

            <ol className="relative z-10 flex flex-col gap-7 md:grid md:grid-cols-4 md:gap-6">
              {complaintsFeedbackData.steps.map((step) => (
                <li
                  key={step.step}
                  className="group relative flex items-start gap-4 md:flex-col md:items-center md:gap-0 md:text-center"
                >
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#184f4b] font-outfit text-xs font-bold text-white shadow-sm transition-all duration-300 group-hover:bg-[#22b6b1] md:h-10 md:w-10 md:border-4 md:border-[#f9fdfc] md:text-sm">
                    {step.step}
                    <span className="sr-only">. </span>
                  </div>

                  <div>
                    <h3 className="font-outfit text-base font-bold text-[#0f2c2a] md:mt-4 lg:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-xs leading-relaxed text-[#415e5b] sm:text-sm md:mt-2">
                      {renderStepText(step)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Text under steps card */}
          <div className="mx-auto mt-10 max-w-3xl rounded-[20px] border border-[#d6ece9] bg-white p-5 text-center shadow-2xs sm:mt-12 sm:p-6">
            <p className="font-sans text-xs leading-relaxed text-[#415e5b] sm:text-sm">
              {complaintsFeedbackData.textUnderSteps}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
