import Image, { StaticImageData } from "next/image";

type ImageCardProps = {
  src: string | StaticImageData;
};

export default function ImageCard({ src }: ImageCardProps) {
  return (
    <div
      className="
      overflow-hidden
      rounded-[24px]
      border-[3px]
      border-[#41C8C8]
      shadow-sm
    "
    >
      <Image
        src={src}
        alt=""
        width={600}
        height={450}
        className="
          h-full
          w-full
          object-cover
          transition
          duration-500
          hover:scale-105
        "
      />
    </div>
  );
}