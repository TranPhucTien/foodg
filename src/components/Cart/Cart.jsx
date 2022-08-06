import { Add, Close, DeleteOutline, Remove } from '@mui/icons-material';
import { OutlinedInput } from '@mui/material';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import styles from './Cart.module.scss';
import { hideCart, removeFromCart } from './CartSlice';
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

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id))
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

                <div className={cx('cart-list')}>
                    {cartList.map(({ id, product, quantity, size }) => (
                        <div key={id} className={cx('cart-item')}>
                            <div className={cx('item-img-wrapper')}>
                                <img src={product.img} alt={product.name} className={cx('item-img')} />
                            </div>
                            <div className={cx('item-content')}>
                                <span className={cx('item-name')}>
                                    ({size}) {product.name}
                                </span>
                                <span className={cx('item-price')}>{product.price}</span>
                                <div className={cx('item-actions')}>
                                    <Button type="button" circle secondary className={cx('detail-btn-inc')}>
                                        <Remove sx={{ display: 'flex', alignItems: 'center' }} />
                                    </Button>

                                    <OutlinedInput
                                        type="number"
                                        sx={{
                                            margin: '0 1.2rem',
                                            fontSize: '1.4rem',
                                            maxWidth: '7rem',
                                            height: '20px',
                                        }}
                                        size="small"
                                    />

                                    <Button type="button" circle secondary className={cx('detail-btn-dec')}>
                                        <Add sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                                    </Button>
                                </div>
                            </div>
                            <button
                                type="button"
                                className={cx('item-icon')}
                                onClick={() => {
                                    handleRemoveItem(id);
                                }}
                            >
                                <DeleteOutline sx={{ fontSize: '24px', color: '#676767' }} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className={cx('cart-footer')}>
                    <div className={cx('footer-content')}>
                        <span className={cx('footer-title')}>Total</span>
                        <span className={cx('footer-total')}>${cartTotal}</span>
                    </div>
                    <button className={cx('footer-btn')}>Checkout</button>
                </div>
            </div>
        </section>
    );
}

export default Cart;
