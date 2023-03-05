import { AnyAction } from 'redux';

import { setCartItems, setIsCartOpen } from './cart.action';
import { CartState } from 'types/cart.types';

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

// Sets the payload of the action and stores it in 'type' and 'payload' respectively
export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {
  if (setIsCartOpen.match(action)) {
    return { ...state, isCartOpen: action.payload };
  }

  if (setCartItems.match(action)) {
    return { ...state, cartItems: action.payload };
  }

  return state;
};
