import type { Metadata } from "next";
import { Geist, Geist_Mono, Anybody, Bonheur_Royale, Oswald } from "next/font/google";
import "./globals.css";

// Configure Geist Sans
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configure Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Anybody
const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All weights
  style: ["normal", "italic"], // Include italic
  display: "swap",
});

// Configure Bonheur Royale
const bonheurRoyale = Bonheur_Royale({
  variable: "--font-bonheur",
  subsets: ["latin"],
  weight: "400", // Only available weight
  display: "swap",
});

// Configure Oswald
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"], // Available weights
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harun Or Rashid ( Sajib )",
  description: "Portfolio of Julius Guevara, a UI/UX Designer and Front End Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anybody.variable} ${bonheurRoyale.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}