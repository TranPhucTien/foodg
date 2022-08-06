import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { SideBySideMagnifier } from 'react-image-magnifiers';
import styles from './ProductThumbnail.module.scss';
import imageError from '~/assets/images/image-error.png';

// lazy load img js
import { LazyLoadImage } from 'react-lazy-load-image-component';

// lazy load img css
import 'react-lazy-load-image-component/src/effects/blur.css';

const cx = classNames.bind(styles);

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({ product }) {
    const [img, setImg] = useState(product.img || '');
    const [last, setLast] = useState(false);

    const handleError = () => {
        setImg(imageError);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx("row", 'inner')}>
                <div className={cx('col', 'l-12', 'image-wrapper-main')}>
                    <SideBySideMagnifier
                        alwaysInPlace={true}
                        transitionSpeedInPlace={0.3}
                        imageSrc={img}
                        imageAlt={product.name}
                        onError={handleError}
                        className={cx('image-main', { last })}
                    />
                </div>
                <div className={cx('image-list')}>
                    <div onClick={() => setLast(false)} className={cx('image-wrapper', { last })}>
                        <img
                            src={img}
                            alt={product.name}
                            onError={handleError}
                            className={cx('image')}
                        />
                    </div>
                    <div onClick={() => setLast(true)} className={cx('image-wrapper', { last: !last })}>
                        <img
                            src={img}
                            alt={product.name}
                            onError={handleError}
                            className={cx('image')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductThumbnail;
