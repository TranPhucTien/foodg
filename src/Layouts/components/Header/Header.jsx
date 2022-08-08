import { Home as HomeIcon, RestaurantMenu, ShoppingBag } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import { showCart } from '~/components/Cart/CartSlice';
import { cartItemsCountSelector } from '~/components/Cart/selectors';
import config from '~/config';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

Header.propTypes = {};

function Header() {
    const [background, setBackground] = useState(false);
    const headerRef = useRef();
    const cartItemCount = useSelector(cartItemsCountSelector);
    const iconSize = 24;

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

    const dispatch = useDispatch();
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
                            <Button
                                navLink
                                to={config.routes.home}
                                text
                                leftIcon={<HomeIcon sx={{ fontSize: iconSize }} />}
                            >
                                Home
                            </Button>
                        </li>
                        <li className={cx('links-item')}>
                            <Button
                                navLink
                                // to={`${config.routes.order}/${FIRST_SHOW_ORDER}`}
                                to={`${config.routes.order}`}
                                text
                                leftIcon={<RestaurantMenu sx={{ fontSize: iconSize }} />}
                            >
                                Order Online
                            </Button>
                        </li>
                        <li className={cx('links-item')}>
                            <Button
                                navLink
                                to={config.routes.reviews}
                                text
                                leftIcon={<HomeIcon sx={{ fontSize: iconSize }} />}
                            >
                                Reviews
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className={cx('actions')}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleClickCart}>
                        <Badge badgeContent={cartItemCount} color="error">
                            <ShoppingBag sx={{ fontSize: 36 }} />
                        </Badge>
                    </IconButton>
                    <Button primary className={cx('login-icon')}>
                        Login
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
