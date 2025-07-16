"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#0a0f24] text-white min-h-[80vh] flex flex-col items-center justify-start pt-16 md:pt-32 p-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_10px_#00FFFF]">
            Hi, I’m Lohith Sai G
          </h1>
          <div className="text-2xl md:text-4xl font-semibold text-[#00FFFF] mt-2">
            <Typewriter
              words={["Builds strong backend and LAN-based ideas"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <motion.p
            className="mt-4 text-base md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I am a passionate Full-Stack Developer with a strong foundation in
            both front-end and back-end technologies. I enjoy solving complex
            problems and building scalable, user-friendly applications. My
            experience spans modern JavaScript frameworks, RESTful APIs, and
            cloud platforms, and I am professional in LAN-based network
            connections on the backend side.
          </motion.p>
          <div className="mt-8">
            <a href="/Lohith Resume.pdf" download>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00FFFF" }}
                className="flex items-center mx-auto lg:mx-0 bg-transparent border border-[#00FFFF] text-[#00FFFF] py-3 px-8 rounded-full transition-all duration-300"
              >
                <Download className="mr-2" /> Download CV
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Profile image section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/assets/profile.jpg" // ✅ Make sure this file is inside /public/assets/
              alt="Lohith Sai G portrait"
              width={400}
              height={400}
              className="rounded-2xl object-cover border-2 border-[#00FFFF] shadow-[0_0_20px_#00FFFF]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
