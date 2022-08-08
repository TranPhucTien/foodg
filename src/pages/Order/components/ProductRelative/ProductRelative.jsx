import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductRelative.module.scss';

const cx = classNames.bind(styles);

ProductRelative.propTypes = {
    
};

function ProductRelative(props) {
    

    return (
        <div className={cx('wrapper')}>
            <div className="section-subtitle">Best foods</div>
                <h2 className={classNames('section-title', styles.title)}>
                    Related Products
                </h2>
        </div>
    );
}

export default ProductRelative;