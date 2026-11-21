import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans, Inter, Anek_Tamil } from "next/font/google";

const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-plex", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const anek = Anek_Tamil({ subsets: ["latin", "tamil"], axes: ["wdth"], variable: "--font-anek", display: "swap" });

export const metadata: Metadata = {
  title: "Blooms IAS Academy - Where Success Blooms | Best TNPSC Coaching in Tamil Nadu",
  description: "Blooms IAS Academy is the premier coaching institute in Tamil Nadu for TNPSC Group I, Group II, Group IV and all TNPSC examinations. Expert Tamil & English faculty, comprehensive study material, and proven track record of 2000+ selections.",
  keywords: ["Blooms IAS Academy", "TNPSC Coaching", "TNPSC Group 1", "TNPSC Group 2", "Tamil Nadu PSC", "TNPSC Group 4", "Best TNPSC Coaching", "TNPSC Coaching in Chennai", "Where Success Blooms"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full antialiased ${plex.variable} ${inter.variable} ${anek.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Elegant Serif Font for Branding */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
