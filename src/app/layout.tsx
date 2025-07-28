import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"



export const metadata: Metadata = {
  title: "Papp Dávid",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Papp Dávid</title>
      </head>
      <body
        className={`antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
