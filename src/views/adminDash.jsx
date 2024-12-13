import { Outlet } from 'react-router-dom'
import SideBar from '../components/Bars/SideBar.jsx'
import {adminMenu,serviceAdminMenu} from '../Utils/SideBarData.jsx'
import img from '../assets/images/pers12.png'
import DashboardNavbar from '../components/Bars/DashboardNavbar.jsx'


export default function AdminDash(){
	return(
		<>
			<div className="bg-bg_dash overflow-y-hidden w-full fixed p-3 flex flex-row">
				<SideBar
					parent="admin"
					menu={adminMenu}
					serviceMenu={ serviceAdminMenu}
				/>
				<div className="flex flex-col w-full ml-10">
					<DashboardNavbar
						image={img}
						name="Assene Aeda"
						role="Admin"
					/>
					<div>{<Outlet/>}</div>

				</div>
				
			</div>
		</>
	)
}