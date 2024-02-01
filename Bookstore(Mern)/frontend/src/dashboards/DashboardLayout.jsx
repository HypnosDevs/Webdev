
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebarcpn'



const DashboardLayout = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default DashboardLayout