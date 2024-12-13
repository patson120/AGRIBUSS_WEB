import { Outlet } from 'react-router-dom';
import SideBar from '../components/Bars/SideBar.jsx';
import {driverMenu, subDriverMenuList,serviceDriverMenu  , serviceMenu, serviceMenuList} from '../Utils/SideBarData.jsx'
import img from '../assets/images/driver1.png';
import DashboardNavbar from '../components/Bars/DashboardNavbar.jsx';

export default function DriverDash(){
	return(
		<>
			<div className="bg-bg_dash overflow-y-hidden w-full fixed p-3 flex flex-row">
				<div className='hidden md:block '>
					<SideBar
						parent="driver"
						serviceMenuList= {subDriverMenuList}
						menu={driverMenu}
						serviceMenu={ serviceDriverMenu}
					/>
				</div>
				<div className="flex flex-col w-full ml-10">
					<DashboardNavbar
						image={img}
						name="Assene Aeda"
						role="Roger Menkeu"
					/>
					<div>
						{<Outlet/>}
						
					</div>

				</div>
				
			</div>
		</>
	)
}