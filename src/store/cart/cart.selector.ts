import { createSelector } from 'reselect';

import { CartState } from 'types';

const selectCartReducer = (state: any): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, carItem) => total + carItem.quantity, 0)
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    )
);
