import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelector = (state) => state.cart.cartItems;

// Count number of product in cart
export const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
    cartItems.reduce((count, item) => count + item.quantity, 0),
);

// Calculate total cart
export const cartTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
    cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0),
);
