"use client"

import { ResponsiveContainer, Tooltip } from "recharts"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type ChartConfig = {
  [key: string]: {
    label: string
    color: string
  }
}

export function ChartContainer({
  children,
  className,
  config,
}: {
  children: ReactNode
  className?: string
  config: ChartConfig
}) {
  return (
    <div className={cn("w-full h-full", className)}>
      <ResponsiveContainer width="100%" height={300}>
        {children}
      </ResponsiveContainer>
    </div>
  )
}

export function ChartTooltip({
  content,
  cursor = true,
}: {
  content: ReactNode
  cursor?: boolean
}) {
  return <Tooltip content={content} cursor={cursor} />
}

export function ChartTooltipContent({
  active,
  payload,
  hideLabel,
}: {
  active?: boolean
  payload?: any[]
  hideLabel?: boolean
}) {
  if (!active || !payload || !payload.length) return null

  return (
    <div className="rounded-md border bg-popover p-3 shadow-md text-sm min-w-[150px]">
      {!hideLabel && (
        <p className="text-muted-foreground mb-2 font-medium">
          {payload[0]?.payload?.month || payload[0]?.payload?.date}
        </p>
      )}

      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="ml-auto font-semibold">{entry.value}</span>
        </div>
      ))}
    </div>
  )
}
