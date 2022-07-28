import classNames from 'classnames/bind';
import bannerImg from '~/assets/images/banner_default.jpg';
import BreadCrumbs from '../BreadCrumbs';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner({ title, banner = bannerImg }) {
    return (
        <div>
            <div className={cx('image')} style={{ backgroundImage: `url('${banner}')` }}>
                <h3 className={cx('title')}>{title}</h3>
                <BreadCrumbs />
            </div>
        </div>
    );
}

export default Banner;
