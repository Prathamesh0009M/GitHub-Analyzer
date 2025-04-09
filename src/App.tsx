// src/App.tsx

import { useState } from "react"
import UserForm from "./components/UserForm"
import RepoList from "./components/RepoList"
import { fetchCommitEvents, fetchRepos } from "./lib/api"
import { Repo } from "./types/github"
import CommitStats from "./components/CommitStats"
export interface CommitEvent {
  type: string;
  created_at: string;
  payload: {
    commits: {
      message: string;
      url: string;
      author: {
        name: string;
      };
    }[];
  };
}


function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [allCommit, setAllCommit] = useState<CommitEvent[]>([]);


  const [error, setError] = useState("")

  const handleSearch = async (username: string) => {
    try {
      setError("")
      const data = await fetchRepos(username)
      // console.log("data is ", data);

      const commitdata = await fetchCommitEvents(username);
      setAllCommit(commitdata);
      console.log("All commit data is ", commitdata);


      setRepos(data)
    } catch (err) {
      setError("User not found or error fetching data")
      setRepos([])
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Profile Analyzer</h1>
      <UserForm onSubmit={handleSearch} />

      {allCommit.length > 0 && <CommitStats events={allCommit} />} {/* 👈 Add this */}

      {error && <p className="text-red-500 mt-4">{error}</p>}
      <RepoList repos={repos} />
    </div>
  )
}

export default App
