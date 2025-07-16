"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-[#0a0f24] text-white min-h-screen flex items-start justify-start pt-10 md:pt-20 p-4 relative">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8">
        {/* Left Column for Text and Boxes */}
        <div className="flex flex-col gap-8 md:w-2/3 ml-0 md:ml-20">
          {/* About Me Text */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-[#00FFFF] drop-shadow-[0_0_10px_#00FFFF] mb-6 text-center font-inter"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[13px] md:text-xl text-gray-300 leading-relaxed text-left font-inter"
          >
            I'm a dedicated full-stack developer with a strong passion for backend systems, real-time communication, and building impactful digital experiences. My work reflects a balance of clean code, performance, and practicality — whether it's crafting secure REST APIs, enabling LAN-based communication, or visualizing complex data.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Education Box */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-[#00FFFF]/30 rounded-2xl p-8 shadow-[0_0_30px_#00BFFF] w-fit aspect-square"
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl font-bold text-[#00FFFF] drop-shadow-[0_0_10px_#00FFFF] mb-6 text-center"
              >
                Education
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center text-gray-300 space-y-4"
              >
                <div>
                  <h3 className="font-semibold text-white">B.Tech in Information Science Engineering</h3>
                  <p className="text-sm">Brindavan College of Engineering (Expected 2026)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white">2nd PU (Pre-University)</h3>
                  <p className="text-[10px]">Government College, Yelahanka, Bangalore (2022)</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Soft Skills & Languages Box */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-[#00FFFF]/30 rounded-2xl p-4 shadow-[0_0_30px_#00BFFF] w-full aspect-square md:w-fit"
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-3xl font-bold text-[#00FFFF] drop-shadow-[0_0_10px_#00FFFF] mb-6 text-center"
              >
                Skills & Languages
              </motion.h2>
              <div className="flex flex-col md:flex-row justify-around gap-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="text-center text-gray-300 space-y-4"
                >
                  <h3 className="font-semibold text-white text-xl mb-2">Soft Skills</h3>
                  <p>💡 Problem Solving</p>
                  <p>🤝 Team Collaboration</p>
                  <p>🗣️ Communication</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="text-center text-gray-300 space-y-4"
                >
                  <h3 className="font-semibold text-white text-xl mb-2">Languages</h3>
                  <p>🇬🇧 English</p>
                  <p>🇮🇳 Hindi</p>
                  <p>🇮🇳 Telugu</p>
                  <p className="text-[13px]">🇮🇳 Kannada</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column for GIF */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-8 w-full h-48 bg-gray-800/50 backdrop-blur-sm border border-[#00FFFF]/30 rounded-2xl p-4 shadow-[0_0_30px_#00BFFF] flex items-center justify-center md:absolute md:top-60 md:right-16 md:w-80 md:h-64"
        >
          <Image
            src="https://media3.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="Tech GIF"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
