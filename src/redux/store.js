import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/counterSlice";
import cartReducer from "./features/Cart/cartSlice"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    }
})