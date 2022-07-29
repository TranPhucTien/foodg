import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Delivery.module.scss';
import { ShipperLottie } from '~/components/Lottie';
import SmallDeliverySvg from '~/assets/svgs/Home/small-delivery.svg';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

Delivery.propTypes = {};

function Delivery(props) {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className="section-subtitle">Delivery</div>
                <h2 className={classNames('section-title', styles.title)}>
                    A Moments Of Delivered <span className="primary">On Right Time & Place</span>
                </h2>
                <p className={cx('text')}>
                    Food G is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon's
                    Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a
                    bustling London inteon.
                </p>
                <div className={cx('contact')}>
                    <img className={cx('contact-image')} src={SmallDeliverySvg} alt="small shipper" />
                    <div className={cx('order-wrapper')}>
                        <p className={cx('order-desc')}>Delivery Order Num</p>
                        <span className={cx('order-number')}>09711122003</span>
                    </div>
                    <Button primary rounded>
                        Order Now
                    </Button>
                </div>
            </div>
            <div className={cx('animate')}>
                <ShipperLottie />
            </div>
        </section>
    );
}

export default Delivery;
