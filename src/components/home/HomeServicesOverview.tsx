import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Brain,
  Clock,
  HeartHandshake,
  Home,
  Pill,
  Users,
  Utensils,
} from "lucide-react";

import { servicesOverviewData } from "@/utils/data";

const serviceIcons: Record<string, ReactNode> = {
  "personal-care": <HeartHandshake size={24} className="text-[#146b66]" />,
  medication: <Pill size={24} className="text-[#146b66]" />,
  companionship: <Users size={24} className="text-[#146b66]" />,
  dementia: <Brain size={24} className="text-[#146b66]" />,
  respite: <Clock size={24} className="text-[#146b66]" />,
  "hospital-to-home": <Home size={24} className="text-[#146b66]" />,
  "meals-and-help": <Utensils size={24} className="text-[#146b66]" />,
  "live-in-care": <BedDouble size={24} className="text-[#146b66]" />,
};

interface ServiceCardProps {
  service: (typeof servicesOverviewData.services)[number];
}

const ServiceCard = ({ service }: ServiceCardProps): ReactNode => {
  return (
    <div className="group flex w-[82vw] max-w-[310px] shrink-0 snap-start flex-col justify-between rounded-[20px] border border-[#d6ece9] bg-white p-6 shadow-[0_4px_20px_rgba(16,95,91,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#22b6b1] hover:shadow-[0_12px_32px_rgba(16,95,91,0.08)] sm:w-auto sm:max-w-none sm:shrink">
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
};

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

          {/* Single DOM copy: swipeable scroll-snap row on mobile, 2x4 on tablet, 4x2 grid on desktop */}
          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-4 lg:gap-6">
            {servicesOverviewData.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Centered CTA Button */}
          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href={isServicesPage ? "/services" : servicesOverviewData.cta.href}
              className="inline-flex items-center justify-center rounded-full border-2 border-[#184f4b] bg-white px-8 py-3.5 text-center font-outfit text-base font-semibold text-[#184f4b] shadow-sm transition-all duration-200 hover:bg-[#184f4b] hover:text-white active:scale-[0.99]"
            >
              {isServicesPage
                ? "See all our services"
                : servicesOverviewData.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
