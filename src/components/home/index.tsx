import Image, { StaticImageData } from "next/image";
import type { ElementType, ReactNode } from "react";
import {
  ArrowRight,
  Heart,
  Home,
  // Mail,
  // MapPin,
  MessageCircle,
  Pill,
  // Send,
  Soup,
  Stethoscope,
  Users,
} from "lucide-react";

import CustomButton from "../customComponents";
import { images } from "@/utils/images";
import Footer from "../footer";
import {
  // contactItems,
  // contactFormFields,
  // contactMessageField,
  // contactSection,
  homeHero,
  homeServices,
  homeValues,
  servicesSection,
  testimonialsSection,
  whoWeAre,
} from "@/utils/data";
import TestimonialCarousel from "./TestimonialCarousel";
import DecorativeCircles from "../decorativeCircles";
import Contact from "../contacts";

type Service = {
  title: string;
  description: string;
  icon: keyof typeof serviceIcons;
};

type ValueImageKey = keyof Pick<typeof images, "vision" | "mission">;

const serviceIcons = {
  heart: Heart,
  pill: Pill,
  soup: Soup,
  users: Users,
  stethoscope: Stethoscope,
  home: Home,
} satisfies Record<string, ElementType>;



function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold text-[#27aaa5]">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl font-semibold leading-tight text-[#062e2b] md:text-4xl">
        {title}
      </h2>
      {text && (
        <p className="mt-3 text-base leading-7 text-[#435957]">{text}</p>
      )}
    </div>
  );
}

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

function ValueCard({
  title,
  imageKey,
  children,
}: {
  title: string;
  imageKey: ValueImageKey;
  children: ReactNode;
}) {
  return (
    <article className="flex gap-4 items-start w-full">
      <Image
        src={images[imageKey]}
        width={40}
        height={40}
        alt=""
        className="place-items-center"
      />
      <div>
        <h3 className="font-serif text-lg font-semibold text-[#117b77]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#465d5a]">{children}</p>
      </div>
    </article>
  );
}

function FramedImage({
  src,
  alt,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[8px] border-2 border-[#22b6b1] ${className}`}
    >
      <Image src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}



export default function HomeLanding() {
  return (
    <main className="overflow-hidden bg-white text-[#082f2d]">
      <section className="relative min-h-[620px]">
        <Image
          src={images.hero_large}
          alt={homeHero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b5856]/70" />
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1180px] flex-col items-center justify-center px-5 py-24 text-center text-white">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/15 px-6 py-3 text-sm backdrop-blur">
            <Heart size={18} />
            {homeHero.badge}
          </div>
          <h1 className="max-w-4xl font-serif text-4xl font-bold uppercase leading-tight tracking-wide md:text-6xl">
            {homeHero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-white/95 md:text-lg">
            {homeHero.text}
          </p>
          <CustomButton
            href="#contact"
            className="mt-9 bg-[#36bdb8] px-20 py-4 text-sm text-white shadow-lg shadow-black/10 hover:bg-[#249d99]"
          >
            {homeHero.cta}
          </CustomButton>
        </div>
        <div className="absolute bottom-5 right-5 hidden items-center gap-2 rounded-full bg-[#0b6864] px-4 py-2 text-xs font-semibold text-white shadow-xl sm:flex">
          <MessageCircle size={16} />
          {homeHero.chatText}
        </div>
      </section>

      <section className="relative bg-white px-5 py-20 md:py-24">
        <div className="absolute right-16 top-12 h-14 w-14 rounded-full bg-[#dff6f4]" />
        <div className="absolute right-10 top-20 hidden h-11 w-11 rounded-full bg-[#cbecea] md:block" />
        <div className="absolute right-16 top-24 hidden grid-cols-6 gap-4 opacity-50 md:grid">
          {Array.from({ length: 36 }).map((_, index) => (
            <span key={index} className="h-1 w-1 rounded-full bg-[#68c7c3]" />
          ))}
        </div>
        <div className="relative z-10 mx-auto grid max-w-[1040px] items-center gap-10 lg:grid-cols-[0.95fr_1.2fr]">
          <FramedImage
            src={images.old_taker}
            alt={whoWeAre.imageAlt}
            className="aspect-[1.25/1] shadow-[0_20px_45px_rgba(16,95,91,0.12)]"
          />
          <div>
            <SectionHeading title={whoWeAre.title} text={whoWeAre.text} />
            <p className="mt-4 text-sm leading-6 text-[#465d5a]">
              {whoWeAre.supportingText}
            </p>
            <div className="mt-9 grid gap-7 md:grid-cols-2">
              {homeValues.map((value) => (
                <ValueCard
                  key={value.title}
                  title={value.title}
                  imageKey={value.imageKey}
                >
                  {value.text}
                </ValueCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative bg-[#e7f7f5] px-5 py-20 md:py-24"
      >
        <span className="absolute -top-7 left-1/2 hidden h-14 w-14 rotate-45 bg-[#174d4a] md:block" />
        <div className="absolute bottom-28 right-0 hidden h-40 w-24 rounded-l-full border border-[#84c9c6] md:block" />
        <div className="mx-auto max-w-[1020px]">
          <SectionHeading
            center
            title={servicesSection.title}
            text={servicesSection.text}
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#0f5a55] px-5 py-20 text-white md:py-24">
        <DecorativeCircles />
        <div className="relative z-10 mx-auto max-w-[1040px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold">
              {testimonialsSection.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">
              {testimonialsSection.text}
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
