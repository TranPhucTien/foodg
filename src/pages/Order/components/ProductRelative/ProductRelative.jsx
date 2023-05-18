import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import productApi from '~/api/productApi';
import { GET_CURRENT_TYPE } from '~/constants';
import ProductList from '../ProductList';
import SkeletonProductList from '../ProductList/SkeletonProductList';
import styles from './ProductRelative.module.scss';

const cx = classNames.bind(styles);

ProductRelative.propTypes = {};

function ProductRelative() {
    const [randProducts, setRandProducts] = useState([]);
    const type = GET_CURRENT_TYPE();

    const { data, isLoading } = useQuery(['relative-product'], async () => {
        return await (productApi.getAll(type, {}));
    });
    
    
    useEffect(() => {
        const products = data ? data.data.data.data : [];
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
