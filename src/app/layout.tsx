import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Outfit,
  Playfair_Display,
} from "next/font/google";

import { Navbar } from "@/components";
import { CookieBanner } from "@/components/footer/CookieBanner";
import { COMPANY_NAME } from "@/lib/constants";

import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const siteTitle = `Home Care & Live-in Care | ${COMPANY_NAME}`;
const siteDescription =
  "Home care across Greater London and Sussex, and live-in care across the UK, for adults who want to stay safe and independent at home.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: "/lighter-house-logo.svg",
    shortcut: "/lighter-house-logo.svg",
    apple: "/apple-touch-icon.png",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${inter.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
};

export default RootLayout;
