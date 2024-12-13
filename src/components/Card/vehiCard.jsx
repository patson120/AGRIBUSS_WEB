
import {BsGeoAltFill} from 'react-icons/bs'
import { Rating } from 'primereact/rating';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';		
import React, { useState, useRef  } from 'react';
import {Toast} from 'primereact/toast'
import { useNavigate, Link } from "react-router-dom";
//Vehicle imags

import pers2 from '../../assets/images/boy7.png'
import pers3 from '../../assets/images/boy8.png'
import pers4 from '../../assets/images/boy1.png'
import pers5 from '../../assets/images/boy2.png'
import pers6 from '../../assets/images/boy3.png'

export default function VehiCard({owner, rate, status, image, profile, location}){
	
	const toast = useRef(null)

	// const [status, setStatus] = useState({status})

	// const ativeBtn = () => {
	// 	if(status === "active")
	// 		return
	// }
	const [invoiceDialog, setInvoiceDialog] = useState(false);


    const openNew = () => {
        setInvoiceDialog(true);
    };

    const hideDialog = () => {
        setInvoiceDialog(false);
		
		toast.current.show({severity: "success", summary: "Ride Book successfully", detail: "Car book successfully", life: 3000})
		navigate(`/farmer/drive/drive}`)
	
    };


	let emptyInvoice = {
        id: null,
        client: null,
        product: null,
        quantity: null,
        Amount: null,
        date: null
    };



    const invoiceDialogFooter = (
        <React.Fragment>
            <div className="w-full bg-black p-2 rounded-md cursor-pointer group hover:bg-primary" onClick={hideDialog}> <center><p className="text-white font-bold group-hover:text-white"> Book </p></center></div>
        </React.Fragment>
    );

	return(
		<>{
			status !== "active" &&
			
			<div className="bg-white  w-full h-48 flex flex-row shadow-md rounded-md p-2 gap-2">
				
			<Toast ref={toast}/>
				<div style={{backgroundImage: `url(${image})`}} className="w-[50%] rounded-md h-100 bg-cover bg-center" ></div>
				<div className=" w-[50%]" >
					<div className="flex py-2 flex-row gap-2">
						<div className="text-black py-1"><BsGeoAltFill/></div>
						<p className="font-medium text-xs py-1 text-createText">{location}</p>
					</div>
					<div className="flex py-2 flex-row gap-2">
						<p className="font-medium text-sm text-createText">{owner}</p>
					</div>
					<div className=" py-1">
						<Rating value={`${rate}`} severity="warning" size={10} className="p-rating-yellow-200" readOnly cancel={false} />
					</div>

					<div 
					onClick={openNew}
					className={
						"bg-black my-4 group cursor-pointer hover:bg-primary rounded-lg p-1 content-center"
					}>
						<center><p className={status === "active"? " text-white text-sm group-hover:text-white" : "text-sm text-white"}>view</p></center>
					</div>
				</div>

					<Dialog visible={invoiceDialog} style={{ width: '50%', }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Driver " modal className="p-fluid text-createText" footer={invoiceDialogFooter} onHide={hideDialog}>
							
						    <div className=" flex flex-col gap-2">
		                    	<div className="h=[50%]">
		               		     	<center><div className="w-[30%]"><img className="w-full rounded-md h-100 bg-cover bg-center" src={image}/></div></center>
		                    	</div>
		                    	<div className="border-t flex gap-4 flex-col space-between border-1 h-[50%] border-grey-500">
		                    		<h2 className='text-md font-bold'>Information</h2>
									<div>
										<p>Seats: {owner}</p>
										<p>Brand: Toyota</p>
										<Rating value={`${rate}`} severity="warning" size={10} className="p-rating-yellow-200" readOnly cancel={false} />
										<p>Speed: 2km/sec</p>
									</div>
		                    	</div>
								<label className="text-black font-normal">Destination</label>
								<input 
									type='text' 
									className="mt-1 border pb-5 text-grey w-full text-md hover:shadow-md focus:shadow-md border-inputB rounded-md outline-none w-full h-10 p-4"						
				
								/>
		                    </div>
		            </Dialog>
			</div>
		}
		</>
	)
}