/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navbarLinks } from "@/utils/data";

import Link from "next/link";
import { Location, Phone } from "@/utils/icons";
import {
  Button,
  Collapse,
  IconButton,
  Navbar as Nav,
  Typography,
} from "@material-tailwind/react";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();
  const route = useRouter();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1024 && setOpenNav(false)
    );
  }, []);

  return (
    <section className="z-50 w-full fixed top-0 left-0">
      <Nav className="bg-gradient-to-r from-main-teal to-light-teal rounded-none px-4 py-2 lg:px-8 lg:py-1">
        <div className="container mx-auto flex items-center justify-between">
          <div className="hidden lg:flex gap-3 justify-between w-full">
            {navbarLinks.map((_link) => (
              <Link
                key={_link.name}
                href={_link.link}
                className={`hover:bg-white hover:text-main-teal p-4 ${
                  _link.link === pathname
                    ? "bg-white text-main-teal font-bold"
                    : "text-white"
                }`}
              >
                {_link.name}
              </Link>
            ))}
          </div>
          <IconButton
            variant="text"
            className="mr-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden mb-3"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 close"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                data-cy="close"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hamburger"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                data-cy="menu"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        {openNav && (
          <Collapse data-cy="mobile_nav" open={openNav} className="lg:hidden">
            <div className="flex flex-col gap-4 mt-8">
              {navbarLinks.map((_link) => (
                <a
                  key={_link.name}
                  href={_link.link}
                  onClick={() => setOpenNav(!openNav)}
                  className={`text-white hover:text-gray-500 ${
                    _link.link === pathname && "!text-gray-300"
                  } text-sm font-medium`}
                >
                  {_link.name}
                </a>
              ))}
            </div>
          </Collapse>
        )}
      </Nav>
    </section>
  );
}
