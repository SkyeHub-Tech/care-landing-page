"use client";
import { footerLinks } from "@/utils/data";
import { Facebook, Twitter } from "@/utils/icons";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const route = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-green text-white py-8">
      <div className="lg:w-[87%] lg:mx-auto">
        <div className="flex items-center gap-8 px-4 py-2">
          {footerLinks.map((_link) => (
            <Typography
              key={_link.name}
              href={_link.link}
              onClick={() => route.push(_link.link)}
              className={`cursor-pointer`}
            >
              {_link?.name}
            </Typography>
          ))}
        </div>
        <div className="bg-white w-full h-[0.5px] my-10" />
        <div className="flex items-center justify-between gap-3 px-4 py-2">
          <Typography as={"p"} className="text-base">
            &copy; {currentYear} Lighter House
          </Typography>
          <div className="flex items-center gap-5">
            <Facebook className="text-white cursor-pointer" size={24} />
            <Twitter className="text-white cursor-pointer" size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}
