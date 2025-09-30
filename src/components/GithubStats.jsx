import { useEffect, useState } from 'react';
import { fetchGitHubStats } from '../api/github';

export default function GitHubStats({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchGitHubStats(username).then(setData);
  }, [username]);

  return data ? (
    <div>
      <h3>{data.name}</h3>
      <p>Repos: {data.public_repos}</p>
      <p>Followers: {data.followers}</p>
    </div>
  ) : <p>Cargando...</p>;
}

