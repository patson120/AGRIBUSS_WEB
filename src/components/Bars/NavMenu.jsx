import {BsList } from 'react-icons/bs'
import React, { useState } from 'react'
import { Sidebar } from 'primereact/sidebar';

export default function NavMenu({array}){
	const [visible, setVisible] = useState(false);
	const LinkStyle =
	"text-lightblack px-5 font-semibold py-1 text-sm  hover:text-grey hover:cursor-pointer"
	return(
		<>
			<div className="bg-nav w-full flex flex-row p-1">
				<p onClick={() => setVisible(true)} className="text-lightblack px-5 font-semibold py-1 text-sm  hover:text-grey hover:cursor-pointer"><BsList size={20}/></p>
				{
					array?.map((item, index) => {
						<>
						<p className={LinkStyle}>Best sellers</p>
						<p className={LinkStyle}>Vegetables</p>
						<p className={LinkStyle}>Livestocks</p>
						<p className={LinkStyle}>Tools</p>	
						<p className={LinkStyle}>Great offers</p>
						</>
					})
				}	
			</div>
			
			 <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
		</>
	)
}