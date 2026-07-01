"use client";
// import { footerLinks } from "@/utils/data";
// import { Facebook, Twitter } from "@/utils/icons";
// import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { images } from "@/utils/images";
import Image from "next/image";

export default function Footer() {
  const route = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mx-auto max-w-[1020px] px-1 py-14">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        <div>
          <Image
            src={images.logo}
            alt="Lighter House Home Care"
            className="h-28 w-56 object-contain"
          />
        </div>
        <div>
          <h3 className="mb-5 font-semibold text-[#102a28]">Quick Link</h3>
          <ul className="space-y-3 text-sm text-[#334d4a]">
            <li>Home</li>
            <li>Features</li>
            <li>Resource Library</li>
            <li>How it Works</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-5 font-semibold text-[#102a28]">Our Services</h3>
          <ul className="space-y-3 text-sm text-[#334d4a]">
            <li>Personal Care</li>
            <li>Companionship</li>
            <li>Comfortable Living</li>
            <li>Nutritious Meals</li>
            <li>Health Monitoring</li>
            <li>24/7 Support</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-5 font-semibold text-[#102a28]">Contact Us</h3>
          <ul className="space-y-3 text-sm text-[#334d4a]">
            <li>
              Westlink House 981 Great West Road Suite 140E Brentford TW8 9DN
            </li>
            <li>enquiries@lighterhouse.com</li>
            <li>+234 201 330 9168</li>
          </ul>
        </div>
      </div>
      <div className="mt-14 border-t border-[#d7e9e7] pt-6 text-center text-xs text-[#8ba19f]">
        All Right Reserved. © LighterHouse 2026
      </div>
    </footer>

    // <footer className="bg-primary-green text-white py-8">
    //   <div className="lg:w-[87%] lg:mx-auto">
    //     <div className="flex items-center gap-8 px-4 py-2">
    //       {footerLinks.map((_link) => (
    //         <Typography
    //           key={_link.name}
    //           href={_link.link}
    //           onClick={() => route.push(_link.link)}
    //           className={`cursor-pointer`}
    //         >
    //           {_link?.name}
    //         </Typography>
    //       ))}
    //     </div>
    //     <div className="bg-white w-full h-[0.5px] my-10" />
    //     <div className="flex items-center justify-between gap-3 px-4 py-2">
    //       <Typography as={"p"} className="text-base">
    //         &copy; {currentYear} Lighter House
    //       </Typography>
    //       <div className="flex items-center gap-5">
    //         <Facebook className="text-white cursor-pointer" size={24} />
    //         <Twitter className="text-white cursor-pointer" size={24} />
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}
