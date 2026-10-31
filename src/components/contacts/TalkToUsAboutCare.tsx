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
  FileText,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
} from "lucide-react";

import { enquirySchema } from "@/schemas/enquiry";
import type { EnquiryFormData } from "@/types/enquiry";
import { talkToUsAboutCareData } from "@/utils/data";

export const TalkToUsAboutCare = (): ReactNode => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

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

  const onSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
  };

  return (
    <section
      id={talkToUsAboutCareData.id}
      className="scroll-mt-24 bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Wireframe outer card container */}
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

          {/* 2-Column Grid on Desktop, Stacked on Mobile */}
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
                      Enquiry sent successfully
                    </h3>
                    <p className="mx-auto mt-2.5 max-w-md font-sans text-sm leading-relaxed text-[#415e5b]">
                      Thank you for contacting Lighter House Care. We will review
                      your details and call or email you within one working day.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-6 inline-flex items-center justify-center rounded-full border border-[#b8dedb] bg-[#f9fdfc] px-6 py-2.5 font-outfit text-sm font-semibold text-[#184f4b] transition-all duration-200 hover:border-[#22b6b1] hover:bg-[#eef7f6]"
                    >
                      Send another enquiry
                    </button>
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
                          className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]"
                        >
                          Your name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="enquiry-name"
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
                          htmlFor="enquiry-phone"
                          className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]"
                        >
                          Phone number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="enquiry-phone"
                          type="tel"
                          placeholder="e.g. 020 8123 4567"
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
                          htmlFor="enquiry-email"
                          className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]"
                        >
                          Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="enquiry-email"
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
                          htmlFor="enquiry-postcode"
                          className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]"
                        >
                          Postcode <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="enquiry-postcode"
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

                    {/* Who is the care for? & Best time to call */}
                    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="enquiry-careFor"
                          className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]"
                        >
                          Who is the care for? <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="enquiry-careFor"
                          {...register("careFor")}
                          className={`mt-1.5 w-full rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 focus:outline-none focus:ring-2 ${
                            errors.careFor
                              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                              : "border-[#d6ece9] hover:border-[#b8dedb] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
                          }`}
                        >
                          <option value="">Select</option>
                          <option value="Myself">Myself</option>
                          <option value="My parent">My parent</option>
                          <option value="My partner or spouse">My partner or spouse</option>
                          <option value="Another family member or friend">
                            Another family member or friend
                          </option>
                          <option value="A client or patient (professional referral)">
                            A client or patient (professional referral)
                          </option>
                          <option value="Other">Other</option>
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
                          className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]"
                        >
                          Best time to call <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="enquiry-bestTimeToCall"
                          {...register("bestTimeToCall")}
                          className={`mt-1.5 w-full rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 focus:outline-none focus:ring-2 ${
                            errors.bestTimeToCall
                              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                              : "border-[#d6ece9] hover:border-[#b8dedb] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
                          }`}
                        >
                          <option value="">Select</option>
                          <option value="Anytime">Anytime</option>
                          <option value="Morning (9am – 12pm)">Morning (9am – 12pm)</option>
                          <option value="Afternoon (12pm – 5pm)">Afternoon (12pm – 5pm)</option>
                          <option value="Evening (5pm – 8pm)">Evening (5pm – 8pm)</option>
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
                        className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]"
                      >
                        How can we help? <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="enquiry-message"
                        rows={4}
                        placeholder="Tell us about the care you're looking for, visit times or routines you need..."
                        {...register("message")}
                        className={`mt-1.5 w-full resize-none rounded-xl border bg-[#f9fdfc] px-3.5 py-2.5 font-sans text-sm text-[#0f2c2a] transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
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
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          {...register("consent")}
                          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#22b6b1] focus:ring-[#22b6b1]"
                        />
                        <span className="font-sans text-xs leading-relaxed text-[#415e5b]">
                          I agree to Lighter House contacting me about my
                          enquiry. See our{" "}
                          <Link
                            href="/privacy"
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
                      className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#184f4b] px-8 py-3 text-center font-outfit text-sm font-semibold text-white shadow-md shadow-[#184f4b]/15 transition-all duration-200 hover:bg-[#22b6b1] active:scale-[0.99] disabled:opacity-70 sm:text-base cursor-pointer"
                    >
                      {isSubmitting ? "Sending enquiry..." : "Send my enquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Contact Card */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="rounded-[22px] border border-[#d6ece9] bg-[#eef7f6] p-6 sm:p-7 shadow-[0_4px_24px_rgba(16,95,91,0.03)] space-y-5">
                {/* Call */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-[#184f4b] shadow-2xs">
                    <Phone size={17} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]">
                      Call
                    </span>
                    <a
                      href={`tel:${talkToUsAboutCareData.phone.replace(/\s+/g, "")}`}
                      className="mt-0.5 block font-outfit text-base font-bold text-[#0f2c2a] hover:text-[#22b6b1] transition-colors"
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
                    <span className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]">
                      Email
                    </span>
                    <a
                      href={`mailto:${talkToUsAboutCareData.email}`}
                      className="mt-0.5 block font-sans text-sm font-medium text-[#0f2c2a] hover:text-[#22b6b1] transition-colors break-all"
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
                    <span className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]">
                      Office
                    </span>
                    <p className="mt-0.5 font-sans text-sm font-medium leading-relaxed text-[#0f2c2a]">
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
                    <span className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]">
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
                    <span className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]">
                      Out of hours (existing clients)
                    </span>
                    <a
                      href={`tel:${talkToUsAboutCareData.outOfHours.replace(/\s+/g, "")}`}
                      className="mt-0.5 block font-outfit text-sm font-bold text-[#0f2c2a] hover:text-[#22b6b1] transition-colors"
                    >
                      {talkToUsAboutCareData.outOfHours}
                    </a>
                  </div>
                </div>

                {/* Referrals */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-[#184f4b] shadow-2xs">
                    <FileText size={17} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]">
                      Referrals
                    </span>
                    <p className="mt-0.5 font-sans text-sm font-medium leading-relaxed text-[#0f2c2a]">
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
                <p className="border-t border-[#d6ece9] pt-4 font-sans text-xs italic leading-relaxed text-[#5a7673]">
                  {talkToUsAboutCareData.underCardNote}
                </p>
              </div>
            </div>
          </div>

          {/* Safety line banner at the bottom */}
          <div className="mt-8 sm:mt-10 flex items-start gap-2.5 rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-[#7c4d12] sm:items-center">
            <AlertCircle size={17} className="shrink-0 text-amber-600 mt-0.5 sm:mt-0" />
            <p className="font-sans text-xs sm:text-sm leading-relaxed">
              If someone is in immediate danger, call{" "}
              <a href="tel:999" className="font-bold underline hover:text-amber-900">
                999
              </a>
              . For urgent medical advice, call NHS{" "}
              <a href="tel:111" className="font-bold underline hover:text-amber-900">
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
