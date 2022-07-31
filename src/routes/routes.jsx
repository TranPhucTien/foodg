import config from '~/config';

import Banner from '~/components/Banner';
import Home from '~/pages/Home';
import Order from '~/pages/Order';
import Reviews from '~/pages/Reviews';

// Public route
const publicRoutes = [
    {path: config.routes.home, component: Home, breadcrumb: 'Home'},
    {path: `${config.routes.order}/*`, component: Order, breadcrumb: 'Order now'},
    {path: config.routes.reviews, component: Reviews},
    {path: config.routes.notfound, component: Banner},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
