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

const AboutUsPage = (): ReactNode => {
  return (
    <section>
      {/* Hero Section */}
      <AboutHero />

      {/* Jump Links Navigation */}
      <AboutJumpLinks />

      {/* Section 3: Our story and mission */}
      <OurStoryMission />

      {/* Section 4: What we believe */}
      <WhatWeBelieve />

      {/* Section 5: How we keep care safe */}
      <HowWeKeepCareSafe />

      {/* Section 7: Careers */}
      <Careers />

      {/* Section 8: Complaints and feedback */}
      <ComplaintsFeedback />

      {/* Section 9: Company information */}
      <CompanyInformation />

      <Footer />
    </section>
  );
};

export default AboutUsPage;

