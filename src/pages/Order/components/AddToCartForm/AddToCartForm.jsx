import { yupResolver } from '@hookform/resolvers/yup';
import { AddShoppingCartOutlined, FavoriteBorder } from '@mui/icons-material';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useSearchParams } from 'react-router-dom';
import * as yup from 'yup';
import Button from '~/components/Button';
import QuantityField from '~/components/formControl/QuantityField/QuantityField';
import { maximumItemQuantity, minimumItemQuantity } from '~/constants';
import { detailOptions } from '~/utils/staticData';
import Checkbox from '../Checkbox';
import styles from './AddToCartForm.module.scss';

const cx = classNames.bind(styles);

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
};

function AddToCartForm({ onSubmit = null, onChange = null }) {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);

        return {
            _size: 'M',
            ...params,
        };
    }, [location.search]);

    const [sizeValue, setSizeValue] = useState(queryParams._size);

    const removeQueryParamsSize = () => {
        const param = searchParams.get('_size');

        if (param) {
            // 👇️ delete each query param
            searchParams.delete('_size');

            // 👇️ update state after
            setSearchParams(searchParams);
        }
    };

    const isSizeValid = () => {
        const param = searchParams.get('_size');

        if (param) {
            if (queryParams._size === 'S' || queryParams._size === 'M' || queryParams._size === 'L') {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    };

    useEffect(() => {
        if (isSizeValid()) {
            setSizeValue(queryParams._size);
        } else {
            removeQueryParamsSize();
            setSizeValue('M');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParams]);

    const schema = yup.object().shape({
        quantity: yup
            .number()
            .required('Please enter quantity')
            .min(minimumItemQuantity, `Minimum value is ${minimumItemQuantity}`)
            .max(maximumItemQuantity, `Maximum value is ${maximumItemQuantity}`)
            .typeError('Please enter a number'),
    });

    const form = useForm({
        defaultValues: {
            quantity: 1,
            size: queryParams._size,
        },
        reValidateMode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const handleSizeChange = (e) => {
        const name = e.target.name;
        const size = e.target.value;
        setSizeValue(size);
        form.setValue(name, size);
        if (onChange) onChange(size);
        removeQueryParamsSize();
    };

    const handleSubmit = async (values) => {
        values.quantity = Number.parseInt(values.quantity);
        console.log('🚀 ~ file: AddToCartForm.jsx ~ line 67 ~ handleSubmit ~ values', values);

        if (onSubmit) {
            await onSubmit(values);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} className={cx('form')}>
            <div className={cx('form-title')}>Choose your options</div>
            {detailOptions.map((option) => (
                <Checkbox
                    checked={sizeValue === option.size}
                    key={option.content}
                    content={option.content}
                    value={option.size}
                    name="size"
                    onChange={(e) => handleSizeChange(e)}
                />
            ))}

            <div className={cx('detail-btns')}>
                <QuantityField name="quantity" form={form} />

                <div className={cx('detail-add')}>
                    <Button
                        type="submit"
                        rounded
                        primary
                        fullWidth
                        leftIcon={<AddShoppingCartOutlined sx={{ display: 'flex', alignItems: 'center' }} />}
                    >
                        Add to cart
                    </Button>
                </div>

                <Button type="button" circle secondary className={cx('detail-btn-like')}>
                    <FavoriteBorder sx={{ display: 'flex', alignItems: 'center' }} />
                </Button>
            </div>
        </form>
    );
}

export default AddToCartForm;
