import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { customerApi } from '~/api/userApi';
import StorageKeys from '~/constants/storage-keys';
// import StorageKeys from '~/constants/storage-keys';

export const register = createAsyncThunk('user/register', async (payload) => {
    // Call API to register
    const data = await customerApi.register(payload);
    const userData = data.data.data;
    console.log("🚀 ~ file: userSlice.js:11 ~ register ~ userData:", userData)

    // Save data to local storage
    // localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(userData));

    // return user data
    return userData;
});

export const otpAuth = createAsyncThunk('user/otp', async ({ userData, otp }) => {
    const data = await customerApi.otpAuth(userData, otp);
    const user = data.data.data;
    console.log("🚀 ~ file: userSlice.js:24 ~ otpAuth ~ user:", user)
    // localStorage.setItem(StorageKeys.USER, JSON.stringify(user));

    return user;
});

export const forgetPass = createAsyncThunk('user/forgetPass', async (userData) => {
    const data = await customerApi.forgetPass(userData);
    const user = data.data.data;
    console.log("🚀 ~ file: userSlice.js:24 ~ otpAuth ~ user:", user)
    

    return user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
    // Call API to register
    const data = await customerApi.login(payload);

    // Save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    // return user data
    return data.user;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {
        logout(state) {
            // Clear local storage
            localStorage.removeItem(StorageKeys.USER);
            localStorage.removeItem(StorageKeys.TOKEN);
            localStorage.removeItem(StorageKeys.USER_INFO);

            state.current = {}; // update state
        },
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },

        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
    },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
