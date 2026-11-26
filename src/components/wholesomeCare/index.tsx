import type { ReactNode } from "react";

import { COVERAGE_LINE } from "@/lib/constants";
import { CheckCircleOutLine } from "@/utils/icons";

export const WholesomeCare = (): ReactNode => {
  return (
    <section className="root_bg_img mt-12 flex h-[32rem] items-center border border-white py-8">
      <div className="mx-auto max-w-screen-md text-center">
        <h2 className="font-outfit text-4xl font-medium">
          Safe, Reliable and{" "}
          <span className="text-teal-600">Person-Centred Care</span>
        </h2>
        <p className="mt-4 text-base text-white lg:mt-8">{COVERAGE_LINE}</p>
        <div className="mx-auto mt-6 flex flex-col justify-center gap-8 lg:w-3/5">
          <span className="col-span-3 mx-auto flex items-center gap-2 text-white">
            <CheckCircleOutLine color="white" size={16} /> Dignity &amp; Respect
          </span>
          <div className="flex justify-between gap-8">
            <span className="col-span-1 flex items-center gap-2 text-white">
              <CheckCircleOutLine color="white" size={16} /> Independence
            </span>
            <span className="col-span-1 flex items-center gap-2 text-white">
              <CheckCircleOutLine color="white" size={16} /> Consistent Teams
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WholesomeCare;
