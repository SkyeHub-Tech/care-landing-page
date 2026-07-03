import Image from "next/image";
import { images } from "@/utils/images";

export default function DecorativeCircles({}: { light?: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-visible z-20">
      <div className="relative mx-auto max-w-[1060px] h-full w-full">
        {/* Top-left: big_circles.svg */}
        <div className="absolute -left-[100px] -top-[80px] sm:-left-[150px] sm:-top-[120px] md:-left-[240px] md:-top-[160px] lg:-left-[300px] lg:-top-[200px] w-[350px] sm:w-[500px] md:w-[700px] lg:w-[825px] opacity-90 z-0">
          <Image
            src={images.big_circles}
            alt=""
            width={825}
            height={617}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Top-right: spiral.svg */}
        <div className="absolute -right-[30px] -top-[40px] sm:-right-[50px] sm:-top-[60px] md:-right-[80px] md:-top-[90px] w-[140px] sm:w-[200px] md:w-[285px] z-0">
          <Image
            src={images.spiral}
            alt=""
            width={285}
            height={291}
            className="w-full h-auto"
          />
        </div>

        {/* Bottom-left: spiral.svg (flows down into the footer) */}
        <div className="absolute -left-[40px] -bottom-[120px] sm:-left-[60px] sm:-bottom-[140px] md:-left-[100px] md:-bottom-[160px] lg:-left-[130px] lg:-bottom-[190px] w-[160px] sm:w-[220px] md:w-[285px] z-0">
          <Image
            src={images.spiral}
            alt=""
            width={285}
            height={291}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}