import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Product from '../Product';
import styles from './ProductList.module.scss';

const cx = classNames.bind(styles);

ProductList.propTypes = {
    data: PropTypes.array,
};

function ProductList({ data = [] }) {
    return (
        <div className={cx('row')}>
            {data.map((product) => (
                <div className={cx('col', 'l-3', 'm-4', 'c-12')} key={product.id}>
                    <Product product={product} />
                </div>
            ))}
        </div>
    );
}

export default ProductList;
