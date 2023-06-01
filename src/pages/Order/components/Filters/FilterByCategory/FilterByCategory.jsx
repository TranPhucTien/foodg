import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FIRST_SHOW_ORDER } from '~/constants';
import { typeOptions } from '~/utils/Filters';
import styles from './FilterByCategory.module.scss';
import axiosClient from '~/api/axiosClient';
import categoryApi from '~/api/categoryApi';
import { useQuery } from '@tanstack/react-query';

const cx = classNames.bind(styles);

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory({ onChange, setIsShowCategory }) {
    const [type, setType] = useState(FIRST_SHOW_ORDER);

    const params = useParams();
    const name = params.type ? params.type : FIRST_SHOW_ORDER;

    const { data } = useQuery(
        ['list-category'],
        async () => {
            const result = (await categoryApi.getAll())?.data.data;
            return result;
        },
        {
            staleTime: 50000,
            keepPreviousData: true,
        },
    );

    useEffect(() => {
        setType(name);
    }, [name]);

    const handleClickCategory = (option) => {
        setType(option.name);
        if (setIsShowCategory) {
            setIsShowCategory((prev) => !prev);
        }
        if (onChange) {
            onChange(option.name);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h3 className="filter-title">Category</h3>
            <ul className={cx('list')}>
                {data?.map((option) => (
                    <li
                        className={cx('item', { active: option.name === type })}
                        key={option.id}
                        onClick={() => handleClickCategory(option)}
                    >
                        <img src={option.img} alt={option.name} className={cx('img')} />
                        <span>{option.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterByCategory;
