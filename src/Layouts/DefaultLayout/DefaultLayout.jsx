import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Cart from '~/components/Cart';
import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

DefaultLayout.propTypes = {
    children: PropTypes.node,
};

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Cart />
            {/* <Footer /> */}
        </div>
    );
}

export default DefaultLayout;
