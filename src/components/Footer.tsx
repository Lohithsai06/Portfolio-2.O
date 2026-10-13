"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants/navLinks";

const Footer = () => {
  return (
    <footer id="footer" className="w-full px-3 sm:px-6 pb-8 pt-2">
      <div className="max-w-[1140px] mx-auto glass-panel rounded-[24px] px-6 py-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white shadow-sm border border-slate-200/70 flex items-center justify-center">
              <Image
                src="/logo/favicon-32x32.png"
                alt="Lohith Sai G"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Lohith Sai G</p>
              <p className="text-xs text-slate-500">
                &copy; 2026 Lohith Sai G. All rights reserved.
              </p>
            </div>
          </div>

          {/* Section Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Real Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/Lohithsai06"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-sm flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              <Github size={17} />
            </a>
            <a
              href="https://linkedin.com/in/lohith-sai-54b44437b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-indigo-600 border border-slate-200/80 shadow-sm flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="mailto:Lohithsai0808@gmail.com"
              aria-label="Send Email"
              className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-indigo-600 border border-slate-200/80 shadow-sm flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              <Mail size={17} />
            </a>
            <a
              href="tel:+919380324074"
              aria-label="Call Phone"
              className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-indigo-600 border border-slate-200/80 shadow-sm flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              <Phone size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;