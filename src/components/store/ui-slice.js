import { createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";

const initialUIState = {
    cartIsVisible: false
};
// A configuration object
const uiSlice = createSlice({
    //every slice needs a name(identifer for that slice)
    name: 'ui',
    // initlia state
    initialState: initialUIState,
    //Object of all the reducer this slice needs
    reducers: {
        //add methods
        //every methods recevies automatically current state
        //They also recevies action but can be ignored when not used
        // called by redux
        toggle(state) {
            // Redux edits the state automatically and what is not edited
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});
export const uiActions = uiSlice.actions;
export default uiSlice;