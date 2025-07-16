"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";


const Footer = () => {
  console.log("navLinks in Footer:", navLinks);
  return (
    <footer id="footer" className="bg-[#0a0f24] text-gray-400 py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="md:order-2 flex flex-row items-center justify-center space-x-4 md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-300 hover:text-[#00FFFF] transition-colors duration-300 hover:drop-shadow-[0_0_5px_#00FFFF]"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:order-3 flex items-center space-x-4">
          <Link href="https://github.com/lohithsai06" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FFFF] transition-colors duration-300">
            <Github size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/lohith-sai-g-b929b6281" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FFFF] transition-colors duration-300">
            <Linkedin size={24} />
          </Link>
          <a href="mailto:lohithsai0808@gmail.com" className="text-gray-400 hover:text-[#00FFFF] transition-colors duration-300">
            <Mail size={24} />
          </a>
        </div>
        <p className="md:order-1 text-base text-[#00FFFF] drop-shadow-[0_0_2px_#00FFFF]">&copy; 2025 Lohith Sai G</p>
      </div>
    </footer>
  );
};

export default Footer;