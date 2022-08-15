import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import { useSelector } from 'react-redux';
import { cartTotalSelector, totalDiscountSelector } from '~/components/Cart/selectors';
import Img from '~/components/Img';
import { PRICE_BY_SIZE } from '~/constants';
import BackgroundIcon from '~/components/BackgroundIcon';
import { BackgroundIconBlurFour, BackgroundIconBlurOne, BackgroundIconBlurThree, BackgroundIconBlurTwo } from '~/utils/backgroundIcons';

const cx = classNames.bind(styles);

Detail.propTypes = {};

function Detail(props) {
    const list = useSelector((state) => state.cart.cartItems);
    const listReverse = [...list].reverse()
    const total = useSelector(cartTotalSelector);
    const discount = useSelector(totalDiscountSelector);

    return (
        <aside className={cx('wrapper')}>
            <ul className={cx('list')}>
                {listReverse.map(({ id, product, size, quantity }) => {
                    const priceBySize = PRICE_BY_SIZE({ size, price: product.price });
                    return (
                        <li key={`${size}-${id}`} className={cx('item')}>
                            <div className={cx('img')}>
                                <Img src={product.img} alt={product.name} />
                            </div>
                            <div className={cx('content')}>
                                <span className={cx('name')}>
                                    ({size}) {product.name}
                                </span>
                                <span className={cx('quantity')}>Quantity: {quantity}</span>
                            </div>
                            <span className={cx('price')}>${priceBySize * quantity}</span>
                        </li>
                    );
                })}
            </ul>
            <div className={cx('info-price')}>
                <div className={cx('info-price-container')}>
                    <span className={cx('info-price-label')}>Discount</span>
                    <span className={cx('info-price-content')}>${discount}</span>
                </div>
                <div className={cx('info-price-container')}>
                    <span className={cx('info-price-label')}>Shipping Cost</span>
                    <span className={cx('info-price-content')}>Free</span>
                </div>
                <div className={cx('info-price-container')}>
                    <span className={cx('info-price-label')}>Taxes (estimated)</span>
                    <span className={cx('info-price-content')}>$0</span>
                </div>
            </div>
            <div className={cx('footer')}>
                <span className={cx('info-price-label')}>Total</span>
                <span className={cx('total')}>${total}</span>
            </div>
            <BackgroundIcon
                    src={BackgroundIconBlurOne}
                    width="25"
                    top="0"
                    right="-30"
                    type="float"
                    duration="3"
                    zIndex="0"
                />
                <BackgroundIcon
                    src={BackgroundIconBlurTwo}
                    width="18"
                    bottom="30"
                    left="5"
                    type="float"
                    duration="4"
                    zIndex="0"
                    delay="1"
                />
                <BackgroundIcon
                    src={BackgroundIconBlurThree}
                    width="20"
                    bottom="5"
                    right="40"
                    type="scale"
                    duration="6"
                    zIndex="0"
                    delay="2"
                />
                <BackgroundIcon
                    src={BackgroundIconBlurFour}
                    width="12.5"
                    top="5"
                    left="30"
                    type="scale"
                    duration="5"
                    zIndex="0"
                    delay="1"
                />
        </aside>
    );
}

export default Detail;
