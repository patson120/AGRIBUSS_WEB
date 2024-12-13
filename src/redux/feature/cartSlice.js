import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addCartApi, decrementCartApi, getCart, incrementCartApi, removeCartApi, updateCartApi } from '../../Utils/api/cartApi';

const initialState = {
    items: {},
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};


// Async thunk to add an item to the cart and update the database
export const addCart = createAsyncThunk('cart/addCart', async (data) => {
    const response = await addCartApi(data);
    return response; // Ensure response is the added item object
});

// Async thunk to update an item in the cart
export const updateCart = createAsyncThunk('cart/updateCart', async ({ id, data }) => {
    const response = await updateCartApi(id, data);
    return response; // Ensure response is the updated item object
});

// Async thunk to remove an item from the cart
export const removeCart = createAsyncThunk('cart/removeCart', async (id) => {
    await removeCartApi(id); // Call API to remove item from database
    return id; // Return the id to remove it from Redux state
});

// Async thunk to fetch cart items
export const fetchCart = createAsyncThunk('cart/getCart', async () => {
    const data = await getCart();
    return data; // Ensure data is the array of cart items
});

// // Increment quantity
// export const incrementQuantity = createAsyncThunk('cart/incrementCartItem', async (id) => {
//     const data = await incrementCartApi(id);
//     return data; // Ensure data is the array of cart items
// });

// // Decrement quantity
// export const decrementQuantity = createAsyncThunk('cart/incrementCartItem', async (id) => {
//     const data = await decrementCartApi(id);
//     return data; // Ensure data is the array of cart items
// });

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
        },
        incrementQuantity(state, action) {
            const item = state.items.products.find(item => item.productId._id === action.payload.id);
            
            console.log('Action Payload:', action.payload);
            console.log('Current Items:', JSON.stringify(state.items.products, null, 2)); // Log current items
            
            if (item) {
                item.quantity += 1; // Increase the quantity by 1
                console.log('Updated Item:', item); // Log the updated item
            } else {
                console.warn('Item not found:', action.payload.id); // Warning if item is not found
            }
        },
        decrementQuantity(state, action) {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item && item.quantity > 1) item.quantity -= 1;
        },
        clearCart(state) {
            state.items = []; // Clears all items from the cart
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(addCart.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addCart.fulfilled, (state, action) => {
                console.log("Current products:", state.items); // Log current products
                state.status = 'succeeded';
                // Assuming action.payload is the created product
                if (Array.isArray(state.items)) { // Check if it's an array
                    state.items.push(action.payload);
                } else {
                    console.error("state.cart is not an array:", state.products);
                }
            })
            .addCase(addCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = { ...state.items[index], ...action.payload };
                }
            })
            .addCase(removeCart.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload); // Remove item from Redux state
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.items = action.payload; // Set cart items from API
            })
            // .addCase(incrementQuantity.fulfilled, (state, action) => {
            //     const itemIndex = state.items.findIndex(item => item._id === action.payload._id);
            //     if (itemIndex !== -1) {
            //         state.items[itemIndex] = action.payload; // Update the item with the new quantity
            //     }
            // })
    },
});

// Exporting the action to add to the cart
export const { clearCart, addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

// Thunk to handle adding an item to the cart, including database update
export const handleAddToCart = (item) => async (dispatch) => {
    await dispatch(addCart(item)); // Call the addCart thunk
    dispatch(addToCart(item)); // Update the local Redux state
};

// Thunk to initialize the cart by fetching items from the database
export const initializeCart = () => async (dispatch) => {
    await dispatch(fetchCart()); // Fetch cart items from the database
};

// Selector to access products
export const allCart = (state) => state.cart.items;

export default cartSlice.reducer;