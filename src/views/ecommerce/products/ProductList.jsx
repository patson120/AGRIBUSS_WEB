
import {EcommercenavLinks} from '../../../constants/objects'
import AppNavbar from '../../../partials/navBar/AppNavbar'
import NavMenu from '../../../partials/navBar/NavMenu'
import React, { useState, useEffect } from 'react';
import { FaTimes } from "react-icons/fa";
import {BsChevronCompactDown, BsStarFill, BsHeart, BsFilter, BsList, BsRecordCircle, BsChevronDown} from 'react-icons/bs'
import Button from "../../../components/Button/button";
import {motion} from 'framer-motion';
import {filterMenu, colors} from '../../../Utils/SideBarData.jsx'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import FilterSubMenu from './components/FilterSubMenu.jsx'
import ProductCard from './components/ProductCard.jsx'
import user from "../../../assets/images/eBG2.jpg"
import notfound from "../../../assets/images/4042.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { addCart, addToCart } from '../../../redux/feature/cartSlice.js';
import { getProduct } from '../../../redux/feature/productSlice.js';
import SkeletonLoader from '../../loader/skeletonLoader.jsx';
import Popup from '../../loader/popup.jsx';
import { addCartApi } from '../../../Utils/api/cartApi.js';


export default function ProductList(){
	const [location, setLocation] = useState({ country: '', region: '' });
	const [products, setProducts] = useState([])
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [loading, setLoading] = useState(true);
	const navigate = useNavigate()

    // Get user data from Redux state
    const username = useSelector((state) => state.user.userInfo.firstname);  
    const role = useSelector((state) => state.user.role.label); 
    console.log("user name" + username)
    const isLoggedIn = Boolean(username); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

	const dispatch = useDispatch();

	const handleAddToCart = async (product) => {
		console.log(product)
        try {
            const response = await addCartApi({productId: product.id, quantity: 1}); // Await the Promise
			console.log("cart response", response)
			if(response){
				const message = "product added to cart";
				setPopupMessage(message); // Set the message
			}else{
				const message = "Product already exist"; // Adjust based on your actual response structure
				setPopupMessage(message); // Set the message
			}
            setPopupVisible(true); // Show the popup
            
            // Hide the popup after 3 seconds
            setTimeout(() => {
                setPopupVisible(false);
            }, 3000);
        } catch (error) {
            console.error('Failed to add to cart: ', error);
        }
	}

	const closePopup = () => {
        setPopupVisible(false);
    };
	
    useEffect(() => {
        
		const fetchProducts = async () => {
			const response = await dispatch(getProduct());
			console.log("Product fetch: ",response)
			console.log("Product fetch: ",response.payload.data)
			setProducts(response.payload.data);
			
			console.log(products)
		};
	
			fetchProducts();
		}, [dispatch]);


    useEffect(() => {
        getLocation();
    }, []);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    const success = (position) => {
        const { latitude, longitude } = position.coords;
        fetchLocationDetails(latitude, longitude);
    };

    const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    const fetchLocationDetails = async (latitude, longitude) => {
        try {
            const response = await fetch(`https://ipapi.co/${latitude},${longitude}/json/`);
            const data = await response.json();
            setLocation({ country: data.country_name, region: data.region });
        } catch (error) {
            console.error("Error fetching location details:", error);
        }
    };

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

    const filteredProducts = products.filter(product => {
        if (selectedFilters.length === 0) return true;
        return selectedFilters.includes(product.category.name);
    });


	let MainProducts 
	if(query){
		MainProducts = products.filter(product =>
        	product.name.toLowerCase().includes(searchTerm.toLowerCase())
    	);
	}else{
		MainProducts = filteredProducts
	}
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/market/search?q=${encodeURIComponent(searchTerm)}`);
        }
    };

	return(
		<div className="">
				<AppNavbar array={EcommercenavLinks} see={false}/>
				<NavMenu array={EcommercenavLinks}/>						
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
					<div className="w-full px-8 scrollbar-thin hover:scrollbar-thumb-gray-200 h-[630px] scrollbar-track-gray-300 overflow-y-auto ">
						<div className="flex justify-between py-4">
							{searchTerm ? 
							<p className="text-sm font-semibold text-black">{MainProducts.length} results for <span className="font-bold">" {searchTerm} "</span></p>
							: <div>
								<p className="font-bold">Results</p>
								<p className="text-sm text-gray-500">Check each product page for other buying options</p>
							  </div>
							}
							<p className="text-sm text-black">Shipping to <span className="text-primary">{location.country}{location.region}</span></p>
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
						{loading ? (
							<SkeletonLoader/>
						):(
						<div className=" flex gap-8 py-8 flex-wrap">
						
							{	MainProducts.length !== 0 ?
								MainProducts?.map(product => {
									return(
					                    // <div key={product._id} className="border rounded p-4">
					                        
					                    //     <img src={`${NODE_APP_BASE_URL}/${product.images[0]}`} alt={product.name} className="w-full h-64 object-cover mb-2" />
					                    //     <h3 className="text-lg font-semibold">{product.name}</h3>
					                    // </div>
										<ProductCard
											id={product._id}
											image={product.images[0]}
											title={product.name}
											price={product.priceBundles[0].price}
											quantity={product.priceBundles[0].quantity}
											unit={product.priceBundles[0].measurementUnit}
											status={product.status}
											rate={product.rate}
											user={product.farmer}
											onAddToCart={handleAddToCart}
										/>
									)
								}):
								<div className="font-bold w-full ">
										<img src={notfound} alt="not founde page" className="text-center h-[500px] w-[50%] m-auto"/>
								</div>
							}						
						</div>							
					)}
					</div>
				</div>

			<Popup 
                message={popupMessage} 
                isVisible={popupVisible} 
                onClose={closePopup} 
            />
		</div>
	)
}