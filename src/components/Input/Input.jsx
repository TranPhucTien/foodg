import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

Input.propTypes = {
    type: PropTypes.string,
    placeHolder: PropTypes.string,
    helperText: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.bool,
    capitalize: PropTypes.bool,
    onClick: PropTypes.func,
};

function Input({ type, placeHolder, error, capitalize, helperText, name, value, className, onClick, ...passProps }) {
    const classes = cx('input', {
        [className]: className,
        error,
        capitalize,
    });

    return (
        <div className={cx('wrapper')}>
            <input placeholder={placeHolder} type={type} name={name} value={value} className={classes} {...passProps} />
            <span className={cx('error-text')}>{helperText}</span>
        </div>
    );
}

export default Input;
