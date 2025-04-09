import { useState, useEffect } from "react"
import { Repo } from "@/types/github"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

type Props = {
  repos: Repo[]
}

export default function RepoList({ repos }: Props) {
  const [allRepos, setAllRepos] = useState<Repo[]>([])
  const [query, setQuery] = useState("")
  const [filteredData, setFilteredData] = useState<Repo[]>([])

  useEffect(() => {
    setAllRepos(repos)
    setFilteredData(repos)
  }, [repos])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const filtered = allRepos.filter(
      (repo) =>
        repo.name.toLowerCase().includes(query.toLowerCase()) ||
        repo.description?.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredData(filtered)
  }

  return (
    <div className="mt-6 space-y-6">
     { allRepos.length!=0? ( <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 items-center border border-white p-4 rounded-md"
      >
        <Input
          type="text"
          placeholder="Search repositories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:max-w-md text-black bg-gray-300"
        />
        <Button
          type="submit"
          className="border border-white text-white"
        >
          Find Repo
        </Button>
      </form>) :(<></>)}


      {filteredData.length === 0 ? (
        <p className="text-muted-foreground text-sm text-center">
          No repositories found.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((repo) => (
            <div
              key={repo.id}
              className="p-5 border rounded-xl shadow-sm  bg-black dark:bg-gray-900 hover:shadow-md transition duration-300"
            >
              <h2 className="text-xl text-white font-bold text-primary mb-1">
                {repo.name}
              </h2>
              <p className="text-sm text-blue-400 text-muted-foreground mb-2">
                {repo.description || "No description available."}
              </p>
              <p className="text-xs text-white">
                Created:{" "}
                {new Date(repo.created_at).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
