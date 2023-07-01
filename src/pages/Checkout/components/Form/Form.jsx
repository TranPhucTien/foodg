import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import qs from 'query-string';
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
import { useRef } from 'react';
import { useDebounce } from '~/hooks';
import { useState } from 'react';
import { useEffect } from 'react';
import mapApi from '~/api/mapApi';

const cx = classNames.bind(styles);

Form.propTypes = {};

function Form(props) {
    const mapRef = useRef();
    const { onDataChanged } = props;

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
            voucher: yup.object().nullable(),
            distance: yup.string().test('is-longer-than-10km', 'Distance must be less than 10km', (value) => {
                const distance = value.split(' ');
                const distanceNum = parseFloat(distance[0]);
                const distanceCode = distance[1];

                if (distanceCode === 'km') {
                    if (!isNaN(distanceNum) && distanceNum < 10) {
                        return true;
                    }
                }
                return false;
            }),
        })
        .required();

    const info = localStorage.getItem(StorageKeys.USER) ? JSON.parse(localStorage.getItem(StorageKeys.USER)) : {};

    const nameValue = info.fullName ? info.fullName : '';
    const addressValue = info.address ? info.address : '';
    const phoneValue = info.phone ? info.phone : '';

    const [mapValue, setMapValue] = useState(addressValue);
    const [mapInfo, setMapInfo] = useState({
        duration: '',
        distance: '0 km',
        img: '',
        price: 0
    });

    const debouncedValue = useDebounce(mapValue, 1000);

    useEffect(() => {
        (async () => {
            const result = (await mapApi.getMap(debouncedValue))?.data;
            const data = result?.data;
            setMapInfo(data);
            if (mapRef.current) {
                mapRef.current.innerHTML = data.img;
            }
        })();
    }, [debouncedValue]);

    const form = useForm({
        defaultValues: {
            fullName: nameValue,
            address: addressValue,
            phone: phoneValue,
            distance: mapInfo.distance,
        },
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        form.setValue('distance', mapInfo.distance);
        form.clearErrors();

        if (onDataChanged) onDataChanged({ shippingCost: mapInfo.price });
    }, [mapInfo]);

    const handleChangeAddress = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setMapValue(searchValue);
        }
    };

    const { isSubmitting, errors } = form.formState;
    const total = Math.round(useSelector(cartTotalSelector) * 23000);

    const handleSubmit = async () => {
        const { onSubmit } = props;
        const bank = {
            vnp_OrderInfo: `Nap tien cho thue bao 0123456789. So tien ${total} VND`,
            vnp_Amount: `${total}`,
            vnp_OrderType: 'food',
            vnp_Locale: 'vn',
        };
        // console.log('form submit: ', qs.stringify(bank));
        // localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(values));
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
                <input type="hidden" name="vnp_OrderType" value="food" />
                <input type="hidden" name="vnp_Locale" value="vn" />
                <input
                    type="hidden"
                    name="vnp_OrderInfo"
                    placeholder="vnp_OrderInfo"
                    value={`Thanh toan hoa don demo-123123. So tien ${total} VND`}
                />
                <InputField className={cx('input')} name="fullName" label="Full Name (*)" form={form} capitalize />
                <InputField
                    className={cx('input')}
                    name="address"
                    label="Address (*)"
                    form={form}
                    onInput={handleChangeAddress}
                />
                <div className={cx('map-container')}>
                    <div className={cx('map')} ref={mapRef}></div>
                    <div className={cx('map-content')}>
                        <span>Distance: {mapInfo.distance}</span>
                        <span>Time: {mapInfo.duration}</span>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col l-6')}>
                        <InputField className={cx('input')} name="phone" label="Phone (*)" form={form} />
                    </div>
                    <div className={cx('col l-6')}>
                        <InputField className={cx('input')} name="voucher" label="Voucher" form={form} />
                    </div>
                </div>
                {errors?.distance && <span className="primary">{errors.distance.message}</span>}
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
