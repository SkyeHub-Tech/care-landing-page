"use client";
import { CustomButton } from "@/components";
import { aboutusImages } from "@/utils/data";
import { images } from "@/utils/images";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <section className="py-16 relative w-full h-screen">
        <div className="relative h-full rounded-lg">
          <div className="absolute inset-0 w-8/12 h-4/12 -rotate-6 bg-main-teal mt-auto rounded-lg ml-4" />
          <div className="absolute inset-0 left-auto mr-4 w-8/12 h-4/12 rotate-6 bg-main-orange mt-auto rounded-lg " />
          <Image
            src={images.card_2}
            alt="about_us-banner-image"
            className="object-cover absolute inset-0 w-full h-full rounded-lg"
          />
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-xl">
            <Typography as={"h1"} className="text-4xl font-bold text-white">
              About Us
            </Typography>
            <Typography as={"p"} className="mt-2 text-lg text-gray-200">
              A Care Home For Your Loved Ones
            </Typography>
            <CustomButton className="mt-6 bg-[#038383] text-white text-base rounded-md shadow-lg hover:shadow-xl w-fit">
              Call (451) 860-1995
            </CustomButton>
          </div>
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-6 p-4 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 gap-y-5 lg:ml-auto">
          {aboutusImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="images-about-us"
              className={`lg:w-[200px] lg:h-[250px] ${
                index === 0
                  ? "lg:!h-[200px] mt-auto"
                  : index === 2
                  ? "lg:!h-[200px] lg:-translate-x-8"
                  : ""
              }`}
            />
          ))}
        </div>
        <div className="">
          <Typography
            as={"h2"}
            className="text-xl lg:text-3xl font-bold mb-4 capitalize text-black lg:w-8/12"
          >
            We are a full service care home
          </Typography>
          <Typography
            as={"p"}
            className="text-black text-xs lg:text-base mb-4 lg:w-8/12"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            similique tempore ratione fugiat excepturi quidem nam non
            repudiandae itaque vero maxime voluptatibus cupiditate cum soluta
            aut totam quae nisi? Doloribus ab voluptas a exercitationem quia
            tempore animi voluptate deserunt repellat neque facilis labore,
            dolorem minus distinctio! Eum, soluta est! Eveniet, nobis quis
            repellendus est fuga alias possimus dolore libero necessitatibus
            quas, unde dignissimos debitis nulla ipsa nam expedita incidunt
            suscipit laudantium voluptatum ipsam, blanditiis eum!
          </Typography>
        </div>
      </section>
    </>
  );
}
