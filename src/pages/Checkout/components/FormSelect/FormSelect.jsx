import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FormSelect.module.scss';
import countriesList from '~/utils/countriesList';
import Select from 'react-select';

const cx = classNames.bind(styles);

FormSelect.propTypes = {
    errors: PropTypes.object,
    field: PropTypes.object.isRequired,
};

let borderColor = 'rgba(0, 0, 0, 0.15)';
let placeholderColor = 'rgba(0, 0, 0, 0.55)';

function FormSelect({ error, helperText, defaulValue = {}, field = {} }) {
    if (error) {
        const errorColor = '#fe2c55';
        borderColor = errorColor;
        placeholderColor = errorColor;
    } else {
        borderColor = 'rgba(0, 0, 0, 0.15)';
        placeholderColor = 'rgba(0, 0, 0, 0.55)';
    }

    return (
        <div className={cx('wrapper', { error })}>
            <Select
                {...field}
                placeholder="Select a country"
                styles={customStyles}
                options={countriesList}
                defaultValue={defaulValue}
            />
            <span className={cx('error-text')}>{helperText}</span>
        </div>
    );
}

const customStyles = {
    container: (base) => ({
        ...base,
        flex: 1,
    }),
    control: (base) => ({
        ...base,
        fontSize: '1.6rem',
        borderColor: borderColor,
        borderRadius: '0',
        boxShadow: 'none',
        minHeight: '44px',

        cursor: 'pointer',

        '&:hover': {
            border: '1px solid inherit',
        },
    }),
    menu: (base) => ({
        ...base,
        zIndex: 100,

        paddingTop: '5px',
        paddingBottom: '5px',

        msOverflowStyle: 'none',
        scrollbarWidth: 'none',

        '&::-webkit-scrollbar': {
            display: 'none',
        },
    }),
    option: (base, state) => ({
        ...base,
        padding: '15px 10px',
        fontSize: '1.6rem',

        color: state.isSelected ? '#fff' : '#333',
        backgroundColor: state.isSelected ? '#fe2c55' : '#fff',

        cursor: 'pointer',

        '&:active': {
            backgroundColor: state.isSelected && '#fe2c55',
        },

        '&:hover': {
            backgroundColor: !state.isSelected && 'rgba(0, 0, 0, 0.03)',
        },
    }),
    noOptionsMessage: (base) => ({
        ...base,
        fontSize: '1.6rem',
    }),
    menuList: (base) => ({
        ...base,
        scrollbarWidth: 'none',

        '::-webkit-scrollbar': {
            display: 'none',
        },
    }),
    placeholder: (base) => ({
        ...base,
        color: placeholderColor,
    }),
};

export default FormSelect;
