'use client'
import { motion } from 'framer-motion'
import Link from "next/link";
import { Star, GitFork } from "lucide-react"; // Assuming lucide-react is installed

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string | null;
}

interface ProjectsProps {
  repos: Repo[];
}

const Projects = ({ repos }: ProjectsProps) => {
  return (
    <section id="projects" className="bg-[#0D0D0D] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#00FFFF] drop-shadow-[0_0_10px_#00FFFF] mb-12 text-center"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 0 30px #00FFFF" }} // Hover lift and glowing shadow
                className="bg-gray-800/50 backdrop-blur-sm border border-[#00FFFF]/30 rounded-2xl p-6 shadow-[0_0_20px_#00BFFF] flex flex-col justify-between lg:aspect-square lg:min-h-0 lg:w-full lg:h-auto lg:overflow-hidden"
              >
                <h3 className="text-2xl font-semibold text-[#00FFFF] mb-2">{repo.name}</h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow lg:line-clamp-3 lg:max-h-[4.5em]">{repo.description || "No description provided."}</p>
                {repo.language && (
                  <p className="text-gray-400 text-xs mb-2">Language: {repo.language}</p>
                )}
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex items-center">
                    <Star size={16} className="mr-1 text-yellow-400" /> {repo.stargazers_count}
                  </div>
                  <div className="flex items-center">
                    <GitFork size={16} className="mr-1 text-blue-400" /> {repo.forks_count}
                  </div>
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00FFFF] hover:underline"
                  >
                    View Project
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400 drop-shadow-[0_0_5px_#00FFFF]">No public repositories found or failed to load projects.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
