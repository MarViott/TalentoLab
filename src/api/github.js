// src/api/github.js
export const fetchGitHubStats = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}`);
  return res.json();
};