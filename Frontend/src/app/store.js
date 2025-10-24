import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice';
import productSlice from './reducers/productSlice';
import cartSlice from './reducers/cartSlice';

const store = configureStore({
  reducer: {
    useReducer: userSlice,
    productReducer: productSlice,
    cartReducer: cartSlice
  },
});


export default store