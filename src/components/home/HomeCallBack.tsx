"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, CheckCircle2 } from "lucide-react";

import { callBackSchema } from "@/schemas/call-back";
import type { CallBackFormData } from "@/types/call-back";
import { callBackData } from "@/utils/data";

export const HomeCallBack = (): ReactNode => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CallBackFormData>({
    resolver: zodResolver(callBackSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      postcode: "",
      consent: true,
    },
  });

  const onSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
  };

  return (
    <section
      id={callBackData.id}
      className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-6 shadow-[0_12px_40px_rgba(16,95,91,0.04)] sm:rounded-[32px] sm:p-10 md:p-12 lg:p-14">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
              {callBackData.title}
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#22b6b1]" />
            <p className="mt-4 font-sans text-base leading-relaxed text-[#415e5b] sm:text-lg">
              {callBackData.body}
            </p>
          </div>

          {/* Form / Success State */}
          <div className="mx-auto mt-8 max-w-4xl sm:mt-10">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center rounded-[20px] border border-[#22b6b1]/40 bg-[#eef7f6] p-6 text-center sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#22b6b1] text-white shadow-sm sm:h-14 sm:w-14">
                  <CheckCircle2 size={28} />
                </span>
                <p className="mt-4 font-sans text-base font-medium leading-relaxed text-[#0f2c2a] sm:text-lg">
                  {callBackData.successMessage.lead}
                  <a
                    href={callBackData.successMessage.phoneHref}
                    className="font-bold text-[#184f4b] underline transition-colors hover:text-[#22b6b1]"
                  >
                    {callBackData.successMessage.phone}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-5 rounded-full border border-[#184f4b] bg-white px-5 py-2 font-outfit text-sm font-semibold text-[#184f4b] transition-all hover:bg-[#184f4b] hover:text-white"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Inputs & Submit Button Grid */}
                <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end">
                  {/* Your name */}
                  <div>
                    <label
                      htmlFor="call-back-name"
                      className="block font-sans text-xs font-medium text-[#415e5b] sm:text-sm"
                    >
                      Your name
                    </label>
                    <input
                      id="call-back-name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      {...register("name")}
                      className={`mt-1.5 h-12 w-full rounded-[14px] border bg-white px-4 font-sans text-sm text-[#0f2c2a] placeholder-[#94aba8] outline-none transition focus:border-[#22b6b1] focus:ring-2 focus:ring-[#22b6b1]/20 sm:text-base ${
                        errors.name ? "border-rose-500" : "border-[#d6ece9]"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 font-sans text-xs text-rose-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone number */}
                  <div>
                    <label
                      htmlFor="call-back-phone"
                      className="block font-sans text-xs font-medium text-[#415e5b] sm:text-sm"
                    >
                      Phone number
                    </label>
                    <input
                      id="call-back-phone"
                      type="tel"
                      placeholder="e.g. 07123 456789"
                      {...register("phoneNumber")}
                      className={`mt-1.5 h-12 w-full rounded-[14px] border bg-white px-4 font-sans text-sm text-[#0f2c2a] placeholder-[#94aba8] outline-none transition focus:border-[#22b6b1] focus:ring-2 focus:ring-[#22b6b1]/20 sm:text-base ${
                        errors.phoneNumber ? "border-rose-500" : "border-[#d6ece9]"
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 font-sans text-xs text-rose-600">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>

                  {/* Postcode */}
                  <div>
                    <label
                      htmlFor="call-back-postcode"
                      className="block font-sans text-xs font-medium text-[#415e5b] sm:text-sm"
                    >
                      Postcode
                    </label>
                    <input
                      id="call-back-postcode"
                      type="text"
                      placeholder="e.g. TW8 9DN"
                      {...register("postcode")}
                      className={`mt-1.5 h-12 w-full rounded-[14px] border bg-white px-4 font-sans text-sm text-[#0f2c2a] placeholder-[#94aba8] outline-none transition focus:border-[#22b6b1] focus:ring-2 focus:ring-[#22b6b1]/20 sm:text-base ${
                        errors.postcode ? "border-rose-500" : "border-[#d6ece9]"
                      }`}
                    />
                    {errors.postcode && (
                      <p className="mt-1 font-sans text-xs text-rose-600">
                        {errors.postcode.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button (Desktop inline, Mobile stacked) */}
                  <div className="hidden lg:block">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex h-12 items-center justify-center rounded-[14px] bg-[#184f4b] px-6 font-outfit text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#123e3b] active:scale-[0.99] disabled:opacity-60 cursor-pointer whitespace-nowrap"
                    >
                      {callBackData.buttonLabel}
                    </button>
                  </div>
                </div>

                {/* Tick box row */}
                <div className="mt-4 sm:mt-5">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative mt-0.5 flex items-center justify-center">
                      <input
                        type="checkbox"
                        {...register("consent")}
                        className="peer sr-only"
                      />
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#b8dedb] bg-white transition-all peer-checked:border-[#22b6b1] peer-checked:bg-[#22b6b1] peer-focus-visible:ring-2 peer-focus-visible:ring-[#22b6b1]">
                        <Check size={13} className="text-white opacity-0 transition-opacity peer-checked:opacity-100" />
                      </div>
                    </div>
                    <span className="font-sans text-xs leading-relaxed text-[#415e5b] sm:text-sm">
                      {callBackData.checkboxLabel}{" "}
                      <Link
                        href={callBackData.privacyPolicyHref}
                        className="text-[#184f4b] underline transition-colors hover:text-[#22b6b1]"
                      >
                        {callBackData.privacyPolicyText}
                      </Link>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1.5 font-sans text-xs text-rose-600">
                      {errors.consent.message}
                    </p>
                  )}
                </div>

                {/* Submit Button (Mobile / Tablet only) */}
                <div className="mt-5 block lg:hidden">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-12 w-full items-center justify-center rounded-[14px] bg-[#184f4b] px-6 font-outfit text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#123e3b] active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                  >
                    {callBackData.buttonLabel}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
