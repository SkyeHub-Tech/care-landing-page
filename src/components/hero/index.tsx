import { images } from "@/utils/images";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={images.hero_img}
        alt="hero-img"
        fill
        className="object-cover"
        priority
      />

      {/* Teal overlay */}
      <div className="absolute inset-0 bg-main-teal opacity-30 z-10" />

      {/* Optional content on top */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Welcome to Care for the Old</h1>
      </div>
    </section>
  );
}
