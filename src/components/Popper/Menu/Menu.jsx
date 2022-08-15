import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

Menu.propTypes = {};

function Menu({ children, items, hideOnClick = false }) {
    return (
        <Tippy interactive delay={[0, 700]} offset={[12, 8]} placement="bottom-end" hideOnClick={hideOnClick}>
            {children}
        </Tippy>
    );
}

export default Menu;
