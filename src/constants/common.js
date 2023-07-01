import { useLocation } from 'react-router-dom';

export const FIRST_SHOW_ORDER = 'breads';

export const maximumItemQuantity = 20;
export const minimumItemQuantity = 1;

export const SALE_OFF_SIZE_S = 0;
export const SALE_OFF_SIZE_M = 0;
export const SALE_OFF_SIZE_L = 2;

export const PRICE_SIZE_S = 0.7;
export const PRICE_SIZE_L = 1.5;

export const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
    OTP_AUTH: 'otp_auth',
    FORGE_PASSWORD: 'forget_password'
};

export const GET_CURRENT_TYPE = () => {
    const { pathname } = useLocation();

    return pathname.split('/')[2];
};

export const PRICE_BY_SIZE = ({ price, size }) => {
    let result;

    switch (size) {
        case 'S':
            result = (price * PRICE_SIZE_S - SALE_OFF_SIZE_S).toFixed(2);
            break;

        case 'M':
            result = price - SALE_OFF_SIZE_M;
            break;

        case 'L':
            result = (price * PRICE_SIZE_L - SALE_OFF_SIZE_L).toFixed(2);
            break;

        default:
            result = price;
            break;
    }

    return result;
};
