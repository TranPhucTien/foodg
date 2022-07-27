import Home from '~/pages/Home';
import Order from '~/pages/Order';
import Reviews from '~/pages/Reviews';

// Public route
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/order', component: Order},
    {path: '/reviews', component: Reviews},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
