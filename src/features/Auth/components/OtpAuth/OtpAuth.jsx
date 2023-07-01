import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { otpAuth } from '../../userSlice';
import { showLoginMode, showOtpAuthMode } from '~/Layouts/components/Header/modeSlice';
import OtpAuthForm from '../OtpAuthForm/OtpAuthForm';
import axiosClient from '~/api/axiosClient';
import StorageKeys from '~/constants/storage-keys';

OtpAuth.propTypes = {
    closeDialog: PropTypes.func,
};

function OtpAuth({ closeDialog }) {
    const dispatch = useDispatch();
    const handleSubmit = async ({ userData, otp }) => {
        const action = otpAuth({ userData, otp });
        const { payload } = await dispatch(action);
        console.log('🚀 ~ file: OtpAuth.jsx:20 ~ handleSubmit ~ payload:', payload);
        const data = payload.data;

        if (data.status === 'OK') {
            toast.success(data.message);
            localStorage.setItem(StorageKeys.USER, JSON.stringify(data.data));
            dispatch(showLoginMode());
        } else {
            toast.error(data.message);
        }
    };

    return <OtpAuthForm onSubmit={handleSubmit} />;
}

export default OtpAuth;
