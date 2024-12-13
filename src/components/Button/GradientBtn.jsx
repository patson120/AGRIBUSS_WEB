import {BsCalendar4Week} from 'react-icons/bs'

export default function GradientBtn({icon, text, icon2}){
	return(
		<>
			<div className=" flex flex-row bg-gradient-to-b from-grade to-primary w-fit p-2 rounded-md ">
				<div className=" my-1 text-[80%] text-white ">{icon}</div>
				<p className=" text-white text-sm px-2">{text}</p>
				<div className="my-1 text-[80%] text-white">{icon2}</div>
			</div>
		</>
	)
}