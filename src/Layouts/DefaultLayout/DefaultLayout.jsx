import PropTypes from 'prop-types';
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
            <Footer />
        </div>
    );
}

export default DefaultLayout;
