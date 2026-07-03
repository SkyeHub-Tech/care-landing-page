import { Check } from "lucide-react";

type ChecklistProps = {
  items: string[];
};

export default function Checklist({ items }: ChecklistProps) {
  return (
    <div className="space-y-7">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-5">
          <div
            className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-[0_6px_16px_rgba(6,54,51,0.08)]
            border
            border-[#f0f6f5]
          "
          >
            <div
              className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-[#184E4A]
            "
            >
              <Check
                size={14}
                strokeWidth={3.5}
                className="text-white"
              />
            </div>
          </div>

          <p className="text-[18px] leading-8 text-[#353535]">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}