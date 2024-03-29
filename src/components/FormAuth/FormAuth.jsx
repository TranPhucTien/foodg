import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FormAuth.module.scss';
import { LinearProgress } from '@mui/material';

const cx = classNames.bind(styles);

FormAuth.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    subName: PropTypes.string,
    footerTitle: PropTypes.string,
    footerSubTitle: PropTypes.string,
    isSubmitting: PropTypes.bool,
    changeMode: PropTypes.func,
};

function FormAuth({
    children,
    title,
    name,
    subName,
    footerTitle,
    footerSubTitle,
    footerSubTitle2,
    isSubmitting,
    changeMode,
    showOtp,
    subNameLink,
}) {
    return (
        <section className={cx('wrapper')}>
            {isSubmitting && <LinearProgress sx={{ position: 'absolute', top: '2px', left: 0, right: 0 }} />}
            <div className={cx('container')}>
                <h3 className={cx('title')}>{title}</h3>
                {name && (
                    <div className={cx('desc')}>
                        <span>{name}</span>
                        {subNameLink ? (
                            <a href={subNameLink} className={cx('desc-link')}>
                                {subName}
                            </a>
                        ) : (
                            <span className={cx('desc-link')}>{subName}</span>
                        )}
                    </div>
                )}
                {children}
            </div>
            <div className={cx('footer')}>
                <span>{footerTitle}</span>
                <span className={cx('footer-link')} onClick={changeMode}>
                    {footerSubTitle}
                </span>
                {footerSubTitle2 && (
                    <span className={cx('footer-link', 'end')} onClick={showOtp}>
                        {footerSubTitle2}
                    </span>
                )}
            </div>
        </section>
    );
}

export default FormAuth;
