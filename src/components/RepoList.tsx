import { useState, useEffect } from "react";
import { Repo } from "@/types/github";

type Props = {
  repos: Repo[];
};

export default function RepoList({ repos }: Props) {

    const [allRepos, setAllRepos] = useState<Repo[]>([]);
    
    

  // Load initial props into state
  useEffect(() => {
    setAllRepos(repos);
  }, [repos]);

  return (
    <div className="mt-4 space-y-4">
      {allRepos.map((repo) => (
        <div key={repo.id} className="p-4 border rounded-md">
          <h2 className="text-lg font-semibold">{repo.name}</h2>
          <p className="text-sm text-gray-500">{repo.description}</p>
       
              
        </div>
      ))}
    </div>
  );
}
