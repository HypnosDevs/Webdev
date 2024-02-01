import React, { useContext } from 'react'
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import usrImg from '../assets/profile.jpg'
import { AuthContext } from '../contexts/AuthProvider';

const Sidebarcpn = () => {
    const { user } = useContext(AuthContext);
    return (

        <Sidebar aria-label="Sidebar with logo branding example">
            <Sidebar.Logo href="/admin/dashboard" img={usrImg} imgAlt="book logo" className='rounded-full'>
                {user?.email?.substring(0, 7)}
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/createbook" icon={HiOutlineCloudUpload}>
                        Create Book
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/managebook" icon={HiInbox}>
                        Manage Book
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                        Products
                    </Sidebar.Item>

                    <Sidebar.Item href="/logout" icon={HiTable}>
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default Sidebarcpn