

export default function FormInput({type, label, placeholder, name, value, onChange, onBlur}){
	return(
		<>
			<div className="flex flex-col w-full"> 
				<label className="text-black font-normal"> {label} </label>
				<input
					type={type}
					name={name}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
					placeholder={placeholder}
					className="mt-1 border pb-5 text-grey w-full text-md hover:shadow-md focus:shadow-md border-inputB rounded-md outline-none w-full h-10 p-4"						
				/>

			</div>
			
		</>
	)
}