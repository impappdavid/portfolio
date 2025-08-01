import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/my-components/navbar";
import Footer from "@/components/my-components/footer";
import { ViewTransitions } from "next-view-transitions"
import CustomCursor from "@/components/my-components/customCursor";
import { Karla } from 'next/font/google'

const karla = Karla({ subsets: ['latin'], variable: "--font-karla" })

export const metadata1: Metadata = {
  title: 'Custom Cursor',
  description: '',
}


export const metadata: Metadata = {
  title: "Papp Dávid",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <title>Papp Dávid</title>
        </head> 
        <body className={`antialiased ${karla.className}`}>
          <Navbar />
          <CustomCursor />
          {children}
          <Footer />
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
