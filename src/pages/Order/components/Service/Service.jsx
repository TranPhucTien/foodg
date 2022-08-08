import { EventAvailableOutlined, LocalOfferOutlined, LocalShippingOutlined } from '@mui/icons-material';
import classNames from 'classnames/bind';
import styles from './Service.module.scss';

const cx = classNames.bind(styles);

Service.propTypes = {};

function Service(props) {
    return (
        <div className={cx('commits')}>
            <div className={cx('commit')}>
                <LocalShippingOutlined />
                <span>Free global shipping on all orders</span>
            </div>
            <div className={cx('commit')}>
                <EventAvailableOutlined />
                <span>2 hours easy returns if you change your mind</span>
            </div>
            <div className={cx('commit')}>
                <LocalOfferOutlined />
                <span>Order before noon for same day dispatch</span>
            </div>
        </div>
    );
}

export default Service;
