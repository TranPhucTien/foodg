import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Input from '~/components/Input';
import styles from './InputField.module.scss';

const cx = classNames.bind(styles);

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    disable: PropTypes.bool,
    className: PropTypes.string,
};

function InputField(props) {
    const { form, name, label, disable, type, capitalize = false, className } = props;
    const { control } = form;
    const classes = cx('input', { [className]: className });

    return (
        <Controller
            name={name}
            control={control}
            fullWidth
            render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => {
                return (
                    <Input
                        id={name}
                        placeholder={label}
                        error={invalid}
                        helperText={error?.message}
                        type={type}
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        value={value}
                        disabled={disable}
                        capitalize={capitalize}
                        className={classes}
                    />
                );
            }}
        />
    );
}

export default InputField;
