"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Clock,
  HeartHandshake,
  Home,
  Pill,
  Users,
  Utensils,
} from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { servicesOverviewData } from "@/utils/data";

const serviceIcons: Record<string, ReactNode> = {
  "personal-care": <HeartHandshake size={24} className="text-[#146b66]" />,
  medication: <Pill size={24} className="text-[#146b66]" />,
  companionship: <Users size={24} className="text-[#146b66]" />,
  dementia: <Brain size={24} className="text-[#146b66]" />,
  respite: <Clock size={24} className="text-[#146b66]" />,
  "hospital-to-home": <Home size={24} className="text-[#146b66]" />,
  "meals-and-help": <Utensils size={24} className="text-[#146b66]" />,
};

function ServiceCard({
  service,
  className = "",
}: {
  service: (typeof servicesOverviewData.services)[number];
  className?: string;
}): ReactNode {
  return (
    <div
      id={service.id}
      className={`group flex flex-col justify-between scroll-mt-28 rounded-[20px] border border-[#d6ece9] bg-white p-6 shadow-[0_4px_20px_rgba(16,95,91,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#22b6b1] hover:shadow-[0_12px_32px_rgba(16,95,91,0.08)] ${className}`}
    >
      <div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#22b6b1] bg-[#eef8f7]">
          {serviceIcons[service.icon]}
        </div>
        <h3 className="mb-2 font-outfit text-lg font-bold text-[#0f2c2a] sm:text-xl">
          {service.title}
        </h3>
        <p className="font-sans text-sm leading-relaxed text-[#415e5b]">
          {service.description}
        </p>
      </div>

      <div className="mt-6">
        <Link
          href={service.link}
          className="group/link inline-flex items-center gap-1.5 font-outfit text-sm font-semibold text-[#184f4b] transition-colors hover:text-[#22b6b1]"
        >
          <span>Find out more</span>
          <ArrowRight
            size={15}
            className="transition-transform group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}

export const HomeServicesOverview = ({
  isServicesPage = false,
}: {
  isServicesPage?: boolean;
} = {}): ReactNode => {
  return (
    <section
      id={servicesOverviewData.id}
      className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-6 shadow-[0_12px_40px_rgba(16,95,91,0.04)] sm:rounded-[32px] sm:p-10 md:p-12 lg:p-14">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
              {servicesOverviewData.title}
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#22b6b1]" />
            {servicesOverviewData.body && (
              <p className="mt-4 font-sans text-base leading-relaxed text-[#415e5b] sm:text-lg">
                {servicesOverviewData.body}
              </p>
            )}
          </div>

          {/* Desktop Grid Layout (4 top, 3 centered bottom) */}
          <div className="mt-10 hidden lg:block">
            {/* Row 1: 4 cards */}
            <div className="grid grid-cols-4 gap-6">
              {servicesOverviewData.services.slice(0, 4).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* Row 2: 3 cards centered */}
            <div className="mt-6 flex justify-center gap-6">
              {servicesOverviewData.services.slice(4, 7).map((service) => (
                <div key={service.id} className="w-[calc(25%-18px)]">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel Layout (SwiperJS) */}
          <div className="mt-8 block lg:hidden">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1.15}
              spaceBetween={16}
              breakpoints={{
                640: {
                  slidesPerView: 2.15,
                  spaceBetween: 20,
                },
              }}
              pagination={{
                clickable: true,
                el: ".services-overview-pagination",
                bulletClass: "services-bullet",
                bulletActiveClass: "services-bullet-active",
              }}
              className="services-overview-swiper pb-4"
            >
              {servicesOverviewData.services.map((service) => (
                <SwiperSlide key={service.id} className="h-auto">
                  <ServiceCard service={service} className="h-full" />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination dots & Swipe hint */}
            <div className="mt-4 flex flex-col items-center gap-1.5">
              <div className="services-overview-pagination flex justify-center gap-2" />
              <span className="text-xs font-medium text-[#6e8a86]">
                Swipe sideways
              </span>
            </div>
          </div>

          {/* Centered CTA Button */}
          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href={isServicesPage ? "/services" : servicesOverviewData.cta.href}
              className="inline-flex items-center justify-center rounded-full border-2 border-[#184f4b] bg-white px-8 py-3.5 text-center font-outfit text-base font-semibold text-[#184f4b] shadow-sm transition-all duration-200 hover:bg-[#184f4b] hover:text-white active:scale-[0.99]"
            >
              {isServicesPage ? "See all our services" : servicesOverviewData.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
