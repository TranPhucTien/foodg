import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login, updateUser } from '../../userSlice';
import LoginForm from '../LoginForm';
import StorageKeys from '~/constants/storage-keys';

Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login({ closeDialog }) {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            // do something here on register successfully
            dispatch(updateUser(JSON.parse(localStorage.getItem(StorageKeys.USER))));

            if (closeDialog) {
                closeDialog();
            }
        } catch (error) {
            console.log('Failed to login: ', error);
            toast.error(error.message);
        }
    };

    return <LoginForm onSubmit={handleSubmit} />;
}

export default Login;
