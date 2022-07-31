import { ExpandMore } from '@mui/icons-material';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { sortOptions } from '~/utils/Filters';
import styles from './ProductSort.module.scss';

const cx = classNames.bind(styles);

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({ currentSort, currentOrder, onChange }) {
    const [result, setResult] = useState({
        value: 'Sort',
        sort: currentSort,
        order: currentOrder,
    });
    const [showResult, setShowResult] = useState(false);

    const handleHideResult = () => {
        setShowResult(false);
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
                            <li key={id} className={cx('drop-item')} onClick={() => handleSortClick(sort, order, value)}>
                                {value}
                            </li>
                        ))}
                    </ul>
                )}
            >
                <div className={cx('drop')} onClick={() => setShowResult(true)}>
                    <div className={cx('drop-current')}>
                        <span>{result.value}</span>
                        <ExpandMore />
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default ProductSort;
