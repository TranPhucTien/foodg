import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import { EmptyProductLottie, LoginLottie } from '~/components/Lottie';
import config from '~/config';
import { FIRST_SHOW_ORDER } from '~/constants';
import { showDialogAuth } from '~/Layouts/components/Header/modeSlice';
import styles from './Main.module.scss';

const cx = classNames.bind(styles);

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

function Main({ children }) {
    const loggedInUser = useSelector((state) => state.user.current);
    const products = useSelector((state) => state.cart.cartItems);
    const isLoggedIn = !!(loggedInUser?.username && loggedInUser?.fullName);
    const dispatch = useDispatch();

    const handleClickLogin = () => {
        dispatch(showDialogAuth());
    };

    return (
        <div className={cx('container')}>
            {isLoggedIn ? (
                products.length > 0 ? (
                    <div>{children}</div>
                ) : (
                    <div className={cx('text-center')}>
                        <div className="section-subtitle">Opps!!!</div>
                        <h2 className={classNames('section-title', styles.title)}>
                            Looks like you haven't selected any <span className="primary">products</span> yet
                        </h2>
                        <div className={cx('lottie', 'empty')}>
                            <EmptyProductLottie />
                        </div>
                        <Button to={`${config.routes.order}/${FIRST_SHOW_ORDER}`} text className={cx('empty-text')}>
                            Continue browsing
                        </Button>
                    </div>
                )
            ) : (
                <div className={cx('text-center')}>
                    <div className="section-subtitle">Join with us!</div>
                    <h2 className={classNames('section-title', styles.title)}>
                        You are not logged in. <span className="primary">Please log in and try again!</span>
                    </h2>
                    <Button primary rounded large className={cx('button-login')} onClick={handleClickLogin}>
                        Login
                    </Button>
                    <div className={cx('lottie')}>
                        <LoginLottie />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Main;
