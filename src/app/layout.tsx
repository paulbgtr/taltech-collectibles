import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TalTech Collectibles",
  description:
    "Eco-friendly, collectible TalTech keychains linked to digital campus stories.",
  keywords: [
    "taltech",
    "collectibles",
    "keychains",
    "eco-friendly",
    "campus",
    "stories",
  ],
  applicationName: "TalTech Collectibles",
  authors: [
    { name: "Pavel" },
    { name: "Arseni" },
    { name: "Alexander" },
    { name: "Tristan" },
  ],
  creator: "TalTech Team",
  publisher: "TalTech",
  icons: {
    icon: [
      { url: "/icon.ico", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.ico", media: "(prefers-color-scheme: dark)" },
    ],
  },
  openGraph: {
    title: "TalTech Collectibles",
    description:
      "Discover collectible eco keychains with digital stories from TalTech.",
    // Add an OG image if available
    images: ["/og-image.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative w-full">
          <Navbar />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
