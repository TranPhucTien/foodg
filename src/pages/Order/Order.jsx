import classNames from 'classnames/bind';
import styles from './Order.module.scss';

const cx = classNames.bind(styles);

Order.propTypes = {};

function Order(props) {
    return <h2 className={cx('h2')}>Order Online</h2>;
}

export default Order;
