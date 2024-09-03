import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Responsivenav from "@/components/Home/Navbar/Responsivenav";
import Footer from "@/components/Home/Footer/footer";
import Scrolltotop from "@/components/Helper/scrolltotop";
import WhatsappButton from "@/components/Helper/whatsapp";

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
        {children}
        <Footer/>
        <WhatsappButton/>
        <Scrolltotop/>
        </body>
    </html>
  );
}
