"use client";

import type { ReactNode } from "react";
import { Settings } from "lucide-react";

import { openCookieBanner } from "@/components/footer/CookieBanner";

export const ManageCookiesButton = (): ReactNode => {
  return (
    <button
      type="button"
      onClick={openCookieBanner}
      className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[#b8dedb] bg-[#eef7f6] px-5 py-2.5 font-outfit text-sm font-semibold text-[#184f4b] shadow-2xs transition-all duration-200 hover:border-[#22b6b1] hover:bg-white hover:text-[#0f2c2a] active:scale-[0.99]"
    >
      <Settings size={16} />
      <span>Manage cookie preferences</span>
    </button>
  );
};
