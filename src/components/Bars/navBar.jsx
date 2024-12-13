import Search from '../inputs/SearchInput.jsx'
import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react'
import { Sidebar } from 'primereact/sidebar';
import {BsChevronCompactRight, BsMoon, BsList, BsBell, BsBucket,BsBag, BsChevronCompactLeft, BsCart4, BsStarFill} from 'react-icons/bs'


export default function NavBar(){

	const [visible, setVisible] = useState(false);

	return(
		<>
			<div className="flex flex-row w-full p-1 bg-white">
				<p className="text-black pr-56 font-bold p-2 my-1 pl-10">Agri<span className="text-logo">BUSS</span></p>
				<Search
					placeholder="Search for products..."
				/>
				<div className="ms-72">
					<div className=" text-lightblack  my-4 ml-12"><BsBag id="cart" data-pr-tooltip="Cart"/></div>
					<div className="bg-orange-400 text-center text-xs rounded-full relative w-4 -mt-10 ml-14 text-white">5</div>
				</div>
				<p className="text-createText px-1 hover:text-black hover:cursor-pointer font-semibold py-3">cart</p>
				<div className="">
					<div className=" text-lightblack ml-2 my-4 "><BsCart4 id="mode" data-pr-tooltip="Dark mode"/></div>
					<div className="bg-green-400 text-center text-xs rounded-full relative w-4 -mt-10 ml-4 text-white">3</div>
				</div>
				<p className="text-createText px-1 hover:text-black hover:cursor-pointer font-semibold py-3">Orders</p>
				<p className="text-black px-10 my-1 hover:text-green-500 hover:cursor-pointer font-semibold text-logo py-2"><Link to="/login"> Sign in	 </Link></p>
			</div>
		</>
	)
}