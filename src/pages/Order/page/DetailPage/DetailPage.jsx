import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '~/components/Button';
import { addToCart } from '~/components/Cart/CartSlice';
import { GET_CURRENT_TYPE } from '~/constants';
import { detailTableData } from '~/utils/staticData';
import AddToCartForm from '../../components/AddToCartForm';
import ProductInfo from '../../components/ProductInfo';
import ProductThumbnail from '../../components/ProductThumbnail';
import Service from '../../components/Service';
import useProductDetail from '../../hooks/useProductDetail';
import styles from './DetailPage.module.scss';

const cx = classNames.bind(styles);

DetailPage.propTypes = {};

function DetailPage(props) {
    const { productId } = useParams();
    const type = GET_CURRENT_TYPE();
    const typeName = type.replace('-', ' ');

    const { product, loading } = useProductDetail({ type, productId });
    const [price, setPrice] = useState(product.price);
    const dispatch = useDispatch();

    if (loading) {
        return <h2>loading...</h2>;
    }

    const handleAddToCartChange = (size) => {
        switch (size) {
            case 'S':
                setPrice(product.price * 0.7);
                break;

            case 'M':
                setPrice(product.price);
                break;

            case 'L':
                setPrice(product.price * 1.5);
                break;

            default:
                setPrice(product.price);
                break;
        }
    };

    const handleAddToCartSubmit = ({ quantity, size }) => {
        const action = addToCart({
            id: product.id,
            product,
            quantity,
            size,
        });
        dispatch(action);
    };

    return (
        <section>
            <div className="container">
                <div className={cx('row', 'detail-info')}>
                    <div className="col l-6">
                        <ProductThumbnail product={product} />
                    </div>
                    <div className="col l-6">
                        <ProductInfo product={product} type={type} priceSize={price} />
                        <AddToCartForm onSubmit={handleAddToCartSubmit} onChange={handleAddToCartChange} />
                        <Service />
                    </div>
                </div>
                <div className={cx('row', 'content')}>
                    <div className={cx('choose')}>
                        <Button to="" large primary>
                            Description
                        </Button>
                    </div>
                    <div className="col l-12">
                        <div className={cx('desc')}>
                            <p className={cx('desc-text')}>
                                Although the legendary Double Burger really needs no introduction, please allow us…
                                Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup,
                                onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add
                                the crowning touch. Oh baby!
                            </p>

                            <table className={cx('table')}>
                                <thead>
                                    <tr>
                                        {detailTableData.map(({ title }, index) => (
                                            <th key={index} className={cx('table-title')}>
                                                {title ? title : typeName}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={cx('table-row')}>
                                        {detailTableData.map(({ description }, index) => (
                                            <td key={index} className={cx('table-description')}>
                                                {description}
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className={cx('table-row')}>
                                        {detailTableData.map(({ ingredients }, index) => (
                                            <td key={index} className={cx('table-ingredients')}>
                                                {ingredients}
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailPage;
