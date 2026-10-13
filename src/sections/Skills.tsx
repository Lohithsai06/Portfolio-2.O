"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SkillItem {
  name: string;
  gif?: string;
}

interface SkillCategory {
  name: string;
  subtitle: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming & Tools",
    subtitle: "Languages, frontend frameworks & developer tooling",
    skills: [
      { name: "JavaScript", gif: "/gifs/JavaScript.gif" },
      { name: "TypeScript", gif: "/gifs/typescript.gif" },
      { name: "React", gif: "/gifs/React.gif" },
      { name: "HTML5", gif: "/gifs/HTML5.gif" },
      { name: "CSS3", gif: "/gifs/CSS3.gif" },
      { name: "Git", gif: "/gifs/Git.gif" },
      { name: "GitHub", gif: "/gifs/GitHub.gif" },
      { name: "VS Code", gif: "/gifs/vscode.gif" },
    ],
  },
  {
    name: "Backend & Networking",
    subtitle: "Server runtimes, databases, cloud & LAN architectures",
    skills: [
      { name: "Node.js", gif: "/gifs/nodejs.gif" },
      { name: "Express", gif: "/gifs/Express.gif" },
      { name: "MongoDB", gif: "/gifs/MongoDB.gif" },
      { name: "Firebase", gif: "/gifs/Firebase.gif" },
      { name: "Supabase", gif: "/gifs/Supabase.gif" },
      { name: "Python", gif: "/gifs/Python.gif" },
      { name: "REST APIs", gif: "/gifs/rest-apis.gif" },
      { name: "Networking", gif: "/gifs/network.gif" },
      { name: "Docker", gif: "/gifs/Docker.gif" },
    ],
  },
  {
    name: "Soft Skills",
    subtitle: "Collaboration, analytical thinking & execution",
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
    <section
      id="skills"
      className="w-full px-3 sm:px-6 py-2.5 scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-[1140px] mx-auto glass-panel rounded-[32px] p-6 sm:p-10 lg:p-12">
        {/* Section Header matching TOOLS & SKILLS / Technologies I Use */}
        <div className="mb-8">
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-indigo-500 mb-1.5">
            TOOLS &amp; SKILLS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Technologies I Use
          </h2>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => {
            const isSoftSkills = category.name === "Soft Skills";

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: categoryIndex * 0.08 }}
                className="rounded-[24px] bg-white/45 border border-white/80 p-5 sm:p-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.03)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-500">{category.subtitle}</p>
                </div>

                {isSoftSkills ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
                    {category.skills.map((skill, skillIndex) => {
                      const parts = skill.name.split(" ");
                      const emoji = parts[0];
                      const label = parts.slice(1).join(" ");
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: 0.35,
                            delay: skillIndex * 0.04,
                          }}
                          whileHover={{ y: -3 }}
                          className="glass-card rounded-2xl p-4 flex items-center gap-3 hover:bg-white/95 transition-all duration-200"
                        >
                          <span
                            aria-hidden="true"
                            className="w-10 h-10 rounded-xl bg-indigo-50/90 border border-indigo-100/80 flex items-center justify-center text-lg shrink-0 shadow-2xs"
                          >
                            {emoji}
                          </span>
                          <span className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug">
                            {label}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.35,
                          delay: skillIndex * 0.03,
                        }}
                        whileHover={{ y: -4 }}
                        className="glass-card rounded-2xl p-3.5 flex flex-col items-center justify-center text-center hover:bg-white/95 transition-all duration-200 group"
                      >
                        {skill.gif && (
                          <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-100/90 flex items-center justify-center p-2 mb-2.5 group-hover:scale-105 transition-transform duration-200">
                            <Image
                              src={skill.gif}
                              alt={skill.name}
                              width={36}
                              height={36}
                              unoptimized
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                        )}
                        <p className="text-xs font-semibold text-slate-800 leading-tight">
                          {skill.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

