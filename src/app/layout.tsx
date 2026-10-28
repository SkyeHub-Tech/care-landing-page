import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display, Outfit } from "next/font/google";
import { Navbar } from "@/components";
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
})

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Home Care in Brentford & West London | Lighter House Care",
  description:
    "Trusted home care in Brentford, Hounslow and Ealing. Personal care, companionship and dementia support from a vetted local team. Free home visit.",
  openGraph: {
    title: "Home Care in Brentford & West London | Lighter House Care",
    description:
      "Trusted home care in Brentford, Hounslow and Ealing. Personal care, companionship and dementia support from a vetted local team. Free home visit.",
  },
  icons: {
    icon: "/lighter-house-logo.svg",
    shortcut: "/lighter-house-logo.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${inter.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
