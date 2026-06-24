import { ElementType } from "react";
import { homeServices, servicesSection } from "@/utils/data";
import { images } from "@/utils/images";
import { ArrowRight, Heart, Home, Pill, Soup, Stethoscope, Users } from "lucide-react";
import Image from "next/image";
import { Contact, Footer } from "@/components";

type Service = {
  title: string;
  description: string;
  icon: keyof typeof serviceIcons;
};

const serviceIcons = {
  heart: Heart,
  pill: Pill,
  soup: Soup,
  users: Users,
  stethoscope: Stethoscope,
  home: Home,
} satisfies Record<string, ElementType>;

export default function Services() {
  function ServiceCard({ service }: { service: Service }) {
    const Icon = serviceIcons[service.icon];

    return (
      <article className="rounded-[8px] bg-white p-7 shadow-[0_12px_35px_rgba(6,54,51,0.12)] ring-1 ring-[#e5f1ef]">
        <span className="mb-5 grid h-12 w-12 place-items-center rounded-[4px] bg-[#e9fbfa] text-[#26bab5]">
          <Icon size={25} strokeWidth={1.8} />
        </span>
        <h3 className="text-lg font-bold text-[#102a28]">{service.title}</h3>
        <p className="mt-3 min-h-28 text-sm leading-6 text-[#49605e]">
          {service.description}
        </p>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#0e6d69]"
        >
          {servicesSection.linkLabel} <ArrowRight size={14} />
        </a>
      </article>
    );
  }

  return (
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
              WHAT WE OFFER
            </h2>

            {/* Brush Underline */}
            <div className="absolute -bottom-3 left-11/12 h-4 w-44 -translate-x-1/2">
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

      <section
        id="services"
        className="relative bg-white px-5 py-20 md:py-24"
      >
        <div className="absolute bottom-28 right-0 hidden h-40 w-24 rounded-l-full border border-[#84c9c6] md:block" />
        <div className="mx-auto max-w-[1020px]">
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </section>
  );
}
