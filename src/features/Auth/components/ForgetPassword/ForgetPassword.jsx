import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { forgetPass, login } from '../../userSlice';
import ForgetPasswordForm from '../ForgetPasswordForm/ForgetPasswordForm';
import { showOtpAuthMode } from '~/Layouts/components/Header/modeSlice';

ForgetPassword.propTypes = {
    closeDialog: PropTypes.func,
};

function ForgetPassword({ closeDialog }) {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        console.log('🚀 ~ file: ForgetPassword.jsx:16 ~ handleSubmit ~ values:', values);
        try {
            const action = forgetPass(JSON.stringify({ email: values.email, password: values.password }));
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            // do something here on register successfully
            dispatch(showOtpAuthMode());

            toast.success('Please check your email.');
        } catch (error) {
            console.log('Failed to send otp: ', error);
            toast.error(error.message);
        }
    };

    return <ForgetPasswordForm onSubmit={handleSubmit} />;
}

export default ForgetPassword;
