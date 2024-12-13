
import {useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {motion} from 'framer-motion';
import {BsChevronCompactLeft, BsRecordCircle} from 'react-icons/bs'
export default function SubMenu({icon,parent,name, menus}){

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

	const {pathname} = useLocation()

	return(
		<>
				<div className="flex pl-6 cursor-pointer group flex-row gap-2 hover:bg-sidehover p-3">
					<div className="my-1 text-lightblack group-hover:text-primary">{icon} </div>
					<p className="w-[70%] pl-4 text-md text-createText">{name}</p>
					<motion.div transition={{duration:0}} animate={showMenu ? {x:0, y:0, rotate:270} : {x:0 , y:0, rotate:0}} onClick={() => setShowMenu(!showMenu)} className="my-1 text-lightblack group-hover:text-primary">
						<BsChevronCompactLeft/>
					</motion.div>
				</div>
			{
				menus?.map(menu => {
					return(
						<NavLink to={`/${parent}/${name.toLowerCase()}/${menu.toLowerCase()}`} >
							<motion.div key={menu.name} transition={{duration:400}} variants={menu_animation} animate={showMenu ? "show" : "hide"}  className="flex pl-10 cursor-pointer group flex-row gap-2 p-3">
								<div className="my-1 text-lightblack group-hover:text-primary">< BsRecordCircle size={12}/></div>
								<p className="w-[70%] pl-4 text-sm text-createText group-hover:text-primary">{menu}</p>
							</motion.div>
						</NavLink>
					)
				})
			}
		</>
	)
}