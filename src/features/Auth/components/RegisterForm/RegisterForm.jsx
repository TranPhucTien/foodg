import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Button from '~/components/Button';
import FormAuth from '~/components/FormAuth';
import InputField from '~/components/formControl/InputField';
import { showLoginMode, showOtpAuthMode } from '~/Layouts/components/Header/modeSlice';
import styles from './RegisterForm.module.scss';

const cx = classNames.bind(styles);

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const schema = yup
        .object({
            username: yup
            .string()
            .required('Please enter your username.'),
            fullName: yup
                .string()
                .required('Please enter your full name.')
                .test(
                    'should has at least two words',
                    'Please enter at least two words.',
                    (value) => value.split(' ').length >= 2,
                ),
            email: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
            password: yup
                .string()
                .required('Please enter your password.')
                .min(6, 'Please enter at least 6 characters.'),
            retypePassword: yup
                .string()
                .required('Please retype your password.')
                .oneOf([yup.ref('password')], 'Password does not match'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            username: '',
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
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
        dispatch(showLoginMode());
    };

    return (
        <FormAuth
            title="Sign up"
            name="Email"
            subName="Sign up with google"
            footerTitle="Already have an account?"
            footerSubTitle="Log in"
            isSubmitting={isSubmitting}
            changeMode={changeMode}
        >
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="username" label="Username" form={form} />
                <InputField name="fullName" label="Full Name" form={form} capitalize />
                <InputField name="email" label="Email" form={form} />
                <InputField type="password" name="password" label="Password" form={form} />
                <InputField type="password" name="retypePassword" label="Retype Password" form={form} />
                <Button disabled={isSubmitting} primary large fullWidth className={cx('button')} >
                    Sign up
                </Button>
            </form>
        </FormAuth>
    );
}

export default RegisterForm;
