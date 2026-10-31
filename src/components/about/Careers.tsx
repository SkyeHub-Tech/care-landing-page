"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, CheckCircle2, Clock, MapPin, Upload } from "lucide-react";

import { careersSchema } from "@/schemas/careers";
import type { CareersFormData } from "@/types/careers";
import { careersData } from "@/utils/data";

export const Careers = (): ReactNode => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersFormData>({
    resolver: zodResolver(careersSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      postcode: "",
      experience: "None",
      consent: true,
    },
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
      setValue("cv", file);
    } else {
      setSelectedFileName("");
      setValue("cv", undefined);
    }
  };

  const onSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setSelectedFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setIsSubmitted(false);
  };

  const scrollToForm = () => {
    const element = document.getElementById("careers-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id={careersData.id}
      className="scroll-mt-24 bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Wireframe outer container */}
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-6 shadow-[0_12px_40px_rgba(16,95,91,0.03)] sm:rounded-[32px] sm:p-10 lg:p-12">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
              {careersData.title}
            </h2>
            <div className="mx-auto mt-2.5 h-1 w-16 rounded-full bg-[#22b6b1]" />
            <p className="mt-4 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base sm:leading-relaxed">
              {careersData.body}
            </p>
          </div>

          {/* 2-Column Layout on Desktop, Stacked on Mobile */}
          <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Vacancy Cards + Why work with us + How to apply */}
            <div className="flex flex-col space-y-8 lg:col-span-6 xl:col-span-7">
              {/* Vacancy cards list */}
              <div>
                <div className="space-y-3.5">
                  {careersData.vacancies.map((vacancy) => (
                    <div
                      key={vacancy.id}
                      className="group flex flex-col justify-between gap-4 rounded-[18px] border border-[#d6ece9] bg-white p-4.5 shadow-[0_2px_8px_rgba(16,95,91,0.03)] transition-all duration-200 hover:border-[#22b6b1]/60 hover:shadow-[0_8px_24px_rgba(34,182,177,0.08)] sm:flex-row sm:items-center sm:p-5"
                    >
                      <div className="space-y-1">
                        <h4 className="font-outfit text-lg font-bold text-[#0f2c2a]">
                          {vacancy.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 font-sans text-xs text-[#415e5b] sm:text-sm">
                          <span className="flex items-center gap-1">
                            <MapPin size={13} className="text-[#22b6b1]" />
                            {vacancy.area}
                          </span>
                          <span className="text-[#b8dedb]">·</span>
                          <span className="flex items-center gap-1">
                            <Clock size={13} className="text-[#22b6b1]" />
                            {vacancy.hours}
                          </span>
                          <span className="text-[#b8dedb]">·</span>
                          <span className="font-semibold text-[#184f4b]">
                            {vacancy.pay}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={scrollToForm}
                        className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#184f4b] px-5 py-2 font-outfit text-xs font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#22b6b1] active:scale-[0.98] sm:text-sm"
                      >
                        Apply
                      </button>
                    </div>
                  ))}
                </div>

                <p className="mt-3.5 font-sans text-xs italic leading-relaxed text-[#5a7673] sm:text-sm">
                  {careersData.noVacanciesText}
                </p>
              </div>

              {/* H3: Why work with us */}
              <div className="rounded-[20px] border border-[#d6ece9]/70 bg-white/70 p-5 sm:p-6">
                <h3 className="font-outfit text-xl font-bold text-[#0f2c2a] sm:text-2xl">
                  {careersData.whyWorkWithUsTitle}
                </h3>
                <div className="mt-2 h-0.5 w-12 rounded-full bg-[#22b6b1]" />

                <ul className="mt-4 space-y-2.5">
                  {careersData.whyWorkWithUsItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22b6b1] text-white shadow-2xs"
                        aria-hidden="true"
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="font-sans text-sm font-medium leading-relaxed text-[#2d4946]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* H3: How to apply */}
              <div className="rounded-[20px] border border-[#d6ece9]/70 bg-white/70 p-5 sm:p-6">
                <h3 className="font-outfit text-xl font-bold text-[#0f2c2a] sm:text-2xl">
                  {careersData.howToApplyTitle}
                </h3>
                <div className="mt-2 h-0.5 w-12 rounded-full bg-[#22b6b1]" />

                <ol className="mt-4 space-y-3">
                  {careersData.howToApplySteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22b6b1]/15 font-outfit text-xs font-bold text-[#184f4b]">
                        {index + 1}
                      </span>
                      <span className="font-sans text-sm leading-relaxed text-[#2d4946]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right Column: Apply to join us Form */}
            <div
              id="careers-form"
              className="scroll-mt-28 lg:col-span-6 xl:col-span-5"
            >
              <div className="rounded-[22px] border border-[#d6ece9] bg-white p-5 shadow-[0_8px_30px_rgba(16,95,91,0.04)] sm:p-7 md:p-8">
                {isSubmitted ? (
                  <div className="py-6 text-center sm:py-8">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eef7f6] text-[#22b6b1]">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="mt-4 font-outfit text-xl font-bold text-[#0f2c2a] sm:text-2xl">
                      Application received
                    </h3>
                    <p className="mx-auto mt-2.5 max-w-sm font-sans text-sm leading-relaxed text-[#415e5b]">
                      Thank you for applying. We will review your details and call you
                      within one to two working days for an informal chat.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-6 inline-flex items-center justify-center rounded-full border border-[#b8dedb] bg-[#f9fdfc] px-6 py-2.5 font-outfit text-sm font-semibold text-[#184f4b] transition-all duration-200 hover:border-[#22b6b1] hover:bg-[#eef7f6]"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="border-b border-[#d6ece9]/70 pb-4">
                      <h3 className="font-outfit text-xl font-bold text-[#0f2c2a] sm:text-2xl">
                        {careersData.formTitle}
                      </h3>
                      <p className="mt-1 font-sans text-xs text-[#5a7673] sm:text-sm">
                        Please fill in your details below and we&apos;ll be in touch.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate
                      className="mt-5 space-y-4"
                    >
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="careers-name"
                            className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]"
                          >
                            Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="careers-name"
                            type="text"
                            placeholder="Your full name"
                            {...register("name")}
                            className={`mt-1.5 w-full rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                              errors.name
                                ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                                : "border-[#d6ece9] hover:border-[#b8dedb] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
                            }`}
                          />
                          {errors.name && (
                            <p className="mt-1 font-sans text-xs text-rose-600">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="careers-phone"
                            className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]"
                          >
                            Phone <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="careers-phone"
                            type="tel"
                            placeholder="e.g. 07123 456789"
                            {...register("phone")}
                            className={`mt-1.5 w-full rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                              errors.phone
                                ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                                : "border-[#d6ece9] hover:border-[#b8dedb] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
                            }`}
                          />
                          {errors.phone && (
                            <p className="mt-1 font-sans text-xs text-rose-600">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Email & Postcode */}
                      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="careers-email"
                            className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]"
                          >
                            Email <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="careers-email"
                            type="email"
                            placeholder="you@example.com"
                            {...register("email")}
                            className={`mt-1.5 w-full rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                              errors.email
                                ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                                : "border-[#d6ece9] hover:border-[#b8dedb] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
                            }`}
                          />
                          {errors.email && (
                            <p className="mt-1 font-sans text-xs text-rose-600">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="careers-postcode"
                            className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]"
                          >
                            Postcode <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="careers-postcode"
                            type="text"
                            placeholder="e.g. TW8 8EQ"
                            {...register("postcode")}
                            className={`mt-1.5 w-full rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                              errors.postcode
                                ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                                : "border-[#d6ece9] hover:border-[#b8dedb] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
                            }`}
                          />
                          {errors.postcode && (
                            <p className="mt-1 font-sans text-xs text-rose-600">
                              {errors.postcode.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Experience & Upload CV */}
                      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="careers-experience"
                            className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]"
                          >
                            Experience <span className="text-rose-500">*</span>
                          </label>
                          <select
                            id="careers-experience"
                            {...register("experience")}
                            className={`mt-1.5 w-full rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 focus:outline-none focus:ring-2 ${
                              errors.experience
                                ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                                : "border-[#d6ece9] hover:border-[#b8dedb] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
                            }`}
                          >
                            <option value="None">None</option>
                            <option value="Under 1 year">Under 1 year</option>
                            <option value="1 to 3 years">1 to 3 years</option>
                            <option value="More than 3 years">More than 3 years</option>
                          </select>
                          {errors.experience && (
                            <p className="mt-1 font-sans text-xs text-rose-600">
                              {errors.experience.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="careers-cv"
                            className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]"
                          >
                            Upload CV <span className="text-[#87a29e] font-normal">(optional)</span>
                          </label>
                          <div className="relative mt-1.5">
                            <input
                              ref={fileInputRef}
                              id="careers-cv"
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              className="sr-only"
                            />
                            <label
                              htmlFor="careers-cv"
                              className="flex w-full cursor-pointer items-center justify-between gap-2 truncate rounded-xl border border-dashed border-[#b8dedb] bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-xs font-medium text-[#415e5b] transition-all hover:border-[#22b6b1] hover:bg-[#eef7f6]"
                            >
                              <span className="truncate">
                                {selectedFileName || "Choose CV file (PDF/Word)"}
                              </span>
                              <Upload size={14} className="shrink-0 text-[#22b6b1]" />
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Agreement Checkbox */}
                      <div className="pt-1">
                        <label className="flex items-start gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            {...register("consent")}
                            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#22b6b1] focus:ring-[#22b6b1]"
                          />
                          <span className="font-sans text-xs leading-relaxed text-[#415e5b]">
                            I agree to Lighter House storing my details for this
                            application.
                          </span>
                        </label>
                        {errors.consent && (
                          <p className="mt-1 font-sans text-xs text-rose-600">
                            {errors.consent.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-full bg-[#184f4b] py-3 text-center font-outfit text-sm font-semibold text-white shadow-md shadow-[#184f4b]/15 transition-all duration-200 hover:bg-[#22b6b1] active:scale-[0.99] disabled:opacity-70 sm:text-base"
                      >
                        {isSubmitting ? "Sending application..." : "Send application"}
                      </button>
                    </form>

                    {/* Equal Opportunities text under the form */}
                    <p className="mt-5 border-t border-[#d6ece9]/60 pt-4 font-sans text-xs leading-relaxed text-[#5a7673]">
                      {careersData.equalOpportunitiesText}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
