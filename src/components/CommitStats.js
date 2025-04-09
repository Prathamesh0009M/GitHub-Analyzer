"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Bar, BarChart, CartesianGrid, XAxis, } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart";
const chartConfig = {
    commits: {
        label: "Commits",
        color: "#ffffff", // White bar color
    },
};
export default function CommitStats({ events }) {
    const dailyCommits = {};
    events.forEach((event) => {
        if (event.type === "PushEvent") {
            const date = new Date(event.created_at).toLocaleDateString();
            const count = event.payload.commits.length;
            dailyCommits[date] = (dailyCommits[date] || 0) + count;
        }
    });
    const chartData = Object.entries(dailyCommits).map(([date, count]) => ({
        date,
        commits: count,
    }));
    return (_jsxs("div", { className: "mt-8 bg-black p-6 rounded-lg overflow-x-auto", children: [_jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: "\uD83D\uDCCA Daily Commit Activity" }), _jsx(ChartContainer, { config: chartConfig, children: _jsxs(BarChart, { data: chartData, height: 300, width: Math.max(700, chartData.length * 80), children: [_jsx(CartesianGrid, { vertical: false, stroke: "#555" }), _jsx(XAxis, { dataKey: "date", tickLine: false, tickMargin: 10, angle: -35, textAnchor: "end", height: 60, interval: 0, axisLine: false, tick: { fill: "#ffffff", fontSize: 12 } }), _jsx(ChartTooltip, { cursor: false, content: 
                            // ✅ Tooltip content must be a function or a valid ReactElement
                            _jsx(ChartTooltipContent, { hideLabel: true }) }), _jsx(Bar, { dataKey: "commits", fill: chartConfig.commits.color, radius: [8, 8, 0, 0] })] }) })] }));
}
