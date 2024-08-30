"use client"

import { DashboardDetail } from "@/components/files/dashboardComps/detail"
import { DashboardHeader } from "@/components/files/dashboardComps/header"
import withAuth from "../utils/withAuth"
import { memo } from "react"

const Records = () => {
  return (
    <div>
        <DashboardHeader isSemiBold={false}/>
        <DashboardDetail/>
    </div>
  )
}

export default withAuth(memo(Records));