
import {BsChevronCompactRight,BsPlusLg, BsActivity, BsCart4, BsBag, BsPersonFill,BsBoxes, BsSignTurnRight, BsChevronCompactLeft, BsStarFill, BsGeo, BsPerson, BsChevronBarRight} from 'react-icons/bs'

import  {useState} from 'react';
import {prodCardData} from '../Utils/CardData.jsx'
import ProdCard from '../components/Card/ProdCard.jsx'
import ProdTable from '../components/table/editProdTable.jsx'
import  BookTable from '../components/table/bookTable.jsx'
import AddProduct from '../components/pages/addProduct.jsx'
import { userImages } from '../constants/images.js';

export default function DriverRequest(){

	const [showModal, setShowModal] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(userImages.length / itemsPerPage);
    const indexOfLastOrder = currentPage * itemsPerPage;
    const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
    const currentOrders = userImages.slice(indexOfFirstOrder, indexOfLastOrder);
	
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

	return(
		<>
			<div className=" w-full bg-bg_dash md:w-120 lg:w-120 scrollbar-thin hover:scrollbar-thumb-gray-200 scrollbar-track-gray-300 h-[698px] overflow-auto mt-1">
				<p className='py-4 text-xl font-semibold text-green-700'>Booking Requests</p>
				<div className='bg-white p-4 rounded-lg'>
					<p>hcdhd</p>
				</div>
				<div className='flex flex-wrap gap-4 py-4'>
					<div  className='rounded-lg flex p-2 gap-4 w-[48%] bg-white h-40'>
								<div className='rounded-l-lg w-48 bg-gray-100'>
									<div className='align-middle py-6 px-12 self-center text-center'>
										<BsPerson size={90} className='self-center text-gray-300' />
									</div>
								</div>
								<div className='w-2/3 flex text-sm flex-col'>
									<p className='text-lg font-semibold text-gray-600 '>Richart Livingston</p>
									<div className='flex py-1 text-gray-500 gap-2'>
										<p className='text-gray-600'>Current at :</p>
										<BsGeo/>
										<p> Mbalmayo, Yaounde</p>
									</div>
									<div className='flex text-gray-500 gap-2'>
										<p className='text-gray-600'>Destination :</p>
										<BsChevronBarRight/>
										<p> Melen, Yaounde</p>
									</div>
									<p className='text-gray-500 py-1'><span className='text-gray-700 font-semibold'>150km/s</span> to location</p>
									<div className='flex self-end justify-between w-full pr-3'>
										<button className='p-2 rounded w-40 hover:scale-105 bg-green-100 text-green-500 text-center'>Accept</button>
										<button className='p-2 rounded w-40 bg-red-100 hover:scale-105 text-red-500 text-center'>Cancel</button>
									</div>
									
								</div>
							</div>
					{currentOrders.length === 0 ? ( <p className="text-gray-500">No orders found.</p>
                                        
                                    ) : (
						currentOrders?.map((item, index) => (
							<div key={index} className='rounded-lg flex p-2 gap-4 w-[48%] bg-white h-40'>
								<img src={item} className='rounded-l-lg w-48 ' />
								<div className='w-2/3 flex text-sm flex-col'>
									<p className='text-lg font-semibold text-gray-600 '>Richart Livingston</p>
									<div className='flex py-1 text-gray-500 gap-2'>
										<p className='text-gray-600'>Current at :</p>
										<BsGeo/>
										<p> Mbalmayo, Yaounde</p>
									</div>
									<div className='flex text-gray-500 gap-2'>
										<p className='text-gray-600'>Destination :</p>
										<BsChevronBarRight/>
										<p> Melen, Yaounde</p>
									</div>
									<p className='text-gray-500 py-1'><span className='text-gray-700 font-semibold'>150km/s</span> to location</p>
									<div className='flex self-end justify-between w-full pr-3'>
										<button className='p-2 rounded w-40 hover:scale-105 bg-green-100 text-green-500 text-center'>Accept</button>
										<button className='p-2 rounded w-40 bg-red-100 hover:scale-105 text-red-500 text-center'>Cancel</button>
									</div>
									
								</div>
							</div>
						)))
					}
					
				</div>
                    <div className='flex flex-col md:flex-row justify-center py-4 border-t gap-4 text-sm mt-4'>
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className='px-4 py-2 bg-primary text-white rounded-s-lg disabled:opacity-50'
                        >
                            Prev
                        </button>
                        <span className='self-center'>
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className='px-4 py-2 bg-primary text-white rounded-e-lg disabled:opacity-50'
                        >
                            Next
                        </button>
                    </div>
				</div>
		</>
	)
}