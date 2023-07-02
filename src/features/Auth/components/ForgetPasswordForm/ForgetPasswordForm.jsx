import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Button from '~/components/Button';
import FormAuth from '~/components/FormAuth';
import InputField from '~/components/formControl/InputField';
import { showOtpAuthMode, showRegisterMode } from '~/Layouts/components/Header/modeSlice';
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

    const handleSubmit = async (values) => {
        console.log('🚀 ~ file: ForgetPasswordForm.jsx:43 ~ handleSubmit ~ values:', values);
        console.log('submited');
        const { onSubmit } = props;

        if (onSubmit) {
            await onSubmit(values);
        }
    };

    const { isSubmitting } = form.formState;

    const dispatch = useDispatch();
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
                <InputField type="password" name="password" label="Password" form={form} />
                <InputField type="password" name="retypePassword" label="Retype Password" form={form} />
                <Button disabled={isSubmitting} primary large fullWidth className={cx('button')}>
                    Sent OTP
                </Button>
            </form>
        </FormAuth>
    );
}

export default ForgetPasswordForm;
