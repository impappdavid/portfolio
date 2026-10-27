import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";

export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}