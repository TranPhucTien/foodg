import cartReducer from '~/components/Cart/cartSlice';
import userReducer from '~/features/Auth/userSlice';
import modeReducer from '~/Layouts/components/Header/modeSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
    cart: cartReducer,
    user: userReducer,
    mode: modeReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
