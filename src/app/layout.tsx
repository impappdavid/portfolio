import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Dock from "@/components/my-components/dock";


import Dock from "@/components/my-components/dock";



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
    <html lang="en">
      <head>
        <title>Papp Dávid</title>
      </head>
      <body
        className={` antialiased`}
      >

        <Dock />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
