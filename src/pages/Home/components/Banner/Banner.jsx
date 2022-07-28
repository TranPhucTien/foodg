import { AddCircleOutline } from '@mui/icons-material';
import classNames from 'classnames/bind';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '~/components/Button';
import config from '~/config';
import { sliderInfo } from '~/constants';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

Banner.propTypes = {};

function Banner(props) {
    // SwiperCore.use([Autoplay]);

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
            }}
            speed={1000}
            navigation
            pagination={{ clickable: true }}
            allowTouchMove={false}
        >
            {sliderInfo.map((each, index) => (
                <SwiperSlide key={index}>
                    <div className={cx('banner-img')} style={{ backgroundImage: `url('${each.img}')` }}></div>
                    <div className={cx('inner')}>
                        <div className={cx('banner-content')}>
                            <h5 className={cx('sub-title')}>{each.subTitle}</h5>
                            <h2 className={cx('title')}>{each.title}</h2>
                            <h2 className={cx('title', 'primary')}>{each.titlePrimary}</h2>
                            <Button
                                to={config.routes.order}
                                primary
                                large
                                rounded
                                leftIcon={<AddCircleOutline sx={{ fontSize: 18 }} />}
                                className={cx('button')}
                            >
                                ORDER NOW
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Banner;
