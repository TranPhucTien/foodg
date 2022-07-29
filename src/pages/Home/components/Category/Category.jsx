import { DoubleArrow } from '@mui/icons-material';
import { Container } from '@mui/material';
import classNames from 'classnames/bind';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BackgroundIcon from '~/components/BackgroundIcon';
import Button from '~/components/Button';
import { BackgroundIconOne, BackgroundIconThree, BackgroundIconTwo } from '~/utils/backgroundIcons';
import { homeCategoryData } from '~/utils/staticData';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);
Category.propTypes = {};

function Category(props) {
    return (
        <section className={cx('wrapper')}>
            <BackgroundIcon src={BackgroundIconOne} width="25" top="-60" left="-20" type="float" duration="3" />
            <BackgroundIcon src={BackgroundIconTwo} width="15" top="-85" right="20" type="scale" duration="5" />
            <BackgroundIcon
                src={BackgroundIconThree}
                width="15"
                top="60"
                right="60"
                type="float"
                duration="2.5"
                delay="1"
            />
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <div className="section-subtitle">What we have?</div>
                    <h2 className="section-title">Browse food category</h2>
                    <div className={classNames(styles['card-list'], 'home-category-container')}>
                        <Swiper
                            slidesPerView={2}
                            loop
                            loopFillGroupWithBlank={true}
                            autoplay={{
                                delay: 1800,
                                disableOnInteraction: false,
                            }}
                            speed={700}
                            navigation={{
                                prevEl: '.home-category-prev-btn',
                                nextEl: '.home-category-next-btn',
                            }}
                            breakpoints={{
                                600: {
                                    slidesPerView: 4,
                                },
                                960: {
                                    slidesPerView: 7,
                                },
                            }}
                            modules={[Autoplay, Navigation]}
                        >
                            {homeCategoryData.map(({ img, name }, index) => (
                                <SwiperSlide key={index}>
                                    <div className={cx('card-item')}>
                                        <div className={cx('card-img-wrapper')}>
                                            <img className={cx('card-img')} src={img} alt="Category card" />
                                        </div>
                                        <div className={cx('card-desc')}>{name}</div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Button className={classNames(styles['prev-btn'], 'home-category-prev-btn')}>
                            <DoubleArrow style={{ transform: 'rotate(180deg)' }} />
                        </Button>
                        <Button className={classNames(styles['next-btn'], 'home-category-next-btn')}>
                            <DoubleArrow />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category;
