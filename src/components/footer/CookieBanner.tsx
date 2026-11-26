"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

import {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_KEY,
  ROUTES,
} from "@/lib/constants";

export { COOKIE_CONSENT_EVENT, COOKIE_CONSENT_KEY };

export const openCookieBanner = (): void => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT));
  }
};

export const CookieBanner = (): ReactNode => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);

    const handleOpen = (): void => {
      setIsOpen(true);
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, handleOpen);

    try {
      const existingConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!existingConsent) {
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleOpen);
    };
  }, []);

  const handleAccept = (): void => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    } catch {
      // Ignore storage write restrictions while updating runtime consent flag
    }
    if (typeof window !== "undefined") {
      (
        window as unknown as { __analyticsConsent?: boolean }
      ).__analyticsConsent = true;
    }
    setIsOpen(false);
  };

  const handleReject = (): void => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    } catch {
      // Ignore storage write restrictions while updating runtime consent flag
    }
    if (typeof window !== "undefined") {
      (
        window as unknown as { __analyticsConsent?: boolean }
      ).__analyticsConsent = false;
    }
    setIsOpen(false);
  };

  if (!hasMounted || !isOpen) {
    return null;
  }

  return (
    <aside
      aria-label="Cookie consent banner"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="pointer-events-auto mx-auto max-w-4xl rounded-2xl border border-[#d6ece9] bg-white/95 p-5 shadow-[0_-8px_32px_rgba(16,95,91,0.14)] backdrop-blur-md sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          {/* Cookie Icon & Text */}
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8dedb] bg-[#eef7f6] text-[#184f4b]">
              <Cookie size={20} />
            </div>
            <div className="flex-1">
              <p className="font-sans text-sm leading-relaxed text-[#203c39] sm:text-[15px]">
                This website uses a small number of cookies. Essential cookies
                keep the site working. Analytics cookies only load if you agree
                to them.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:shrink-0">
            <button
              type="button"
              onClick={handleAccept}
              className="inline-flex h-10 min-w-[96px] cursor-pointer items-center justify-center rounded-xl bg-[#184f4b] px-4 font-outfit text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#22b6b1] active:scale-[0.98]"
            >
              Accept
            </button>

            <button
              type="button"
              onClick={handleReject}
              className="inline-flex h-10 min-w-[96px] cursor-pointer items-center justify-center rounded-xl bg-[#184f4b] px-4 font-outfit text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#22b6b1] active:scale-[0.98]"
            >
              Reject
            </button>

            <Link
              href={ROUTES.COOKIE_POLICY}
              onClick={() => setIsOpen(false)}
              className="inline-flex h-10 items-center justify-center px-2 font-outfit text-sm font-medium text-[#184f4b] underline underline-offset-4 transition-colors hover:text-[#22b6b1]"
            >
              Cookie policy
            </Link>

            <button
              type="button"
              onClick={handleReject}
              aria-label="Dismiss cookie notice"
              className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 sm:hidden"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
