import { TooltipProps } from "recharts";
import { ReactElement } from "react";
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";
export type ChartConfig = {
    [key: string]: {
        label: string;
        color: string;
    };
};
export declare function ChartContainer({ children, className, }: {
    children: ReactElement;
    className?: string;
    config: ChartConfig;
}): import("react/jsx-runtime").JSX.Element;
export declare function ChartTooltip({ content, cursor, }: {
    content: TooltipProps<ValueType, NameType>["content"];
    cursor?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export declare function ChartTooltipContent({ active, payload, hideLabel, }: TooltipProps<ValueType, NameType> & {
    hideLabel?: boolean;
}): import("react/jsx-runtime").JSX.Element | null;
