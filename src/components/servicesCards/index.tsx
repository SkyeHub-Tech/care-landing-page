"use client";
import { servicesCards } from "@/utils/data";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function ServicesCards() {
  return (
    <section className="px-4 lg:px-0 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {servicesCards?.map((_item, id) => (
        <div key={id} className="relative h-96 rounded-lg">
          <Image
            src={_item?.img}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/40 flex flex-col justify-end p-4 pb-14 text-white">
            <Typography as={"h3"} className="font-bold text-2xl">
              TEXT
            </Typography>
            <Typography as={"p"} className="text-base">
              Lorem ipsum dolor sit amet...
            </Typography>
          </div>
        </div>
      ))}
    </section>
  );
}
