import { Grid } from '@mui/material';
import classNames from 'classnames/bind';
import { homeWorkData } from '~/utils/staticData';

import styles from './Work.module.scss';

const cx = classNames.bind(styles);

Work.propTypes = {};

function Work(props) {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={"section-subtitle"}>Order now!</div>
                <h2 className={"section-title"}>How it works</h2>

                <div className={cx('step')}>
                    <Grid container spacing={3}>
                        {homeWorkData.map(({ img, step, content, arrow }, index) => (
                            <Grid key={index} item xs={12} sm={6} lg={3}>
                                <div className={cx('step-container')}>
                                    <div className={cx('thumb')}>
                                        <div className={cx('thumb-container')}>
                                            <img className={cx('img')} src={img} alt="steps"></img>
                                            <span>0{step} Step</span>
                                            <div
                                                style={{
                                                    backgroundImage: `url(${arrow})`,
                                                }}
                                                className={cx('thumb-arrow')}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className={cx('content')}>{content}</div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </section>
    );
}

export default Work;
