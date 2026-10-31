export interface DoWeCoverYourAreaData {
  id: string;
  title: string;
  body: string;
  inputPlaceholder: string;
  buttonText: string;
  phone: string;
  resultCovered: string;
  resultNotCovered: string;
  coveredAreas: string[];
  coveredPostcodes: string[];
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
