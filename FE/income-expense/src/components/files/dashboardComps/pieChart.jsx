"use client"

import * as React from "react"
import { Pie, PieChart } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    {
        browser: "Bills",
        visitors: 5000000,
        fill: "#1C64F2",
      },
      { browser: "Food", 
        visitors: 5000000, 
        fill: "#E74694"},
      {
        browser: "Shopping",
        visitors: 5000000,
        fill: "#FDBA8C",
      },
      {
        browser: "Insurance",
        visitors: 5000000,
        fill: "#16BDCA",
      },
      {
        browser: "Clothing",
        visitors: 5000000,
        fill: "#F2901C",
      },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
}

export function ChartComponent() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <div className="min-w-[156px] flex items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="aspect-square w-[184px] h-[184px] m-auto"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={40}
              strokeWidth={10}
            >
            </Pie>
          </PieChart>
        </ChartContainer>
        </div>
  )
}
