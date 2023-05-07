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
        // isLogin: (state, actions) => {
        //     state.dataUser = actions.payload
        //     // console.log(actions.payload);
        //     // console.log(state.value)
        // },
        isSafe: (state, actions) => {
            state.dataUserSafe = actions.payload
            state.value = actions.payload.name
            // console.log(actions.payload);
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