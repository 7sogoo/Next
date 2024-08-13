import { DashboardCards } from "@/components/files/dashboardComps/cards"
import { DashboardDetail } from "@/components/files/dashboardComps/detail"
import { DashboardHeader } from "@/components/files/dashboardComps/header"
import { DashboardRecords } from "@/components/files/dashboardComps/records"

const Dashboard = () => {
  return (
    <div className="">
        <DashboardHeader/>
        {/* <DashboardCards/>
        <DashboardRecords/> */}
        <DashboardDetail/>
    </div>
  )
}

export default Dashboard