import { useLocation } from 'react-router-dom';

export const GET_CURRENT_TYPE = () => {
    const { pathname } = useLocation();

    return pathname.split('/')[2];
};
export const FIRST_SHOW_ORDER = 'our-foods';
