import { DashboardCards } from "@/components/files/dashboardComps/cards"
import { DashboardCharts } from "@/components/files/dashboardComps/chart"
import { DashboardHeader } from "@/components/files/dashboardComps/header"
import { DashboardRecords } from "@/components/files/dashboardComps/records"

const Dashboard = () => {
  return (
    <div className="bg-[#F3F4F6] h-screen">
        <DashboardHeader/>
        <DashboardCards/>
        <DashboardCharts/>
        <DashboardRecords/>
    </div>
  )
}

export default Dashboard