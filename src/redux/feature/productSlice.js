import { getProd, createProd, updateProd, getProdByFarmer, deleteProd } from '../../Utils/api/productApi.js';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

// Async thunk to create a new product
export const createProduct = createAsyncThunk('product/createProduct', async (data) => {
    const response = await createProd(data);
    return response; // Ensure response is the product object
});

// Async thunk to create a new product
export const updateProduct = createAsyncThunk('product/updateProduct', async (id, data) => {
    const response = await updateProd(id, data);
    return response; // Ensure response is the product object
});


// Async thunk to fetch products
export const getProductByFarmer = createAsyncThunk('product/getProduct', async () => {
    const data = await getProdByFarmer();
    return data; // Ensure data is the array of products
});

// Async thunk to fetch products
export const getProduct = createAsyncThunk('product/getProduct', async () => {
    const data = await getProd();
    return data; // Ensure data is the array of products
});

// Async thunk to fetch products
export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id) => {
    const data = await deleteProd(id);
    return data; // Ensure data is the array of products
});


// Slice for product state
export const productSlice = createSlice({
    name: 'products',
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Assuming action.payload is an array of products
                state.products = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                console.log("Current products:", state.products); // Log current products
                state.status = 'succeeded';
                // Assuming action.payload is the created product
                if (Array.isArray(state.products)) { // Check if it's an array
                    state.products.push(action.payload);
                } else {
                    console.error("state.products is not an array:", state.products);
                }
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                console.log("Current products:", state.products); // Log current products
                state.status = 'succeeded';
            })
    },
});

// Selector to access products
export const allProducts = (state) => state.product.products;

// Export the reducer
export default productSlice.reducer;
