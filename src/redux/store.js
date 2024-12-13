
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux'; // Import combineReducers
import productSlice from './feature/productSlice'
import userSlice from './feature/userSlice'
import farmerSlice from './feature/farmerSlice'
import cartSlice from './feature/cartSlice'
import categorySlice from './feature/categorySlice'
import orderSlice from './feature/orderSlice'
import notificationSlice from './feature/notificationSlice';

// const persistConfig = {
// 	key: 'root',
// 	storage
// }

// const rootReducer = combineReducers({
// 		product: productSlice,
// 		user: userSlice,
// 		farmer: farmerSlice,
// 		cart: cartSlice,
// 		orders: orderSlice
// })

const store = configureStore({
	reducer: {
		product: productSlice,
		category: categorySlice,
		user: userSlice,
		farmer: farmerSlice,
		cart: cartSlice,
		orders: orderSlice,
		notifications: notificationSlice,
	}
})


// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
// 	reducer: persistedReducer,
// })

// const persistor = persistStore(store)

// export {store, persistor}
export default store