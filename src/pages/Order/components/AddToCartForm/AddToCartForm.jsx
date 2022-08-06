import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AddToCartForm.module.scss';
import { detailOptions } from '~/utils/staticData';
import Checkbox from '../Checkbox';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '~/components/Button';
import { Add, AddShoppingCartOutlined, FavoriteBorder, Remove } from '@mui/icons-material';
import QuantityField from '~/components/formControl/QuantityField/QuantityField';

const cx = classNames.bind(styles);

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
};

function AddToCartForm({ onSubmit = null, onChange = null }) {
    const [sizeValue, setSizeValue] = useState('M');
    const schema = yup.object().shape({
        quantity: yup
            .number()
            .required('Please enter quantity')
            .min(1, 'Minimum value is 1')
            .max(20, 'Maximum value is 20')
            .typeError('Please enter a number'),
    });

    const form = useForm({
        defaultValues: {
            quantity: 1,
            size: 'M',
        },
        reValidateMode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const handleCheckboxChange = (e) => {
        const name = e.target.name;
        const size = e.target.value;
        form.setValue(name, size);
        setSizeValue(size);
    };

    const handleSizeChange = (e) => {
        const size = e.target.value;
        if (onChange) onChange(size);
    };

    const handleSubmit = async (values) => {
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
