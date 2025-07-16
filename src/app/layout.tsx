import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Lohith Sai G - Portfolio",
  description: "Portfolio of Lohith Sai G, a software engineer and ML enthusiast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo/favicon.png" />
        <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />
        <link rel="icon" sizes="32x32" href="/logo/favicon-32x32.png" />
      </head>
      <body className={`${inter.variable} font-sans bg-[#0a0f24] text-gray-100`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
