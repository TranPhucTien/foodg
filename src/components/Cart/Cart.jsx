import { Add, Close, DeleteOutline, Remove } from '@mui/icons-material';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { PRICE_BY_SIZE } from '~/constants';
import Button from '../Button';
import Img from '../Img';
import { EmptyCartLottie } from '../Lottie';
import styles from './Cart.module.scss';
import { decreaseItem, hideCart, increaseItem, removeFromCart } from './CartSlice';
import { cartTotalSelector } from './selectors';

const cx = classNames.bind(styles);

Cart.propTypes = {};

function Cart(props) {
    const cartTotal = useSelector(cartTotalSelector);
    const showCart = useSelector((state) => state.cart.showCart);
    const cartList = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleCloseCart = () => {
        dispatch(hideCart());
    };

    const handleRemoveItem = ({ id, size }) => {
        dispatch(removeFromCart({ id, size }));
    };

    const handleIncreaseItem = (product) => {
        dispatch(increaseItem(product));
    };

    const handleDecreaseItem = (product) => {
        dispatch(decreaseItem(product));
    };

    return (
        <section className={cx('wrapper', { show: showCart })}>
            <div className={cx('overlay')} onClick={handleCloseCart}></div>
            <div className={cx('cart')}>
                <div className={cx('cart-header')}>
                    <button className={cx('header-icon')} onClick={handleCloseCart}>
                        <Close sx={{ fontSize: '24px', color: '#676767' }} />
                    </button>
                    <div className={cx('header-content')}>
                        <span className={cx('header-title')}>Shopping Cart</span>
                        <span className={cx('header-desc')}>Delivery time: 15 minutes (2.9 km from you)</span>
                    </div>
                </div>

                {cartList.length > 0 ? (
                    <>
                        <div className={cx('cart-list')}>
                            {cartList.map(({ id, product, quantity, size }) => {
                                const priceBySize = PRICE_BY_SIZE({ size, price: product.price });
                                return (
                                    <div key={`${size}-${id}`} className={cx('cart-item')}>
                                        <div className={cx('item-img-wrapper')}>
                                            <Img src={product.img} alt={product.name} className={cx('item-img')} />
                                        </div>
                                        <div className={cx('item-content')}>
                                            <span className={cx('item-name')}>
                                                ({size}) {product.name}
                                            </span>
                                            <span className={cx('item-price')}>{priceBySize}</span>
                                            <div className={cx('item-actions')}>
                                                <Button
                                                    small
                                                    type="button"
                                                    secondary
                                                    className={cx('detail-btn-inc')}
                                                    onClick={() => handleDecreaseItem({ product, size })}
                                                >
                                                    <Remove sx={{ display: 'flex', alignItems: 'center' }} />
                                                </Button>

                                                <div className={cx('item-quantity')}>{quantity}</div>

                                                <Button
                                                    small
                                                    type="button"
                                                    secondary
                                                    className={cx('detail-btn-dec')}
                                                    onClick={() => handleIncreaseItem({ product, size })}
                                                >
                                                    <Add
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    />
                                                </Button>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className={cx('item-icon')}
                                            onClick={() => {
                                                handleRemoveItem({ id, size });
                                            }}
                                        >
                                            <DeleteOutline sx={{ fontSize: '24px', color: '#676767' }} />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={cx('cart-footer')}>
                            <div className={cx('footer-content')}>
                                <span className={cx('footer-title')}>Subtotal</span>
                                <span className={cx('footer-total')}>${cartTotal}</span>
                            </div>
                            <button type="submit" className={cx('footer-btn')}>
                                Checkout
                            </button>
                        </div>
                    </>
                ) : (
                    <div className={cx('cart-empty')}>
                        <div className={cx('empty-image')}>
                            <EmptyCartLottie />
                        </div>
                        <span className={cx('empty-title')}>Start Grabbing Food!</span>
                        <span className={cx('empty-subs')}>Add items to your basket and place order here.</span>
                        <Button text className={cx('empty-close')} onClick={handleCloseCart}>Continue browsing</Button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Cart;
