import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';

const cx = classNames.bind(styles);

Checkbox.propTypes = {
    value: PropTypes.string,
    content: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    handleOptionClick: PropTypes.func,
};

function Checkbox({ name, value, content, checked, onChange, onClick, ...props }) {
    return (
        <label onClick={onClick} className={cx('checkbox')}>
            <input
                checked={checked}
                onChange={onChange}
                className={cx('checkbox-input')}
                type="radio"
                name={name}
                value={value}
            />
            <span className={cx('checkmark')}></span>
            {content}
        </label>
    );
}

export default Checkbox;
