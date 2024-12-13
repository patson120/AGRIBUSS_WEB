

import { Outlet, Link } from "react-router-dom";
import VehiCard from '../components/Card/vehiCard.jsx'
import img11 from '../assets/images/honey.jpeg'
import {vehicleData, driverData } from '../Utils/CardData.jsx'
import {useState} from 'react';
import { Paginator } from 'primereact/paginator';
import DriverCard from '../components/Card/driverCard.jsx'
import { Dialog } from 'primereact/dialog';

//Vehicle imags

import pers2 from '../assets/images/boy7.png'
import { BsArrowRightCircle, BsGeo, BsGlobe, BsGlobe2, BsStar, BsStarFill } from "react-icons/bs";


export default function Drive(){


		const [q, setQ] = useState("")

		const [searchParam] = useState(["name", "rate"])

		const [first, setFirst] = useState(0);
		const [rows, setRows] = useState(10);

		const onPageChange = (event) => {
			setFirst(event.first);
			setRows(event.rows);
		};

		function addProduct(){
			const modal = showModal;
			if(!modal)
				setShowModal(true)
			setShowModal(false)
		}

	// function searchDriver(){
	// 	 return driverData.filter((item) => {
 //                return searchParam.some((newItem) => {
 //                    return (
 //                        driverData[newItem]
 //                            .toString()
 //                            .toLowerCase()
 //                            .indexOf(q.toLowerCase()) > -1
 //                    );
 //                });
 //            });
 //        }
	// }


	return(
		<>
			<div className=" w-full bg-bg_dash md:w-120 lg:w-120 scrollbar-thin hover:scrollbar-thumb-gray-200 scrollbar-track-gray-300 h-[698px] overflow-auto mt-1">
				<div className="rounded-lg ring-1 ring-green-500 bg-nav mx-2 p-4 my-4">
					<div className="flex justify-between">
						<p>Drivers</p>
						<div className="flex gap-2 text-green-700 text-sm">
							<p>Drivers near you</p>
							<BsGeo/>
						</div>
					</div>
				</div>
						<div className="p-2 flex justify-between">
									<input
										type="search"
										name="search-form"
										id="search-form"
										placeholder="Search for..."
										value={q}
										/*
										// set the value of our useState q
										//  anytime the user types in the search box
										*/
										className="search-input p-2 border-border border rounded-lg bg-white"
										onChange={(e) => setQ(e.target.value)}
									/>

						</div>
				<div className="flex flex-col md:flex-row mb-4">
					<div className="w-2/3 p-2 flex flex-wrap gap-4">
						
						{
						driverData?.map(data => {
							return(

									<div key={data?.id} className="w-full h-[100px]">
										<DriverCard
											name={data?.name}
											img={data?.img}
											rate={data?.rate}
											location={data?.location}
										/>
									</div>
							)
						})
					}
					</div>
					<div className="w-1/3 p-2">
						<div className="bg-white p-4 rounded-lg h-[6	00px] shadow">
							<p className="text-lg font-semibold text-green-600 pb-2">Current Rides</p>
							<div className="w-full flex flex-col gap-2">
								{
									driverData?.map(data => (
											<div className="w-full rounded border-b-[1px]  flex flex-row px-2 hover:bg-gray-200 justify-between gap-2">
												<div className="flex flex-col border-t-inputB  ">
													<p className="font-bold ">{data.name}</p>
													<p> {data.location}</p>
		
												</div>
                                                    <div
                                                       
                                                        className='text-primary ring-1 focus:ring-2  ring-primary p-2 px-3 my-3 cursor-pointer rounded-full'
                                                        title="Track Order"
                                                    >
                                                        <BsArrowRightCircle size={18} className='my-1' />
                                                    </div>
											</div>
									))
								}
							</div>
						</div>
					</div>
				

					{/* {
						vehicleData?.map(data => {
							return(
								<div key={data?.id} className="w-[48%]">
									<VehiCard
										owner={data?.owner}
										rate = {data?.rate}
										status = {data?.status}
										image = {data?.image}
										profile	= {data?.profile}
										location = {data?.location}
									/>
								</div>
							)
						})
					} */}
				</div>
				<Paginator first={first} rows={rows} totalRecords={`${vehicleData.length}`} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
			</div>

		</>
	)
}