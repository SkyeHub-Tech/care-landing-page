"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Plus } from "lucide-react";
import { images } from "@/utils/images";
import Image from "next/image";
import { Footer } from "@/components";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    const subject = encodeURIComponent(
      `Care Service Enquiry from ${form.name}`,
    );

    const body = encodeURIComponent(`
            Name: ${form.name}

            Email: ${form.email}

            Message:
            ${form.message}
        `);

    window.location.href = `mailto:enquiries@lighterhouse.com?subject=${subject}&body=${body}`;
  };

  return (
    <section>
      <section className="relative w-full h-[293px] overflow-hidden">
        {/* Background Collage */}
        <div className="absolute inset-0">
          <Image
            src={images.hero_large}
            alt="Contact Us"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark Teal Overlay */}
        <div className="absolute inset-0 bg-[#184f4b]/80" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="relative inline-block">
            <h2 className="font-serif text-white text-5xl md:text-6xl font-bold uppercase tracking-wide">
              Contact Us
            </h2>

            {/* Brush Underline */}
            <div className="absolute -bottom-3 left-1/3 h-4 w-44 -translate-x-1/2">
              <svg viewBox="0 0 300 40" className="h-full w-full" fill="none">
                <path
                  d="M10 20C60 10 120 35 180 20C220 12 260 25 290 15"
                  stroke="#2CC9C0"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <p className="mt-8 max-w-4xl text-white text-xl md:text-[26px] leading-relaxed font-medium">
            Comprehensive care designed to meet each resident&apos;s personal
            and medical needs.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-6 lg:px-12 space-y-14">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-10 text-[42px] font-semibold text-[#2B2B2B]">
              Reach Us On
            </h2>
            <div className="space-y-7">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8E2E7]">
                  <MapPin size={22} className="text-[#245C5C]" />
                </div>

                <p className="max-w-sm text-lg leading-8 text-[#2D2D2D]">
                  1750 Global Health Avenue, Washington, DC 20006
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8E2E7]">
                  <Mail size={22} className="text-[#245C5C]" />
                </div>

                <a
                  href="mailto:enquiries@lighterhouse.com"
                  className="text-lg text-[#2D2D2D]"
                >
                  enquiries@lighterhouse.com
                </a>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8E2E7]">
                  <Phone size={22} className="text-[#245C5C]" />
                </div>

                <a href="tel:+2342013309168" className="text-lg text-[#2D2D2D]">
                  +234 201 330 9168
                </a>
              </div>

              {/* MAP */}
              <div className="mt-12 overflow-hidden border-[4px] border-[#31A8E1]">
                <iframe
                  title="location"
                  src="https://maps.google.com/maps?q=london&t=&z=10&ie=UTF8&iwloc=&output=embed"
                  className="h-[380px] w-full"
                />
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div>
            <h2 className="mb-10 text-[42px] font-semibold text-[#2B2B2B]">
              Send Us a Message
            </h2>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="h-[70px] w-full rounded-2xl border border-[#D4DCE3] px-6 text-lg outline-none placeholder:text-black"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="h-[70px] w-full rounded-2xl border border-[#D4DCE3] px-6 text-lg outline-none placeholder:text-black"
              />

              <textarea
                rows={5}
                placeholder="Tell us how you need our care services"
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-[#D4DCE3] px-6 py-5 text-lg outline-none placeholder:text-black"
              />

              <button
                onClick={handleSubmit}
                className="mt-8 flex h-[78px] w-full items-center justify-center rounded-[20px] bg-[#44BDB9] text-2xl font-semibold text-white transition hover:bg-[#35aaa6]"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
