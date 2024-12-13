
export default function AppointList({icon, category, name, color, date}){
	return(
		<div className={`flex flex-row group hover:cursor-pointer hover:bg-lightgrey gap-4 p-3`}>
			<div className={`w-10 h-10 rounded-full text-center p-3 my-1 bg-${color}-100 text-${color}-500`}>{icon}</div>
			<div className="w-6/12">
				<p className="text-medium">{name}</p>
				<p className="text-regular text-lightblack text-sm">{category}</p>
			</div>
			<div className="place-self-end p-1">
				<p className="rounded-xl mt-4 flex w-fit text-center text-lightblack text-xs">{date}</p>
			</div>
		</div>
	)	
}

