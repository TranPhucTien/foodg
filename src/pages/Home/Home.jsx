import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Analysis from './components/Analysis';
import Banner from './components/Banner';
import Category from './components/Category';
import Delivery from './components/Delivery';
import Ingredient from './components/Ingredient';
import Product from './components/Product';
import Reviews from './components/Reviews';
import Work from './components/Work';

Home.propTypes = {};

function Home(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Banner />
            <Work />
            <Ingredient />
            <Category />
            <Delivery />
            <Product />
            {/* <Analysis /> */}
            <Reviews />
        </>
    );
}

export default Home;
