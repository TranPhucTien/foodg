import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Button from '~/components/Button';
import FormAuth from '~/components/FormAuth';
import InputField from '~/components/formControl/InputField';
import {
    showOtpAuthMode,
    showRegisterMode,
} from '~/Layouts/components/Header/modeSlice';
import styles from '../LoginForm/LoginForm.module.scss';

const cx = classNames.bind(styles);

ForgetPasswordForm.propTypes = {};

function ForgetPasswordForm(props) {
    const schema = yup
        .object({
            email: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
            password: yup.string().required('Please enter your password.'),
            retypePassword: yup
                .string()
                .required('Please retype your password.')
                .oneOf([yup.ref('password')], 'Password does not match'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        dispatch(showOtpAuthMode());

        if (onSubmit) {
            await onSubmit(values);
        }
    };

    const { isSubmitting } = form.formState;

    const changeMode = () => {
        dispatch(showRegisterMode());
    };

    return (
        <FormAuth
            title="Change password"
            name="Email"
            footerTitle="Don’t have an account?"
            footerSubTitle="Sign up"
            isSubmitting={isSubmitting}
            changeMode={changeMode}
        >
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="email" label="Email" form={form} />
                <InputField type="password" name="password" label="New password" form={form} />
                <InputField type="password" name="password-retype" label="Retype password" form={form} />
                <Button disabled={isSubmitting} primary large fullWidth className={cx('button')}>
                    Send OTP
                </Button>
            </form>
        </FormAuth>
    );
}

export default ForgetPasswordForm;
