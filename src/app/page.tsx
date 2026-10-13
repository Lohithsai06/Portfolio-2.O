import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Process from "@/sections/Process";
import Contact from "@/sections/Contact";
import { getRepos } from "@/lib/getRepos";

export default async function Home() {
  let repos = [];
  try {
    repos = await getRepos();
  } catch (error) {
    console.error("Failed to fetch repositories in Home:", error);
  }

  return (
    <div className="w-full space-y-2 pb-6">
      <Hero />
      <About />
      <Skills />
      <Projects repos={repos} />
      <Process />
      <Contact />
    </div>
  );
}

