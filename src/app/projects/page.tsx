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
    <div className="w-full py-4">
      <Projects repos={repos} />
    </div>
  );
}

