import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Responsivenav from "@/components/Home/Navbar/Responsivenav";

const font = Space_Grotesk({ 
  weight:['400','300','500','600','700'],
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning with Abdul",
  description: "E-learning website with Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Responsivenav />
        {children}</body>
    </html>
  );
}
