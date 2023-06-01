import { Home, RestaurantMenu } from '@mui/icons-material';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '~/assets/images/avatar_default.png';
import config from '~/config';
import { logout } from '~/features/Auth/userSlice';
import { showDialogAuth } from '~/Layouts/components/Header/modeSlice';
import Button from '../Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

Menu.propTypes = {
    isShow: PropTypes.bool.isRequired,
    setIsShow: PropTypes.func.isRequired,
};

function Menu({ isShow, setIsShow }) {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.user.current);
    const isLoggedIn = !!loggedInUser?.id;
    const fullName = useSelector((state) => state.user.current?.fullName);

    const handleCloseMenu = () => {
        setIsShow(false);
    };

    const handleClickLogin = () => {
        handleCloseMenu();
        dispatch(showDialogAuth());
    };

    const handleLogoutClick = () => {
        dispatch(logout());
    };

    return (
        <div className={cx('wrapper', { show: isShow })}>
            <div className={cx('overlay')} onClick={handleCloseMenu}></div>
            <div className={cx('menu')}>
                <div className={cx('menu-top')}>
                    {isLoggedIn ? (
                        <>
                            <div className={cx('info')}>
                                <img src={avatar} alt="avatar" className={cx('user-avatar')} />
                                <span className={cx('user-name')}>{fullName}</span>
                            </div>
                            <div className={cx('actions')}>
                                <Button text onClick={handleLogoutClick}>
                                    Logout
                                </Button>
                            </div>
                        </>
                    ) : (
                        <div className={cx('info')}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
                                alt="avatar"
                                className={cx('user-avatar')}
                            />
                            <span className={cx('user-name')} onClick={handleClickLogin}>Signin</span>
                        </div>
                    )}
                </div>
                <div className={cx('menu-bottom')}>
                    <ul className={cx('list')}>
                        <li className={cx('item')} onClick={handleCloseMenu}>
                            <Button navLink to={config.routes.home} text leftIcon={<Home />}>
                                Home
                            </Button>
                        </li>
                        <li className={cx('item')} onClick={handleCloseMenu}>
                            <Button
                                navLink
                                // to={`${config.routes.order}/${FIRST_SHOW_ORDER}`}
                                to={config.routes.order}
                                text
                                leftIcon={<RestaurantMenu />}
                            >
                                Order Online
                            </Button>
                        </li>
                        <li className={cx('item')} onClick={handleCloseMenu}>
                            <Button navLink to={config.routes.reviews} text leftIcon={<Home />}>
                                Reviews
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu;
