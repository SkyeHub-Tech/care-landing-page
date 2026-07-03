"use client";
// import { footerLinks } from "@/utils/data";
// import { Facebook, Twitter } from "@/utils/icons";
// import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { images } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const route = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mx-auto max-w-[1020px] px-1 pt-0 pb-14">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        <div>
          <Link href="/">
            <Image
              src={images.logo}
              alt="Lighter House Home Care"
              className="h-28 w-56 object-contain cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <h3 className="font-outfit mb-5 font-semibold text-[#102a28]">Quick Link</h3>
          <ul className="space-y-3 text-sm text-[#334d4a]">
            <li>
              <Link href="/" className="hover:underline hover:text-[#22b6b1] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:underline hover:text-[#22b6b1] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline hover:text-[#22b6b1] transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:underline hover:text-[#22b6b1] transition-colors">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-outfit mb-5 font-semibold text-[#102a28]">Our Services</h3>
          <ul className="space-y-3 text-sm text-[#334d4a]">
            <li>
              <Link href="/services" className="hover:underline hover:text-[#22b6b1] transition-colors">
                Personal Care
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline hover:text-[#22b6b1] transition-colors">
                Companionship
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline hover:text-[#22b6b1] transition-colors">
                Comfortable Living
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline hover:text-[#22b6b1] transition-colors">
                Nutritious Meals
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline hover:text-[#22b6b1] transition-colors">
                Health Monitoring
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline hover:text-[#22b6b1] transition-colors">
                24/7 Support
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-outfit mb-5 font-semibold text-[#102a28]">Contact Us</h3>
          <ul className="space-y-3 text-sm text-[#334d4a]">
            <li>
              <Link href="/contact" className="hover:underline hover:text-[#22b6b1] transition-colors">
                Westlink House 981 Great West Road Suite 140E Brentford TW8 9DN
              </Link>
            </li>
            <li>
              <a href="mailto:enquiries@lighterhouse.co.uk" className="hover:underline hover:text-[#22b6b1] transition-colors">
                enquiries@lighterhouse.co.uk
              </a>
            </li>
            <li>
              <a href="tel:+2342013309168" className="hover:underline hover:text-[#22b6b1] transition-colors">
                +234 201 330 9168
              </a>
            </li>
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
