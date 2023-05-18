import { useQuery } from '@tanstack/react-query';
import productApi from '~/api/productApi';

function useProductDetail({ type, productId }) {
    const { data, isLoading } = useQuery(['product-detail', productId, type], () => {
        return productApi.get(type, productId);
    });

    const product = data ? data.data.data : {};
    const loading = isLoading;

    return { product, loading };
}

export default useProductDetail;
