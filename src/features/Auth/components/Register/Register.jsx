import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';
import { showOtpAuthMode } from '~/Layouts/components/Header/modeSlice';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register({ closeDialog }) {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        try {
            const action = register(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            // do something here on register successfully
            // if (closeDialog) {
            //     closeDialog();
            // }
            dispatch(showOtpAuthMode());

            toast.success('Please check your email.');
        } catch (error) {
            console.log('Failed to register: ', error);
            toast.error(error.message);
        }
    };

    return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
