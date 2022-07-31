import classNames from 'classnames/bind';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { homeProductsData } from '~/utils/staticData';
import Card from './components/Card';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

Product.propTypes = {};

function Product() {
    return (
        <section className={classNames(styles.wrapper, 'home-product')}>
            <div className='container'>
                <div className="section-subtitle">Quality Products</div>
                <h2 className={classNames('section-title', styles.title)}>
                    Burger as expected <span className="primary">delicious</span> one
                </h2>
    
                <div className={cx('card-list')}>
                    <Swiper
                        loop
                        speed={800}
                        pagination={{ clickable: true }}
                        navigation
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                pagination: false,
                            },
                            // >= tablet
                            600: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                                pagination: false,
                            },
                            // >= desktop
                            960: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                                slidesPerGroup: 4,
                                speed: 1500,
                            },
                        }}
                    >
                        {homeProductsData.map(({ img, name, description, price }, index) => (
                            <SwiperSlide key={index}>
                                <Card img={img} name={name} description={description} price={price} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Product;
