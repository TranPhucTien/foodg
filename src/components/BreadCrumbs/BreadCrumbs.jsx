import { LinearScale, NavigateNext } from '@mui/icons-material';
import { Link as MuiLink, Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { publicRoutes } from '~/routes';
import styles from './BreadCrumbs.module.scss';

const cx = classNames.bind(styles);

BreadCrumbs.propTypes = {};

function BreadCrumbs() {
    const breadcrumbs = useBreadcrumbs(publicRoutes);

    return (
        <MuiBreadcrumbs
            separator={<LinearScale fontSize="small" />}
            aria-label="breadcrumb"
            className={cx('container')}
        >
            {breadcrumbs.map(({ match, breadcrumb }, index) => (
                <MuiLink
                    key={match.pathname}
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
