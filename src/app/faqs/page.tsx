"use client";
import { CustomButton } from "@/components";
import { faqs } from "@/utils/data";
import { Minus, Plus } from "@/utils/icons";
import { images } from "@/utils/images";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="py-16 relative w-full h-screen">
        <div className="relative h-full rounded-lg">
          <div className="absolute inset-0 w-8/12 h-4/12 -rotate-6 bg-main-teal mt-auto rounded-lg ml-4" />
          <div className="absolute inset-0 left-auto mr-4 w-8/12 h-4/12 rotate-6 bg-main-orange mt-auto rounded-lg " />
          <Image
            src={images.hero}
            alt="about_us-banner-image"
            className="object-cover absolute inset-0 w-full h-full rounded-lg"
          />
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-xl">
            <Typography as={"h1"} className="text-4xl font-bold text-white">
              FAQ
            </Typography>
            <Typography as={"p"} className="text-base mt-6">
              At times the Lighter House may sound like another language,{" "}
              <br className="hidden lg:block" /> and we are here to help.
            </Typography>
          </div>
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>
      <section className="mt-14 z-20">
        {faqs.map((_faqs, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white shadow-sm rounded-t-md overflow-hidden border-b-2 border-primary-green mb-3 mt-14"
            >
              <CustomButton
                onClick={() => {
                  toggleAccordion(index);
                  console.log("clicking is working");
                }}
                className={`w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-lg transition-colors ${
                  isOpen
                    ? "bg-main-teal text-main-orange"
                    : "bg-white text-orange-color"
                }`}
              >
                <Typography as={"span"}>{_faqs.question}</Typography>
                <span
                  onClick={() => {
                    toggleAccordion(index);
                    console.log("clicking is working");
                  }}
                >
                  {isOpen ? (
                    <Minus className="cursor-pointer" />
                  ) : (
                    <Plus className="cursor-pointer" />
                  )}
                </span>
              </CustomButton>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 bg-gray-100 text-gray-500 text-base leading-relaxed">
                  {_faqs.answer}
                </div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}
