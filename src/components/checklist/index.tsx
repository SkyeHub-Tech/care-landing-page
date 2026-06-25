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
            mt-1
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#1F6969]
            shadow
          "
          >
            <Check
              size={18}
              strokeWidth={3}
              className="text-white"
            />
          </div>

          <p className="text-[18px] leading-8 text-[#353535]">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}