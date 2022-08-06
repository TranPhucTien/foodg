import { useEffect, useState } from 'react';
import productApi from '~/api/productApi';

function useProductDetail({ type, productId }) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result = await productApi.get(type, productId);
                setProduct(result.data);
            } catch (error) {
                console.log('Failed to fetch product', error);
            }
            setLoading(false);
        })();
    }, [productId, type]);

    return { product, loading };
}

export default useProductDetail;
