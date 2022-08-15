import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Button from '~/components/Button';
import InputField from '~/components/formControl/InputField';
import StorageKeys from '~/constants/storage-keys';
import FormSelect from '../FormSelect';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);

Form.propTypes = {};

function Form(props) {
    const navigate = useNavigate();
    const schema = yup
        .object({
            fullName: yup
                .string()
                .required('Please enter your full name.')
                .test(
                    'should has at least two words',
                    'Please enter at least two words.',
                    (value) => value.split(' ').length >= 2,
                ),
            address: yup.string().required('Please enter your address.'),
            phone: yup
                .string()
                .required('Please enter your phone number.')
                .min(10, 'Phone number is not valid.')
                .max(10, 'Phone number is not valid.')
                .test('must phone number', 'Phone number is not valid.', (value) => value[0] === '0'),
            country: yup.object().required('Please enter your phone number.').nullable(),
        })
        .required();

    const info = localStorage.getItem(StorageKeys.USER_INFO)
        ? JSON.parse(localStorage.getItem(StorageKeys.USER_INFO))
        : {};

    const nameValue = info.fullName ? info.fullName : '';
    const addressValue = info.address ? info.address : '';
    const phoneValue = info.phone ? info.phone : '';
    const countryValue = info.country ? info.country : '';

    const form = useForm({
        defaultValues: {
            fullName: nameValue,
            address: addressValue,
            phone: phoneValue,
            country: countryValue,
        },
        resolver: yupResolver(schema),
    });

    const { control } = form;

    const { isSubmitting, errors } = form.formState;
    const products = useSelector((state) => state.cart.cartItems);

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        const result = { ...values, products };
        console.log('form submit: ', result);
        localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(values));
        navigate({ pathname: 'successful' });
        localStorage.removeItem(StorageKeys.CART_ITEMS);
        window.location.reload(true)

        if (onSubmit) {
            await onSubmit(values);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Shipping address</h3>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField className={cx('input')} name="fullName" label="Full Name" form={form} capitalize />
                <InputField className={cx('input')} name="address" label="Address" form={form} />
                <div className={cx('row')}>
                    <div className={cx('col l-6')}>
                        <InputField className={cx('input')} name="phone" label="Phone" form={form} />
                    </div>
                    <div className={cx('col l-6')}>
                        <Controller
                            name="country"
                            control={control}
                            render={({ field, fieldState: { invalid, error } }) => (
                                <FormSelect
                                    error={invalid}
                                    helperText={error?.message}
                                    field={field}
                                    defaulValue={countryValue}
                                />
                            )}
                        />
                    </div>
                </div>
                <Button
                    disabled={isSubmitting || Object.keys(errors).length !== 0}
                    primary
                    fullWidth
                    className={cx('submit')}
                >
                    Check out
                </Button>
            </form>
        </div>
    );
}

export default Form;
