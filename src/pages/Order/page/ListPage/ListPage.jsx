import { Pagination } from '@mui/material';
import classNames from 'classnames/bind';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import productApi from '~/api/productApi';
import ProductSort from '../../components/Filters/ProductSort';
import ProductFilters from '../../components/ProductFilter';
import ProductList from '../../components/ProductList';
import SkeletonProductList from '../../components/ProductList/SkeletonProductList';
import Search from '../../components/Search';
import styles from './ListPage.module.scss';

const cx = classNames.bind(styles);

ListPage.propTypes = {};

function ListPage(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);

        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 12,
            _sort: params._sort || '0',
            _order: params._order || '0',
        };
    }, [location.search]);

    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 10,
        page: 1,
    });
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState('best-foods');

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(type, queryParams);
                setProductList(data.data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to fetch product list');
            }

            setLoading(false);
        })();
    }, [queryParams, type]);

    const handlePageChange = (e, page) => {
        const filters = {
            ...queryParams,
            _page: page,
        };

        navigate({
            pathname: location.pathname,
            search: queryString.stringify(filters),
        });
    };

    const handleSortChange = (newSortValue, newORderValue) => {
        const filters = {
            ...queryParams,
            _sort: newSortValue,
            _order: newORderValue,
        };

        navigate({
            pathname: location.pathname,
            search: queryString.stringify(filters),
        });
    };

    const handleFiltersChange = (newFilters) => {
        setType(newFilters);
        const filters = {
            ...queryParams,
        };

        navigate({
            pathname: location.pathname,
            search: queryString.stringify(filters),
        });
    };

    return (
        <section className={cx('container')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l-2', 'm-2', 'c-0')}>
                    <ProductFilters type={type} filters={queryParams} onChange={handleFiltersChange} />
                </div>

                <div className={cx('col', 'l-10', 'm-10', 'c-12', 'product-list')}>
                    <div className={cx('product-filters', 'row')}>
                        <div className={cx('col', 'l-10')}>
                            <Search />
                        </div>
                        <div className={cx('col', 'l-2')}>
                            <ProductSort
                                currentSort={queryParams._sort}
                                currentOrder={queryParams._order}
                                onChange={handleSortChange}
                            />
                        </div>
                    </div>
                    {loading ? <SkeletonProductList /> : <ProductList data={productList} />}

                    <div className={cx('pagination')}>
                        <Pagination
                            count={Math.ceil(pagination.total / pagination.limit)}
                            page={pagination.page}
                            shape="rounded"
                            onChange={handlePageChange}
                            size="large"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListPage;
