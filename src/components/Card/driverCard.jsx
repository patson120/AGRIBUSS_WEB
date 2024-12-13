
import { Outlet, Link } from "react-router-dom";
import {BsGeoAltFill, BsStar, BsStarFill} from 'react-icons/bs'
import { Rating } from 'primereact/rating';
import React from 'react'
import { Dialog } from 'primereact/dialog';
import {useState} from 'react';
import img2 from '../../assets/images/bg6.jpeg'
import VehiCard from './vehiCard.jsx'
import { vehicleData } from '../../Utils/CardData.jsx'

export default function DriverCard({name, img, rate, location}){


    const [driverDialog, setDriverDialog] = useState(false);

     const openNew = () => {
        setDriverDialog(true);
    };

    const hideDialog = () => {
        setDriverDialog(false);
    };

    const payDialog = () => {
    	setDriverDialog(false)
    	setShowModal(true)
    }

    const hideModalDialog = () => {
        setDriverDialog(false);
    };

    const driverDialogFooter = (
        <React.Fragment>
            <button className="border border-red-500 rounded-md outline-0 cursor-pointer text-red-500 p-2">Cancel</button>
        </React.Fragment>
    );

	const [showModal, setShowModal] = useState(false)

    const hideModal = () => {
        setShowModal(false);
    };
	return(
		<>
			<div  className="bg-white rounded-md gap-4 flex p-2 w-full h-full">
				<div style={{backgroundImage: `url(${img})`}} className="w-24 rounded-md h-full bg-cover bg-center"></div>
				<div className="flex justify-between w-full">
					<div>
						<p className="text-md font-semibold">{name}</p>
							
						<div className=" py-2">
							
						<div className="flex text-yellow-500">
													
													{[...Array(rate)].map((_, index) => (
														<BsStarFill/>
													))}
													{[...Array(5 - rate)].map((_, index) => (
														<BsStar/>
													))}
			
													</div>
						</div>
					</div>
					<div className="flex p-2 rounded w-64 text-center bg-gray-200 m-auto  flex-row gap-2">
						<div className="text-grey "><BsGeoAltFill/></div>
						<p className="font-medium text-xs text-createText">{location}</p>
					</div>
					<div className="flex py-2 flex-col gap-2">
						<div className="p-2 text-black rounded-md text-center text-xs border-2 w-full cursor-pointer hover:scale-105  border-primary" onClick={openNew} >View Profile</div>
						<div className="p-2 text-white text-center rounded-md text-xs w-full hover:scale-105 cursor-pointer bg-primary" onClick={payDialog} >Book Now</div>
					</div>
				</div>
			</div>

			
			<Dialog visible={driverDialog} style={{ width: '80rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Driver Profile" modal onHide={hideDialog}>
                <div className=" flex flex-row gap-2">
                		<div className="p-4 w-[50%] flex flex-col gap-2">
                			<div className="mt-5">
        						<div style={{backgroundImage: `url(${img2})`}} className="rounded-md w-full h-48 bg-cover bg-center" >
        							<div style={{backgroundImage: `url(${img})`}} className="rounded-full border-4 m-auto  border-white w-48 h-full bg-cover bg-center"></div>
        						</div>
                			</div>
                			<div className="p-2 flex flex-col border border-t-inputB gap-2 ">
                				<p className="font-bold text-xl">{name}</p>
                				<p>Current Location: {location}</p>
                				<p>Language: English, French</p>
								<Rating value={`${rate}`} severity="warning" className="p-rating-yellow-200" readOnly cancel={false} />
								<p>Experience: Intermediate</p>

                			</div>
                		</div>
                		<div className="w-[50%]" >
							<p className="text-lg text-green-700 font-semibold">Available Vehicles</p>
							<div className=" h-[450px] overflow-auto flex flex-col flex-wrap gap-4 w-full">
                			
							{
								vehicleData?.map(data => {
									
									return(
										<div key={data?.id} className="w-[48%]">
											<VehiCard
												owner={data?.owner}
												rate = {data?.rate}
												status = {data?.status}
												image = {data?.image}
												profile	= {data?.img}
												location = {data?.location}
											/>
										</div>
									)
								})
							}
							</div>
                		</div>
                </div>
            </Dialog>

			<Dialog visible={showModal} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} footer={driverDialogFooter} header="Confirm" modal onHide={hideModal}>
                <div className="confirmation-content">
                		<p>Vehicle</p>
                </div>
            </Dialog>
		</>
	)
}