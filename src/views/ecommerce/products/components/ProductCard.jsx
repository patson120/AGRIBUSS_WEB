
import {BsChevronCompactDown,BsStar,BsCart, BsChat, BsStarFill, BsHeart, BsFilter, BsList, BsRecordCircle, BsChevronDown, BsChatDots} from 'react-icons/bs'
import {Link, useLocation} from 'react-router-dom'
import { NODE_APP_BASE_URL } from '../../../../Utils'

export default function ProductCard({image, title, id,onAddToCart, status, price,user,unit, quantity, sold,rate,stock}){

	return(
							<div className="w-64 shadow shadow-gray-300 bg-white rounded-lg pb-2 h-[440px]">
								<div className="w-full h-1/2">
									<img src={`${NODE_APP_BASE_URL}/${image}`} alt="image" className="w-full rounded-t-lg h-full"/>
								</div>
								<div className="w-full h-1/2 p-3 align-bottom justify-between flex flex-col">
									<div className='flex flex-col'>
										{/* <p className="text-xs text-red-500 bg-red-100 rounded-full w-fit px-2">stock</p> */}
										<Link to={`/market/product/${id}`}><p className="font-bold hover:underline cursor-pointer text-sm">{title.toUpperCase()}</p></Link>
										<div className='flex gap-2 py-1'>
											{
												user?.images[0] ?
												<img src={`${NODE_APP_BASE_URL}/${user?.images[0]}`} alt="image" className="w-4 rounded-full h-4"/>
												 : <div className="p-2 rounded-full text-xs bg-gray-200 px-3 text-gray-700 font-semibold">
												 	{user?.firstname.charAt(0).toUpperCase()}
												 </div>
											}
											<p className="text-xs text-gray-500 my-2">{user?.firstname} {user?.lastname} </p>
										</div>
										<div className="flex text-yellow-500">
													
										{[...Array(2)].map((_, index) => (
											<BsStarFill/>
										))}
										{[...Array(5 - 2)].map((_, index) => (
											<BsStar/>
										))}

										</div>
										<p className="text-md font-bold py-2">{price} XAF <span className='bg-gray-100 p-1 px-2 text-xs rounded-full font-medium text-gray-500'>per {quantity} {unit}</span></p>
										<p className="text-gray-500 text-xs my-[-2%]">+ 1000 XAF shipping from Douala</p>
										<div className="flex justify-between">
											<p className="text-xs font-thin py-1 ">8 sold</p>
										</div>
										<p className='bg-green-500 p-1 w-fit px-2 rounded-full text-xs font-bold text-white'>{status}</p>
									</div>
									<div className="flex justify-end gap-2">
										<div className="p-2 self-end shadow-md hover:bg-nav bg-gray-100 text-green-800 rounded-full text-center cursor-pointer"><BsChatDots className=""/></div>
										{/* <div className="p-2 self-end text-white rounded-full text-center cursor-pointer"><BsHeart className=""/></div> */}
										<div 
                        					onClick={() => onAddToCart({ id})} 
											className="p-2 self-end shadow-md hover:bg-nav bg-gray-100 text-green-800 rounded-full text-center cursor-pointer">
												<BsCart className=""/>
										</div>
									</div>
								</div>
							</div>
	)
}