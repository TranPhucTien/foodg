import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { otpAuth } from '../../userSlice';
import { showOtpAuthMode } from '~/Layouts/components/Header/modeSlice';
import OtpAuthForm from '../OtpAuthForm/OtpAuthForm';

OtpAuth.propTypes = {
    closeDialog: PropTypes.func,
};

function OtpAuth({ closeDialog }) {
    const dispatch = useDispatch();

    const handleSubmit = async ({ userData, otp }) => {
        const action = otpAuth({ userData, otp });
        const resultAction = await dispatch(action);
        unwrapResult(resultAction);

        // do something here on register successfully
        
        if (resultAction.status === 'OK') {
            toast.success(resultAction.message);
            if (closeDialog) {
                closeDialog();
            }
        } else {
            toast.error(resultAction.message);
        }
    };

    return <OtpAuthForm onSubmit={handleSubmit} />;
}

export default OtpAuth;
