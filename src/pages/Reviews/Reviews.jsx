import classNames from 'classnames/bind';
import Banner from '~/components/Banner';
import styles from './Reviews.module.scss';

const cx = classNames.bind(styles);

Reviews.propTypes = {
    
};

function Reviews(props) {
    return (
        <div>
            <Banner title="reviews" />
        </div>
    );
}

export default Reviews;