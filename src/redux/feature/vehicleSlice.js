// import { getCat, createCat } from '../../Utils/api/categoryApi.js';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createVehicle, getVehicle } from '../../Utils/api/vehicleApi';

const initialState = {
    vehicles: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

// Async thunk to create a new product
export const createVehicles = createAsyncThunk('vehicle/createVehicle', async (data) => {
    const response = await createVehicle(data);
    return response; // Ensure response is the product object
});

// Async thunk to fetch products
export const getVehicles = createAsyncThunk('vehicle/getVehicle', async () => {
    const data = await getVehicle();
    return data; // Ensure data is the array of products
});

// Slice for product state
export const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getVehicles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getVehicles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Assuming action.payload is an array of products
                state.products = action.payload;
            })
            .addCase(getVehicles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createVehicles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createVehicles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Assuming action.payload is the created product
                state.products.push(action.payload.data);
            })
            .addCase(createVehicles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Selector to access products
export const allVehicles = (state) => state.vehicle.vehicles;

// Export the reducer
export default vehicleSlice.reducer;