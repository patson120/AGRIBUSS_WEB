
 const  ProfileInfo = ({array, title}) => {
	return(
      			<div className="bg-white p-4 rounded-lg shadow">
      				<p className="font-semibold text-lg py-2">{title}</p>
				    <div className="w-full">
					<table className="w-full">
                        <thead className="">
                          <th className="text-gray-600  font-semibold text-left text-xs"></th>
                          <th className="text-gray-600 font-semibold text-right w-1/2 text-xs"></th>
                        </thead>
                        <tbody>
                        	{
                        		array?.map((item, index) => (
		                          <tr key={index.toString()+item.label} className="text-sm">
		                            <td className="flex gap-2 text-gray-500 pt-2">
		                              {item.label}
		                            </td>
		                            <td className="text-right text-black-500 font-semibold pt-2">
		                              {item.value}
		                            </td>
		                          </tr>
                            	))
                        	}
                    	</tbody>
        			</table>
                    </div>
                </div>
	)
}

export default ProfileInfo