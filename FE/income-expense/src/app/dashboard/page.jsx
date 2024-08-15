import { DashboardCards } from "@/components/files/dashboardComps/cards"
import { DashboardHeader } from "@/components/files/dashboardComps/header"
import { DashboardRecords } from "@/components/files/dashboardComps/records"

const Dashboard = () => {
  return (
    <div>
        <DashboardHeader/>
        <DashboardCards/>
        <DashboardRecords/>
    </div>
  )
}

export default Dashboard