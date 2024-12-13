

import {BsChevronCompactRight, BsMoon, BsList, BsBell, BsBucket,BsBag, BsChevronCompactLeft, BsCart4, BsStarFill} from 'react-icons/bs'
import ProdState from './ProdState'
export default function ProdCard({image, state, desc, price, unit, rate, locate}){
	return(
		<>	

			<div className="bg-white w-full h-80 group cursor-pointer hover:shadow-lg rounded-md">
				<div  className="bg-cover bg-center rounded-t-md w-full h-44" style={{backgroundImage: `url(${image})`}}>
					<ProdState
						state={state}
					/>
					
				</div>
				<div className="px-4 py-1 flex flex-col">
					<p className=" text-md text-createText">{desc}</p>
					<p className="text-lg py-2 text-red-400">{price}<span className="text-createText">  {unit}</span></p>
					<div className="flex flex-row gap-2">
						<div className="text-yellow-300"><BsStarFill size={12}/></div>
						<div className="text-yellow-300"><BsStarFill size={12}/></div>
						<div className="text-yellow-300"><BsStarFill size={12}/></div>
						<div className="text-yellow-300"><BsStarFill size={12}/></div>
						<div className="text-yellow-300"><BsStarFill size={12}/></div>
						<p className="text-createText -mt-[3%]">{rate} sold</p>
					</div>
					<p className="text-createText ">{locate}</p>
				</div>
			</div>

		</>
	)
}