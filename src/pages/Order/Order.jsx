import { Route, Routes } from 'react-router-dom';
import Banner from '~/components/Banner';
import DetailPage from './page/DetailPage';
import ListPage from './page/ListPage';

Order.propTypes = {};

function Order(props) {
    return (
        <>
            <Banner title="Best Foods" />
            <Routes>
                <Route path="/*" element={<ListPage />} />
                <Route path="/:type/*" element={<ListPage />} />
                <Route path="/:type/:productId/*" element={<DetailPage />} />
            </Routes>
        </>
    );
}

export default Order;
