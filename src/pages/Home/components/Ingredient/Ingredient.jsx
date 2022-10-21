import classNames from 'classnames/bind';
import { homeIngredientsData } from '~/utils/staticData';
import { IngredientsThumb, ShapeOne, ShapeTwo } from '~/utils/homeImages';
import styles from './Ingredient.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

Ingredient.propTypes = {};

function Ingredient(props) {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('thumb')} style={{ backgroundImage: `url(${IngredientsThumb})` }}>
                <div className={cx('hidden-lt-tablet', 'card-left')}>
                    {homeIngredientsData.leftData.map(({ title, content, order }, index) => (
                        <div className={cx('card-container')} key={`${title}-${index}`}>
                            <div className={cx('card-item')}>
                                <h3 className={cx('card-title')}>{title}</h3>
                                <p className={cx('card-content')}>{content}</p>
                                <span>{order}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('hidden-lt-tablet', 'card-right')}>
                    {homeIngredientsData.rightData.map(({ title, content, order }, index) => (
                        <div className={cx('card-container')} key={`${title}-${index}`}>
                            <div key={index} className={cx('card-item')}>
                                <h3 className={cx('card-title')}>{title}</h3>
                                <p className={cx('card-content')}>{content}</p>
                                <span>{order}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <span className={cx('hidden-lt-tablet', 'shape-first')} style={{ backgroundImage: `url(${ShapeOne})` }}></span>
                <span className={cx('hidden-lt-tablet', 'shape-second')} style={{ backgroundImage: `url(${ShapeTwo})` }}></span>
            </div>

            <div className={cx('content')}>
                <div className={classNames("section-subtitle", styles.subtitle)}>Best food</div>

                <h2 className={classNames("section-title", styles.title)}>
                    Super delicious Steak <span className={classNames('section-title', 'primary')}>Hamburger</span>
                </h2>

                <h2 className={classNames('section-title', 'primary', styles.price)}>$25.00</h2>

                <Button primary rounded>
                    Order Now
                </Button>
            </div>
        </section>
    );
}

export default Ingredient;
