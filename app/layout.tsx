import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Francisc Furdui - Digital Experience Designer",
  description:
    "Portfolio and CV of Francisc Furdui, Digital Experience Designer",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-oid="bhm5z22">
      <body className="font-sans" data-oid="ta2h6:0">
        <ThemeProvider data-oid="4n60bms">{children}</ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
