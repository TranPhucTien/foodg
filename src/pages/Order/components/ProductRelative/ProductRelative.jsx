import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductRelative.module.scss';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { GET_CURRENT_TYPE } from '~/constants';
import productApi from '~/api/productApi';
import SkeletonProductList from '../ProductList/SkeletonProductList';
import ProductList from '../ProductList';

const cx = classNames.bind(styles);

ProductRelative.propTypes = {};

function ProductRelative(props) {
    const [randProducts, setRandProducts] = useState([]);
    const type = GET_CURRENT_TYPE();

    const { data, isLoading } = useQuery(['relative-product'], async () => {
        return await productApi.getAll(type, {});
    });

    
    useEffect(() => {
        const products = data ? data.data.data : [];
        if (products.length <= 0) return;

        const newProducts = [];
        const randomProducts = [];

        for (let i = 0; i < 4; i++) {
            const num = Math.floor(Math.random() * products.length);

            randomProducts.push(products[num]);
            newProducts.splice(num, 1);
        }

        setRandProducts(randomProducts);
    }, [data]);

    return (
        <div className={cx('wrapper')}>
            <div className="section-subtitle">Best foods</div>
            <h2 className={classNames('section-title', styles.title)}>Related Products</h2>
            <div>{isLoading ? <SkeletonProductList /> : <ProductList data={randProducts} />}</div>
        </div>
    );
}

export default ProductRelative;
