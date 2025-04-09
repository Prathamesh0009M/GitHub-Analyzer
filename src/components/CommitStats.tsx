"use client"

import { CommitEvent } from "@/App"
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
} from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

type Props = {
  events: CommitEvent[]
}

const chartConfig = {
  commits: {
    label: "Commits",
    color: "#ffffff", // White bar color
  },
} satisfies ChartConfig

export default function CommitStats({ events }: Props) {
  const dailyCommits: Record<string, number> = {}

  events.forEach((event) => {
    if (event.type === "PushEvent") {
      const date = new Date(event.created_at).toLocaleDateString()
      const count = event.payload.commits.length
      dailyCommits[date] = (dailyCommits[date] || 0) + count
    }
  })

  const chartData = Object.entries(dailyCommits).map(([date, count]) => ({
    date,
    commits: count,
  }))

  return (
    <div className="mt-8 bg-black p-6 rounded-lg overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 text-white">
        📊 Daily Commit Activity
      </h2>

      <ChartContainer config={chartConfig}>
        <BarChart
          data={chartData}
          height={300}
          width={Math.max(700, chartData.length * 80)} // Responsive width
        >
          <CartesianGrid vertical={false} stroke="#555" />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            angle={-35}
            textAnchor="end"
            height={60}
            interval={0}
            axisLine={false}
            tick={{ fill: "#ffffff", fontSize: 12 }} // white text
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                className="bg-white text-black"
                hideLabel
              />
            }
          />
          <Bar
            dataKey="commits"
            fill={chartConfig.commits.color}
            radius={8}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
