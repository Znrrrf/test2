import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 'Log in',
    dataUser: null,
    dataUserSafe: null,
}

export const userDataLogin = createSlice({
    name: "userStore",
    initialState,
    reducers: {
        isLogin: (state, actions) => {
            state.value = actions.payload.name
            state.dataUser = actions.payload
            // console.log(state.dataUser);
            // console.log(state.value)
        },
        isSafe: (state, actions) => {
            state.dataUserSafe = actions.payload
        },
        isLogout: (state) => {
            state.value = "log in"
            state.dataUser = null
            state.dataUserSafe = null
        }
    }
})


export const { isLogin, isLogout, isSafe } = userDataLogin.actions

export default userDataLogin.reducer