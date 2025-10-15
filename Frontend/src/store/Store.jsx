import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducres/userSlice';
import productSlice from './reducres/productSlice';
import cartSlice from './reducres/cartSlice';


export const store = configureStore({
    reducer: {
        userReducre: userSlice,
        productReducre: productSlice,
        cartreducre: cartSlice
    }
});