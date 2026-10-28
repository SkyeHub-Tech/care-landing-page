import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  PhoneCall,
  ShieldCheck,
  Users,
} from "lucide-react";

import { whyLighterHouseData } from "@/utils/data";
import { images } from "@/utils/images";

const itemIcons: Record<string, ReactNode> = {
  users: <Users size={20} className="text-[#146b66]" />,
  shield: <ShieldCheck size={20} className="text-[#146b66]" />,
  clipboard: <ClipboardCheck size={20} className="text-[#146b66]" />,
  phone: <PhoneCall size={20} className="text-[#146b66]" />,
};

export const HomeWhyLighterHouse = (): ReactNode => {
  return (
    <section
      id={whyLighterHouseData.id}
      className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#eef7f6] p-6 shadow-[0_16px_50px_rgba(16,95,91,0.06)] sm:rounded-[32px] sm:p-10 md:p-12 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Photo Column (Top on mobile wireframe, left on desktop) */}
            <div className="order-1 w-full lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-[#cce8e4] bg-[#dbece9] shadow-sm sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[1/1]">
                <Image
                  src={images.old_taker}
                  alt={whyLighterHouseData.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Content Column (Bottom on mobile wireframe, right on desktop) */}
            <div className="order-2 flex flex-col items-start lg:col-span-7">
              <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
                {whyLighterHouseData.title}
              </h2>

              <div className="mt-6 flex flex-col gap-6 sm:mt-8 sm:gap-7">
                {whyLighterHouseData.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#22b6b1] bg-white shadow-sm">
                      {itemIcons[item.icon] ?? itemIcons.users}
                    </div>
                    <div>
                      <h3 className="font-outfit text-base font-bold text-[#0f2c2a] sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-[15px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10">
                <Link
                  href={whyLighterHouseData.link.href}
                  className="group inline-flex items-center gap-2 font-outfit text-base font-semibold text-[#184f4b] transition-colors hover:text-[#22b6b1]"
                >
                  <span>{whyLighterHouseData.link.label}</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
