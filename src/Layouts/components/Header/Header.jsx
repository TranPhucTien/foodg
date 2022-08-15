import { Close, Home as HomeIcon, Logout, RestaurantMenu, ShoppingBag } from '@mui/icons-material';
import { Badge } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'tippy.js/animations/scale.css';
import 'tippy.js/themes/light.css';
import images from '~/assets/images';
import avatar from '~/assets/images/avatar_default.png';
import Button from '~/components/Button';
import { showCart } from '~/components/Cart/cartSlice';
import { cartItemsCountSelector } from '~/components/Cart/selectors';
import config from '~/config';
import { MODE } from '~/constants';
import Login from '~/features/Auth/components/Login';
import Register from '~/features/Auth/components/Register';
import { logout } from '~/features/Auth/userSlice';
import styles from './Header.module.scss';
import { hideDialogAuth, showDialogAuth, showLoginMode } from './modeSlice';

const cx = classNames.bind(styles);

Header.propTypes = {};

function Header() {
    const loggedInUser = useSelector((state) => state.user.current);
    const isLoggedIn = !!loggedInUser.id;
    const mode = useSelector((state) => state.mode.mode);
    const fullName = useSelector((state) => state.user.current.fullName);
    const [background, setBackground] = useState(false);
    const headerRef = useRef();
    const cartItemCount = useSelector(cartItemsCountSelector);
    const dispatch = useDispatch();
    const isShowDialogAuth = useSelector(state => state.mode.isShowDialog)

    const handleClickLogin = () => {
        dispatch(showDialogAuth());
    };
    
    const handleCloseAuth = () => {
        dispatch(showLoginMode())
        dispatch(hideDialogAuth());
    };

    const handleLogoutClick = () => {
        dispatch(logout());
    };

    if (headerRef.current) {
        let prevScrollpos = window.pageYOffset;

        window.onscroll = function () {
            // windows onscroll is run before `if in line 21`
            if (headerRef.current) {
                let currentScrollPos = window.pageYOffset;

                if (prevScrollpos >= currentScrollPos || window.scrollY < 100) {
                    headerRef.current.style.top = '0';
                } else {
                    headerRef.current.style.top = '-68px';
                }
                prevScrollpos = currentScrollPos;
            }
        };
    }

    const listenScrollEvent = () => {
        if (window.scrollY < 100) {
            return setBackground(false);
        } else {
            return setBackground(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    const handleClickCart = () => {
        dispatch(showCart());
    };

    return (
        <header className={cx('wrapper', { background })} ref={headerRef}>
            <div className={cx('inner', 'container')}>
                <div className={cx('links')}>
                    <Link to={config.routes.home} className={cx('logo')}>
                        <img src={images.logo} alt="logo" />
                    </Link>
                    <ul className={cx('links-list')}>
                        <li className={cx('links-item')}>
                            <Button navLink to={config.routes.home} text leftIcon={<HomeIcon />}>
                                Home
                            </Button>
                        </li>
                        <li className={cx('links-item')}>
                            <Button
                                navLink
                                // to={`${config.routes.order}/${FIRST_SHOW_ORDER}`}
                                to={`${config.routes.order}`}
                                text
                                leftIcon={<RestaurantMenu />}
                            >
                                Order Online
                            </Button>
                        </li>
                        <li className={cx('links-item')}>
                            <Button navLink to={config.routes.reviews} text leftIcon={<HomeIcon />}>
                                Reviews
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className={cx('actions')}>
                    <Button text className={cx('badge-icon')} color="inherit" onClick={handleClickCart}>
                        <Tippy delay={[0, 50]} content="Cart" placement="bottom" theme="light" animation="scale">
                            <Badge badgeContent={cartItemCount} color="error" className={cx('tada')}>
                                <ShoppingBag sx={{ fontSize: 36 }} />
                            </Badge>
                        </Tippy>
                    </Button>
                    {!isLoggedIn && (
                        <Button primary onClick={handleClickLogin}>
                            Log in
                        </Button>
                    )}
                    {isLoggedIn && (
                        <>
                            <img src={avatar} alt="avatar" className={cx('user-avatar')} />
                            <span className={cx('user-name')}>{fullName}</span>
                            <Tippy
                                delay={[0, 50]}
                                content="Double click to log out"
                                placement="bottom"
                                theme="light"
                                animation="scale"
                            >
                                <button className={cx('logout-icon')} onDoubleClick={handleLogoutClick}>
                                    <Logout />
                                </button>
                            </Tippy>
                        </>
                    )}
                </div>
            </div>

            <Dialog open={isShowDialogAuth} disableEscapeKeyDown>
                <Button circle gray onClick={handleCloseAuth} className={cx('modal-close')}>
                    <Close sx={{ fontSize: '22px', display: 'block' }} />
                </Button>
                <DialogContent sx={{ padding: 0 }}>
                    {mode === MODE.REGISTER && <Register closeDialog={handleCloseAuth} />}
                    {mode === MODE.LOGIN && <Login closeDialog={handleCloseAuth} />}
                </DialogContent>
            </Dialog>
        </header>
    );
}

export default Header;
