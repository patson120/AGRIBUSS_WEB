import {BsList } from 'react-icons/bs'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from 'primereact/sidebar';

export default function NavMenu({array}){
	const [visible, setVisible] = useState(false);
	const [selectedFilters, setSelectedFilters] = useState('');
	const [selectedSubFilters, setSelectedSubFilters] = useState('');
	const [showMenu, setShowMenu] = useState(false)
	const [showSubMenu, setShowSubMenu] = useState(false)

    const filteredCategory = array.filter(cat => cat.title === selectedFilters);
	let FilterCat

	const LinkStyle = " px-5 md:text-sm font-semibold py-1 text-xs  hover:cursor-pointer"
	return(
		<div className="w-full">
			<div className="bg-nav w-full flex flex-row flex-wrap p-1">
				<p 
				onClick={() => setVisible(true)} 
				className="text-lightblack px-5 hidden font-semibold py-1 text-sm cursor-pointer"
				>
					<BsList size={20}/>
				</p>
				
				{
					array?.map((item, index) => (
						<>
							<p 	onMouseEnter={() =>{
									setShowMenu(true)
									setSelectedFilters(item.title)}
								}
								className={`${LinkStyle} ${selectedFilters === item.title ? "text-black": 'text-lightblack hover:text-grey'}`}>{item.title}</p>
							<div 
							 	onMouseEnter={() =>
									setShowMenu(true)
								}
								onMouseLeave={() =>{
									setShowMenu(false)
									setSelectedFilters('')}
								}
							>
							{showMenu &&
								<div 	
								 className='w-full h-fit absolute p-4 text-sm text-black lg:top-[92px] left-0 bg-gray-100 opacity-25 md:top-[115px]'>
									{
										filteredCategory?.map((category, index) => {
											// <p>{category.title}</p>
											return category.subCategory?.map(cat => (
												<p className="py-1 cursor-pointer hover:underline">{cat}</p>
											))
											}
										)
									}
									{/* {
										filteredCategory?.map((category, index) => {
										    FilterCat = category.categories.map(f => f.name === selectedSubFilters)
											return category.categories?.map(cat => {
												return (
													<div className='flex'>
														<div>
															<p 	onMouseEnter={() =>{
																	setShowSubMenu(true)
																	setSelectedSubFilters(cat.name)}
																}
																className="py-1 cursor-pointer hover:underline">{cat.name}</p>
														</div>
													</div>
												)
										})
											}
										)
									}
									 */}
									{/* { showSubMenu &&
														
														<div> 
														{
															
															FilterCat.map(sub => {
																return sub.subCategory.map(c => (
																	<p>{c}</p>
																))
															})
														}
														</div>
													
													} */}
								</div>
							}</div>
						</>
					))
				}	
			</div>
			
			 <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <p className="font-bold pb-8 text-black">Agri<span className="text-primary">BUSS</span></p>
                {
					array?.map((item, index) => (
						<Link to={item.path}>
						<div className="flex gap-4 cursor-pointer hover:text-gray-600 hover:border-b-2 border-gray-500 group text-black">
						<p className="pt-3 ">{item.icon}</p>
						<p className=" py-2">
							{item.title}
						</p>
						</div>
						</Link>
					))
				}
            </Sidebar>
		</div>
	)
}