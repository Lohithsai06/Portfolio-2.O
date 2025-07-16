"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navLinks } from "@/constants/navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[#0a0f24] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo/favicon-32x32.png" alt="Logo" className="h-10 w-10" />
              <span className="text-white text-xl font-semibold ml-2" style={{ textShadow: '0 0 8px #0070f3, 0 0 12px #0070f3' }}>Lohith.dev</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 group ${ // Added 'group' class
                    pathname === link.href
                      ? "text-[#00FFFF]"
                      : "text-gray-300 hover:text-[#00FFFF]"
                  }`}>
                  <span>{link.name}</span>
                  {/* Active underline */}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-[#00FFFF] rounded-full" // Corrected bottom--2 to bottom-0
                      layoutId="underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 500, damping: 30 }}
                      style={{ width: "100%" }}
                    />
                  )}
                  {/* Hover underline */}
                  <span className="absolute bottom-0 left-0 h-0.5 bg-[#00FFFF] w-0 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#00FFFF] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00FFFF]"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#0a0f24] pb-3">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;