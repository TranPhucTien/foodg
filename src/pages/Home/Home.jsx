import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Banner from './components/Banner';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const cx = classNames.bind(styles);

Home.propTypes = {};

function Home(props) {
    return (
        <div className={cx('wrapper')}>
            <Banner />
        </div>
    );
}

export default Home;
