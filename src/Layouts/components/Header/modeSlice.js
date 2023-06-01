import { MODE } from '~/constants';

const { createSlice } = require('@reduxjs/toolkit');

const modeSlice = createSlice({
    name: 'mode',
    initialState: { mode: MODE.LOGIN, isShowDialog: false },
    reducers: {
        showLoginMode(state) {
            state.mode = MODE.LOGIN;
        },

        showRegisterMode(state) {
            state.mode = MODE.REGISTER;
        },

        showOtpAuthMode(state) {
            state.mode = MODE.OTP_AUTH;
        },

        showDialogAuth(state) {
            state.isShowDialog = true;
        },

        hideDialogAuth(state) {
            state.isShowDialog = false;
        },
    },
});

const { actions, reducer } = modeSlice;
export const { showLoginMode, showRegisterMode, showOtpAuthMode, showDialogAuth, hideDialogAuth } = actions;
export default reducer;
