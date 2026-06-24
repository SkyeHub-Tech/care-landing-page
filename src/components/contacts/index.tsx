import { ElementType } from "react";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import DecorativeCircles from "../decorativeCircles";
import { contactFormFields, contactItems, contactMessageField, contactSection } from "@/utils/data";
import CustomButton from "../customComponents";

const contactIcons = {
  map: MapPin,
  mail: Mail,
  message: MessageCircle,
} satisfies Record<string, ElementType>;

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white px-5 pt-20 md:pt-24">
      <DecorativeCircles light />
      <div className="absolute right-16 top-8 grid h-16 w-16 place-items-center rounded-full bg-[#2eb9b4] text-white shadow-xl">
        <Send size={30} fill="currentColor" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1020px] gap-12 rounded-[8px] bg-[#e3f6f4] px-6 py-14 md:px-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-end">
          <h2 className="mb-32 text-center font-serif text-3xl font-semibold text-[#062e2b] lg:text-left">
            {contactSection.title}
          </h2>
          <h3 className="mb-6 text-lg font-medium text-[#193d3a]">
            {contactSection.subtitle}
          </h3>
          <div className="space-y-4">
            {contactItems.map((item) => {
              const Icon = contactIcons[item.icon];

              return (
                <div
                  key={item.label}
                  className="flex items-start gap-3 text-sm text-[#203c39]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#b8dedb] bg-white/70 text-[#1faaa5]">
                    <Icon size={15} />
                  </span>
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <form className="rounded-[8px] bg-white p-7 shadow-[0_18px_50px_rgba(8,78,74,0.12)]">
          <h3 className="mb-7 text-xl font-medium text-[#1b3835]">
            {contactSection.formTitle}
          </h3>
          <div className="space-y-5">
            {contactFormFields.map((field) => (
              <input
                key={field.placeholder}
                type={field.type}
                placeholder={field.placeholder}
                className="h-12 w-full rounded-[8px] border border-[#d6e4e2] px-4 text-sm outline-none transition focus:border-[#2eb9b4]"
              />
            ))}
            <textarea
              placeholder={contactMessageField.placeholder}
              className="h-24 w-full resize-none rounded-[8px] border border-[#d6e4e2] px-4 py-4 text-sm outline-none transition focus:border-[#2eb9b4]"
            />
            <CustomButton
              type="submit"
              className="h-12 w-full bg-[#35bdb8] text-sm text-white hover:bg-[#249d99]"
            >
              {contactSection.submitLabel}
            </CustomButton>
          </div>
        </form>
      </div>
    </section>
  );
}
