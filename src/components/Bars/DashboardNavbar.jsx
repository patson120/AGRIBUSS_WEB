import Search from '../inputs/SearchInput.jsx'
import { OverlayPanel } from 'primereact/overlaypanel';
import {BsMoon, BsList, BsBell, BsXLg, BsCart4} from 'react-icons/bs'
import { Tooltip } from 'primereact/tooltip';
import React, { useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Timeline } from 'primereact/timeline';
import img1 from '../../assets/images/asdads.jpeg'
import img3 from '../../assets/images/htyu.jpeg'
import img4 from '../../assets/images/flow2.jpeg'
import { useSelector } from 'react-redux';

export default function DashboardNavbar({isOpen}){

	 const events = [
        { name: 'Dzeufack', info: 'created a new forum', concern: 'Gardening simplified', time: '14 min', color: '#673AB7'},
        { name: 'Sandra Norvelle', info: 'made an ', concern: 'order', time: '10 min', color: '#FF9800' },
        { name: 'Kameni', info: 'is currently', concern: 'driving', time: '8 min', color: '#607D8B'},
        { name: 'Mbah royce', info: 'modified his', concern: 'profile', time: 'just now', color: '#9C27B0'}
    ];

     const customizedContent = (item) => {
        return (
                <div className="flex flex-row p-2 w-full hover:cursor-pointer hover:bg-inputB gap-8 border-b border-border" >
	                		<div className=" w-40">
	                			<p className="text-sm text-black font-bold">{item.name} <span className="text-xs text-lightblack">{item.info}.</span> <span className="text-xs text-black">{item.concern}</span></p>
	                		</div>
	                		<div className="flex flex-col text-center ">
	                			<p className="text-xs">{item.time}</p>
	                		</div>
	            </div>
        );
    };

     const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
            	<p>.</p>
            </span>
        );
    };

	const op = useRef(null);
	const notif = useRef(null);
	
    // Get the current user's name from Redux state
    const username = useSelector((state) => state.user.userInfo.firstname); 
    const role = useSelector((state) => state.user.role.label); // Get the user's role if needed
    const image = useSelector((state) => state.user.userInfo.image); // Get the user's image if needed

	return(
		<>
			<div className="flex flex-row gap-4  p-1 pl-4 rounded-md w-full bg-white">
				<Tooltip target="#logo" mouseTrack mouseTrackLeft={10}  tooltipOptions={{ position: 'bottom' }} />
				<div onClick={() => isOpen = true} className="block md:hidden cursor-pointer text-lightblack my-4 text-xl ml-6"><BsList id="logo" data-pr-tooltip="Menu"/></div>
				<Search
					placeholder="Search"
				/>
				<div className="md:ms-96 cursor-pointer">
					<Tooltip target="#mode" mouseTrack mouseTrackLeft={10}  tooltipOptions={{ position: 'bottom' }} />
					<div className=" text-lightblack  my-4 "><BsMoon id="mode" data-pr-tooltip="Dark mode"/></div>
				</div>
				<Link to='/farmer/notification'>
					<div className="cursor-pointer">
						<Tooltip target="#notif" mouseTrack mouseTrackLeft={10}  tooltipOptions={{ position: 'bottom' }} />
						<div className=" text-lightblack  my-4 "><BsBell id="notif" data-pr-tooltip="Notification"/></div>
						<div className="bg-green-400 text-center text-xs rounded-full relative w-4 -mt-10 ml-2 text-white">3</div>
					</div>
				</Link>
				<div className="flex flex-row justify-end md:ml-8 align-middle gap-4">
					<Tooltip target="#profile" mouseTrack mouseTrackLeft={10}  tooltipOptions={{ position: 'bottom' }} />
					{
						image ?
						<img id="profile" className="w-10 h-10  border-black rounded-full my-1" data-pr-tooltip={`${username} profile`} src={image} alt="userImage"/>
						// : <div className='p-4 py-2 text-center text-gray-600 text-xl self-center bg-gray-200 rounded-full'>R</div>
						: <div className='p-4 py-2 text-center text-gray-600 text-xl self-center bg-gray-200 rounded-full'>{username ? username.charAt(0) : 'P'}</div>
					}
					<div>
						<p className="font-bold text-gray-800 mt-1">{username || 'user'}</p>
						<p className="font-medium  border-border  text-gray-400 text-sm">{role || "farmer"}</p>
					</div>
				</div>
			</div>
		</>
	)
}