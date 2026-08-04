import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Dock from "@/components/my-components/dock";



export const metadata: Metadata = {
  title: "Dávid Papp",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <title>Dávid Papp</title>
        </head>
        <body
          className={` antialiased`}
        >
          {children}
          <Analytics />
        </body>
      </html>
    </>
  );
}
