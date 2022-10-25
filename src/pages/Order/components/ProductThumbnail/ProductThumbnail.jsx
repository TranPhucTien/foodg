import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Img from '~/components/Img';
import styles from './ProductThumbnail.module.scss';

const cx = classNames.bind(styles);

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({ product }) {
    const [img, setImg] = useState(product.img || '');
    const [last, setLast] = useState(false);

    useEffect(() => {
        setImg(product.img || '')
    }, [product])

    return (
        <div className={cx('wrapper')}>
            <div className={cx("row", 'inner')}>
                <div className={cx('col', 'l-12', 'image-wrapper-main')}>
                    <Img
                        src={img}
                        alt={product.name}
                        className={cx('image-main', { last })}
                    />
                </div>
                <div className={cx('image-list')}>
                    <div onClick={() => setLast(false)} className={cx('image-wrapper', { last })}>
                        <Img
                            src={product.img}
                            alt={product.name}
                            className={cx('image')}
                        />
                    </div>
                    <div onClick={() => setLast(true)} className={cx('image-wrapper', { last: !last })}>
                        <Img
                            src={product.img}
                            alt={product.name}
                            className={cx('image')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductThumbnail;
