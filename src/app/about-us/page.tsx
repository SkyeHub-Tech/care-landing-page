import type { ReactNode } from "react";

import { Contact, Footer } from "@/components";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutJumpLinks } from "@/components/about/AboutJumpLinks";
import { OurStoryMission } from "@/components/about/OurStoryMission";

const AboutUsPage = (): ReactNode => {
  return (
    <section>
      {/* Hero Section */}
      <AboutHero />

      {/* Jump Links Navigation */}
      <AboutJumpLinks />

      {/* Section 3: Our story and mission */}
      <OurStoryMission />

      <Contact />
      <Footer />
    </section>
  );
};

export default AboutUsPage;

