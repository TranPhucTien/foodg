import config from '~/config';

import NotFound from '~/components/NotFound';
import Checkout from '~/pages/Checkout';
import Home from '~/pages/Home';
import Order from '~/pages/Order';
import Reviews from '~/pages/Reviews';

// Public route
const publicRoutes = [
    {path: config.routes.home, component: Home, breadcrumb: 'Home'},
    {path: `${config.routes.order}/*`, component: Order, breadcrumb: 'Order now'},
    {path: config.routes.reviews, component: Reviews},
    {path: `${config.routes.checkout}/*`, component: Checkout},
    {path: config.routes.notfound, component: NotFound, Layout: null},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
