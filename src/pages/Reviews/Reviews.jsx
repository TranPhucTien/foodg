import classNames from 'classnames/bind';
import { useEffect } from 'react';
import Banner from '~/components/Banner';
import styles from './Reviews.module.scss';

const cx = classNames.bind(styles);

Reviews.propTypes = {};

function Reviews(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Banner title="reviews" />
            <div className={cx('test')}></div>
        </>
    );
}

export default Reviews;
