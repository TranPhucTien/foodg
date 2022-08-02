import { AddCircleOutline } from '@mui/icons-material';
import classNames from 'classnames/bind';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '~/components/Button';
import config from '~/config';
import { sliderInfo } from '~/utils/staticData';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <section className="home-banner">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                }}
                speed={1500}
                navigation
                pagination={{ clickable: true }}
                allowTouchMove={false}
            >
                {sliderInfo.map((each, index) => (
                    <SwiperSlide key={index}>
                        <div className={cx('banner-img')} style={{ backgroundImage: `url('${each.img}')` }}>
                            <div className={cx('inner')}>
                                <div className={cx('banner-content', 'container')}>
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
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Banner;
