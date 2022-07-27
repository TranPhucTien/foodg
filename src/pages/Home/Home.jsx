import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

Home.propTypes = {};

function Home(props) {
    return (
        <h2 className={cx('wrapper')}>
            Home
        </h2>
    );
}

export default Home;
