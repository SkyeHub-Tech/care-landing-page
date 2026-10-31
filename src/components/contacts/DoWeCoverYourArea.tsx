"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Search } from "lucide-react";

import { postcodeSchema } from "@/schemas/postcode";
import type { PostcodeFormData } from "@/schemas/postcode";
import { doWeCoverYourAreaData } from "@/utils/data";

type ResultState = "idle" | "covered" | "not-covered";

export const DoWeCoverYourArea = (): ReactNode => {
  const [resultState, setResultState] = useState<ResultState>("idle");
  const [searchedPostcode, setSearchedPostcode] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PostcodeFormData>({
    resolver: zodResolver(postcodeSchema),
    defaultValues: {
      postcode: "",
    },
  });

  const onSubmit = (data: PostcodeFormData) => {
    const cleaned = data.postcode.trim().toUpperCase().replace(/\s+/g, "");
    setSearchedPostcode(data.postcode.trim().toUpperCase());

    // Match on the first part of the postcode
    const isCovered = doWeCoverYourAreaData.coveredPostcodes.some((code) => {
      const cleanCode = code.toUpperCase().replace(/\s+/g, "");
      return cleaned.startsWith(cleanCode);
    });

    setResultState(isCovered ? "covered" : "not-covered");
  };

  const handleTagClick = (areaName: string) => {
    // Map sample outward postcode for quick check convenience
    const areaPostcodeMap: Record<string, string> = {
      Brentford: "TW8",
      Hounslow: "TW3",
      Isleworth: "TW7",
      Chiswick: "W4",
      Ealing: "W5",
      Feltham: "TW13",
      Twickenham: "TW1",
      Richmond: "TW9",
    };

    const sample = areaPostcodeMap[areaName] || "TW8";
    setValue("postcode", sample, { shouldValidate: true });
    onSubmit({ postcode: sample });
  };

  return (
    <section
      id={doWeCoverYourAreaData.id}
      className="scroll-mt-24 bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Wireframe outer card container */}
        <div className="rounded-[24px] border border-[#d6ece9] bg-[#f9fdfc] p-6 shadow-[0_12px_40px_rgba(16,95,91,0.03)] sm:rounded-[32px] sm:p-10 lg:p-12">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-outfit text-2xl font-bold tracking-tight text-[#0f2c2a] sm:text-3xl md:text-4xl">
              {doWeCoverYourAreaData.title}
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#22b6b1]" />
            <p className="mt-4 font-sans text-sm leading-relaxed text-[#415e5b] sm:text-base sm:leading-relaxed">
              {doWeCoverYourAreaData.body}
            </p>
          </div>

          {/* Postcode Search Form */}
          <div className="mx-auto mt-8 max-w-2xl sm:mt-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-3 sm:flex-row sm:items-start"
            >
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                  <Search size={18} />
                </div>
                <input
                  id="postcode-input"
                  type="text"
                  placeholder={doWeCoverYourAreaData.inputPlaceholder}
                  {...register("postcode")}
                  className={`w-full rounded-xl border bg-white py-3 pr-4 pl-10 font-sans text-sm text-[#0f2c2a] transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 sm:text-base ${
                    errors.postcode
                      ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                      : "border-[#d6ece9] hover:border-[#b8dedb] focus:border-[#22b6b1] focus:ring-[#22b6b1]/20"
                  }`}
                />
                {errors.postcode && (
                  <p className="mt-1.5 font-sans text-xs text-rose-600">
                    {errors.postcode.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex h-[46px] w-full shrink-0 items-center justify-center rounded-xl bg-[#184f4b] px-8 font-outfit text-sm font-semibold text-white shadow-sm shadow-[#184f4b]/15 transition-all duration-200 hover:bg-[#22b6b1] active:scale-[0.99] sm:w-auto sm:text-base cursor-pointer"
              >
                {doWeCoverYourAreaData.buttonText}
              </button>
            </form>

            {/* Result Box: Covered */}
            {resultState === "covered" && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#22b6b1]/40 bg-[#eef7f6] p-4.5 text-[#0f2c2a] shadow-xs sm:items-center sm:p-5">
                <CheckCircle2
                  size={22}
                  className="mt-0.5 shrink-0 text-[#22b6b1] sm:mt-0"
                />
                <p className="font-sans text-sm leading-relaxed sm:text-[15px]">
                  Good news, we cover your area
                  {searchedPostcode ? ` (${searchedPostcode})` : ""}.{" "}
                  <a
                    href="#enquiry"
                    className="font-medium text-[#184f4b] underline hover:text-[#22b6b1]"
                  >
                    Send us a message
                  </a>{" "}
                  or call{" "}
                  <a
                    href={`tel:${doWeCoverYourAreaData.phone.replace(/\s+/g, "")}`}
                    className="font-bold text-[#184f4b] underline hover:text-[#22b6b1]"
                  >
                    {doWeCoverYourAreaData.phone}
                  </a>{" "}
                  to arrange your free home visit.
                </p>
              </div>
            )}

            {/* Result Box: Not Covered */}
            {resultState === "not-covered" && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#d6ece9] bg-white p-4.5 text-[#0f2c2a] shadow-xs sm:items-center sm:p-5">
                <AlertCircle
                  size={22}
                  className="mt-0.5 shrink-0 text-[#184f4b] sm:mt-0"
                />
                <p className="font-sans text-sm leading-relaxed sm:text-[15px]">
                  We may still be able to help
                  {searchedPostcode ? ` in ${searchedPostcode}` : ""}. Please
                  call us on{" "}
                  <a
                    href={`tel:${doWeCoverYourAreaData.phone.replace(/\s+/g, "")}`}
                    className="font-bold text-[#184f4b] underline hover:text-[#22b6b1]"
                  >
                    {doWeCoverYourAreaData.phone}
                  </a>{" "}
                  and we&apos;ll check.
                </p>
              </div>
            )}

            {/* Area Tags */}
            <div className="mt-7 sm:mt-8">
              <p className="text-center font-sans text-xs font-semibold uppercase tracking-wider text-[#184f4b]/80 sm:text-xs">
                Popular areas we serve across West London
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {doWeCoverYourAreaData.coveredAreas.map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => handleTagClick(area)}
                    title={`Check ${area}`}
                    className="cursor-pointer rounded-full border border-[#d6ece9] bg-white px-3.5 py-1.5 font-sans text-xs font-medium text-[#184f4b] shadow-2xs transition-all duration-200 hover:border-[#22b6b1] hover:bg-[#eef7f6] hover:text-[#0f2c2a] active:scale-95 sm:text-sm"
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
