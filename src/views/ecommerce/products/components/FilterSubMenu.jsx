

import {useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {motion} from 'framer-motion';
import {BsChevronDown, BsRecordCircle} from 'react-icons/bs'
export default function FilterSubMenu({icon,parent,name, menus, selectedFilters, onFilterChange}){

	const [showMenu, setShowMenu] = useState(false)

	const menu_animation = {
		show: {

			display: "flex",
			transition: {
				damping: 40,
			},
		},
		hide: {
			display: "none",
			transition: {
				damping: 40,
			},
		}
	}

	return(
		<>
				<div className="flex px-4 group justify-between flex-row p-2">
					<div className="my-1 text-black flex gap-2">
						<p className=" text-sm text-black">{name}</p>
					</div>
					<motion.div 
						transition={{duration:0}} 
						animate={showMenu ? {x:0, y:0, rotate:180} : {x:0 , y:0, rotate:0}} 
						onClick={() => setShowMenu(!showMenu)} 
						className="my-2 cursor-pointer text-black"
					>
						<BsChevronDown size={12}/>
					</motion.div>
				</div>
				<div className=" flex flex-wrap px-4 gap-2">
					{
						menus?.map(menu => {
							return(
									<motion.div 
										key={menu} 
										transition={{duration:400}} 
										variants={menu_animation} 
										animate={showMenu ? "show" : "hide"}  
										className={`flex gap-1 bg-gray-100 w-fit rounded-lg justify-between cursor-pointer group flex-row p-1 px-3 ${selectedFilters.includes(menu) ? 'border border-black' : 'bg-gray-100'}`}
										onClick={() => onFilterChange(menu)}	
									>
										<p className="text-xs font-medium text-gray-700 ">{menu}</p>
									</motion.div>
							)
						})
					}
				</div>
		</>
	)
}