import classNames from 'classnames/bind';
import 'swiper/css';
import 'swiper/css/pagination';
import Analysis from './components/Analysis';
import Banner from './components/Banner';
import Category from './components/Category';
import Delivery from './components/Delivery';
import Ingredient from './components/Ingredient';
import Product from './components/Product';
import Reviews from './components/Reviews';
import Work from './components/Work';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

Home.propTypes = {};

function Home(props) {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <Work />
            <Ingredient />
            <Category />
            <Delivery />
            <Product />
            <Analysis />
            <Reviews />
        </div>
    );
}

export default Home;
