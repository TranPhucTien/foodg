import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
};

function Card({ img, name, description, price }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img className={cx('img')} src={img} alt="Home product" />
                <Button primary rounded className={cx('btn')}>
                    <span>Best Deal</span>
                </Button>
            </div>
            <div className={cx('content')}>
                <h3 className={cx('name')}>{name}</h3>
                <p className={cx('desc')}>{description}</p>
                <div className={cx('price')}>${price}.00</div>
            </div>
        </div>
    );
}

export default Card;
