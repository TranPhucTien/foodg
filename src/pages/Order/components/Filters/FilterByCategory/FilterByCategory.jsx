import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FIRST_SHOW_ORDER } from '~/constants';
import { typeOptions } from '~/utils/Filters';
import styles from './FilterByCategory.module.scss';

const cx = classNames.bind(styles);

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory({ onChange, setIsShowCategory }) {
    const [type, setType] = useState(FIRST_SHOW_ORDER);
    const params = useParams();
    const name = params.type;

    useEffect(() => {
        setType(name);
    }, [name]);

    const handleClickCategory = (option) => {
        setType(option.type);
        if (setIsShowCategory) {
            setIsShowCategory((prev) => !prev);
        }
        if (onChange) {
            onChange(option.type);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h3 className="filter-title">Category</h3>
            <ul className={cx('list')}>
                {typeOptions.map((option) => (
                    <li
                        className={cx('item', { active: option.type === type })}
                        key={option.type}
                        onClick={() => handleClickCategory(option)}
                    >
                        <img src={option.img} alt={option.type} key={option.type} className={cx('img')} />
                        <span>{option.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterByCategory;
