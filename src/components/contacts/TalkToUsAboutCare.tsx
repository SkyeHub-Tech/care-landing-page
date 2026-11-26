"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
} from "lucide-react";

import {
  BEST_TIME_TO_CALL_OPTIONS,
  CARE_FOR_OPTIONS,
  COMPANY_NAME,
  CONTACT_EMAIL,
  FORM_THANK_YOU_MESSAGE,
  OUT_OF_HOURS_PHONE_HREF,
  ROUTES,
} from "@/lib/constants";
import { enquirySchema } from "@/schemas/enquiry";
import type { EnquiryFormData } from "@/types/enquiry";
import { talkToUsAboutCareData } from "@/utils/data";

export const TalkToUsAboutCare = (): ReactNode => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [pendingMailtoUrl, setPendingMailtoUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      postcode: "",
      careFor: "",
      bestTimeToCall: "",
      message: "",
      consent: true,
    },
  });

  const onSubmit = (data: EnquiryFormData): void => {
    const subject = encodeURIComponent(
      `Care Service Enquiry from ${data.name.trim()}`,
    );
    const body = encodeURIComponent(
      `Hello ${COMPANY_NAME} Team,\n\nI would like to enquire about your home care services.\n\nMy Details:\n- Name: ${data.name.trim()}\n- Phone Number: ${data.phone.trim()}\n- Email: ${data.email.trim()}\n- Postcode: ${data.postcode.trim()}\n- Who is the care for: ${data.careFor}\n- Best time to call: ${data.bestTimeToCall}\n\nHow can we help:\n${data.message.trim()}\n\nThank you,\n${data.name.trim()}`,
    );
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setPendingMailtoUrl(mailtoUrl);
    setIsSubmitted(true);

    if (typeof window !== "undefined") {
      window.location.href = mailtoUrl;
    }
  };

  const handleReset = (): void => {
    reset();
    setPendingMailtoUrl("");
    setIsSubmitted(false);
  };

  return (
    <section
      id={talkToUsAboutCareData.id}
      className="scroll-mt-24 bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-6 shadow-[0_12px_40px_rgba(16,95,91,0.03)] sm:rounded-[32px] sm:p-10 lg:p-12">
          {/* Header */}
          <div className="max-w-3xl text-left">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
              {talkToUsAboutCareData.title}
            </h2>
            <div className="mt-2.5 h-1 w-16 rounded-full bg-[#22b6b1]" />
            <p className="mt-4 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base sm:leading-relaxed">
              {talkToUsAboutCareData.body}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Enquiry Form */}
            <div className="lg:col-span-7 xl:col-span-7">
              <div className="rounded-[22px] border border-[#d6ece9] bg-white p-5 shadow-[0_4px_24px_rgba(16,95,91,0.04)] sm:p-7 md:p-8">
                {isSubmitted ? (
                  <div className="py-8 text-center sm:py-12">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eef7f6] text-[#22b6b1]">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="mt-4 font-outfit text-xl font-bold text-[#0f2c2a] sm:text-2xl">
                      Message received
                    </h3>
                    <p className="mx-auto mt-2.5 max-w-md font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base">
                      {FORM_THANK_YOU_MESSAGE}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                      {pendingMailtoUrl && (
                        <a
                          href={pendingMailtoUrl}
                          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#184f4b] px-6 py-2.5 font-outfit text-sm font-semibold text-white transition-all duration-200 hover:bg-[#22b6b1]"
                        >
                          <ExternalLink size={15} />
                          <span>Open email app ({CONTACT_EMAIL})</span>
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#b8dedb] bg-[#f9fdfc] px-6 py-2.5 font-outfit text-sm font-semibold text-[#184f4b] transition-all duration-200 hover:border-[#22b6b1] hover:bg-[#eef7f6]"
                      >
                        Send another enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-4"
                  >
                    {/* Name & Phone Number */}
                    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="enquiry-name"
                          className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase"
                        >
                          Your name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="enquiry-name"
                          type="text"
                          placeholder="Your full name"
                          {...register("name")}
                          className={`mt-1.5 w-full rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 placeholder:text-gray-400 focus:ring-2 focus:outline-none ${
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
                          htmlFor="enquiry-phone"
                          className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase"
                        >
                          Phone number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="enquiry-phone"
                          type="tel"
                          placeholder="e.g. 07123 456789"
                          {...register("phone")}
                          className={`mt-1.5 w-full rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 placeholder:text-gray-400 focus:ring-2 focus:outline-none ${
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
                          htmlFor="enquiry-email"
                          className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase"
                        >
                          Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="enquiry-email"
                          type="email"
                          placeholder="you@example.com"
                          {...register("email")}
                          className={`mt-1.5 w-full rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 placeholder:text-gray-400 focus:ring-2 focus:outline-none ${
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
                          htmlFor="enquiry-postcode"
                          className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase"
                        >
                          Postcode <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="enquiry-postcode"
                          type="text"
                          placeholder="e.g. TW8 9DN"
                          {...register("postcode")}
                          className={`mt-1.5 w-full rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 placeholder:text-gray-400 focus:ring-2 focus:outline-none ${
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

                    {/* Who is the care for? & Best time to call */}
                    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="enquiry-careFor"
                          className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase"
                        >
                          Who is the care for?{" "}
                          <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="enquiry-careFor"
                          {...register("careFor")}
                          className={`mt-1.5 w-full rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 focus:ring-2 focus:outline-none ${
                            errors.careFor
                              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                              : "border-[#d6ece9] hover:border-[#b8dedb] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
                          }`}
                        >
                          <option value="">Select</option>
                          {CARE_FOR_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors.careFor && (
                          <p className="mt-1 font-sans text-xs text-rose-600">
                            {errors.careFor.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="enquiry-bestTimeToCall"
                          className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase"
                        >
                          Best time to call{" "}
                          <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="enquiry-bestTimeToCall"
                          {...register("bestTimeToCall")}
                          className={`mt-1.5 w-full rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 focus:ring-2 focus:outline-none ${
                            errors.bestTimeToCall
                              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                              : "border-[#d6ece9] hover:border-[#b8dedb] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
                          }`}
                        >
                          <option value="">Select</option>
                          {BEST_TIME_TO_CALL_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors.bestTimeToCall && (
                          <p className="mt-1 font-sans text-xs text-rose-600">
                            {errors.bestTimeToCall.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* How can we help? */}
                    <div>
                      <label
                        htmlFor="enquiry-message"
                        className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase"
                      >
                        How can we help? <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="enquiry-message"
                        rows={4}
                        placeholder="Tell us about the care you're looking for, visit times or routines you need..."
                        {...register("message")}
                        className={`mt-1.5 w-full resize-none rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 placeholder:text-gray-400 focus:ring-2 focus:outline-none ${
                          errors.message
                            ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                            : "border-[#d6ece9] hover:border-[#b8dedb] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1 font-sans text-xs text-rose-600">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Tick box Consent */}
                    <div className="pt-1">
                      <label className="flex cursor-pointer items-start gap-2.5">
                        <input
                          type="checkbox"
                          {...register("consent")}
                          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#22b6b1] focus:ring-[#22b6b1]"
                        />
                        <span className="font-sans text-xs leading-relaxed text-[#415e5b]">
                          I agree to {COMPANY_NAME} contacting me about my
                          enquiry. See our{" "}
                          <Link
                            href={ROUTES.PRIVACY}
                            className="text-[#22b6b1] underline hover:text-[#184f4b]"
                          >
                            privacy policy
                          </Link>
                          .
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="mt-1 font-sans text-xs text-rose-600">
                          {errors.consent.message}
                        </p>
                      )}
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-[#184f4b] px-8 py-3 text-center font-outfit text-sm font-semibold text-white shadow-md shadow-[#184f4b]/15 transition-all duration-200 hover:bg-[#22b6b1] active:scale-[0.99] disabled:opacity-70 sm:w-auto sm:text-base"
                    >
                      {isSubmitting ? "Sending enquiry..." : "Send my enquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Contact Card */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="space-y-5 rounded-[22px] border border-[#d6ece9] bg-[#eef7f6] p-6 shadow-[0_4px_24px_rgba(16,95,91,0.03)] sm:p-7">
                {/* Call */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-[#184f4b] shadow-2xs">
                    <Phone size={17} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase">
                      Call
                    </span>
                    <a
                      href={`tel:${talkToUsAboutCareData.phone.replace(/\s+/g, "")}`}
                      className="mt-0.5 block font-outfit text-base font-bold text-[#0f2c2a] transition-colors hover:text-[#22b6b1]"
                    >
                      {talkToUsAboutCareData.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-[#184f4b] shadow-2xs">
                    <Mail size={17} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase">
                      Email
                    </span>
                    <a
                      href={`mailto:${talkToUsAboutCareData.email}`}
                      className="mt-0.5 block font-sans text-sm font-medium break-all text-[#0f2c2a] transition-colors hover:text-[#22b6b1]"
                    >
                      {talkToUsAboutCareData.email}
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-[#184f4b] shadow-2xs">
                    <MapPin size={17} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase">
                      Office
                    </span>
                    <p className="mt-0.5 font-sans text-sm leading-relaxed font-medium text-[#0f2c2a]">
                      {talkToUsAboutCareData.office}
                    </p>
                  </div>
                </div>

                {/* Office hours */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-[#184f4b] shadow-2xs">
                    <Clock size={17} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase">
                      Office hours
                    </span>
                    <p className="mt-0.5 font-sans text-sm font-medium text-[#0f2c2a]">
                      {talkToUsAboutCareData.officeHours}
                    </p>
                  </div>
                </div>

                {/* Out of hours */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-[#184f4b] shadow-2xs">
                    <PhoneCall size={17} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase">
                      Out-of-hours support
                    </span>
                    <p className="mt-0.5 font-sans text-sm leading-relaxed font-medium text-[#0f2c2a]">
                      Out-of-hours support for existing clients and their
                      families on{" "}
                      <a
                        href={OUT_OF_HOURS_PHONE_HREF}
                        className="font-outfit font-bold text-[#184f4b] underline transition-colors hover:text-[#22b6b1]"
                      >
                        {talkToUsAboutCareData.outOfHoursPhone}
                      </a>
                      .
                    </p>
                  </div>
                </div>

                {/* Referrals */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-[#184f4b] shadow-2xs">
                    <FileText size={17} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase">
                      Referrals
                    </span>
                    <p className="mt-0.5 font-sans text-sm leading-relaxed font-medium text-[#0f2c2a]">
                      <a
                        href={`mailto:${talkToUsAboutCareData.email}?subject=Referral`}
                        className="text-[#22b6b1] underline hover:text-[#184f4b]"
                      >
                        {talkToUsAboutCareData.email}
                      </a>{" "}
                      with &quot;Referral&quot; in the subject line
                    </p>
                  </div>
                </div>

                {/* Under the card note */}
                <p className="border-t border-[#d6ece9] pt-4 font-sans text-xs leading-relaxed italic text-[#5a7673]">
                  {talkToUsAboutCareData.underCardNote}
                </p>
              </div>
            </div>
          </div>

          {/* Safety line banner */}
          <div className="mt-8 flex items-start gap-2.5 rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-[#7c4d12] sm:mt-10 sm:items-center">
            <AlertCircle
              size={17}
              className="mt-0.5 shrink-0 text-amber-600 sm:mt-0"
            />
            <p className="font-sans text-xs leading-relaxed sm:text-sm">
              If someone is in immediate danger, call{" "}
              <a
                href="tel:999"
                className="font-bold underline hover:text-amber-900"
              >
                999
              </a>
              . For urgent medical advice, call NHS{" "}
              <a
                href="tel:111"
                className="font-bold underline hover:text-amber-900"
              >
                111
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
