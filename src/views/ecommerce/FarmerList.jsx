
import {bestFarmers, EcommercenavLinks, products} from '../../constants/objects'
import AppNavbar from '../../partials/navBar/AppNavbar'
import NavMenu from '../../partials/navBar/NavMenu'
import React, { useState, useEffect } from 'react';
import { FaTimes } from "react-icons/fa";
import {BsChevronCompactDown, BsStarFill, BsHeart, BsFilter, BsList, BsRecordCircle, BsChevronDown, BsStar} from 'react-icons/bs'
import {motion} from 'framer-motion';
import {filterMenu, colors} from '../../Utils/SideBarData.jsx'
import { Link, NavLink, useLocation } from 'react-router-dom'
import FilterSubMenu from './products/components/FilterSubMenu.jsx'
import ProductCard from './products/components/ProductCard.jsx'
import notfound from "../../assets/images/4042.jpg"
import LandingFooter from '../../partials/footer/LandingFooter.jsx';


export default function FarmerList(){
	const [showMenu, setShowMenu] = useState(false)
	const [showColors, setShowColors] = useState(false)
	const [getText, setGetText] = useState("")
	const [isOpen, setIsOpen] = useState(true)

	const { search } = useLocation();
	const query = new URLSearchParams(search).get('q')
    const [searchTerm, setSearchTerm] = useState(query || ''); 
	const [selectedFilters, setSelectedFilters] = useState([]);

	const menu_animation = {
		show: {

			display: "block",
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

	const Sidebar_animation = {
		open: {
			display: "block",
			transition: {
				damping: 40,
			},
		},
		closed: {
			display: "none",
			transition: {
				damping: 40,
			},
			overflow:"none"
		},
	}

    const handleFilterChange = (filter) => {
        setSelectedFilters(prevFilters => {
            if (prevFilters.includes(filter)) {
                return prevFilters.filter(f => f !== filter);
            } else {
                return [...prevFilters, filter];
            }
        });
    };

    const filteredProducts = bestFarmers.filter(product => {
        if (selectedFilters.length === 0) return true;
        return selectedFilters.includes(product.name);
    });


	let MainProducts 
	if(query){
		MainProducts = bestFarmers.filter(product =>
        	product.name.toLowerCase().includes(searchTerm.toLowerCase())
    	);
	}else{
		MainProducts = filteredProducts
	}
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/farmers?q=${encodeURIComponent(searchTerm)}`);
        }
    };

	return(
		<div className="">
				<AppNavbar array={EcommercenavLinks} see={false}/>
				{/* <NavMenu array={EcommercenavLinks}/>						 */}
				<div className="flex align-center flex-row border-b-[1px] p-2 w-full px-6">
							<div className=" w-1/6 rounded-md bg-white">
								{
									getText == "" ? 

									<div onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)} className=" justify-between rounded-s-md text-createText px-4 p-2 flex w-full border-r h-10 border-2 border-gray-400">
										<p className="text-sm px-4 ">All</p>
										<motion.div transition={{duration:0}} animate={showMenu ? {x:0, y:0, rotate:180} : {x:0 , y:0, rotate:0}} className="text-lightblack cursor-pointer group-hover:text-primary">
											<BsChevronCompactDown className=""/>
										</motion.div>

									</div>
									:

									<div className=" justify-between rounded-s-md text-createText px-4 p-2 flex w-full border-r h-10 border-2 border-border">
										<p className="text-sm px-4">{getText}</p>
										<motion.div transition={{duration:0}} animate={showMenu ? {x:0, y:0, rotate:180} : {x:0 , y:0, rotate:0}} className="my-1 text-lightblack cursor-pointer group-hover:text-primary">
											<BsChevronCompactDown className=""/>
										</motion.div>

									</div>


								}
								<div onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)} className="bg-white mt-1 shadow-lg absolute px-11 border-1 border-e-border rounded-md text-createText text-center text-sm ">
									{
										EcommercenavLinks?.map((item, index) => (

											<motion.div key={index} transition={{duration:400}} variants={menu_animation} animate={showMenu ? "show" : "hide"}>
												<p onClcik={()=>{handleGetText(item.title)}} className="py-2 hover:text-black text-left cursor-pointer" >{item.title}</p>
											</motion.div>

										))
									}
								</div>

							</div>

							<div className="flex gap-2 w-3/4 border-gray-400 border-2 px-6 bg-white py-2 h-10">
								<input type="text" value={searchTerm} 
									onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-6 h-full py-2 bg-white text-gray-600 outline-none" placeholder="Search for products"/>
								<div className="my-1 border-r-2 border-gray-300 pr-2">
									<FaTimes className="font-medium cursor-pointer" onClick={()=>setSearchTerm('')}/>
								</div>
							</div>
							<div className=" w-32 bg-white h-10 flex align-center border-gray-400 border-2 rounded-r-md">
								<button onClick={() => handleSearch(searchTerm)} className="w-full bg-black rounded-r-md hover:scale-105 text-sm text-white font-semibold cursor-pointer shadow px-6">
									Search
								</button>
							</div>
				</div>	
				<div className="flex bg-gray-50 gap-2">
					<motion.div variants={Sidebar_animation} animate={isOpen ? "open" : "closed"}  className=" w-1/5 bg-white h-[630px] shadow">
						<div className="flex justify-between font-semibold w-full p-4 border-b-[1px] border-border">
							<p>Filters</p>
							<motion.div 
								transition={{duration:400}} 
								onClick={() => setIsOpen(!isOpen)} 
								className="my-2 cursor-pointer"
							>
								<BsFilter size={16}/>
							</motion.div>
						</div>
						<div className=" h-[555px] scrollbar-thin hover:scrollbar-thumb-gray-200 scrollbar-track-gray-300 overflow-y-auto ">
							{
								filterMenu?.map((menu, index) => (
									<motion.div key={index}>
										<FilterSubMenu
											name={menu?.name}
											icon={menu?.icon}
											menus={menu?.menus}
											parent={parent}
											onFilterChange={handleFilterChange}
											selectedFilters={selectedFilters}
										/>
									</motion.div>
								))
							}
							<div>			
								<div className="flex px-4 group justify-between flex-row p-2">
									<div className="my-1 text-black flex gap-4">
										<div className="my-1"><BsRecordCircle/></div> 
										<p className=" text-md text-black">Colors</p>
									</div>
									<motion.div transition={{duration:0}} animate={showColors ? {x:0, y:0, rotate:180} : {x:0 , y:0, rotate:0}} onClick={() => setShowColors(!showColors)} className="my-2 cursor-pointer text-black">
										<BsChevronDown/>
									</motion.div>
								</div>
								<div className=" flex flex-wrap px-6  gap-2">
									{
										colors?.map((color, index) => (
											<NavLink to="/" key={index}>
												<motion.div transition={{duration:400}} variants={menu_animation} animate={showColors ? "show" : "hide"}  className={`hover:shadow-lg w-5 bg-${color}-500 border-[1px] border-${color}-700 h-5 rounded-full cursor-pointer`}>
												</motion.div>
											</NavLink>
										))
									}
								</div>
							</div>
						</div>
					
					</motion.div>
					<div className="w-full px-8 scrollbar-thin hover:scrollbar-thumb-gray-200 h-[680px] scrollbar-track-gray-300 overflow-y-auto ">
						<div className="flex justify-between py-4">
							{searchTerm ? 
							<p className="text-sm font-semibold text-black">{MainProducts.length} results for <span className="font-bold">" {searchTerm} "</span></p>
							: <div>
								<p className="font-bold">Results</p>
								<p className="text-sm text-gray-500">Check each product page for other buying options</p>
							  </div>
							}
							{/* <p className="text-sm text-black">Shipping to <span className="text-primary">{location.country}{location.region}</span></p> */}
						</div>

						<div className="flex justify-between gap-2">
							<div>
									{
										isOpen === false &&
										<motion.div transition={{duration:400}} onClick={() => setIsOpen(!isOpen)} className="flex h-fit shadow-md gap-1 border-[1px] border-gray-700 w-fit rounded-xl justify-between cursor-pointer group flex-row p-2 px-3">
											<p className="text-sm font-medium text-gray-700 ">Filters</p>
										</motion.div>
									}
							</div>
							<div className="flex gap-2 ">
								<motion.div transition={{duration:400}} onClick={() => setIsOpen(!isOpen)} className="flex h-fit shadow-md gap-1 border-[1px] border-gray-700 w-fit rounded-xl justify-between cursor-pointer group flex-row p-1 px-3">
									<p className="text-xs font-medium text-gray-700 ">Sort: Best Match</p>
									<BsChevronDown size={12} className="my-1"/>
								</motion.div>
								<motion.div transition={{duration:400}} onClick={() => setIsOpen(!isOpen)} className="flex h-fit shadow-md gap-1 border-[1px] border-gray-700 w-fit rounded-xl justify-between cursor-pointer group flex-row p-1 px-3">
									<BsList/>
									<BsChevronDown size={12} className="my-1"/>
								</motion.div>
							</div>
						</div>
						<div className=" flex gap-8 py-8 flex-wrap">
							{	MainProducts.length !== 0 ?
								MainProducts?.map(item => {
									return(
                                        <div key={item.id} className="flex justify-between mb-4 p-4 bg-white rounded-lg shadow">
                                        <div className="flex items-center">
                                          <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-32 h-32 rounded-md"
                                          />
                                          <div className="ml-4 self-start ">
                                          <Link to={`/seller/${item.id}`}>
                                          <h3 className="text-lg cursor-pointer hover:underline font-semibold">{item.name}</h3>
                                          </Link>
                                          <p>{item.category}</p>
                                            <div className="flex text-yellow-500">
                                                                                  
                                                                      {[...Array(item.rate)].map((_, index) => (
                                                                          <BsStarFill/>
                                                                      ))}
                                                                      {[...Array(5 - item.rate)].map((_, index) => (
                                                                          <BsStar/>
                                                                      ))}
                              
                                                          </div>
                                            {/* <p className="text-red-500 py-1"> {product.price} XAF<span className='text-gray-600'> per {product.minBought} {product.unit}</span></p>
                                            <p className="text-gray-700 text-sm">{product.sold}</p> */}
                                          </div>
                                        </div>
                                        <div className="flex flex-col self-center">
                                          <button className="bg-black w-40 hover:scale-105 text-white px-4 py-2 rounded-lg mb-2">Buy Now</button>
                                          <button className="border w-40 border-primary hover:scale-105 text-primary px-4 py-2 rounded-lg">
                                            Add to cart
                                          </button>
                                        </div>
                                      </div>
									)
								}):
								<div className="font-bold w-full ">
										<img src={notfound} alt="not founde page" className="text-center h-[500px] w-[50%] m-auto"/>
								</div>
							}							
												
						</div>
					</div>
				</div>
            <LandingFooter/>
		</div>
	)
}