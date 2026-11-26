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
  whoWeAreTitle: string;
  whoWeAreBody: string;
  missionTitle: string;
  missionBody: string;
  whoWeSupportId: string;
  whoWeSupportTitle: string;
  whoWeSupportBody: string;
  howWeWorkTitle: string;
  howWeWorkBody: string;
  image: StaticImageData;
  imageAlt: string;
}

export type ValueCardIconName =
  | "Scale"
  | "HeartHandshake"
  | "Equal"
  | "ShieldCheck"
  | "Compass";

export interface ValueCardItem {
  title: string;
  text: string;
  iconName: ValueCardIconName;
}

export interface WhatWeBelieveData {
  id: string;
  title: string;
  items: ValueCardItem[];
}

export type SafetyCardIconName =
  | "BadgeCheck"
  | "UserCheck"
  | "ClipboardCheck"
  | "Pill"
  | "Shield"
  | "Sparkles"
  | "ClipboardList"
  | "BookOpen";

export interface SafetyCardItem {
  title: string;
  text: string;
  iconName: SafetyCardIconName;
  emailLink?: string;
}

export interface QualitySafetyData {
  id: string;
  title: string;
  body: string;
  items: SafetyCardItem[];
}

export interface RecruitmentAdvert {
  title: string;
  text: string;
  buttonLabel: string;
}

export interface CareersData {
  id: string;
  title: string;
  body: string;
  recruitmentAdvert: RecruitmentAdvert;
  noVacanciesText: string;
  whyWorkWithUsTitle: string;
  whyWorkWithUsItems: string[];
  howToApplyTitle: string;
  howToApplySteps: string[];
  formTitle: string;
  equalOpportunitiesText: string;
}

export interface ComplaintStep {
  step: number;
  title: string;
  text: string;
  phone?: string;
  email?: string;
}

export interface ComplaintsFeedbackData {
  id: string;
  title: string;
  body: string;
  steps: ComplaintStep[];
  textUnderSteps: string;
}

export interface CompanyInformationData {
  text: string;
}

export interface TalkToUsAboutCareData {
  id: string;
  title: string;
  body: string;
  phone: string;
  email: string;
  office: string;
  officeHours: string;
  outOfHoursPhone: string;
  outOfHoursText: string;
  referrals: string;
  underCardNote: string;
  safetyLine: string;
}

export interface TestimonialItem {
  name: string;
  area: string;
  rating: number;
  image?: StaticImageData;
  imageAlt?: string;
  quote: string;
}
