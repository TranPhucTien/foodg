import classNames from 'classnames/bind';
import Banner from '~/components/Banner';
import styles from './Order.module.scss';

const cx = classNames.bind(styles);

Order.propTypes = {};

function Order(props) {
    return (
        <div>
            <Banner title="Best Foods" />
            <div style={{backgroundColor: '#333', height: '1000px'}}></div>
        </div>
    );
}

export default Order;
