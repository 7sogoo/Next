"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartComponent, Component } from "./pieChart";
import { Card, CardContent } from "@/components/ui/card";

export const DashboardCharts = () => {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#84CC16",
    },
    mobile: {
      label: "Mobile",
      color: "#F97316",
    },
  };

  const chartData = [
    { month: "Jul", income: 3000000, expense: 2250000 },
    { month: "Aug", income: 3000000, expense: 2250000 },
    { month: "Sep", income: 3000000, expense: 2250000 },
    { month: "Oct", income: 3000000, expense: 2250000 },
    { month: "Nov", income: 3000000, expense: 2250000 },
    { month: "Dec", income: 3000000, expense: 2250000 },
  ];

  const chartData2 = [
    {
      browser: "Bills",
      visitors: "5’000’000₮",
      bg: "bg-[#1C64F2]",
    },
    { browser: "Food", visitors: "5’000’000₮", bg: "bg-[#E74694]" },
    {
      browser: "Shopping",
      visitors: "5’000’000₮",
      fill: "#FDBA8C",
      bg: "bg-[#FDBA8C]",
    },
    {
      browser: "Insurance",
      visitors: "5’000’000₮",
      fill: "#16BDCA",
      bg: "bg-[#16BDCA]",
    },
    {
      browser: "Clothing",
      visitors: "5’000’000₮",
      fill: "#F2901C",
      bg: "bg-[#F2901C]",
    },
  ];

  const chartConfig2 = {
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
  };

  return (
    <div className="max-w-[1200px] m-auto flex gap-6">
      <div className="bg-white rounded-xl w-full">
        <p className="py-4 px-6 border-b">Income - Expense</p>
        <ChartContainer
          config={chartConfig}
          className="box-content py-8 px-6 h-[184px] w-[540px]"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Bar
              dataKey="income"
              fill="var(--color-desktop)"
              radius={[1000, 1000, 0, 0]}
            />
            <Bar
              dataKey="expense"
              fill="var(--color-mobile)"
              radius={[1000, 1000, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>
      <div className="bg-white rounded-xl w-full">
        <p className="py-4 px-6 border-b">Income - Expense</p>
        <div className="flex py-8 px-6 gap-3">
          <ChartComponent/>
          <div className="space-y-4">
            {chartData2.map((el, i) => (
              <div className="flex items-center">
                <p className={`size-3 rounded-full ${el.bg} mr-2`}></p>
                <p className="w-[132px]">{el.browser}</p>
                <p className="w-[128px]">{el.visitors}</p>
                <p className="w-[64px]">15,50%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
