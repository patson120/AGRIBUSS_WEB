
import SubMenu from '../SubMenu.jsx'
import Menu from '../Menu.jsx'
import {NavLink, useLocation} from 'react-router-dom'
import {useState} from 'react'
import {motion} from 'framer-motion';
import {useMediaQuery} from 'react-responsive'
import {BsChevronCompactRight,BsArrowBarRight, BsRecordCircle, BsList, BsWechat, BsNut, BsBoxSeam,BsCalendar4Week, BsGraphUpArrow, BsTruckFront, BsChevronCompactLeft,BsCart2, BsBoxes, BsFillGridFill, BsStarFill, BsChevronLeft, BsPersonFill, BsBell, BsPerson} from 'react-icons/bs'

export default function SideBar({parent,menu, subMenuList, serviceMenu, serviceMenuList}){



	const Sidebar_animation = {
		open: {
			display: "block",
			width: "18rem",
			transition: {
				damping: 40,
			},
		},
		closed: {
			display: "block",
			width: "4rem",
			transition: {
				damping: 40,
			},
			overflow:"none"
		},
	}

	const [isOpen, setIsOpen] = useState(true)

	return(
		<>
			<motion.div variants={Sidebar_animation} animate={isOpen ? "open" : "closed"} className="hidden md:block w-[20%] overflow-hidden md:relative fixed bg-white h-[820px] md:h-[760px] rounded-xl">
				<div className=" flex flex-row p-4 px-6 justify-between border-b border-border ">
					<p className="text-black font-bold">Agri<span className="text-primary">BUSS</span></p>
					<motion.div transition={{duration:0}} animate={isOpen ? {x:0, y:0, rotate:0} : {x:0 , y:0, rotate:180}} onClick={() => setIsOpen(!isOpen)} className="absolute md:block hidden w-fit pt-1 px-2 h-fit z-50 hover:cursor-pointer right-2">
						<BsChevronLeft size={18} className='text-gray-500'/>
					</motion.div>
				</div>
				<div className="bg-white overflow-y-auto  h-[700px]">
				<div className="bg-white flex pt-5 flex-col border-b border-border">
					{/* <NavLink to={`/${parent}`}>
						<div className="flex cursor-pointer pl-6 flex-row gap-2 p-3 rounded-e-sm">
							<div className="pt-1 text-createText"><BsFillGridFill/></div>
							<p className="w-[70%] pl-4 text-md text-createText">Dashboard</p>
						</div>
					</NavLink> */}
					
					{menu?.map(menu => {
						return(

							<motion.div key={menu?.name}>
								<Menu
									name={menu?.name}
									icon={menu?.icon}
									parent={parent}
									path={menu?.path}
								/>
							</motion.div>
						)
					})}
					
				</div>
				<div className="bg-white flex flex-col pt-5 border-b border-border">
					<div className="text-lightblack pl-6 font-semibold">Services</div>
					
					{
						serviceMenuList?.map(menu => {
							return(
								<motion.div key={menu?.name}>
									<SubMenu
										name={menu?.name}
										icon={menu?.icon}
										menus={menu?.menus}
										parent={parent}
									/>
								</motion.div>

							)
						})
					}


					{
						serviceMenu?.map(menu => {
							return(
								<motion.div key={menu?.name}>
									<Menu
										name={menu?.name}
										icon={menu?.icon}
										parent={parent}
										path={menu?.path}
									/>
								</motion.div>

							)
						})
					}
				</div>
				<div className="bg-white flex flex-col pt-5 border-b border-border">
					<div className="text-lightblack pl-6 font-semibold">Account</div>
					<NavLink to={`/${parent}/profile`}>
						<div className="flex pl-6  group flex-row gap-2 hover:bg-sidehover p-3">
							<div className="pt-1 text-lightblack  group-hover:text-primary"><BsPerson/></div>
							<p className="w-[70%] pl-4 text-md text-createText">Profile</p>
						</div>
					</NavLink>
					<NavLink to={`/${parent}/notification`}>
						<div className="flex pl-6  group flex-row gap-2 hover:bg-sidehover p-3">
							<div className="pt-1 text-lightblack  group-hover:text-primary"><BsBell/></div>
							<p className="w-[70%] pl-4 text-md text-createText">Notifications</p>
						</div>
					</NavLink>
				</div>
				<NavLink to={`/${parent}/settings`}>
					<div className="flex pl-6  group flex-row gap-2 hover:bg-sidehover p-3">
						<div className="pt-1 text-lightblack  group-hover:text-primary"><BsNut/></div>
						<p className="w-[70%] pl-4 text-md text-createText">Settings</p>
					</div>
				</NavLink>
				<NavLink to={`/logout`}>
					<div className="flex pl-6 group flex-row gap-2 hover:bg-sidehover p-3">
						<div className="pt-1 text-lightblack  group-hover:text-primary"><BsArrowBarRight/></div>
						<p className="w-[70%] pl-4 text-md text-createText">Logout</p>
					</div>
				</NavLink>
				</div>
			</motion.div>
		</>
	)
}