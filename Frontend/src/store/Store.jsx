import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/userSlice";
import productSlice from "./reducer/productSlice";
import cartSlice from "./reducer/cartSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    cart: cartSlice,
  },
});
