"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { testimonials } from "@/utils/data";

export const TestimonialCarousel = (): ReactNode => {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className="relative mt-14">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop={testimonials.length > 1}
        speed={650}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation={{
          prevEl: ".testimonial-prev",
          nextEl: ".testimonial-next",
        }}
        pagination={{
          clickable: true,
          el: ".testimonial-pagination",
          bulletClass: "testimonial-bullet",
          bulletActiveClass: "testimonial-bullet-active",
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={`${testimonial.name}-${testimonial.area}`}>
            <div
              className={`grid items-center gap-12 ${
                testimonial.image ? "lg:grid-cols-[0.95fr_1.05fr]" : "mx-auto max-w-2xl"
              }`}
            >
              {testimonial.image && (
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.imageAlt ?? `${testimonial.name}, ${testimonial.area}`}
                    className="aspect-[1.35/1] rounded-[8px] border-8 border-white object-cover shadow-[0_0_0_4px_rgba(255,255,255,0.45),0_22px_55px_rgba(0,0,0,0.25)]"
                  />
                </div>
              )}

              <article className="relative rounded-[8px] bg-white px-9 py-10 text-[#223b39] shadow-xl">
                <p className="text-sm leading-6">{testimonial.quote}</p>
                <div className="mt-8">
                  <h3 className="font-outfit text-sm font-medium">
                    {testimonial.name}, {testimonial.area}
                  </h3>
                  <div className="mt-2 flex gap-1 text-[#eda12f]">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <Star key={index} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Previous testimonial"
        className="testimonial-prev absolute top-1/2 left-[42%] z-20 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/55 text-[#0e5a55] transition hover:bg-white lg:grid"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        aria-label="Next testimonial"
        className="testimonial-next absolute top-1/2 right-0 z-20 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white text-[#0e5a55] transition hover:bg-[#e9fbfa] lg:grid"
      >
        <ChevronRight size={20} />
      </button>

      <div className="testimonial-pagination mt-16 flex justify-center gap-2" />
    </div>
  );
};

export default TestimonialCarousel;
