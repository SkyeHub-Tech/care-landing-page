export default function DecorativeCircles({ light = false }: { light?: boolean }) {
  const color = light ? "border-[#91d8d5]" : "border-white/20";

  return (
    <>
      <span
        className={`pointer-events-none absolute -left-14 top-16 h-52 w-28 rotate-[-28deg] rounded-full ${light ? "bg-[#d9eeee]" : "bg-white/10"}`}
      />
      <span
        className={`pointer-events-none absolute bottom-10 left-24 h-52 w-52 rounded-full ${light ? "bg-[#c6e8e5]" : "bg-white/10"}`}
      />
      <span
        className={`pointer-events-none absolute right-10 top-10 h-64 w-64 rounded-full border-[34px] ${color}`}
      />
      <span
        className={`pointer-events-none absolute bottom-[-70px] right-28 h-44 w-44 rounded-full ${light ? "bg-[#d9eeee]" : "bg-white/10"}`}
      />
    </>
  );
}