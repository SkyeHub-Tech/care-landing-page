"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import CustomButton from "../customComponents";
import { heroSlides } from "@/utils/data";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-full rounded-lg overflow-hidden"
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full">
              <Image
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 lg:left-10 h-full flex flex-col justify-center max-w-lg text-white px-8">
                <h1 className="text-4xl font-bold">{slide.title}</h1>
                <p className="mt-4 text-lg">{slide.text}</p>
                <CustomButton className="mt-6 bg-main-teal px-6 py-2 rounded-md w-fit cursor-pointer">
                  Call to Action
                </CustomButton>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
