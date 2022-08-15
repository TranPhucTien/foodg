import classNames from 'classnames/bind';
import Button from '../Button';
import { NotFoundLottie } from '../Lottie';
import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);

function NotFound(props) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('section-title')}>Hmmm... Looks like you're lost.</h2>
            <Button to="/" text className={cx('button')}>Go to Home</Button>
            <div className={cx('lottie')}>
                <NotFoundLottie />
            </div>
        </div>
    );
}

export default NotFound;
