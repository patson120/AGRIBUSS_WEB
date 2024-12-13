export default function Input({ value, loading = false, onSubmit }) {
	return (
		<>
			<div className="mt-3">
				{ !loading ?
					<button type="submit" className="bg-black shadow-md hover:shadow-black text-white rounded-md p-2 w-full  text-1xl font-bold">
						{value}
					</button>
					:
					<button type="submit" className="bg-black shadow-md hover:shadow-black text-white rounded-md p-2 w-full  text-1xl font-bold">
						<div className="inline-block mr-2 h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
							role="status">
						</div>
						{value}
					</button>
				}
			</div>

		</>
	)
}

