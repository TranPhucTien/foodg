import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Progress.module.scss';
import { ListAlt, PeopleAlt, ThumbUp } from '@mui/icons-material';

const cx = classNames.bind(styles);

Progress.propTypes = {};

function Progress(props) {
    return (
        <div className={cx('progress')}>
            <div className={cx('progress-item')}>
                <div className={cx('progress-icon', 'active')}>
                    <PeopleAlt />
                </div>
                <span className={cx('progress-title')}>Login</span>
            </div>
            <span className={cx('line')}></span>
            <div className={cx('progress-item')}>
                <div className={cx('progress-icon', 'active')}>
                    <ListAlt />
                </div>
                <span className={cx('progress-title')}>Confirm</span>
            </div>
            <span className={cx('line')}></span>
            <div className={cx('progress-item')}>
                <div className={cx('progress-icon')}>
                    <ThumbUp />
                </div>
                <span className={cx('progress-title')}>Success!</span>
            </div>
        </div>
    );
}

export default Progress;
