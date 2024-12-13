import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFarmer, createFarmer } from "../../Utils/api/farmerApi.js";

const initialState = {
	farmer: [],
    farmerInfo:{},
    userInfo: {},
    status: 'idle',
    error: null  
}

export const getAllFarmers = createAsyncThunk('user/farmer', async () => {
	const data = await getFarmer();
	console.log(data)
	return data
})

export const addFarmer = createAsyncThunk('user/farmer', async (data) => {
    console.log(data);
    const response = await createFarmer(data);
    return response;
})

export const farmerSlice = createSlice({
	name: "farmer",
	initialState,
	reducers: {},
	extraReducers(builder){
		builder
            .addCase(getAllFarmers.fulfilled, (state, action) => {
            	// console.log("action" + action)
				state.farmer = action.payload
				console.log(state.farmer)
            })
	}
})

export const allFarmers = state => state.farmer.farmer
// export const farmerErrorSelector = state => state.farmer.error
// export const userStatusSelector = state => state.farmer.status
// export const currentUser = state => state.farmer.userInfo

export default farmerSlice.reducer;