import {configureStore} from "@reduxjs/toolkit";


export const stotre = configureStore({
    reducer:{
        userReducrs:'',
        productReducrs:'',
        cartReducrs:''
    }
});