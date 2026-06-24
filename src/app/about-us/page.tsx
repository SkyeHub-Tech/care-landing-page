"use client";
import { CustomButton } from "@/components";
import { aboutusImages } from "@/utils/data";
import { images } from "@/utils/images";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <section>
        <section className="relative w-full h-[293px] overflow-hidden">
          {/* Background Collage */}
          <div className="absolute inset-0">
            <Image
              src={images.hero_large}
              alt="What We Offer"
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
                Who we are
              </h2>

              {/* Brush Underline */}
              <div className="absolute -bottom-3 left-10/12 h-4 w-44 -translate-x-1/2">
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
        <section className="relative overflow-hidden bg-white py-20">
          <div className="absolute left-8 top-10 hidden lg:block">
            <img
              src={images.decore_lines}
              alt=""
              className="w-20 opacity-70"
            />
          </div>
        </section>
      </section>
    </>
  );
}
