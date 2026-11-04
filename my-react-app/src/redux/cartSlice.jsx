import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addItem: (state, action) => {
            const product = action.payload;

            const existing = state.items.find(
                (item) => item.id === product.id
            );

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({
                    id: product.id,
                    name: product.title,
                    price: product.price,
                    quantity: 1,
                });
            }
        },

        removeItem: (state, action) => {
            const existing = state.items.find(
                (item) => item.id === action.payload
            );

            if (existing.quantity > 1) {
                existing.quantity -= 1;
            } else {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload
                );
            }
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;