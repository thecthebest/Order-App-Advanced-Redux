import { configureStore } from "@reduxjs/toolkit";


//This code is used when you have slices split in different files

import uiSlice from './ui-slice';


// Multiple slices
const store = configureStore({
    reducer: {
        ui: uiSlice.reducer
    }
});


export default store;