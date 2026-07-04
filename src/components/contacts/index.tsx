"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import DecorativeCircles from "../decorativeCircles";
import Image from "next/image";
import { images } from "@/utils/images";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Care Service Enquiry from ${form.name}`,
    );

    const body = encodeURIComponent(`
            Name: ${form.name}

            Email: ${form.email}

            Message:
            ${form.message}
        `);

    window.location.href = `mailto:enquiries@lighterhouse.co.uk?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative bg-white px-5 pt-24 pb-8 md:pb-12 overflow-x-clip"
    >
      {/* Background Decorative Circles */}
      <DecorativeCircles light />

      {/* Main Container Wrapper */}
      <div className="relative z-10 mx-auto max-w-[1060px]">
        {/* The Container with Blue Border */}
        <div className="relative rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] rounded-tl-[180px] bg-[#e3f6f4]/95 p-8 md:p-14 shadow-sm">
          {/* Send Icon overlapping top-right corner */}
          <div className="absolute -top-7 -right-7 md:-top-9 md:right-1 z-20">
            <Image
              src={images.send}
              alt="Send Message Icon"
              width={60}
              height={60}
              className="drop-shadow-md select-none pointer-events-none"
            />
          </div>
          {/* Centered Heading */}
          <div className="text-center mb-10">
            <h2 className="font-outfit text-[42px] font-medium text-[#102a28] tracking-tight">
              Get in <span className="font-outfit">Touch</span>
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
            {/* LEFT COLUMN - Reach Us On */}
            <div className="pt-2">
              <h3 className="font-outfit mb-6 text-2xl font-medium text-[#102a28] tracking-tight">
                Reach Us On
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-dark-green shadow-sm">
                    <MapPin size={18} />
                  </span>
                  <span className="font-sans text-[17px] leading-7 text-[#203c39] font-medium">
                    Westlink House 981 Great West Road Suite 140E Brentford TW8
                    9DN
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-dark-green shadow-sm">
                    <Mail size={18} />
                  </span>
                  <a
                    href="mailto:enquiries@lighterhouse.co.uk"
                    className="font-sans text-[17px] text-[#203c39] font-medium hover:underline"
                  >
                    enquiries@lighterhouse.co.uk
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-white text-dark-green shadow-sm">
                    <Phone size={18} />
                  </span>
                  <a
                    href="tel:+2342013309168"
                    className="font-sans text-[17px] text-[#203c39] font-medium hover:underline"
                  >
                    +234 201 330 9168
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Form Card */}
            <form
              onSubmit={handleSubmit}
              className="rounded-[24px] bg-white p-8 shadow-[0_12px_45px_rgba(6,54,51,0.05)] border border-[#dceeee] relative z-10"
            >
              <h3 className="font-outfit mb-6 text-2xl font-medium text-[#102a28] tracking-tight">
                Send Us a Message
              </h3>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="font-sans h-14 w-full rounded-2xl border border-[#d6e4e2] px-5 text-base outline-none transition focus:border-[#35bdb8] placeholder:text-[#504F4F]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="font-sans h-14 w-full rounded-2xl border border-[#d6e4e2] px-5 text-base outline-none transition focus:border-[#35bdb8] placeholder:text-[#504F4F]"
                />

                <textarea
                  placeholder="Tell us how you need our care services"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="font-sans w-full resize-none rounded-2xl border border-[#d6e4e2] px-5 py-4 text-base outline-none transition focus:border-[#35bdb8] placeholder:text-[#504F4F]"
                />

                <button
                  type="submit"
                  className="font-sans h-14 w-full bg-[#44BDB9] rounded-[20px] text-xl font-bold text-white hover:bg-[#35aaa6] transition duration-200 cursor-pointer active:scale-[0.99] select-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Plus signs vector grid decoration at bottom-right corner of container */}
          <div className="absolute right-[-24px] bottom-[-24px] z-0 hidden lg:block select-none pointer-events-none">
            <Image src={images.stars} alt="" width={120} height={130} />
          </div>
        </div>
      </div>
    </section>
  );
}
