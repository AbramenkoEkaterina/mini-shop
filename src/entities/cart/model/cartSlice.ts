import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartState } from "./cart.types";

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //добавление товара в корзину
        addToCart(state, action: PayloadAction<number>) {
            const productId = action.payload;
            //есть ли уже товар в корзине?
            const existing = state.items.find(
                item => item.productId === productId
            )

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({
                    productId,
                    quantity: 1,
                    selected: true
                })
            }
        },

        //удаление товара
        removeFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(
                item => item.productId !== action.payload
            )
        },

        incremente(state, action: PayloadAction<number>) {
            const item = state.items.find(
                i => i.productId === action.payload
            )
            if (item) {
                item.quantity += 1;
            }
        },

        decremente(state, action: PayloadAction<number>) {
            const productId = action.payload;

            const item = state.items.find(
                i => i.productId === action.payload
            )
            if (!item) return

            if (item.quantity > 1 ) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter(
                    i => i.productId !== productId
                )
            }
        },

        //переключаем флаг на выбор товара
        toggleSelect(state, action: PayloadAction<number>) {
            const item = state.items.find(
                i => i.productId === action.payload
            )
            if (item) {
                item.selected = !item.selected
            }
        },

        clearCart(state) {
            state.items = []
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    incremente,
    decremente,
    toggleSelect,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer