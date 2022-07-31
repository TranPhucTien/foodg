import { FavoriteBorder, Room, ShoppingCartOutlined, Star } from '@mui/icons-material';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img-wrapper')}>
                <img src={product.img} alt={product.name} className={cx('img')} />
                <div className={cx('rate')}>
                    <Star />
                    <span>{product.rate}</span>
                </div>
            </div>

            <div className={cx('content')}>
                <div className={cx('content-name')}>{product.name}</div>
                <p className={cx('content-desc')}>{product.dsc}</p>
                <div className={cx('content-row')}>
                    <div className={cx('content-location')}>
                        <Room />
                        <span>{product.country}</span>
                    </div>
                    <div className={cx('content-price')}>${product.price}</div>
                </div>
            </div>

            <div className={cx('btns')}>
                <div className={cx('btn')}>
                    <FavoriteBorder />
                </div>
                <div className={cx('btn')}>
                    <ShoppingCartOutlined />
                </div>
            </div>
            <div className={cx('label')}>Favourite</div>
        </div>
    );
}

export default Product;
