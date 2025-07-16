'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/gifs/coding.gif"
              alt="Coding GIF"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 0 30px #00FFFF" }}
              className="bg-gray-800/50 backdrop-blur-sm border border-[#00FFFF]/30 rounded-2xl p-6 shadow-[0_0_20px_#00BFFF] flex flex-col items-center justify-center text-center"
            >
              <a href="mailto:Lohithsai0808@gmail.com" title="Lohithsai0808@gmail.com" className="text-white font-bold py-4 px-4 transition-all duration-300 transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.589L16 11.801V4.697l-5.803 3.543Z"/>
                </svg>
              </a>
              <p className="mt-2 text-sm">Lohithsai0808@gmail.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 0 30px #00FFFF" }}
              className="bg-gray-800/50 backdrop-blur-sm border border-[#00FFFF]/30 rounded-2xl p-6 shadow-[0_0_20px_#00BFFF] flex flex-col items-center justify-center text-center"
            >
              <a href="tel:+919380324074" className="text-white font-bold py-4 px-4 transition-all duration-300 transform hover:scale-105">
                <Image src="/gifs/phone.gif" alt="Phone" width={50} height={50} />
              </a>
              <p className="mt-2 text-sm">9380324074</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 0 30px #00FFFF" }}
              className="bg-gray-800/50 backdrop-blur-sm border border-[#00FFFF]/30 rounded-2xl p-6 shadow-[0_0_20px_#00BFFF] flex flex-col items-center justify-center text-center"
            >
              <a href="https://github.com/Lohithsai06" target="_blank" rel="noopener noreferrer" title="Lohithsai06" className="text-white font-bold py-4 px-4 transition-all duration-300 transform hover:scale-105">
                <Image src="/gifs/GitHub.gif" alt="GitHub" width={50} height={50} />
              </a>
              <p className="mt-2 text-sm">Lohithsai06</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 0 30px #00FFFF" }}
              className="bg-gray-800/50 backdrop-blur-sm border border-[#00FFFF]/30 rounded-2xl p-6 shadow-[0_0_20px_#00BFFF] flex flex-col items-center justify-center text-center"
            >
              <a href="https://www.linkedin.com/in/lohith-sai-g-b929b6281" target="_blank" rel="noopener noreferrer" className="text-white font-bold py-4 px-4 transition-all duration-300 transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              <p className="mt-2 text-sm">www.linkedin.com/in/lohith-sai-g-b929b6281</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;