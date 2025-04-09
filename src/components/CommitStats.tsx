// src/components/CommitStats.tsx

import { CommitEvent } from "@/App"

type Props = {
  events: CommitEvent[]
}

export default function CommitStats({ events }: Props) {
  const dailyCommits: Record<string, number> = {}

  events.forEach((event) => {
    if (event.type === "PushEvent") {
      const date = new Date(event.created_at).toLocaleDateString()
      const count = event.payload.commits.length
      dailyCommits[date] = (dailyCommits[date] || 0) + count
    }
  })

  const sortedCommits = Object.entries(dailyCommits).sort(
    ([a], [b]) => new Date(a).getTime() - new Date(b).getTime()
  )

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">📊 Daily Commit Activity</h2>
      <ul className="space-y-1">
        {sortedCommits.map(([date, count]) => (
          <li key={date} className="text-sm">
            <span className="font-medium">{date}:</span> {count} commits
          </li>
        ))}
      </ul>
    </div>
  )
}
