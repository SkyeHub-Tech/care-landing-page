import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutJumpLinks } from "@/components/about/AboutJumpLinks";
import { Careers } from "@/components/about/Careers";
import { CompanyInformation } from "@/components/about/CompanyInformation";
import { ComplaintsFeedback } from "@/components/about/ComplaintsFeedback";
import { HowWeKeepCareSafe } from "@/components/about/HowWeKeepCareSafe";
import { OurStoryMission } from "@/components/about/OurStoryMission";
import { WhatWeBelieve } from "@/components/about/WhatWeBelieve";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About Us | ${COMPANY_NAME}`,
  description:
    "Lighter House Care Limited is a home care provider based in Brentford, West London, supporting adults aged 18 and over with home care across Greater London and Sussex, and live-in care across the UK.",
};

const AboutUsPage = (): ReactNode => {
  return (
    <section>
      <AboutHero />
      <AboutJumpLinks />
      <OurStoryMission />
      <WhatWeBelieve />
      <HowWeKeepCareSafe />
      <Careers />
      <ComplaintsFeedback />
      <CompanyInformation />
      <Footer />
    </section>
  );
};

export default AboutUsPage;
