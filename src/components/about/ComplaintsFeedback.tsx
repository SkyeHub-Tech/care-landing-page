import type { ReactNode } from "react";

import type { ComplaintStep } from "@/types/about";
import { complaintsFeedbackData } from "@/utils/data";

export const ComplaintsFeedback = (): ReactNode => {
  const renderStepText = (step: ComplaintStep) => {
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

  return (
    <section
      id={complaintsFeedbackData.id}
      className="scroll-mt-24 bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Wireframe outer card container */}
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

          {/* Desktop Timeline Stepper (md:block) */}
          <div className="mt-12 hidden md:block">
            <div className="relative">
              {/* Connecting line behind circles */}
              <div
                aria-hidden="true"
                className="absolute top-5 left-[12%] right-[12%] h-0.5 bg-[#b8dedb]"
              />

              <div className="grid grid-cols-4 gap-6">
                {complaintsFeedbackData.steps.map((step) => (
                  <div
                    key={step.step}
                    className="group relative flex flex-col items-center text-center"
                  >
                    {/* Circle badge */}
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#f9fdfc] bg-[#184f4b] font-outfit text-sm font-bold text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#22b6b1]">
                      {step.step}
                    </div>

                    {/* Step Title */}
                    <h3 className="mt-4 font-outfit text-base font-bold text-[#0f2c2a] lg:text-lg">
                      {step.title}
                    </h3>

                    {/* Step Text */}
                    <p className="mt-2 font-sans text-xs leading-relaxed text-[#415e5b] sm:text-sm">
                      {renderStepText(step)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Vertical Timeline Stepper (md:hidden) */}
          <div className="mt-10 block md:hidden">
            <div className="relative pl-12 space-y-7 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-0.5 before:bg-[#b8dedb]">
              {complaintsFeedbackData.steps.map((step) => (
                <div key={step.step} className="relative">
                  {/* Circle on left vertical line */}
                  <div className="absolute -left-12 top-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#184f4b] font-outfit text-xs font-bold text-white shadow-sm">
                    {step.step}
                  </div>

                  <div>
                    <h3 className="font-outfit text-base font-bold text-[#0f2c2a]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-xs leading-relaxed text-[#415e5b] sm:text-sm">
                      {renderStepText(step)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text under steps card */}
          <div className="mt-10 sm:mt-12 rounded-[20px] border border-[#d6ece9] bg-white p-5 sm:p-6 text-center max-w-3xl mx-auto shadow-2xs">
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#415e5b]">
              {complaintsFeedbackData.textUnderSteps}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
