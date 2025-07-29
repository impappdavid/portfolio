import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/my-components/navbar";
import Footer from "@/components/my-components/footer";



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
        className={` antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
