import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";


//This code is used when you have slices split in different files

import uiSlice from './ui-slice';


// Multiple slices
const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
});


export default store;