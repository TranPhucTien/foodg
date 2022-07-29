import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styled from 'styled-components';
import styles from './BackgroundIcon.module.scss';

const cx = classNames.bind(styles);

BackgroundIcon.propTypes = {
    src: PropTypes.string,
    width: PropTypes.string,
    top: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    duration: PropTypes.string,
    delay: PropTypes.string,
    type: PropTypes.string,
    zIndex: PropTypes.string,
};

function BackgroundIcon({ src, width, top, right, bottom, left, duration, delay, type, zIndex }) {
    return (
        <Img
            src={src}
            width={width}
            top={top}
            right={right}
            bottom={bottom}
            left={left}
            duration={duration}
            delay={delay}
            type={type}
            zIndex={zIndex}
            className={cx('icon')}
            alt="Background icon"
        />
    );
}

const Img = styled.img`
    top: ${(p) => (p.top ? p.top + '%' : 'unset')};
    right: ${(p) => (p.right ? p.right + 'px' : 'unset')};
    bottom: ${(p) => (p.bottom ? p.bottom + '%' : 'unset')};
    left: ${(p) => (p.left ? p.left + 'px' : 'unset')};
    z-index: ${(p) => (p.zIndex ? p.zIndex : -1)};

    width: ${(p) => p.width}rem;

    animation-name: ${(p) => p.type};
    animation-duration: ${(p) => p.duration}s;
    animation-delay: ${(p) => p.delay && p.delay + 's'};
`;

export default BackgroundIcon;
