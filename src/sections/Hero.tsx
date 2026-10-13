"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const coreStack = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Supabase",
];

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="w-full px-3 sm:px-6 pt-7 sm:pt-9 lg:pt-11 pb-2.5 scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-[1140px] mx-auto glass-panel rounded-[32px] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        {/* Soft interior ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-1/4 w-80 h-80 rounded-full bg-indigo-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-10 w-72 h-72 rounded-full bg-purple-200/35 blur-3xl"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7 text-left"
          >
            <span className="inline-block text-xs sm:text-[13px] font-semibold tracking-[0.15em] uppercase text-indigo-500 mb-2.5">
              HELLO, I&apos;M
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Lohith Sai G
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 bg-clip-text text-transparent mt-2 leading-snug">
              Full-Stack Developer
            </h2>

            <div className="mt-1.5 text-sm sm:text-base font-medium text-indigo-600/90 min-h-[24px]">
              {isMounted ? (
                <Typewriter
                  words={[
                    "Builds strong backend and LAN-based ideas",
                    "Crafts scalable RESTful APIs & modern web apps",
                    "Connects clean interfaces with resilient architectures",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={65}
                  deleteSpeed={40}
                  delaySpeed={1800}
                />
              ) : (
                <span>Builds strong backend and LAN-based ideas</span>
              )}
            </div>

            <p className="mt-4 text-sm sm:text-[15px] lg:text-base text-slate-600 leading-relaxed max-w-xl">
              I am a passionate Full-Stack Developer with a strong foundation in
              both front-end and back-end technologies. I enjoy solving complex
              problems and building scalable, user-friendly applications across
              modern JavaScript frameworks, RESTful APIs, cloud platforms, and
              LAN-based backend network connections.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 py-3.5 text-xs sm:text-sm font-semibold shadow-[0_10px_25px_-5px_rgba(15,23,42,0.35)] hover:shadow-[0_14px_30px_-5px_rgba(15,23,42,0.45)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 glass-pill hover:bg-white text-slate-800 rounded-full px-6 py-3.5 text-xs sm:text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4 text-slate-600" />
              </a>
            </div>

            {/* Core Tech Ecosystem Strip (matching reference bottom-left strip) */}
            <div className="mt-10 pt-5 border-t border-slate-200/60">
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-3">
                Core Tech Stack &amp; Ecosystem
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-500">
                {coreStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm font-semibold tracking-tight text-slate-500/90 hover:text-indigo-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Portrait & Floating Cards Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Decorative tilted glass outline behind portrait */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -rotate-3 rounded-[36px] border border-white/80 bg-gradient-to-tr from-indigo-100/40 via-white/30 to-purple-100/40 shadow-sm pointer-events-none"
              />

              {/* Main Glass Portrait Frame */}
              <div className="relative rounded-[32px] p-2.5 bg-gradient-to-b from-white/80 via-white/50 to-indigo-50/60 border border-white/95 shadow-[0_20px_50px_-15px_rgba(79,70,229,0.16)] backdrop-blur-xl">
                <div className="relative w-full h-[330px] sm:h-[370px] rounded-[24px] overflow-hidden bg-slate-100">
                  <Image
                    src="/profile.png"
                    alt="Lohith Sai G portrait"
                    fill
                    sizes="(max-width: 640px) 340px, 380px"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Top-Right Floating Glass Badge */}
              <div className="absolute -top-3 right-1 sm:-right-4 glass-card rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-center shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                <p className="text-lg sm:text-2xl font-extrabold text-slate-900 leading-none">
                  17+
                </p>
                <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-1 leading-tight">
                  Technologies
                  <br />
                  &amp; Tools
                </p>
              </div>

              {/* Bottom-Left Floating Sparkle Orb */}
              <div
                aria-hidden="true"
                className="absolute bottom-14 left-1 sm:-left-5 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-white via-indigo-50 to-purple-100 border border-white shadow-[0_10px_25px_rgba(99,102,241,0.22)] flex items-center justify-center text-indigo-500"
              >
                <Sparkles className="w-5 h-5" />
              </div>

              {/* Bottom-Right Floating Architecture Card */}
              <div className="absolute -bottom-4 right-1 sm:-right-4 glass-card rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] min-w-[150px] sm:min-w-[165px]">
                <p className="text-[10px] font-medium text-slate-500">
                  Backend &amp; LAN Focus
                </p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  Full-Stack Systems
                </p>
                <svg
                  viewBox="0 0 120 28"
                  className="w-28 h-6 mt-1 overflow-visible"
                  fill="none"
                >
                  <path
                    d="M2 22 C20 20, 28 12, 44 15 C60 18, 72 6, 88 10 C100 13, 108 4, 118 2"
                    stroke="url(#sparkline-grad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="sparkline-grad"
                      x1="0"
                      y1="0"
                      x2="120"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#6366f1" />
                      <stop offset="1" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

