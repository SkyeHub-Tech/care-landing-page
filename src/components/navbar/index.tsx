"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall, X } from "lucide-react";

import {
  COMPANY_NAME,
  MAIN_PHONE_DISPLAY,
  MAIN_PHONE_HREF,
  ROUTES,
} from "@/lib/constants";
import { navbarLinks } from "@/utils/data";
import { images } from "@/utils/images";

import CustomButton from "../customComponents";

export const Navbar = (): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9efec] bg-gradient-to-b from-white via-white to-[#DDF5F2] shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-[1180px] items-center justify-between px-5 sm:px-8">
        <Link
          href={ROUTES.HOME}
          className="shrink-0"
          aria-label={`${COMPANY_NAME} home`}
        >
          <Image
            src={images.logo}
            alt={COMPANY_NAME}
            className="h-16 w-32 object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-9 text-[13px] font-normal text-[#082f2d] lg:flex">
          {navbarLinks.map((item) => {
            const active =
              item.link === pathname ||
              (pathname === ROUTES.HOME && item.link === ROUTES.HOME);

            return (
              <Link
                key={item.name}
                href={item.link}
                className={`relative py-2 transition hover:text-[#29b8b3] ${
                  active ? "font-medium text-[#042927]" : "font-normal"
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute inset-x-0 bottom-1.5 mx-auto h-0.5 w-full rounded-full bg-[#3ABAB2]" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={MAIN_PHONE_HREF}
            className="inline-flex items-center gap-1.5 font-outfit text-sm font-semibold text-[#184f4b] transition-colors hover:text-[#22b6b1]"
          >
            <PhoneCall size={16} className="shrink-0" />
            <span>{MAIN_PHONE_DISPLAY}</span>
          </a>

          <CustomButton
            href={ROUTES.CONTACT}
            className="bg-[#35bdb8] px-7 py-3.5 text-[13px] text-white shadow-sm hover:bg-[#239f9b]"
          >
            Contact Us
          </CustomButton>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-[#d8efed] text-[#075b58] lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#e4f3f1] bg-white px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-4 text-sm text-[#082f2d]">
            {navbarLinks.map((item) => {
              const active =
                item.link === pathname ||
                (pathname === ROUTES.HOME && item.link === ROUTES.HOME);
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-2 py-2 hover:bg-[#edf9f8] ${
                    active ? "font-medium text-[#042927]" : "font-normal"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <a
              href={MAIN_PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-md px-2 py-2 font-outfit font-semibold text-[#184f4b] hover:bg-[#edf9f8]"
            >
              <PhoneCall size={16} className="shrink-0" />
              <span>{MAIN_PHONE_DISPLAY}</span>
            </a>

            <CustomButton
              href={ROUTES.CONTACT}
              onClick={() => setIsOpen(false)}
              className="mt-1 bg-[#35bdb8] px-6 py-3 text-white hover:bg-[#239f9b]"
            >
              Contact Us
            </CustomButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
