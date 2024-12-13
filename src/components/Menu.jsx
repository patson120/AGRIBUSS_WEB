
import {useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {motion} from 'framer-motion';
import {BsChevronCompactLeft, BsRecordCircle} from 'react-icons/bs'
export default function Menu({parent,icon,name,path}){


	return(
		<>	
			<NavLink to={`${path.toLowerCase()}`}>
				<div className="flex pl-6 cursor-pointer group flex-row gap-2 hover:bg-sidehover p-3">
					<div className="my-1 text-lightblack group-hover:text-primary">{icon} </div>
					<p className="w-[70%] pl-4 text-md text-createText">{name}</p>
				</div>
			</NavLink>
		</>
	)
}