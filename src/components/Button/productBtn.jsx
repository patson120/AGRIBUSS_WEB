
export default function ProductBtn({icon, onClick, name}){
	return(
		<>
			<div onClick={onClick} className="flex flex-row bg-orange-100 group hover:cursor-pointer w-fit h-fit p-2 gap-2 rounded-md">
				<div className="my-1 text-orange-500">{icon}</div>
				<p className="mr-2 text-sm text-orange-500">{name}</p>
			</div>
		</>
	)
}