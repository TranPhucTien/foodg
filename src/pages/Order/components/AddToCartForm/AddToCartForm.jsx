import { yupResolver } from '@hookform/resolvers/yup';
import { AddShoppingCartOutlined, FavoriteBorder } from '@mui/icons-material';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '~/components/Button';
import QuantityField from '~/components/formControl/QuantityField/QuantityField';
import { maximumItemQuantity, minimumItemQuantity } from '~/constants';
import { detailOptions } from '~/utils/staticData';
import Checkbox from '../Checkbox';
import queryString from 'query-string';
import styles from './AddToCartForm.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
};

function AddToCartForm({ onSubmit = null, onChange = null }) {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);

        return {
            _size: 'M',
            ...params,
        };
    }, [location.search]);

    const [sizeValue, setSizeValue] = useState(queryParams._size);

    const schema = yup.object().shape({
        quantity: yup
            .number()
            .required('Please enter quantity')
            .min(minimumItemQuantity, `Minimum value is ${minimumItemQuantity}`)
            .max(maximumItemQuantity, `Maximum value is ${maximumItemQuantity}`)
            .typeError('Please enter a number'),
    });

    useEffect(() => {
        setSizeValue(queryParams._size);
    }, [queryParams]);

    const form = useForm({
        defaultValues: {
            quantity: 1,
            size: queryParams._size,
        },
        reValidateMode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const handleCheckboxChange = (e) => {
        const name = e.target.name;
        const size = e.target.value;
        setSizeValue(size);
        form.setValue(name, size);
    };

    const handleSizeChange = (e) => {
        const size = e.target.value;
        
        if (isNaN(Number(size))) {
            const filters = {
                ...queryParams,
                _size: size,
            };

            navigate({
                pathname: location.pathname,
                search: queryString.stringify(filters),
            });

            if (onChange) onChange(size);
        }
    };

    const handleSubmit = async (values) => {
        console.log('🚀 ~ file: AddToCartForm.jsx ~ line 84 ~ handleSubmit ~ values', values);
        if (onSubmit) {
            await onSubmit(values);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} className={cx('form')} onChange={handleSizeChange}>
            <div className={cx('form-title')}>Choose your options</div>
            {detailOptions.map((option) => (
                <Checkbox
                    checked={sizeValue === option.size}
                    key={option.content}
                    content={option.content}
                    value={option.size}
                    name="size"
                    onChange={(e) => handleCheckboxChange(e)}
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
