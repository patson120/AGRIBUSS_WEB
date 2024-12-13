
import style from "./style.module.css";
import {BsChevronRight} from 'react-icons/bs'
import {Features} from '../../../constants/objects'


export default function Feature(){
	return(
		<div id="feature" className={`w-full ${style.hero_background} overflow-x-hidden py-20 px-10 md:px-40 h-full`}>
			<p className="justify-center flex gap-4">
				<BsChevronRight size={40} className="font-bold text-white bg-primary rounded-full p-2"/>
				<p className="text-center text-4xl font-bold text-primary"> Features</p>
			</p>
			<div className=" pt-8 flex flex-wrap gap-4 justify-between">
				{
					Features?.map((feature, index) => (
						<div key={index} className=" group w-fit shadow-lg bg-white md:w-1/5 h-2/6 p-6 rounded hover:shadow-lg flex-wrap flex-col justify-between hover:translate ease-in-out hover:scale-105 hover:shadow-black-400">
							<p className="py-4 font-semibold text-black-400 text-xl">{feature.title}</p>
							<p className="">{feature.content}</p>
							<div className="flex text-sm font-light text-createText justify-end mt-8 ">
								<p className="border-1 flex p-2 hover:underline cursor-pointer rounded-lg">Read more 		
								<BsChevronRight size={12} className="m-1 text-center"/></p>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}