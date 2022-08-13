import {configureStore} from "@reduxjs/toolkit";
import AuthReducers from "./Auth/AuthReducers.js";
import CartReducer from "./cart/CartReducer.js";

export const store = configureStore({
    reducer: {
        auth: AuthReducers,
        cart: CartReducer
    },
    devTools: true
})