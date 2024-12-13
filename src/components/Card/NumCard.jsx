

import { Outlet, Link } from "react-router-dom";

export default function NumCard({parent,title, icon, color, sum, link,  icon2, text, view}){
	return(
		<>
			<div className="flex flex-row group shadow hover:cursor-pointer gap-4 w-full bg-white md:w-[19%] h-fit p-4 rounded-md">
				<div className="w-[70%]">
					<p className="font-medium text-lightblack text-xs">{title}</p>
					<p className="font-bold text-xl ">{sum}</p>
					<div className={text >= 0 ? "bg-green-100 rounded-xl flex flex-row w-fit h-fit px-2 gap-2 mt-7" : "bg-red-100 rounded-xl flex flex-row w-fit h-fit px-2 gap-2 mt-7"}>
						<div className={text >= 0 ? "my-1 text-[50%] text-green-400" : "my-1 text-[50%] text-red-400" }>{icon2}</div>
						<p className={text >= 0 ? "text-[60%] text-green-400" : " text-[60%] text-red-400"}>{text}%</p>
					</div>
				</div>
				<div className="self-end w-[25%]">
					<div className={`w-fit  h-fit p-4 rounded-full font-bold text-${color}-500 bg-${color}-100`}>{icon}</div>
					<Link to={`${link}`}> <p className=" mt-5 ml-2 text-xs text-lightblack hover:underline" >{view}</p></Link>
				</div>
			</div>
		</>
	)
}