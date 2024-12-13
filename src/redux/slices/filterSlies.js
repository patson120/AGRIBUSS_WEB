import {createSlice} from '@reduxjs/toolkit'

const initialState ={
	filter: ""
}

export const filterSlice = createSlice({
	name: 'productFilter',
	initialState,
	reducers: {
		setFilter: (state, action) => {
			state.filter = action.paylaod
		},
		// clearFilter: (state) => {
		// 	state.filter = ''
		// 	setState(state => {...state, filter: ''})
		// }
	}
})

export const {setFilter} = filterSlice._actions
export default filterSlice.reducer