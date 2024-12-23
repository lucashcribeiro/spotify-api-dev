import type { Metadata } from "next";
import { Kodchasan } from "next/font/google";
import "./globals.css";

const kodchasan = Kodchasan({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kodchasan.className}>{children}</body>
    </html>
  );
}