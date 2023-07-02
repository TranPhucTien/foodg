import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Button from '~/components/Button';
import FormAuth from '~/components/FormAuth';
import styles from './OtpAuthForm.module.scss';
import { useState } from 'react';
import OTPInput from 'react-otp-input';
import StorageKeys from '~/constants/storage-keys';
import { forgetPass, otpAuth, register } from '../../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

OtpAuthForm.propTypes = {};

function OtpAuthForm(props) {
    const [otp, setOtp] = useState('');
    const userData = JSON.parse(localStorage.getItem(StorageKeys.USER)) || {};
    const numInputs = 6;

    const schema = yup
        .object({
            otp: yup.string().required('Please enter your password'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            otp: '',
        },
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();

    const resendOtp = async () => {
        try {
            const action = register(userData);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            toast.success('Please check your email.');
        } catch (error) {
            console.log('Failed to send email: ', error);
            // toast.error(error.message);
        }
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { onSubmit } = props;
        
        if (onSubmit) {
            await onSubmit({userData, otp});
        }
    };

    const { isSubmitting } = form.formState;

    return (
        <FormAuth
            title="OTP Authentication"
            name={`The OTP has been sent to the email ${userData.email}. The OTP will expire after 5 minutes.`}
            footerTitle="Have you not received the OTP?"
            footerSubTitle="Resend it"
            isSubmitting={isSubmitting}
            changeMode={resendOtp}
        >
            <form onSubmit={handleSubmit}>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={numInputs}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} className={cx('otp-input')} form={form} />}
                />
                <Button disabled={isSubmitting || otp.length < numInputs} primary large fullWidth className={cx('button')}>
                    Register
                </Button>
            </form>
        </FormAuth>
    );
}

export default OtpAuthForm;
