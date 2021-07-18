import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    totalQuantity: 0,
};

// A configuration object
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => {
                return item.id === newItem.id
            });
            state.totalQuantity = state.totalQuantity + 1;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }
            else {
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            state.totalQuantity = state.totalQuantity - 1;
            const existingItem = state.items.find((item) => {
                return item.id === id;
            });
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => {
                    return item.id !== id;
                });
            }
            else {
                existingItem.quantity = existingItem.quantity - 1;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

        }
    }
});


export const cartActions = cartSlice.actions;
export default cartSlice;