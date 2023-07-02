import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { customerApi } from '~/api/userApi';
import StorageKeys from '~/constants/storage-keys';
// import StorageKeys from '~/constants/storage-keys';

const SLUG = 'customers';

export const register = createAsyncThunk(SLUG + '/register', async (payload) => {
    // Call API to register
    const data = await customerApi.register(payload);
    console.log('🚀 ~ file: userSlice.js:13 ~ register ~ data:', data);
    const userData = data.data.data;
    console.log(userData);

    // Save data to local storage
    // localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    if (userData) {
        localStorage.setItem(StorageKeys.USER, JSON.stringify(userData));
        return { id: userData.id, username: userData.username, email: userData.email };
    }

    return {};
});

export const otpAuth = createAsyncThunk(SLUG + '/otp', async ({ userData, otp }) => {
    const data = await customerApi.otpAuth(userData, otp);
    const user = data.data.data;
    localStorage.setItem(StorageKeys.USER, JSON.stringify(user));

    return data;
});

export const forgetPass = createAsyncThunk(SLUG + '/forgetPassword', async (userData) => {
    const data = await customerApi.forgetPass(userData);
    const user = data.data.data;
    const current = JSON.parse(localStorage.getItem(StorageKeys.USER));
    localStorage.setItem(StorageKeys.USER, JSON.stringify({ ...current, ...user }));

    return user;
});

export const login = createAsyncThunk(SLUG + '/loginCustomer', async (payload) => {
    // Call API to register
    const data = await customerApi.login(payload);
    const saveSession = await customerApi.saveSession(payload);
    console.log('🚀 ~ file: userSlice.js:44 ~ login ~ saveSession:', saveSession);

    if (data.data.data == null) {
        toast.error(data.data.message);
        return null;
    } else {
        toast.success(data.data.message);
    }

    // Save data to local storage
    // localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.data.data));

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
            localStorage.removeItem(StorageKeys.CART_ITEMS);

            state.current = {}; // update state
        },
        updateUser: (state, action) => {
            state.current = action.payload;
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
export const { logout, updateUser } = actions;
export default reducer;
