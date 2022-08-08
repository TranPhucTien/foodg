import { Add, Remove } from '@mui/icons-material';
import { OutlinedInput } from '@mui/material';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Button from '~/components/Button';
import styles from './QuantityField.module.scss';

const cx = classNames.bind(styles);

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

function QuantityField(props) {
    const { form, name, disabled, onQuantityChange } = props;
    const { control, setValue } = form;

    return (
        <Controller
            name={name}
            control={control}
            fullWidth
            render={({ field: { onChange, onBlur, value, name }, fieldState: { error } }) => {
                return (
                    <div className={cx('wrapper')} onChange={onQuantityChange}>
                        <div className={cx('detail-btn-handle')}>
                            <Button
                                type="button"
                                circle
                                secondary
                                className={cx('detail-btn-inc')}
                                onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}
                            >
                                <Remove sx={{ display: 'flex', alignItems: 'center' }} />
                            </Button>

                            <OutlinedInput
                                id={name}
                                type="number"
                                disabled={disabled}
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                                sx={{ margin: '0 1.2rem', fontSize: '1.4rem', maxWidth: '7rem' }}
                                size="small"
                            />

                            <Button
                                type="button"
                                circle
                                secondary
                                className={cx('detail-btn-dec')}
                                onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}
                            >
                                <Add sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                            </Button>
                        </div>
                        <span className={cx('show-error')}>{error?.message}</span>
                    </div>
                );
            }}
        />
    );
}

export default QuantityField;
