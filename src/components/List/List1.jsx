

export default function InvoiceList({image, name, location, date}){
	return(
		<div className="flex flex-row group hover:cursor-pointer hover:bg-lightgrey gap-4 p-3">
			<div><img src={image} className="w-10 h-10 rounded-full my-1" alt="profile"/></div>
			<div className="w-6/12">
				<p className="text-medium">{name}</p>
				<p className="text-regular text-lightblack text-xs">at <span className="text-black font-medium"> {location} </span></p>
			</div>
			<div className="place-self-end  p-1">
				<buttom className="rounded-lg place-self-end bg-primary text-white p-1 px-2 font-medium flex w-fit text-center text-lightblack text-sm hover:scale-105 shadow">Monitor</buttom>
			</div>
		</div>
	)
}