import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ViewTransitions } from "next-view-transitions"
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
