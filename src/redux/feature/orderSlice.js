import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: [],
};

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setOrders(state, action) {
            state.orders = action.payload;
        },
        clearOrders(state) {
            state.orders = []; // Optional: Clear orders if needed
        },
        deleteOrders(state, action) {
            state.orders = state.orders.filter(order => !action.payload.includes(order.id));
        },
        createOrder(state, action) {
            console.log(action)
            state.orders.push(action.payload);
        },
    },
});

export const { setOrders, deleteOrders, createOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;