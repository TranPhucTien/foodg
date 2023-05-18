import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import qs from 'query-string'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Button from '~/components/Button';
import InputField from '~/components/formControl/InputField';
import StorageKeys from '~/constants/storage-keys';
import FormSelect from '../FormSelect';
import styles from './Form.module.scss';
import { cartTotalSelector } from '~/components/Cart/selectors';
import axios from 'axios';

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
    const total = Math.round(useSelector(cartTotalSelector) * 23000);

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        // const result = { ...values, products, vnp_Amount: total };
        const bank = {
            vnp_OrderInfo: `Nap tien cho thue bao 0123456789. So tien ${total} VND`,
            vnp_Amount: `${total}`,
            vnp_OrderType: 'food',
            vnp_Locale: 'vn',
        };
        console.log('form submit: ', qs.stringify(bank));
        localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(values));
        // navigate({ pathname: 'successful' });
        // localStorage.removeItem(StorageKeys.CART_ITEMS);
        // window.location.reload(true);
        axios
            .post('http://localhost:8080/api/vnpay/make', qs.stringify(bank), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            .then((response) => {
                let { data } = response.data;
                window.location.href = data['redirect_url'];
            })
            .catch((error) => {
                console.error(error);
            });
        if (onSubmit) {
            await onSubmit(bank);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Shipping address</h3>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                {/* <InputField className={cx('input')} name="fullName" label="Full Name" form={form} capitalize />
                <InputField className={cx('input')} name="address" label="Address" form={form} /> */}
                <input type="hidden" name="vnp_OrderType" value="food" />
                <input type="hidden" name="vnp_Locale" value="vn" />
                <input
                    type="hidden"
                    name="vnp_OrderInfo"
                    placeholder="vnp_OrderInfo"
                    value={`Thanh toan hoa don demo-123123. So tien ${total} VND`}
                />
                <div className={cx('row')}>
                    <div className={cx('col l-6')}>
                        {/* <InputField className={cx('input')} name="phone" label="Phone" form={form} /> */}
                    </div>
                    <div className={cx('col l-6')}>
                        {/* <Controller
                            name="country"
                            control={control}
                            render={({ field, fieldState: { invalid, error } }) => (
                                <FormSelect
                                    error={invalid}
                                    helperText={error?.message}
                                    field={field}
                                    defaultValue={countryValue}
                                />
                            )}
                        /> */}
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
