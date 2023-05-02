import { configureStore } from '@reduxjs/toolkit';
import userDataLogin from '../features/userStore/userDataLogin';

export const store = configureStore({
    reducer: {
        userStore: userDataLogin,
    }
})