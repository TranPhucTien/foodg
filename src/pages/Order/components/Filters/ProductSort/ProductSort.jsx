import { ExpandMore } from '@mui/icons-material';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sortOptions } from '~/utils/Filters';
import styles from './ProductSort.module.scss';

const cx = classNames.bind(styles);

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({ currentSort, currentOrder, onChange }) {
    const { pathname } = useLocation();
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        value: 'Sort',
        sort: currentSort,
        order: currentOrder,
    });

    useEffect(() => {
        setResult((prev) => ({
            ...prev,
            value: 'Sort',
        }));
    }, [pathname]);

    useEffect(() => {
        sortOptions.forEach(({ sort, order, value }) => {
            if (currentSort === sort && currentOrder === order) {
                setResult((prev) => ({
                    ...prev,
                    value,
                }));
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleDropdownClick = () => {
        if (showResult) {
            setShowResult(false);
        } else {
            setShowResult(true);
        }
    };

    const handleSortClick = (sort, order, value) => {
        setResult({ sort, order, value });
        setShowResult(false);

        if (onChange) {
            onChange(sort, order);
        }
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult}
                maxWidth={'none'}
                delay={[0, 700]}
                offset={[12, 4]}
                onClickOutside={handleHideResult}
                placement="bottom-end"
                render={(attrs) => (
                    <ul className={cx('drop-list')}>
                        {sortOptions.map(({ value, id, sort, order }) => (
                            <li
                                key={id}
                                className={cx('drop-item')}
                                onClick={() => handleSortClick(sort, order, value)}
                            >
                                {value}
                            </li>
                        ))}
                    </ul>
                )}
            >
                <div className={cx('drop')} onClick={handleDropdownClick}>
                    <div className={cx('drop-current')}>
                        <span>{result.value}</span>
                        <ExpandMore sx={{ fontSize: '2rem' }} />
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default ProductSort;
