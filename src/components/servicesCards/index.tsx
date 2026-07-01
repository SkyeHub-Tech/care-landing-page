"use client";

import Image from "next/image";
import { homeServices } from "@/utils/data";
import { images } from "@/utils/images";

// 1. Personal Care Support: Heart icon
const PersonalCareIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

// 2. Medication Management: Pill icon
const MedicationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </svg>
);

// 3. Nutritious Meals & Dining: Ramen icon
const RamenIcon = () => (
  <Image src={images.ramen} alt="Ramen" width={48} height={48} className="object-cover" />
);

// 4. Companionship & Social: People icon
const PeopleIcon = () => (
  <Image src={images.people} alt="People" width={48} height={48} className="object-cover" />
);

// 5. Health Monitoring: Heart Break icon
const HeartBreakIcon = () => (
  <Image src={images.heart_break} alt="Heart Break" width={48} height={48} className="object-cover" />
);

// 6. Respite & Short-Term Care: Heart South icon
const HeartSouthIcon = () => (
  <Image src={images.health_south} alt="Health South" width={48} height={48} className="object-cover" />
);

const iconComponents = {
  heart: PersonalCareIcon,
  pill: MedicationIcon,
  soup: RamenIcon,
  users: PeopleIcon,
  stethoscope: HeartBreakIcon,
  home: HeartSouthIcon,
};

type Service = {
  title: string;
  description: string;
  icon: keyof typeof iconComponents;
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconComponents[service.icon] || PersonalCareIcon;
  const isImageIcon = ["soup", "users", "stethoscope", "home"].includes(service.icon);

  return (
    <article className="h-full flex flex-col justify-between rounded-[20px] bg-white p-8 shadow-[0_10px_35px_rgba(20,90,85,0.06)] border border-[#e7f6f5] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(20,90,85,0.1)] hover:-translate-y-1">
      <div>
        {isImageIcon ? (
          <span className="mb-6 block h-12 w-12 overflow-hidden rounded-[10px]">
            <Icon />
          </span>
        ) : (
          <span className="mb-6 grid h-12 w-12 place-items-center rounded-[10px] bg-[#e6f8f7] text-[#22b6b1]">
            <Icon />
          </span>
        )}
        <h3 className="font-serif text-xl font-bold text-[#102a28] tracking-tight">
          {service.title}
        </h3>
        <p className="mt-3.5 text-[15px] leading-[26px] text-[#4b605e] font-normal">
          {service.description}
        </p>
      </div>
    </article>
  );
}

export default function ServicesCards({
  showLeftScribble = true,
  showRightScribble = true,
}: {
  showLeftScribble?: boolean;
  showRightScribble?: boolean;
}) {
  return (
    <div className="relative w-full">
      {/* Left decorative scribble */}
      {showLeftScribble && (
        <div className="absolute -left-12 top-[10%] -translate-y-1/2 z-0 hidden lg:block select-none pointer-events-none opacity-80">
          <Image
            src={images.decore_lines}
            alt=""
            width={75}
            height={195}
            className="w-auto h-auto"
          />
        </div>
      )}

      {/* Right decorative scribble (flipped horizontally) */}
      {showRightScribble && (
        <div className="absolute -right-12 bottom-[10%] lg:bottom-[50%] translate-y-1/2 z-0 hidden lg:block select-none pointer-events-none opacity-80 scale-x-[-1]">
          <Image
            src={images.decore_lines}
            alt=""
            width={75}
            height={195}
            className="w-auto h-auto"
          />
        </div>
      )}

      {/* Services Grid layout */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {homeServices.map((service) => (
          <ServiceCard key={service.title} service={service as Service} />
        ))}
      </div>
    </div>
  );
}