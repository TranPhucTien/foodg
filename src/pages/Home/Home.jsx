import classNames from 'classnames/bind';
import 'swiper/css';
import 'swiper/css/pagination';
import Banner from './components/Banner';
import Work from './components/Work';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

Home.propTypes = {};

function Home(props) {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <Work />
        </div>
    );
}

export default Home;
