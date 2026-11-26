"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
} from "lucide-react";

import {
  CARE_FOR_OPTIONS,
  COMPANY_NAME,
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  FORM_THANK_YOU_MESSAGE,
  MAIN_PHONE_DISPLAY,
  MAIN_PHONE_HREF,
  OFFICE_HOURS_TEXT,
  OFFICE_VISITS_NOTE,
  OUT_OF_HOURS_PHONE_DISPLAY,
  OUT_OF_HOURS_PHONE_HREF,
  REGISTERED_OFFICE_ADDRESS,
  ROUTES,
} from "@/lib/constants";
import { contactMessageSchema } from "@/schemas/contact-message";
import type { ContactMessageFormData } from "@/types/contact-message";
import { images } from "@/utils/images";

import DecorativeCircles from "../decorativeCircles";

export const Contact = (): ReactNode => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [pendingMailtoUrl, setPendingMailtoUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactMessageFormData>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      postcode: "",
      careFor: "",
      message: "",
      consent: true,
    },
  });

  const onSubmit = (data: ContactMessageFormData): void => {
    const subject = encodeURIComponent(
      `Care Service Enquiry from ${data.name.trim()}`,
    );

    const body = encodeURIComponent(
      `Hello ${COMPANY_NAME} Team,\n\nI would like to enquire about your care services.\n\nMy Details:\n- Name: ${data.name.trim()}\n- Phone Number: ${data.phone.trim()}\n- Email: ${data.email.trim()}\n- Postcode: ${data.postcode.trim()}\n- Who is the care for: ${data.careFor}\n\nMessage:\n${data.message.trim()}\n\nThank you,\n${data.name.trim()}`,
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
      id="contact"
      className="relative overflow-x-clip bg-white px-5 pt-24 pb-8 md:pb-12"
    >
      <DecorativeCircles light />

      <div className="relative z-10 mx-auto max-w-[1060px]">
        <div className="relative rounded-tl-[120px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] bg-[#e3f6f4]/95 p-6 shadow-sm sm:rounded-tl-[160px] sm:p-8 md:p-14">
          {/* Decorative Send Icon */}
          <div className="absolute -top-7 -right-4 z-20 md:-top-9 md:right-1">
            <Image
              src={images.send}
              alt=""
              aria-hidden="true"
              width={60}
              height={60}
              className="pointer-events-none drop-shadow-md select-none"
            />
          </div>

          {/* Centered Heading */}
          <div className="mb-10 text-center">
            <h2 className="font-outfit text-3xl font-medium tracking-tight text-[#102a28] sm:text-[42px]">
              Get in Touch
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
            {/* LEFT COLUMN - Reach Us On */}
            <div className="pt-2">
              <h3 className="mb-6 font-outfit text-2xl font-medium tracking-tight text-[#102a28]">
                Reach Us On
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-dark-green shadow-sm">
                    <MapPin size={18} />
                  </span>
                  <span className="font-sans text-base leading-7 font-medium text-[#203c39]">
                    {REGISTERED_OFFICE_ADDRESS}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-dark-green shadow-sm">
                    <Mail size={18} />
                  </span>
                  <a
                    href={CONTACT_EMAIL_HREF}
                    className="font-sans text-base font-medium text-[#203c39] hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-dark-green shadow-sm">
                    <Phone size={18} />
                  </span>
                  <a
                    href={MAIN_PHONE_HREF}
                    className="font-sans text-base font-semibold text-[#203c39] hover:underline"
                  >
                    {MAIN_PHONE_DISPLAY}
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-dark-green shadow-sm">
                    <Clock size={18} />
                  </span>
                  <div className="font-sans text-sm leading-6 text-[#203c39]">
                    <p className="font-medium">{OFFICE_HOURS_TEXT}</p>
                    <p className="text-[#415e5b]">{OFFICE_VISITS_NOTE}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-dark-green shadow-sm">
                    <PhoneCall size={18} />
                  </span>
                  <p className="font-sans text-sm leading-6 text-[#203c39]">
                    Out-of-hours support for existing clients and their families
                    on{" "}
                    <a
                      href={OUT_OF_HOURS_PHONE_HREF}
                      className="font-semibold underline hover:text-[#22b6b1]"
                    >
                      {OUT_OF_HOURS_PHONE_DISPLAY}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Send Us a Message Form Card */}
            <div className="relative z-10 rounded-[24px] border border-[#dceeee] bg-white p-6 shadow-[0_12px_45px_rgba(6,54,51,0.05)] sm:p-8">
              {isSubmitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eef7f6] text-[#22b6b1] shadow-xs">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="mt-4 font-outfit text-2xl font-bold text-[#102a28]">
                    Message received
                  </h3>
                  <p className="mx-auto mt-2.5 max-w-sm font-sans text-sm leading-relaxed text-[#415e5b]">
                    {FORM_THANK_YOU_MESSAGE}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    {pendingMailtoUrl && (
                      <a
                        href={pendingMailtoUrl}
                        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#184f4b] px-5 py-2.5 font-outfit text-sm font-semibold text-white transition-colors hover:bg-[#22b6b1]"
                      >
                        <ExternalLink size={15} />
                        <span>Open email app ({CONTACT_EMAIL})</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#b8dedb] bg-[#f9fdfc] px-6 py-2.5 font-outfit text-sm font-semibold text-[#184f4b] transition-colors hover:border-[#22b6b1] hover:bg-[#eef7f6]"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-4"
                >
                  <h3 className="font-outfit text-2xl font-medium tracking-tight text-[#102a28]">
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-block-name"
                        className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase"
                      >
                        Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-block-name"
                        type="text"
                        placeholder="Your full name"
                        {...register("name")}
                        className={`mt-1 w-full rounded-xl border bg-[#f9fdfc] px-4 py-2.5 font-sans text-sm text-[#0f2c2a] outline-none focus:ring-2 ${
                          errors.name
                            ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                            : "border-[#d6ece9] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
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
                        htmlFor="contact-block-phone"
                        className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase"
                      >
                        Phone <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-block-phone"
                        type="tel"
                        placeholder="e.g. 07123 456789"
                        {...register("phone")}
                        className={`mt-1 w-full rounded-xl border bg-[#f9fdfc] px-4 py-2.5 font-sans text-sm text-[#0f2c2a] outline-none focus:ring-2 ${
                          errors.phone
                            ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                            : "border-[#d6ece9] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 font-sans text-xs text-rose-600">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-block-email"
                        className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase"
                      >
                        Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-block-email"
                        type="email"
                        placeholder="you@example.com"
                        {...register("email")}
                        className={`mt-1 w-full rounded-xl border bg-[#f9fdfc] px-4 py-2.5 font-sans text-sm text-[#0f2c2a] outline-none focus:ring-2 ${
                          errors.email
                            ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                            : "border-[#d6ece9] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
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
                        htmlFor="contact-block-postcode"
                        className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase"
                      >
                        Postcode <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-block-postcode"
                        type="text"
                        placeholder="e.g. TW8 9DN"
                        {...register("postcode")}
                        className={`mt-1 w-full rounded-xl border bg-[#f9fdfc] px-4 py-2.5 font-sans text-sm text-[#0f2c2a] outline-none focus:ring-2 ${
                          errors.postcode
                            ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                            : "border-[#d6ece9] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
                        }`}
                      />
                      {errors.postcode && (
                        <p className="mt-1 font-sans text-xs text-rose-600">
                          {errors.postcode.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-block-careFor"
                      className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase"
                    >
                      Who is the care for?{" "}
                      <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="contact-block-careFor"
                      {...register("careFor")}
                      className={`mt-1 w-full rounded-xl border bg-[#f9fdfc] px-4 py-2.5 font-sans text-sm text-[#0f2c2a] outline-none focus:ring-2 ${
                        errors.careFor
                          ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                          : "border-[#d6ece9] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
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
                      htmlFor="contact-block-message"
                      className="block font-sans text-xs font-semibold tracking-wider text-[#184f4b] uppercase"
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-block-message"
                      rows={3}
                      placeholder="Tell us about the care you are looking for..."
                      {...register("message")}
                      className={`mt-1 w-full resize-none rounded-xl border bg-[#f9fdfc] px-4 py-2.5 font-sans text-sm text-[#0f2c2a] outline-none focus:ring-2 ${
                        errors.message
                          ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                          : "border-[#d6ece9] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 font-sans text-xs text-rose-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div>
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
                          className="text-[#184f4b] underline hover:text-[#22b6b1]"
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 w-full cursor-pointer rounded-full bg-[#184f4b] font-outfit text-base font-semibold text-white transition duration-200 hover:bg-[#22b6b1] active:scale-[0.99] disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Decorative vector grid */}
          <div className="pointer-events-none absolute right-[-24px] bottom-[-24px] z-0 hidden select-none lg:block">
            <Image
              src={images.stars}
              alt=""
              aria-hidden="true"
              width={120}
              height={130}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
