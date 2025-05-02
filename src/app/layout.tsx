import type { Metadata } from "next";
import { Geist, Geist_Mono, Anybody, Bonheur_Royale, Oswald, Josefin_Sans } from "next/font/google";
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
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// Configure Bonheur Royale
const bonheurRoyale = Bonheur_Royale({
  variable: "--font-bonheur",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Configure Oswald
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

// Configure Josefin Sans
const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harun Or Rashid (Sajib)",
  description: "Portfolio of Harun Or Rashid Sajib, a Full Stack Web Developer specializing in MERN stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anybody.variable} ${bonheurRoyale.variable} ${oswald.variable} ${josefinSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}