import { Pagination } from '@mui/material';
import classNames from 'classnames/bind';
import queryString from 'query-string';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import productApi from '~/api/productApi';
import notFound from '~/assets/svgs/NotFound/404.svg';
import { FIRST_SHOW_ORDER, GET_CURRENT_TYPE } from '~/constants';
import ProductSort from '../../components/Filters/ProductSort';
import ProductFilters from '../../components/ProductFilter';
import ProductList from '../../components/ProductList';
import SkeletonProductList from '../../components/ProductList/SkeletonProductList';
import Search from '../../components/Search';
import styles from './ListPage.module.scss';

const cx = classNames.bind(styles);

ListPage.propTypes = {};

function ListPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const listPageRef = useRef();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);

        return {
            q: '',
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
    const [loading, setLoading] = useState(false);
    const [searchLoading, setSearchLoading] = useState(false);

    const [type, setType] = useState(GET_CURRENT_TYPE() || FIRST_SHOW_ORDER);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                setSearchLoading(true);
                const { data, pagination } = await productApi.getAll(type, queryParams);
                setProductList(data.data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to fetch product list');
            }
            
            setSearchLoading(false);
            setLoading(false);
        })();
    }, [queryParams, type]);

    const handlePageChange = (e, page) => {
        listPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

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

    const handleFiltersChange = (newType) => {
        setType(newType);
        navigate({ pathname: `/order/${newType}` });
    };

    const handleSearchChange = (searchValue) => {
        listPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

        const filters = {
            ...queryParams,
            q: searchValue,
        };

        navigate({
            pathname: location.pathname,
            search: queryString.stringify(filters),
        });
    };

    return (
        <section className={cx('list-page')} ref={listPageRef}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-2', 'm-2', 'c-0')}>
                        <ProductFilters type={type} filters={queryParams} onChange={handleFiltersChange} />
                    </div>

                    <div className={cx('col', 'l-10', 'm-10', 'c-12', 'product-list')}>
                        <div className={cx('product-filters', 'row')}>
                            <div className={cx('col', 'l-10')}>
                                <Search
                                    onChange={handleSearchChange}
                                    searchLoading={searchLoading}
                                    currentValue={queryParams.q}
                                />
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <ProductSort
                                    currentSort={queryParams._sort}
                                    currentOrder={queryParams._order}
                                    onChange={handleSortChange}
                                />
                            </div>
                        </div>
                        {loading ? (
                            <SkeletonProductList />
                        ) : productList.length > 0 ? (
                            <ProductList data={productList} />
                        ) : (
                            <img className={cx('not-found')} src={notFound} alt="not-found" />
                        )}

                        {productList.length > 0 && (
                            <div className={cx('pagination')}>
                                <Pagination
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    page={pagination.page}
                                    shape="rounded"
                                    onChange={handlePageChange}
                                    size="large"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListPage;
