import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Button from '~/components/Button';
import FormAuth from '~/components/FormAuth';
import InputField from '~/components/formControl/InputField';
import { showRegisterMode } from '~/Layouts/components/Header/modeSlice';
import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

LoginForm.propTypes = {};

function LoginForm(props) {
    const schema = yup
        .object({
            identifier: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
            password: yup.string().required('Please enter your password.'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            identifier: '',
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

    return (
        <FormAuth
            title="Login"
            name="Email"
            subName="Login with google"
            footerTitle="Don’t have an account?"
            footerSubTitle="Sign up"
            isSubmitting={isSubmitting}
            changeMode={changeMode}
        >
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form} />
                <InputField type="password" name="password" label="Password" form={form} />
                <Button disabled={isSubmitting} primary large fullWidth className={cx('button')}>
                    Log in
                </Button>
            </form>
        </FormAuth>
    );
}

export default LoginForm;
