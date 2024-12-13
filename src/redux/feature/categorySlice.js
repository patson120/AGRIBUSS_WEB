import { getCat, createCat } from '../../Utils/api/categoryApi.js';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

// Async thunk to create a new product
export const createCategory = createAsyncThunk('product/createCat', async (data) => {
    const response = await createCat(data);
    return response; // Ensure response is the product object
});

// Async thunk to fetch products
export const getCategory = createAsyncThunk('product/getCat', async () => {
    const data = await getCat();
    return data; // Ensure data is the array of products
});

// Slice for product state
export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Assuming action.payload is an array of products
                state.products = action.payload;
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Assuming action.payload is the created product
                state.products.push(action.payload.data);
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Selector to access products
export const allCategories = (state) => state.category.categories;

// Export the reducer
export default categorySlice.reducer;