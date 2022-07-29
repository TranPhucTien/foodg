import { Container, Grid } from '@mui/material';
import classNames from 'classnames/bind';
import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { AnalysisThumb } from '~/utils/homeImages';
import { homeAnalysisData } from '~/utils/staticData';
import styles from './Analysis.module.scss';

const cx = classNames.bind(styles);

Analysis.propTypes = {};

function Analysis() {
    const [isShow, setIsShow] = useState(false);
    const { ref: countRef, inView: isCountVisible } = useInView();

    const toggleModal = () => {
        setIsShow(!isShow);
    };

    return (
        <section className={cx('wrapper')} style={{ backgroundImage: `url(${AnalysisThumb})` }}>
            <div className={cx('wrapper-thumb')}>
                <div className={cx('content')} onClick={toggleModal}>
                    <div className={cx('content-text')}>
                        <span className={cx('content-name')}>Sandwich</span>
                        <span className={cx('content-price')}>$45</span>
                    </div>
                    <div onClick={toggleModal} className={cx('btn')}>
                        <div className={cx('triangle')}></div>
                    </div>
                    <span className={cx('gooey')}></span>
                    <span className={cx('gooey')}></span>
                    <span className={cx('gooey')}></span>
                </div>
                <div className={cx('video-container', { show: isShow })}>
                    <span onClick={toggleModal} className={cx('modal')}></span>
                    <iframe
                        title="Map"
                        className={cx('home-video', {
                            show: isShow,
                        })}
                        src={`https://www.youtube.com/embed/YTyVK_9A2ww?autoplay=${isShow ? 1 : 0}&mute=${
                            isShow ? 0 : 1
                        }`}
                    ></iframe>
                </div>
            </div>

            <div ref={countRef} className={cx('countup')}>
                <div className={cx('countup-container')}>
                    {isCountVisible && (<Grid container spacing={3}>
                        {homeAnalysisData.map(({ description, suffix, countEnd }, index) => (
                            <Grid key={index} item xs={12} sm={6} md={3}>
                                <div className={cx('countup-content')}>
                                    <span>
                                        <CountUp start={0} end={countEnd} duration={3} separator="," />
                                    </span>
                                    <span>{suffix}</span>
                                </div>
                                <div className={cx('countup-desc')}>{description}</div>
                            </Grid>
                        ))}
                    </Grid>)}
                </div>
            </div>
        </section>
    );
}

export default Analysis;
