import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register({ closeDialog }) {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        try {
            // auto set username = email
            values.username = values.email;

            const action = register(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            // do something here on register successfully
            if (closeDialog) {
                closeDialog();
            }

            toast.success('Register successfully.');
        } catch (error) {
            console.log('Failed to register: ', error);
            toast.error(error.message);
        }
    };

    return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
