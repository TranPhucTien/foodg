import classNames from 'classnames/bind';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BackgroundIcon from '~/components/BackgroundIcon';
import { BackgroundIconEight, BackgroundIconFive, BackgroundIconFour, BackgroundIconSeven, BackgroundIconSix } from '~/utils/backgroundIcons';
import { homeReviewsData } from '~/utils/staticData';
import styles from './Reviews.module.scss';

const cx = classNames.bind(styles);

Reviews.propTypes = {};

function Reviews(props) {
    return (
        <section className={classNames(styles.wrapper, 'home-review')}>
            <div className={cx('container')}>
                <Swiper
                    speed={500}
                    spaceBetween={20}
                    loop
                    grabCursor={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                >
                    {homeReviewsData.map(({ img, name, role, comment }, index) => (
                        <SwiperSlide key={index}>
                            <div className={cx('content')}>
                                <div className={cx('content-img-wrapper')}>
                                    <img src={img} alt="user-review" className={cx('content-img')}></img>
                                </div>
                                <div className={cx("content-name")}>{name}</div>
                                <div className={cx("content-role")}>{role}</div>
                                <p className={cx("content-comment")}>{comment}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <BackgroundIcon src={BackgroundIconFour} width="14" top="-10" left="0" type="float" duration="4" />
            <BackgroundIcon
                src={BackgroundIconFive}
                width="15"
                top="20"
                right="10"
                type="scale"
                duration="10"
                delay="1"
            />
            <BackgroundIcon
                src={BackgroundIconSix}
                width="12"
                top="40"
                right="550"
                type="float"
                duration="4"
                delay="2"
            />
            <BackgroundIcon
                src={BackgroundIconSeven}
                width="12"
                bottom="20"
                left="250"
                type="scale"
                duration="10"
                delay="3"
            />
            <BackgroundIcon
                src={BackgroundIconEight}
                width="13"
                top="-25"
                right="450"
                type="scale"
                duration="10"
                delay="3"
            />
        </section>
    );
}

export default Reviews;
