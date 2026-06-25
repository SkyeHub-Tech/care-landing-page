export default function DecorativeCircles({ light = false }: { light?: boolean }) {
  const bgStyle1 = light ? "bg-[#d9eeee]" : "bg-white/[0.07]";
  const bgStyle2 = light ? "bg-[#c6e8e5]" : "bg-white/[0.06]";
  const bgStyle3 = light ? "bg-[#d9eeee]/80" : "bg-white/[0.05]";
  const bgStyle4 = light ? "bg-[#d9eeee]" : "bg-white/[0.06]";
  const borderColor = light ? "border-[#91d8d5]" : "border-white/[0.08]";

  return (
    <>
      {/* Top-left elongated diagonal ellipse */}
      <span
        className={`pointer-events-none absolute -left-20 -top-24 h-[480px] w-[240px] rotate-[-30deg] rounded-full ${bgStyle1} select-none`}
      />

      {/* Mid-left overlapping soft circle */}
      <span
        className={`pointer-events-none absolute left-[-100px] top-[30%] h-[280px] w-[280px] rounded-full ${bgStyle2} select-none`}
      />

      {/* Bottom-left overlapping soft circle */}
      <span
        className={`pointer-events-none absolute left-[-80px] bottom-[-60px] h-[320px] w-[320px] rounded-full ${bgStyle3} select-none`}
      />

      {/* Top-right concentric ripple rings wrapper */}
      <div className="pointer-events-none absolute -right-[120px] -top-[120px] h-[560px] w-[560px] flex items-center justify-center select-none">
        {/* Ring 1 (Outer) */}
        <div className={`absolute w-[560px] h-[560px] border border-dashed border-spacing-2 rounded-full ${borderColor} opacity-60`} />
        {/* Ring 2 */}
        <div className={`absolute w-[440px] h-[440px] border rounded-full ${borderColor}`} />
        {/* Ring 3 */}
        <div className={`absolute w-[320px] h-[320px] border rounded-full ${borderColor}`} />
        {/* Ring 4 (Inner) */}
        <div className={`absolute w-[200px] h-[200px] border rounded-full ${borderColor}`} />
      </div>

      {/* Bottom-right soft circle */}
      <span
        className={`pointer-events-none absolute right-[10%] bottom-[-100px] h-[280px] w-[280px] rounded-full ${bgStyle4} select-none`}
      />
    </>
  );
}