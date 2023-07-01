import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { forgetPass, login } from '../../userSlice';
import ForgetPasswordForm from '../ForgetPasswordForm/ForgetPasswordForm';

ForgetPassword.propTypes = {
    closeDialog: PropTypes.func,
};

function ForgetPassword({ closeDialog }) {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        console.log("🚀 ~ file: ForgetPassword.jsx:16 ~ handleSubmit ~ values:", values)
        try {
            const action = forgetPass(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            // do something here on register successfully
            if (closeDialog) {
                closeDialog();
            }
        } catch (error) {
            console.log('Failed to send otp: ', error);
            toast.error(error.message);
        }
    };

    return <ForgetPasswordForm onSubmit={handleSubmit} />;
}

export default ForgetPassword;
