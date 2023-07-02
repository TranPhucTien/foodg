import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Button from '~/components/Button';
import FormAuth from '~/components/FormAuth';
import InputField from '~/components/formControl/InputField';
import { showForgetPasswordMode, showOtpAuthMode, showRegisterMode } from '~/Layouts/components/Header/modeSlice';
import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

LoginForm.propTypes = {};

function LoginForm(props) {
    const schema = yup
        .object({
            email: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
            password: yup.string().required('Please enter your password.'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
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

    const showOtp = () => {
        dispatch(showForgetPasswordMode());
    };

    return (
        <FormAuth
            title="Login"
            name="Email"
            subName="Login with google"
            subNameLink="http://localhost:8080/oauth2/authorization/google"
            footerTitle="Don’t have an account?"
            footerSubTitle="Sign up"
            isSubmitting={isSubmitting}
            changeMode={changeMode}
            showOtp={showOtp}
        >
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="email" label="Email" form={form} />
                <InputField type="password" name="password" label="Password" form={form} />
                <Button disabled={isSubmitting} primary large fullWidth className={cx('button')}>
                    Log in
                </Button>
            </form>
        </FormAuth>
    );
}

export default LoginForm;
