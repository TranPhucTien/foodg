import { Star, StarBorder } from '@mui/icons-material';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './ProductInfo.module.scss';

const cx = classNames.bind(styles);

ProductInfo.propTypes = {
    price: PropTypes.number,
    product: PropTypes.object,
    type: PropTypes.string,
};

function ProductInfo({ priceSize, product = {}, type = '' }) {
    const { name, dsc, price, rate, country } = product;

    return (
        <div className={cx('detail')}>
            <h2 className={cx('detail-title')}>{name}</h2>

            <div className={cx('detail-rate')}>
                <div className={cx('detail-stars')}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    {rate === 5 ? <Star /> : <StarBorder />}
                </div>
                <div className={cx('detail-reviews')}>
                    <span className={cx('detail-reviews-qnt')}>4</span>
                    <span> Customer Reviews</span>
                </div>
            </div>

            <div className={cx('detail-price')}>
                <strong>${priceSize || price}</strong>
            </div>

            <div className={cx('detail-tags')}>
                <div className={cx('detail-tag')}>
                    <span className={cx('detail-tag-label')}>Category:</span>
                    <span className={cx('detail-tag-detail', 'category')}>{type.replace('-', ' ')}</span>
                </div>
                <div className={cx('detail-tag')}>
                    <span className={cx('detail-tag-label')}>Country:</span>
                    <span className={cx('detail-tag-detail')}>{country}</span>
                </div>
            </div>

            <p className={cx('detail-description')}>{dsc}</p>
        </div>
    );
}

export default ProductInfo;
