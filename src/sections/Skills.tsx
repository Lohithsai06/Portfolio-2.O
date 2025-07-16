'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const skillCategories = [
  {
    name: "Programming & Tools",
    skills: [
      { name: "JavaScript", gif: "/gifs/javascript.gif" },
      { name: "TypeScript", gif: "/gifs/typescript.gif" },
      { name: "React", gif: "/gifs/react.gif" },
      { name: "HTML5", gif: "/gifs/html5.gif" },
      { name: "CSS3", gif: "/gifs/css3.gif" },
      { name: "Git", gif: "/gifs/git.gif" },
      { name: "GitHub", gif: "/gifs/github.gif" },
      { name: "VS Code", gif: "/gifs/VS code.gif" },
    ],
  },
  {
    name: "Backend & Networking",
    skills: [
      { name: "Node.js", gif: "/gifs/Node.js.gif" },
      { name: "Express", gif: "/gifs/express.gif" },
      { name: "MongoDB", gif: "/gifs/mongodb.gif" },
      { name: "Firebase", gif: "/gifs/firebase.gif" },
      { name: "Supabase", gif: "/gifs/supabase.gif" },
      { name: "Python", gif: "/gifs/python.gif" },
      { name: "REST APIs", gif: "/gifs/Rest Apis.gif" },
      { name: "Networking", gif: "/gifs/networking.gif" },
      { name: "Docker", gif: "/gifs/docker.gif" },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "💡 Problem Solving" },
      { name: "🤝 Teamwork" },
      { name: "🗣️ Communication" },
      { name: "🔄 Adaptability" },
      { name: "⏰ Time Management" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0D0D0D] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#00FFFF] drop-shadow-[0_0_10px_#00FFFF] mb-12 text-center"
        >
          My Skills
        </motion.h2>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-[#00FFFF]/30 rounded-2xl p-6 shadow-[0_0_30px_#00BFFF]"
            >
              <h3 className="text-3xl font-semibold text-[#00FFFF] mb-8 text-center drop-shadow-[0_0_5px_#00FFFF]">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 + categoryIndex * 0.2 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00FFFF" }} // Hover effect
                    className="bg-gray-700/30 border border-[#00FFFF]/20 rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-[0_0_10px_#00BFFF] transition-all duration-300"
                  >
                    {skill.gif && (
                      <Image
                        src={skill.gif}
                        alt={skill.name}
                        width={64} // Adjust size as needed
                        height={64} // Adjust size as needed
                        className="mb-2"
                      />
                    )}
                    <p className="text-lg font-medium text-gray-200">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;