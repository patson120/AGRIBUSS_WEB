import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/Bars/DashboardNavbar";
import SideBar from "../../components/Bars/SideBar";
import { consultantMenu, subConsultantMenuList, serviceDriverMenu, subDriverMenuList } from "../../Utils/SideBarData";
import image from "../../constants/images";

export default function ConsultantDash(){
	return(
		<>
			<div className="bg-bg_dash overflow-y-hidden w-full fixed p-3 flex flex-row">
				<div className='hidden md:block '>
					<SideBar
						parent="consultant"
						menu={consultantMenu}
						subMenuList={subConsultantMenuList}
						serviceMenu={ serviceDriverMenu}
					/>
				</div>
				<div className="flex flex-col w-full ml-10">
					<DashboardNavbar
						image={image.HERO_Forum2}
						name="Assene Aeda"
						role="Roger Menkeu"
					/>
					<div className="">
						{<Outlet/>}
						
					</div>

				</div>
				
			</div>
		</>
	)
}