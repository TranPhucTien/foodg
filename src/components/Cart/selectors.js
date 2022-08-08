import { createSelector } from '@reduxjs/toolkit';
import { PRICE_SIZE_L, PRICE_SIZE_S, SALE_OFF_SIZE_L, SALE_OFF_SIZE_M, SALE_OFF_SIZE_S } from '~/constants';

const cartItemsSelector = (state) => state.cart.cartItems;

// Count number of product in cart
export const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
    cartItems.reduce((count, item) => count + item.quantity, 0),
);

// Calculate total cart
export const cartTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
    cartItems.reduce((total, item) => {
        let priceItem = item.product.price;
        switch (item.size) {
            case 'S':
                priceItem = item.product.price * PRICE_SIZE_S - SALE_OFF_SIZE_S;
                break;

            case 'M':
                priceItem = item.product.price * 1 - SALE_OFF_SIZE_M;
                break;

            case 'L':
                priceItem = item.product.price * PRICE_SIZE_L - SALE_OFF_SIZE_L;
                break;
            default:
                priceItem = item.product.price;
        }
        return total + priceItem * item.quantity;
    }, 0).toFixed(2),
);
