import { Outlet } from 'react-router-dom'
import SideBar from '../components/Bars/SideBar.jsx'
import {subMenuList, menu, serviceMenu, serviceMenuList} from '../Utils/SideBarData.jsx'
import { useDispatch , useSelector} from 'react-redux';
import img from '../assets/images/use.jpg';
import { getUser} from '../redux/feature/userSlice.js';
import DashboardNavbar from '../components/Bars/DashboardNavbar.jsx';
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';

export default function FarmerDash(){
	const userPath = useSelector(getUser)
	console.log(userPath)
	return(
		<>
			<div className="bg-bg_dash overflow-y-hidden w-full p-3 h-screen flex flex-row">
				<div className='hidden md:block '>
					<SideBar
						parent="farmer"
						subMenuList= {subMenuList}
						serviceMenuList= {serviceMenuList}
						menu={menu}
						serviceMenu={ serviceMenu}
					/>
				</div>

				<div className="flex flex-col w-full md:ml-6">
					<DashboardNavbar
					/>
					<div>{<Outlet/>}</div>

				</div>
			</div>
		</>
	)
}