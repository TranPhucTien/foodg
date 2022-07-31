import { Pagination } from '@mui/material';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
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
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 10,
        page: 1,
    });
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 12,
        _sort: '',
        _order: '',
    });
    const [type, setType] = useState('best-foods');

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(type, filters);
                setProductList(data.data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to fetch product list');
            }

            setLoading(false);
        })();
    }, [filters, type]);

    const handlePageChange = (e, page) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: page,
        }));
    };

    const handleSortChange = (newSortValue, newORderValue) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _sort: newSortValue,
            _order: newORderValue,
        }));
    };

    const handleFiltersChange = (newFilters) => {
        setType(newFilters);
    };

    return (
        <section className={cx('container')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l-2', 'm-2', 'c-0')}>
                    <ProductFilters type={type} filters={filters} onChange={handleFiltersChange} />
                </div>

                <div className={cx('col', 'l-10', 'm-10', 'c-12', 'product-list')}>
                    <div className={cx('product-filters', 'row')}>
                        <div className={cx('col', 'l-10')}>
                            <Search />
                        </div>
                        <div className={cx('col', 'l-2')}>
                            <ProductSort
                                currentSort={filters._sort}
                                currentOrder={filters._order}
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
