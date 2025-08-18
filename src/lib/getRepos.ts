export const getRepos = async () => {
  const response = await fetch(
    'https://api.github.com/users/Lohithsai06/repos?type=public&sort=updated&direction=desc',
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 300 }, // Revalidate data every hour
    },
  );
  if (!response.ok) {
    throw new Error(`GitHub API responded with ${response.status}`);
  }
  const data = await response.json();
  return data;
};
