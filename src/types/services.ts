import type { StaticImageData } from "next/image";

export interface ServiceJumpLink {
  name: string;
  href: string;
}

export interface ServiceDetailSectionData {
  id: string;
  title: string;
  body: string;
  image: StaticImageData;
  imageAlt: string;
  includedTitle: string;
  includedItems: string[];
  subSectionTitle: string;
  subSectionText: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface PriceTableRow {
  visitType: string;
  price: string;
}

export interface PayingForCareData {
  id: string;
  title: string;
  body: string;
  priceBoxTitle: string;
  prices: PriceTableRow[];
  underPriceBox: string;
  payingPrivately: {
    title: string;
    text: string;
  };
  councilHelp: {
    title: string;
    text: string;
  };
  otherHelp: {
    title: string;
    items: {
      name: string;
      description: string;
      link?: {
        label: string;
        href: string;
      };
    }[];
  };
  smallPrint: string;
}

