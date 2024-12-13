import React from 'react'
import {useSelector} from 'react-redux'

export default function Filter(){
	const filter = useSelector(
		(state) => state.productFilter.filter
	);
	return(
		<div style={{background: 'blue'}}>
			<input
				value={filter}
				placeholder="Search product..."
			 />
		</div>
	)
}