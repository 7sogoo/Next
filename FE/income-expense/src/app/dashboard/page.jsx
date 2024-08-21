"use client"
import { DashboardCards } from "@/components/files/dashboardComps/cards"
import { DashboardCharts } from "@/components/files/dashboardComps/chart"
import { DashboardHeader } from "@/components/files/dashboardComps/header"
import { DashboardRecords } from "@/components/files/dashboardComps/records"
import axios from "axios"
import { useEffect, useState } from "react"

const Dashboard = () => {
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

  return (
    <div className="bg-[#F3F4F6] h-screen">
        <DashboardHeader />
        <DashboardCards chartData={chartData}/>
        <DashboardCharts chartData={chartData}/>
        <DashboardRecords />
    </div>
  )
}

export default Dashboard  