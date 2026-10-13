"use client";

import { motion } from "framer-motion";
import {
  Search,
  Layers,
  Code2,
  Workflow,
  Rocket,
  ChevronRight,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Understand",
    description:
      "Analyze core problem requirements, user workflows, and system constraints.",
    icon: Search,
  },
  {
    step: "02",
    title: "Architect",
    description:
      "Plan scalable system architecture, database schemas, and network protocols.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop responsive frontend interfaces and clean, modular backend services.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Integrate",
    description:
      "Connect RESTful APIs, cloud databases, and LAN-based socket communication.",
    icon: Workflow,
  },
  {
    step: "05",
    title: "Test & Deploy",
    description:
      "Verify reliability, optimize performance, and ship production-ready builds.",
    icon: Rocket,
  },
];

const Process = () => {
  return (
    <section id="process" className="w-full px-3 sm:px-6 py-2.5">
      <div className="max-w-[1140px] mx-auto glass-panel rounded-[32px] p-6 sm:p-10 lg:p-12">
        <div className="mb-8">
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-indigo-500 mb-1.5">
            MY PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Development Process I Follow
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {processSteps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="relative glass-card rounded-[22px] p-5 flex flex-col justify-between hover:bg-white/95 transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50/90 border border-indigo-100 flex items-center justify-center text-indigo-600">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-lg font-bold text-indigo-300/90 tracking-tight">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle connector indicator between cards on desktop */}
                {index < processSteps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border border-indigo-100 shadow-2xs items-center justify-center text-indigo-400"
                  >
                    <ChevronRight className="w-3 h-3" />
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

export default Process;
