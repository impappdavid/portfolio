import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ViewTransitions } from "next-view-transitions"
import { Karla } from 'next/font/google'
import Dock from "@/components/my-components/dock";

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
        <body>
          {children}
          <Dock />
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
