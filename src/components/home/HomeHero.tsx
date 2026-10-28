import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, PhoneCall } from "lucide-react";

import { homeHero } from "@/utils/data";
import { images } from "@/utils/images";

export const HomeHero = (): ReactNode => {
  return (
    <section className="bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="relative overflow-hidden rounded-[24px] border border-[#d6ece9] bg-[#eef7f6] p-6 shadow-[0_16px_50px_rgba(16,95,91,0.06)] sm:rounded-[32px] sm:p-10 md:p-12 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Text & Actions (order-2 on mobile wireframe, left column on desktop) */}
            <div className="order-2 flex flex-col items-start lg:order-1 lg:col-span-7">
              <span className="font-outfit text-xs font-bold uppercase tracking-wider text-[#146b66] sm:text-sm">
                {homeHero.eyebrow}
              </span>

              <h1 className="mt-3 font-outfit text-3xl font-bold leading-[1.18] tracking-tight text-[#0f2c2a] sm:mt-4 sm:text-4xl lg:text-[44px] xl:text-[48px]">
                {homeHero.title}
              </h1>

              <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-[#3a5451] sm:mt-5 sm:text-lg">
                {homeHero.text}
              </p>

              <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href={homeHero.primaryCta.href}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#184f4b] px-7 py-3.5 text-center font-outfit text-base font-semibold text-white shadow-md shadow-[#184f4b]/20 transition-all duration-200 hover:bg-[#123e3b] hover:shadow-lg active:scale-[0.99] sm:w-auto"
                >
                  {homeHero.primaryCta.label}
                </Link>

                <a
                  href={homeHero.secondaryCta.href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#184f4b] bg-white px-7 py-3.5 text-center font-outfit text-base font-semibold text-[#184f4b] transition-all duration-200 hover:bg-[#184f4b] hover:text-white active:scale-[0.99] sm:w-auto sm:bg-transparent"
                >
                  <PhoneCall size={18} className="shrink-0" />
                  {homeHero.secondaryCta.label}
                </a>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#466965] sm:mt-6 sm:text-sm">
                <CheckCircle2 size={16} className="shrink-0 text-[#184f4b]" />
                <span>{homeHero.trustNote}</span>
              </div>
            </div>

            {/* Image (order-1 on mobile wireframe, right column on desktop) */}
            <div className="order-1 w-full lg:order-2 lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-[#cce8e4] bg-[#dbece9] shadow-sm sm:aspect-[16/11] lg:aspect-[4/3]">
                <Image
                  src={images.main_hero}
                  alt={homeHero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Subtle WhatsApp pill */}
          <div className="absolute bottom-4 right-4 hidden items-center gap-2 rounded-full bg-[#0b6864] px-4 py-2 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6 sm:flex">
            <Image
              src={images.whatsapp}
              alt="whatsapp"
              width={22}
              height={22}
            />
            {homeHero.chatText}
          </div>
        </div>
      </div>
    </section>
  );
};
