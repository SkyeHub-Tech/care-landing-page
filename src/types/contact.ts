export interface DoWeCoverYourAreaData {
  id: string;
  title: string;
  coverageText: string;
  callPrompt: string;
  phone: string;
  phoneHref: string;
}

export interface ContactFaqItem {
  id: string;
  question: string;
  answer: string;
  link?: {
    text: string;
    href: string;
  };
}

export interface ContactFaqGroup {
  id: string;
  title: string;
  items: ContactFaqItem[];
}

export interface ContactFaqsSectionData {
  id: string;
  title: string;
  groups: ContactFaqGroup[];
}
