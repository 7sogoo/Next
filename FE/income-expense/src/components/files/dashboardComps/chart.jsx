"use client"

import { ChartContainer } from "@/components/ui/chart";
import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartComponent } from "./pieChart";

export const DashboardCharts = () => {
  const [chartData, setChartData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:8000/record/getData');
      setChartData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
      fetchData()
  }, [])

  const months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const formattedData = chartData.map(record => ({
    ...record,
    monthName: months[record.month - 1]
  }));

  const chartConfig = {
    income: {
      label: "Desktop",
      color: "#2563eb",
    },
    expense: {
      label: "Mobile",
      color: "#60a5fa",
    },
  };

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
          <BarChart accessibilityLayer data={formattedData}>
            <CartesianGrid vertical={false} />
            <YAxis />
            <XAxis
              dataKey="monthName"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Bar
              dataKey="income"
              fill="#84CC16"
              radius={[1000, 1000, 0, 0]}
            />
            <Bar
              dataKey="expense"
              fill="#F97316"
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
 
