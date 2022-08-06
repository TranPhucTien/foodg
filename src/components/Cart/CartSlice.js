import { toast } from 'react-toastify';

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
            const index = state.cartItems.findIndex((x) => x.id === newItem.id);
            if (index >= 0) {
                // increase quantity
                state.cartItems[index].quantity += newItem.quantity;
                toast.info(`Increased "${newItem.product.name}" cart quantity`);
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

        removeFromCart(state, action) {
            const idNeedToRemove = action.payload;
            state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== idNeedToRemove);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
    },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, showCart, hideCart, addToCart, setQuantity, removeFromCart } = actions;
export default reducer;
