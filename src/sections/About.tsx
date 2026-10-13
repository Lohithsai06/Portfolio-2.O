"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Languages,
  ArrowUpRight,
  Layout as LayoutIcon,
  Server,
  Database,
  Network,
} from "lucide-react";

const capabilities = [
  {
    title: "Frontend Engineering",
    description:
      "Building responsive, intuitive interfaces for web applications using React, TypeScript, HTML5, and modern CSS3.",
    icon: LayoutIcon,
    iconBg: "bg-amber-100/90 text-amber-600 border-amber-200/60",
  },
  {
    title: "Backend & REST APIs",
    description:
      "Crafting secure RESTful APIs, server-side logic, and scalable backend services with Node.js, Express, and Python.",
    icon: Server,
    iconBg: "bg-purple-100/90 text-purple-600 border-purple-200/60",
  },
  {
    title: "Databases & Cloud",
    description:
      "Designing structured and NoSQL data persistence with MongoDB, Firebase, Supabase, and containerized Docker workflows.",
    icon: Database,
    iconBg: "bg-blue-100/90 text-blue-600 border-blue-200/60",
  },
  {
    title: "LAN & Network Systems",
    description:
      "Implementing local area network connections, real-time communication, and reliable backend network architectures.",
    icon: Network,
    iconBg: "bg-teal-100/90 text-teal-600 border-teal-200/60",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-3 sm:px-6 py-2.5 space-y-5 scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Panel 1: About Me (Two-Column Reference Layout) */}
      <div className="max-w-[1140px] mx-auto glass-panel rounded-[32px] p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading & Real Highlight Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-indigo-500 mb-2">
              ABOUT ME
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 leading-tight">
              Engineering with Clarity
              <br />
              Building with Purpose
            </h2>

            {/* Compact Highlight Row matching the reference stats card */}
            <div className="mt-6 glass-card rounded-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-2">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-base sm:text-lg font-extrabold text-slate-900">
                  B.Tech ISE
                </span>
                <span className="text-xs text-slate-500">
                  Expected 2026
                </span>
              </div>

              <div className="flex flex-col">
                <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-2">
                  <Code2 className="w-4 h-4" />
                </div>
                <span className="text-base sm:text-lg font-extrabold text-slate-900">
                  17+ Skills
                </span>
                <span className="text-xs text-slate-500">
                  Full-Stack &amp; LAN
                </span>
              </div>

              <div className="flex flex-col">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-2">
                  <Languages className="w-4 h-4" />
                </div>
                <span className="text-base sm:text-lg font-extrabold text-slate-900">
                  4 Languages
                </span>
                <span className="text-xs text-slate-500">
                  EN • HI • TE • KN
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Education Details & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              I&apos;m a dedicated full-stack developer with a strong passion for
              backend systems, real-time communication, and building impactful
              digital experiences. My work reflects a balance of clean code,
              performance, and practicality — whether it&apos;s crafting secure
              REST APIs, enabling LAN-based communication, or visualizing
              complex data.
            </p>

            {/* Real Education Details from original About.tsx */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="glass-card rounded-xl p-3.5">
                <p className="text-xs font-semibold text-indigo-600">
                  B.Tech in Information Science Engg.
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Brindavan College of Engineering (Expected 2026)
                </p>
              </div>
              <div className="glass-card rounded-xl p-3.5">
                <p className="text-xs font-semibold text-indigo-600">
                  2nd PU (Pre-University)
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Government College, Yelahanka, Bangalore (2022)
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 glass-pill hover:bg-white text-slate-800 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore Skills &amp; Stack</span>
                <ArrowUpRight className="w-4 h-4 text-slate-600" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Panel 2: What I Do / Core Capabilities (Matching Services I Offer in Reference) */}
      <div className="max-w-[1140px] mx-auto glass-panel rounded-[32px] p-6 sm:p-10 lg:p-12">
        <div className="mb-7">
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-indigo-500 mb-1.5">
            WHAT I DO
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Capabilities I Offer
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {capabilities.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="glass-card rounded-[24px] p-5 sm:p-6 flex flex-col justify-between hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-5 shadow-xs ${item.iconBg}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-[17px] font-bold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 flex justify-end">
                  <a
                    href="#projects"
                    aria-label={`View projects related to ${item.title}`}
                    className="w-8 h-8 rounded-full bg-white/80 group-hover:bg-white border border-slate-200/70 flex items-center justify-center text-slate-600 group-hover:text-indigo-600 transition-colors shadow-2xs"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

