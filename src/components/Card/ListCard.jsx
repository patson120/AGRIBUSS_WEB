
import {BsChevronCompactRight, BsCaretDownFill,BsCalendar4Week, BsChevronCompactLeft, BsStarFill} from 'react-icons/bs'
import GradientBtn from '../Button/GradientBtn.jsx'
import { InvoiceListData} from '../../Utils/carouselData.js'
import { Outlet, Link } from "react-router-dom";
import InvoiceList from '../List/List1.jsx'
export default function ListCard({name, parent,link, role}){
	return(
		<>
			
			<div className=" bg-white mt-3 rounded-md w-full">
				<div className="flex border-b justify-between border-border flex-row bg-white rounded-t-md py-2 px-4  w-full">
					<p className="w-[72%] font-bold text-lightBlack text-md py-2">{name}</p>
					<div className="flex flex-row py-2">
						<Link to={`${link}`}><p className="text-primary text-xs hover:underline ml-3 pr-2 mt-1">View all</p></Link>
					</div>
				</div>
				<div className="h-[300px] overflow-y-auto">
					{
						InvoiceListData?.map((list) => {
							return(
								<InvoiceList
										key={list?.key}
										image={list?.image}
										name={list?.name}
										location={list?.location}
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