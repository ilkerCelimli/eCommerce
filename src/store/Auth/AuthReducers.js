import {createSlice} from "@reduxjs/toolkit";

const Auth = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: null,
        token: null,

    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('auth', JSON.stringify(state));
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            localStorage.removeItem('auth');
        }
    }
})

export default Auth.reducer
export const {login, logout} = Auth.actions