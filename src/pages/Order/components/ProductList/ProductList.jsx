import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { memo } from 'react';
import Product from '../Product';
import styles from './ProductList.module.scss';

const cx = classNames.bind(styles);

ProductList.propTypes = {
    data: PropTypes.array,
};

function ProductList({ data = [] }) {
    return (
        <div className={cx('row')}>
            {data.map((product) => {
                // Because 1 product of API is duplicated. When API is correct remove this
                const key = product.id + Math.random();

                return (
                    <div className={cx('col', 'l-3', 'm-4', 'c-12')} key={key}>
                        <Product product={product} />
                    </div>
                );
            })}
        </div>
    );
}

export default memo(ProductList);
