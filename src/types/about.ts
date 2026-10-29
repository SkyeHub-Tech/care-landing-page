import type { StaticImageData } from "next/image";

export interface AboutHeroData {
  title: string;
  body: string;
}

export interface AboutJumpLink {
  name: string;
  href: string;
}

export interface OurStoryMissionData {
  id: string;
  storyTitle: string;
  storyBody: string;
  missionTitle: string;
  missionBody: string;
  image: StaticImageData;
  imageAlt: string;
}

