import React from 'react'
import DashboardFooter from '../../components/dashboard/DashboardFooter'
// import DashboardNavbar from './DashboardNavbar'
import { DashboardContain, ParentContain } from '../../styles/dashboard'
import { Typography } from '@mui/material'
import { useUIContext } from "../../context/ui";
import DashboardSidebar from '../../components/dashboard/DashboardSidebar'
import DashboardHeader from '../../components/dashboard/DashboardHeader'

const Dashboard = () => {
  const {barActive} = useUIContext();
  return (
    <>
    <DashboardSidebar/>
    <ParentContain barActive={barActive}>
    <DashboardHeader/>
    <DashboardContain>
      <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, tempora exercitationem dignissimos aspernatur labore architecto!</Typography>
    </DashboardContain>
    <DashboardFooter/>
    </ParentContain>
    </>
  )
}

export default Dashboard