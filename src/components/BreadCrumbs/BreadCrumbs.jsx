import { LinearScale } from '@mui/icons-material';
import { Breadcrumbs as MuiBreadcrumbs, Link as MuiLink } from '@mui/material';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import config from '~/config';
import styles from './BreadCrumbs.module.scss';

const cx = classNames.bind(styles);

BreadCrumbs.propTypes = {};

const listBreadCrumbs = [
    {path: config.routes.home, breadcrumb: 'Home'},
    {path: `${config.routes.order}`, breadcrumb: 'Order now'},
    {path: config.routes.reviews},
    {path: config.routes.notfound},
];

function BreadCrumbs() {
    const breadcrumbs = useBreadcrumbs(listBreadCrumbs);

    return (
        <MuiBreadcrumbs
            separator={<LinearScale fontSize="small" />}
            aria-label="breadcrumb"
            className={cx('container')}
        >
            {breadcrumbs.map(({ match, breadcrumb }, index) => (
                <MuiLink
                    key={index}
                    className={cx('item')}
                    underline="hover"
                    color="inherit"
                    to={match.pathname}
                    component={Link}
                >
                    {breadcrumb}
                </MuiLink>
            ))}
        </MuiBreadcrumbs>
    );
}

export default BreadCrumbs;
