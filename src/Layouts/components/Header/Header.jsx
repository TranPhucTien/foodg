import { Home as HomeIcon, RestaurantMenu, ShoppingBag } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import images from '~/assets/images';
import Button from './Button';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

Header.propTypes = {};

function Header() {
    const [background, setBackground] = useState(false);
    const iconSize = 28;

    const listenScrollEvent = (event) => {
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

    return (
        <header className={cx('wrapper', { background })}>
            <div className={cx('inner')}>
                <div className={cx('links')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="logo" />
                    </div>
                    <Button text leftIcon={<HomeIcon sx={{ fontSize: iconSize }} />}>
                        Home
                    </Button>
                    <Button text leftIcon={<RestaurantMenu sx={{ fontSize: iconSize }} />}>
                        Order Online
                    </Button>
                    <Button text leftIcon={<HomeIcon sx={{ fontSize: iconSize }} />}>
                        Reviews
                    </Button>
                </div>
                <div className={cx('actions')}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={910} color="error">
                            <ShoppingBag sx={{ fontSize: 36 }} />
                        </Badge>
                    </IconButton>
                    <Button primary className={cx('login-icon')}>Login</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
