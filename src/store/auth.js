import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        setToken(state){
            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');
            if (accessToken && refreshToken) {
                state.isAuthenticated = true;
                state.accessToken = accessToken;
                state.refreshToken = refreshToken;
            }
        },
        login(state, action) {
            console.log('wire up login');
            state.isAuthenticated = true;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('refreshToken', action.payload.refreshToken);
        },
        logout(state, action) {
            state.isAuthenticated = false;
            state.accessToken = null;
            state.refreshToken = null;
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        }
    }
});
export default authSlice;