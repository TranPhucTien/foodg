import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { SuccessfulLottie } from '~/components/Lottie';
import config from '~/config';
import { FIRST_SHOW_ORDER } from '~/constants';
import styles from '../../Checkout.module.scss';

const cx = classNames.bind(styles);

function Successful() {
    return (
        <div className={cx('center')}>
            <div className={cx('lottie')}>
                <SuccessfulLottie />
            </div>
            <h2 className={classNames('section-title', styles.title)}>Your purchase was successfull 🍔</h2>
            <Button to={`${config.routes.order}/${FIRST_SHOW_ORDER}`} className={cx('link')}>
                Buy more
            </Button>
        </div>
    );
}

export default Successful;
