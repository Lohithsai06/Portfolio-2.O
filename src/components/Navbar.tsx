"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/constants/navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sectionIds = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    setIsOpen(false);
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      setActiveSection(id);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <header className="sticky top-3 z-50 w-full px-3 sm:px-6 pt-2">
      <nav
        aria-label="Primary Navigation"
        className={`max-w-[1140px] mx-auto rounded-[22px] transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_12px_36px_-8px_rgba(79,70,229,0.1)]"
            : "bg-white/65 backdrop-blur-xl border border-white/80 shadow-[0_8px_28px_-6px_rgba(15,23,42,0.05)]"
        }`}
      >
        <div className="px-4 sm:px-6 h-16 sm:h-[70px] flex items-center justify-between gap-4">
          {/* Brand / Logo Left */}
          <Link
            href={pathname === "/" ? "#home" : "/#home"}
            onClick={(e) => handleNavClick(e, "#home", "home")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200/70 flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/logo/favicon-32x32.png"
                alt="Lohith Sai G Logo"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold text-sm sm:text-[15px] tracking-tight leading-tight">
                Lohith Sai G
              </span>
              <span className="text-slate-500 text-[11px] font-medium leading-tight">
                Full-Stack Developer
              </span>
            </div>
          </Link>

          {/* Center Section Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/60 border border-white/80 rounded-full p-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const resolvedHref = pathname === "/" ? link.href : `/${link.href}`;
              return (
                <Link
                  key={link.name}
                  href={resolvedHref}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs lg:text-[13px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-indigo-600 font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_2px_10px_rgba(79,70,229,0.08)] border border-slate-100"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right CTA & Mobile Menu Button */}
          <div className="flex items-center gap-2.5">
            <Link
              href={pathname === "/" ? "#contact" : "/#contact"}
              onClick={(e) => handleNavClick(e, "#contact", "contact")}
              className="hidden sm:inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_4px_14px_rgba(79,70,229,0.1)] rounded-full px-4 py-2 text-xs sm:text-[13px] font-semibold transition-all duration-200"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
            </Link>

            <button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/90 text-slate-700 hover:text-indigo-600 border border-slate-200/80 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-slate-200/60 px-4 pb-4 pt-2"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  const resolvedHref =
                    pathname === "/" ? link.href : `/${link.href}`;
                  return (
                    <Link
                      key={link.name}
                      href={resolvedHref}
                      onClick={(e) => handleNavClick(e, link.href, link.id)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-white text-indigo-600 font-semibold shadow-sm border border-slate-100"
                          : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      )}
                    </Link>
                  );
                })}
                <Link
                  href={pathname === "/" ? "#contact" : "/#contact"}
                  onClick={(e) => handleNavClick(e, "#contact", "contact")}
                  className="mt-2 w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-2.5 px-4 text-sm font-semibold shadow-sm transition-all"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;