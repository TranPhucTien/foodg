import classNames from 'classnames/bind';
import styles from './Reviews.module.scss';

const cx = classNames.bind(styles);

Reviews.propTypes = {
    
};

function Reviews(props) {
    return (
        <h2 className={cx('')}>
            Reviews
        </h2>
    );
}

export default Reviews;