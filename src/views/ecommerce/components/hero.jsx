import React, { useState, useEffect } from 'react';
import {EcommerceHeroImage} from '../../../constants/images.js'
import style from "./style.module.css";
import {BsChevronCompactDown, BsSearch} from 'react-icons/bs'
import Button from "../../../components/Button/button";
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom'
import {EcommercenavLinks} from '../../../constants/objects'

export default function Hero(){

	const [showMenu, setShowMenu] = useState(false)
	const [imageIndex, setImageIndex] = useState(0);
	const [getText, setGetText] = useState("")
	const [longitude, setLongitude] = useState()
	const [latitude, setLatitude] = useState()

	  useEffect(() => {
		function componentDidMount(){
		  navigator.geolocation.getCurrentPosition(
			function(position) {
				console.log("Latitude is :", position.coords.latitude);
				console.log("Longitude is :", position.coords.longitude);
				setLongitude(position.coords.longitude)
				setLatitude(position.coords.latitude)
			},
			function(error) {
			  console.error("Error Code = " + error.code + " - " + error.message);
			}
		  );
		  if (navigator.geolocation) {
				navigator.geolocation.watchPosition(function(position) {
				console.log("Latitude is :", position.coords.latitude);
				console.log("Longitude is :", position.coords.longitude);
				});
		   }
		}
		componentDidMount()
	    const intervalId = setInterval(() => {
	      setImageIndex(Math.floor(Math.random() * EcommerceHeroImage.length));
	    }, [10000]); // Change the image every 5 seconds

	    return () => clearInterval(intervalId);
	  }, [EcommerceHeroImage.length]);

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

	const handleGetText = (value) => {
		setGetText(value)
	}

	const [searchItem, setSearchItem] = useState('');
	const navigate = useNavigate()

	const handleSearch = (e) => {
		e.preventDefault();
		if(searchItem){
			navigate(`/market/search?q=${searchItem}`)
		}
	}

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSearch(e);
		}
	};

	return(
			<>
				<div className={`w-full h-[500px] ${style.hero_background}`}>
					<div className={`w-full h-full pt-8 flex flex-col justify-center m-auto bg-gradient-to-t from-lightblack  `}>
						<p className="self-center pb-4 md:pb-8 text-white font-bold text-3xl md:text-5xl">Buy fresh farm products </p>
						<p className="self-center pb-8 text-lg px-8 md:px-0 text-center text-gray-300 ">Hight-Quality products, fast delivery at cheap prices</p>
						<div className="flex self-center flex-row justify-between rounded-md px-6 md:px-0 w-full md:w-[50%]">
							<div className=" w-1/4 rounded-md bg-white">
								{
									getText == "" ? 

									<div onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)} className=" justify-between rounded-s-md text-createText px-4 p-2 flex w-full border-r h-14 border-2 border-border">
										<p className="text-sm px-4 my-2">All</p>
										<motion.div transition={{duration:0}} animate={showMenu ? {x:0, y:0, rotate:180} : {x:0 , y:0, rotate:0}} className="my-1 text-lightblack cursor-pointer group-hover:text-primary">
											<BsChevronCompactDown className="my-2"/>
										</motion.div>

									</div>
									:

									<div className=" justify-between rounded-s-md text-createText px-4 p-2 flex w-full border-r h-14 border-2 border-border">
										<p className="text-sm px-4 my-2">{getText}</p>
										<motion.div transition={{duration:0}} animate={showMenu ? {x:0, y:0, rotate:180} : {x:0 , y:0, rotate:0}} className="my-1 text-lightblack cursor-pointer group-hover:text-primary">
											<BsChevronCompactDown className="my-2"/>
										</motion.div>

									</div>


								}
								<div onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)} className="bg-white shadow mt-1 absolute px-6 md:px-11 border-1 border-e-border rounded-md text-createText text-center text-sm bg-red-500">
									{
										EcommercenavLinks?.map((item, index) => (

											<motion.div key={index} transition={{duration:400}} variants={menu_animation} animate={showMenu ? "show" : "hide"}>
												<p onClcik={()=>{handleGetText(item.title)}} className="py-1 hover:text-black text-left cursor-pointer" >{item.title}</p>
											</motion.div>

										))
									}
								</div>

							</div>

							<div className=" w-3/4 px-6 bg-white  h-14">
								<input 
									type="text" 
									value={searchItem} 
									onKeyPress={handleKeyPress}
									onChange={(e) => setSearchItem(e.target.value)}
									className="w-full h-full py-4 bg-white text-createText outline-none" placeholder="Search..."/>
							</div>
							<div className="p-2 bg-white h-14 rounded-r-md">
								<button onClick={(e) => {handleSearch(e)}} className="hidden md:block bg-black py-2 rounded hover:scale-105 text-white font-bold cursor-pointer shadow px-6">
									Search
								</button>
								<div onClick={(e) => {handleSearch(e)}} className=" md:hidden p-3 bg-black  rounded hover:scale-105 text-white font-bold cursor-pointer shadow"><BsSearch/></div>
							</div>
						</div>					

					</div>
				</div>
				
				{/* <div>
					<Map
					google={this.props.google}
					zoom={14}
					style={mapStyles}
					initialCenter={{
						lat: YOUR_LATITUDE,
						lng: YOUR_LONGITUDE
					}}
					>
					<Marker
					onClick={this.onMarkerClick}
					name={'This is test name'}
					/>
					</Map>
				</div> */}
			</>
	)
}