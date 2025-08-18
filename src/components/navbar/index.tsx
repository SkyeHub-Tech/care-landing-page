"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { navbarLinks } from "@/utils/data";
import {
  Collapse,
  IconButton,
  Navbar as Nav,
  Typography,
} from "@material-tailwind/react";
import CustomButton from "../customComponents";
import { images } from "@/utils/images";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("none");
  const pathname = usePathname();
  const route = useRouter();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1024 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    // Scroll event handler
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setNavbarBackground("#85c5ae"); // Set background to light teal green
      } else {
        setNavbarBackground("none"); // Set background to transparent
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`z-50 w-full lg:w-[85%] fixed top-0 left-0 mx-auto lg:inset-0 `}
    >
      <Nav
        style={{ background: navbarBackground }}
        className={`px-4 py-2 lg:px-8 lg:py-3 border-0 `}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Image
            src={images.temp_logo}
            alt="temp-logo"
            className="w-[100px] h-[50px]"
          />
          {/* <Typography
            as={"h2"}
            className="text-main-teal font-semibold text-2xl"
          >
            Lighter House
          </Typography> */}
          <div className="hidden lg:flex gap-8 justify-center max-w-3xl w-full">
            {navbarLinks.map((_link) => (
              <Link
                key={_link.name}
                href={_link.link}
                className={`hover:bg-main-teal hover:text-white px-4 py-2 rounded-md ${
                  _link.link === pathname
                    ? "bg-main-teal text-white font-bold"
                    : "text-main-teal font-medium"
                }`}
              >
                {_link.name}
              </Link>
            ))}
          </div>
          <CustomButton className="bg-main-teal text-white rounded-lg text-lg px-6 py-3 cursor-pointer hidden lg:block">
            Call a Line
          </CustomButton>
          <IconButton
            variant="text"
            className="mr-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden mb-3 absolute right-12"
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
                    _link.link === pathname && "!text-main-orange"
                  } text-sm font-medium`}
                >
                  {_link.name}
                </a>
              ))}
              <CustomButton className="bg-main-teal text-white rounded-lg text-lg px-6 py-3 cursor-pointer w-fit">
                Call a Line
              </CustomButton>
            </div>
          </Collapse>
        )}
      </Nav>
    </section>
  );
}
