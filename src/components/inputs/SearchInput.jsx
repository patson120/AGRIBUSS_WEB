

export default function Search({placeholder}){
	return(
		<>
			<div className="flex flex-row my-2 bg-lightgrey rounded-lg p-1 pl-5 ">
				<input
					type="text"
					placeholder={placeholder}
					className="text-lightblack text-xs bg-transparent outline-none w-full p-1 rounded-md"
				/>
			</div>
		</>
	)
}