import classNames from 'classnames/bind';
import { Route, Routes } from 'react-router-dom';
import Banner from '~/components/Banner';
import styles from './Checkout.module.scss';
import Content from './components/Content';
import Successful from './components/Successful';

const cx = classNames.bind(styles);

Checkout.propTypes = {};

function Checkout(props) {
    return (
        <>
            <section className={cx('checkout')}>
                <Banner title="Checkout" />
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route exact path="successful" element={<Successful />} />
                </Routes>
            </section>
        </>
    );
}

export default Checkout;
