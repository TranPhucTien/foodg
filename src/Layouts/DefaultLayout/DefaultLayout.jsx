import PropTypes from 'prop-types';
import Cart from '~/components/Cart';
import Footer from '../components/Footer';
import Header from '../components/Header';

DefaultLayout.propTypes = {
    children: PropTypes.node,
};

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Cart />
            <Footer />
        </div>
    );
}

export default DefaultLayout;
