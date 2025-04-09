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
      const commitdata = await fetchCommitEvents(username);
      setAllCommit(commitdata);
      setRepos(data)

    } catch (err) {
      setError("User not found or error fetching data")
      setRepos([])
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">GitHub Profile Analyzer</h1>
        <UserForm onSubmit={handleSearch} />

        {allCommit.length > 0 && <CommitStats events={allCommit} />}

        {error && <p className="text-red-500 mt-4">{error}</p>}
        <RepoList repos={repos} />
      </div>


      <footer className="mt-10 pb-5 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <h3>Built by <span className="text-white">Prathamesh Jadhav</span> </h3>
        <p>
          <a
            href="https://github.com/Prathamesh0009M/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/prathamesh0009m/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
          |{" "}
          <a
            href="https://x.com/Prathamesh0009m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Twitter
          </a>
        </p>
      </footer>

    </div>
  )
}

export default App
