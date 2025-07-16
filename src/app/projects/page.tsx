import Projects from "@/sections/Projects";
import { getRepos } from "@/lib/getRepos";

export default async function ProjectsPage() {
  let repos = [];
  try {
    repos = await getRepos();
  } catch (error) {
    console.error("Failed to fetch repositories in ProjectsPage:", error);
  }

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <Projects repos={repos} />
    </main>
  );
}
