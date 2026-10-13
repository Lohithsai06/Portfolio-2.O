import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lohith Sai G — Full-Stack Developer Portfolio",
  description:
    "Portfolio of Lohith Sai G, a Full-Stack Developer specializing in modern web frameworks, scalable RESTful APIs, cloud databases, and LAN-based backend systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />
        <link rel="icon" sizes="32x32" href="/logo/favicon-32x32.png" />
      </head>
      <body
        className={`${inter.variable} font-sans text-slate-900 min-h-screen flex flex-col relative selection:bg-indigo-500/15 selection:text-indigo-900`}
      >
        {/* Ambient soft background lighting & translucent glass spheres matching reference */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 overflow-hidden -z-10"
        >
          <div className="absolute -top-28 -left-28 w-[420px] h-[420px] rounded-full bg-indigo-200/45 blur-[110px]" />
          <div className="absolute top-[18%] -right-24 w-[380px] h-[380px] rounded-full bg-purple-200/40 blur-[100px]" />
          <div className="absolute top-[52%] -left-24 w-[340px] h-[340px] rounded-full bg-blue-200/35 blur-[100px]" />
          <div className="absolute -bottom-24 right-[8%] w-[420px] h-[420px] rounded-full bg-violet-200/45 blur-[110px]" />

          {/* Decorative 3D-like glass orb on right middle (inspired by reference image) */}
          <div className="hidden xl:block absolute top-[36%] right-[3%] w-28 h-28 rounded-full bg-gradient-to-br from-white/80 via-slate-100/40 to-indigo-200/50 border border-white/90 shadow-[0_20px_50px_rgba(99,102,241,0.12),inset_0_4px_12px_rgba(255,255,255,0.95)] backdrop-blur-md" />
        </div>

        <Navbar />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

