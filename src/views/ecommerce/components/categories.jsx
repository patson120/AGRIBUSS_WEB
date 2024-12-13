
import {categoryImages} from '../../../constants/objects'

export default function Categories(){
	return(
		<div className="w-full p-5 md:p-20 pt-8 md:pt-2 ">
			<div className="flex py-2 justify-between">
				<p className="text-2xl pb-2 font-bold">Categories</p>
				<p className="text-sm text-createText px-2 hover:underline cursor-pointer">Show all</p>
			</div>
			<div className=" flex flex-wrap align-center shadow gap-4 justify-center">
				{
					categoryImages?.map((item, index) => (
						<div className="w-64 group rounded-xl cursor-pointer h-40">
							<img src={item.image} className="group-hover:scale-[0.9] duration-500 w-full rounded-xl max-h-full"/>
							<div className="absolute text-white text-center bg-gradient-to-b from-gray-900 mt-[-40%] md:mt-[-11%] w-64 rounded-xl h-40">
								<p className="text-lg font-semibold py-16">{item.title}</p> 
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}