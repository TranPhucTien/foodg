import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

DefaultLayout.propTypes = {
    children: PropTypes.node,
};

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <img src="https://food-g-app.web.app/static/media/banner-st.57953e4d.jpg" alt="banner" className={cx('img')} />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
