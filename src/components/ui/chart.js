"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ResponsiveContainer, Tooltip } from "recharts";
import { cn } from "@/lib/utils";
export function ChartContainer({ children, className, }) {
    return (_jsx("div", { className: cn("w-full h-full", className), children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: children }) }));
}
export function ChartTooltip({ content, cursor = true, }) {
    return _jsx(Tooltip, { content: content, cursor: cursor });
}
export function ChartTooltipContent({ active, payload, hideLabel, }) {
    if (!active || !payload || !payload.length)
        return null;
    return (_jsxs("div", { className: "rounded-md border bg-popover p-3 shadow-md text-sm min-w-[150px]", children: [!hideLabel && (_jsx("p", { className: "text-muted-foreground mb-2 font-medium", children: payload[0]?.payload?.month || payload[0]?.payload?.date })), payload.map((entry, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "w-2 h-2 rounded-full", style: { backgroundColor: entry.color ?? "#000" } }), _jsxs("span", { className: "text-muted-foreground", children: [entry.name, ":"] }), _jsx("span", { className: "ml-auto font-semibold", children: entry.value })] }, index)))] }));
}
