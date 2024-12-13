
import {BsChevronCompactRight, BsCaretDownFill,BsCalendar4Week, BsChevronCompactLeft, BsStarFill} from 'react-icons/bs'
import GradientBtn from '../Button/GradientBtn.jsx'
import {AppointListData} from '../../Utils/CardData.jsx'
import AppointList from '../List/List2.jsx'
import { Outlet, Link } from "react-router-dom";
export default function ListApp({name,role}){
	return(
		<>
			
			<div className=" bg-white mt-3 rounded-md w-full">
				<div className="flex border-b border-border flex-row bg-white rounded-t-md py-2 px-4  w-full">
					<p className="w-[72%] font-bold text-lightBlack text-md py-2">{name}</p>
					<div className="flex flex-row py-2">
						<Link to={`/farmer/${role}/${name}`}><p className="text-primary hover:underline text-xs ml-3 pr-2 mt-1">View all</p></Link>
					</div>
				</div>
				<div className="h-[300px] overflow-y-auto">
					{
						AppointListData?.map((list) => {
							return(
								<AppointList
										key={list?.key}
										icon={list?.icon}
										category={list?.category} 
										name={list?.name}
										color={list?.color}
										date={list?.date}
								/>	
							)
						})
					}
				</div>
				
			</div>
		</>
	)
}