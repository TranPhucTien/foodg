import { toast } from 'react-toastify';
import { maximumItemQuantity, minimumItemQuantity } from '~/constants';

const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        showCart: false,
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    },
    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true;
        },

        hideMiniCart(state) {
            state.showMiniCart = false;
        },

        showCart(state) {
            state.showCart = true;
        },

        hideCart(state) {
            state.showCart = false;
        },

        addToCart(state, action) {
            const newItem = action.payload;
            const index = state.cartItems.findIndex((item) => item.id === newItem.id && item.size === newItem.size);
            if (index >= 0) {
                // increase quantity
                const currentQuantity = state.cartItems[index].quantity;
                if (currentQuantity <= maximumItemQuantity - newItem.quantity) {
                    state.cartItems[index].quantity += newItem.quantity;
                    toast.info(`Increased "${newItem.product.name}" cart quantity`);
                } else {
                    toast.error(`Maximum value is ${maximumItemQuantity}`);
                }
            } else {
                // add to cart
                state.cartItems.push(newItem);
                toast.success(`Added "${newItem.product.name}" to cart`);
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        setQuantity(state, action) {
            const { id, quantity } = action.payload;
            // Check if product is available in cart
            const index = state.cartItems.findIndex((x) => x.id === id);
            if (index >= 0) {
                state.cartItems[index].quantity = quantity;
            }
        },

        decreaseItem(state, action) {
            const newItem = action.payload;
            const index = state.cartItems.findIndex((item) => {
                return item.id === newItem.product.id && item.size === newItem.size;
            });
            console.log('🚀 ~ file: CartSlice.js ~ line 63 ~ decreaseItem ~ index', index);

            if (state.cartItems[index].quantity > minimumItemQuantity) {
                state.cartItems[index].quantity -= 1;
            } else {
                toast.error(
                    `Minimum value is ${minimumItemQuantity}. If you want to remove this item, press the remove button`,
                );
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        increaseItem(state, action) {
            const newItem = action.payload;
            const index = state.cartItems.findIndex((item) => {
                return item.id === newItem.product.id && item.size === newItem.size;
            });

            if (state.cartItems[index].quantity < maximumItemQuantity) {
                state.cartItems[index].quantity += 1;
            } else {
                toast.error(`Maximum value is ${maximumItemQuantity}`);
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter((item) => {
                for (let key in action.payload) {
                    if (item[key] !== action.payload[key]) return true;
                }
                return false;
            });
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
    },
});

const { actions, reducer } = cartSlice;
export const {
    showMiniCart,
    hideMiniCart,
    showCart,
    hideCart,
    addToCart,
    setQuantity,
    removeFromCart,
    increaseItem,
    decreaseItem,
} = actions;
export default reducer;
