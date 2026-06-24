"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import CustomButton from "../customComponents";
import { navbarLinks } from "@/utils/data";
import { images } from "@/utils/images";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9efec] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 w-full max-w-[1180px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="shrink-0" aria-label="Lighter House home">
          <Image
            src={images.logo}
            alt="Lighter House Home Care"
            className="h-12 w-32 object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-9 text-[13px] font-medium text-[#082f2d] lg:flex">
          {navbarLinks.map((item) => {
            const active = item.link === pathname || (pathname === "/" && item.link === "/");

            return (
              <Link
                key={item.name}
                href={item.link}
                className={`relative py-2 transition hover:text-[#29b8b3] ${
                  active ? "text-[#042927]" : ""
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-full rounded-full bg-[#29b8b3]" />
                )}
              </Link>
            );
          })}
        </div>

        <CustomButton
          href="#contact"
          className="hidden bg-[#35bdb8] px-8 py-3 text-[13px] text-white shadow-sm hover:bg-[#239f9b] lg:inline-flex"
        >
          Contact Us
        </CustomButton>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-[#d8efed] text-[#075b58] lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#e4f3f1] bg-white px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-4 text-sm font-medium text-[#082f2d]">
            {navbarLinks.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-2 hover:bg-[#edf9f8]"
              >
                {item.name}
              </Link>
            ))}
            <CustomButton
              href="#contact"
              className="mt-1 bg-[#35bdb8] px-6 py-3 text-white hover:bg-[#239f9b]"
            >
              Contact Us
            </CustomButton>
          </div>
        </div>
      )}
    </header>
  );
}
